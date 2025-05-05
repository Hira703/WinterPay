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
} from 'firebase/auth';
import { app } from '../firebase/firebase'; // Adjust path as needed

const auth = getAuth(app);

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Balance management
  const [balance, setBalance] = useState(() => {
    const stored = localStorage.getItem('balance');
    return stored ? parseFloat(stored) : 10000; // default initial balance
  });

  useEffect(() => {
    localStorage.setItem('balance', balance);
  }, [balance]);

  const payBill = (amount) => {
    if (balance >= amount) {
      setBalance(prev => prev - amount);
      return true;
    }
    return false;
  };

  // 🔐 Auth methods
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
        setBalance(10000);  // Reset the balance on logout
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
        const user = result.user;
        setUser(user);
      })
      .finally(() => setLoading(false));
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      // Reset balance to 10000 for a new user
      if (currentUser) {
        setBalance(10000);  // Set default balance for new user
      }
    });
    return () => unsubscribe();
  }, []);

  // 🌐 Expose all values
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
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => useContext(AuthContext);
