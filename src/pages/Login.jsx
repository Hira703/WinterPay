import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Import the custom hook to access AuthContext
import { useNavigate } from 'react-router-dom'; // To navigate after successful login

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn, loading } = useAuth(); // Accessing the signIn function and loading state from AuthContext
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(''); // Reset error state

    try {
      await signIn(email, password); // Attempt to sign in the user
      navigate('/'); // Redirect to home page on successful login
    } catch (err) {
      setError(err.message); // Display error message if login fails
    }
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-gray-100">
      <div className="card w-full max-w-sm p-6 bg-white shadow-xl rounded-lg">
        <h2 className="font-semibold text-2xl text-center mb-4">Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input w-full p-2 mt-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input w-full p-2 mt-2 border border-gray-300 rounded-md"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className={`btn w-full p-2 mt-4 bg-blue-500 text-white rounded-md ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          {/* Redirect to Register page */}
          <p className="mt-4 text-center">
            Don't have an account?{' '}
            <a href="/register" className="text-blue-500 hover:underline">
              Register here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
