


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        navigate('/home');
      };

  return (
    <div className=' sigup-page'>
      <h2>Sign Up </h2>
      <form onSubmit={handleSignUp}>
        <label  className='lable' htmlFor="email">Email:</label>
        <input  className='input'
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label   className='lable' htmlFor="password">Password:</label>
        <input className='input'
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button   className="btn"  type="submit">Sign Up</button>
      </form>

      <Link className="botom" to="/">Already have an account? Sign In here</Link>
    </div>
  )
}

export default SignUp
