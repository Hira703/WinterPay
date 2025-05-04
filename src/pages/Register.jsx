import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Import the custom hook to access AuthContext
import { useNavigate } from 'react-router-dom'; // To navigate after successful registration

const Register = () => {
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { createUser, updateUser, loading } = useAuth(); // Access the necessary functions from AuthContext
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    setError(''); // Reset error state

    if (name.length < 5) {
      setError('Name should be more than 5 characters.');
      return;
    }

    try {
      // Create a new user
      const userCredential = await createUser(email, password);
      const user = userCredential.user;

      // Update the user profile with name and photoURL
      await updateUser({ displayName: name, photoURL: photoURL });
     

      // Redirect to the home page after successful registration
      navigate('/');

    } catch (err) {
      setError(err.message); // Display error message if registration fails
    }
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-gray-100">
      <div className="card w-full max-w-sm p-6 bg-white shadow-xl rounded-lg">
        <h2 className="font-semibold text-2xl text-center mb-4">Create an Account</h2>
        <form onSubmit={handleRegister}>
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input w-full p-2 mt-2 border border-gray-300 rounded-md"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Photo URL Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input w-full p-2 mt-2 border border-gray-300 rounded-md"
              placeholder="Enter your photo URL"
            />
          </div>

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
            {loading ? 'Creating Account...' : 'Register'}
          </button>

          {/* Redirect to Login page */}
          <p className="mt-4 text-center">
            Already have an account?{' '}
            <a href="/login" className="text-blue-500 hover:underline">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
