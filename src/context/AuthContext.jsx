// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { app } from '../firebase/firebase';

const auth = getAuth(app);
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState(10000); // Default balance
  const [cards, setCards] = useState([
    'Visa - 1234',
    'MasterCard - 5678',
    'bKash - 019XXXXXXXX',
    'Rocket - 018XXXXXXXX'
  ]);

  // Load balance from localStorage
  useEffect(() => {
    if (user?.uid) {
      const storedBalance = localStorage.getItem(`balance_${user.uid}`);
      setBalance(storedBalance ? parseFloat(storedBalance) : 10000);
    }
  }, [user]);

  // Persist balance on change
  useEffect(() => {
    if (user?.uid) {
      localStorage.setItem(`balance_${user.uid}`, balance);
    }
  }, [balance, user]);

  // Payment helper
  const payBill = (amount) => {
    if (balance >= amount) {
      setBalance((prev) => prev - amount);
      return true;
    }
    return false;
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => {
        setUser(null);
        setBalance(10000);
      })
      .finally(() => setLoading(false));
  };

  const updateUser = async (updatedData) => {
    if (!auth.currentUser) return;
    await updateProfile(auth.currentUser, updatedData);
    setUser({ ...auth.currentUser });
  };

  const signInWithGoogle = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .finally(() => setLoading(false));
  };

  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email).finally(() =>
      setLoading(false)
    );
  };

  // Watch auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    loading,
    balance,
    setBalance,
    payBill,
    createUser,
    signIn,
    logOut,
    updateUser,
    signInWithGoogle,
    resetPassword,
    cards,
    setCards, // <- card management now globally available
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
