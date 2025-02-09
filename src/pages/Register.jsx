// src/pages/Register.jsx
import React, { useState, useContext } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { register } = useContext(AuthContext); // Ensure your AuthContext provides a register function if desired.
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Simple password match validation.
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // If the register function exists, call it. Otherwise, simulate registration.
    if (register) {
      const result = register({ name, email, password });
      if (result.error) {
        setError(result.error);
      } else {
        // Registration successful; redirect to dashboard or sign in page.
        navigate('/signin');
      }
    } else {
      // Simulate successful registration.
      alert('Registration successful. Please sign in.');
      navigate('/signin');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-primary text-center mb-6">Register</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
          <button type="submit" className="w-full bg-primary text-white p-3 rounded hover:bg-[#117068] transition">
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?{' '}
            <RouterLink to="/signin" className="text-primary font-semibold hover:underline">
              Sign In here
            </RouterLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
