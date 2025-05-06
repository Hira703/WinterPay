import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { createUser, updateUser, signInWithGoogle, loading } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (name.length < 5) {
      setError('Name should be more than 5 characters.');
      return;
    }

    if (!/(?=.*[a-z])/.test(password)) {
      setError('Password must contain a lowercase letter.');
      return;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      setError('Password must contain an uppercase letter.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    try {
      const userCredential = await createUser(email, password);
      await updateUser({ displayName: name, photoURL });
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    try {
      await signInWithGoogle();
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-60 to-green-50 p-8">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg space-y-6 sm:w-11/12 md:w-8/12 lg:w-6/12 xl:w-5/12">
        <h2 className="text-3xl font-bold text-center text-gray-700">Create Your Account</h2>
        <form onSubmit={handleRegister}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border rounded-md border-gray-300 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Photo URL</label>
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="w-full p-3 border rounded-md border-gray-300 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your photo URL"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-md border-gray-300 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border rounded-md border-gray-300 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className={`w-full p-3 bg-green-600 text-white rounded-md mt-4 transition duration-200 hover:bg-green-700 focus:outline-none ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Creating Account...' : 'Register'}
            </button>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full p-3 mt-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200"
            >
              Continue with Google
            </button>
          </div>
        </form>

        <p className="text-center text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
