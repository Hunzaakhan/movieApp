
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();



    const handleSignIn = (e) => {
        e.preventDefault();
        
        if (email === 'test@example.com' && password === 'abc123') {
          
          navigate('/home');
        } else {
          
          alert('Invalid credentials. Please try again.');
        }
      };

  return (
    <div className='sigin-page'>
      <h2>Sign In </h2>

      <form onSubmit={handleSignIn}>
        <label className='lable' htmlFor="email">Email:</label>
        <input className='input'
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label   className='lable' htmlFor="password">Password:</label>
        <input  className='input'
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button  className="btn"  type="submit">Sign In</button>
      </form>
      <Link  className='link'   to="/sign-up">Don't have an account? Sign Up here</Link>
    </div>
  )
}

export default SignIn;
