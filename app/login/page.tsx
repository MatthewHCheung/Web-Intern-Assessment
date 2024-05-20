'use client'

import React, { useState } from 'react';
import NavBar from '../navBar';

export default function Login() {


       // State for form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Function to handle input changes
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('your mother');
    // Handle form submission (e.g., send data to backend)
    console.log('Form submitted:', formData);
  };

  return (
    <main>
      <NavBar/>

    <div style={{alignItems:'center', display: 'flex', flexDirection: 'column', gap: '20px'}}>
      
      <h1 style={{fontSize:'1.5em'}}>Login</h1>

      <form onSubmit={handleSubmit}>
        <div style={{borderRadius: '15px', overflow: 'hidden', marginBottom: '20px'}}>
          <label htmlFor="email" style={{padding: '10px'}}>Email: </label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required
            style={{ color: 'black', borderRadius: '15px', padding: '10px'}}
          />
        </div>
        <div style={{borderRadius: '15px', overflow: 'hidden',marginBottom: '20px'}}>
          <label htmlFor="password" style={{padding: '10px'}}>Password: </label>
          <input 
              type="password" 
              id="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              required
              style={{ color: 'black', borderRadius: '15px', padding: '10px'}}
          />
        </div>

        <button 
          type="submit" 
          style={{
          borderRadius: '20px',
          backgroundColor: 'white',
          color: 'black',
          padding: '10px 20px',
          border: 'none',
          cursor: 'pointer',
          }}
          onClick={handleSubmit}
          >
          Login
        </button>

      </form>
    </div>
    </main>
);
};