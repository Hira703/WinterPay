import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const { signIn, signInWithGoogle, resetPassword, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/'; // Get the route user was trying to access

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    try {
      await signIn(email, password);
      toast.success('Logged in successfully!');
      navigate(from, { replace: true }); // Redirect back to the original route
    } catch (err) {
      setError(err.message);
      toast.error(err.message); // Display error in toast
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setMessage('');
    try {
      await signInWithGoogle();
      toast.success('Logged in successfully!');
      navigate(from, { replace: true }); // Redirect back to the original route
    } catch (err) {
      setError(err.message);
      toast.error(err.message); // Display error in toast
    }
  };

  const handleForgotPassword = async () => {
    setError('');
    setMessage('');
    if (!email) {
      setError('Please enter your email to reset password.');
      toast.error('Please enter your email to reset password.');
      return;
    }
    try {
      await resetPassword(email);
      setMessage('Password reset email sent. Please check your inbox.');
      toast.success('Password reset email sent. Please check your inbox.');
    } catch (err) {
      setError(err.message);
      toast.error(err.message); // Display error in toast
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-60 to-blue-50 px-4 py-12">
      <div className="w-full max-w-md bg-gray-100 rounded-xl shadow-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Login to Your Account</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <div className="relative mt-2">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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

          <div className="text-right text-sm text-blue-500 hover:underline cursor-pointer">
            <span onClick={handleForgotPassword}>Forgot Password?</span>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {message && <p className="text-green-600 text-sm">{message}</p>}

          <button
            type="submit"
            className={`btn btn-primary w-full flex justify-center items-center ${loading ? 'btn-disabled' : ''}`}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="loading loading-spinner loading-sm mr-2"></span>
                Logging in...
              </>
            ) : (
              'Login'
            )}
          </button>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn btn-outline btn-error w-full"
          >
            Continue with Google
          </button>
        </form>

        <p className="text-center text-sm">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-500 hover:underline font-medium">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
