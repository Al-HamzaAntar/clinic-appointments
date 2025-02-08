// src/pages/SignIn.jsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(email, password);
    if (result.error) {
      setError(result.error);
    } else {
      // Redirect based on role
      if (result.user.role === 'super') {
        navigate('/dashboard/super');
      } else if (result.user.role === 'sub') {
        navigate('/dashboard/sub');
      } else if (result.user.role === 'secretary') {
        navigate('/dashboard/secretary');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-primary text-center mb-6">Sign In</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
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
          <button type="submit" className="w-full bg-primary text-white p-3 rounded hover:bg-[#117068] transition">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
