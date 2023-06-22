import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { RiMailLine, RiLockPasswordLine } from 'react-icons/ri'; // Import the desired icons

import './SignIn.css'; // Import the CSS file for SignIn component

const SignIn = () => {
  const schema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Invalid email address'),
    password: Yup.string().required('Password is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:8080/signin', data);
      console.log(response.data);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-content">
        <h1 className="signin-heading">Sign In</h1>
        {error && <p className="signin-error">{error}</p>}
        <form className="signin-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="signin-form-field">
            <RiMailLine className="signin-input-icon" />
            <input
              type="email"
              id="email"
              placeholder='Email..'
              {...register("email")}
              className="signin-input"
            />
            {errors.email && <p className="signin-error">{errors.email.message}</p>}
          </div>
          <div className="signin-form-field">
            <RiLockPasswordLine className="signin-input-icon" />
            <input
              type="password"
              id="password"
              placeholder='password...'
              {...register("password")}
              className="signin-input"
            />
            {errors.password && <p className="signin-error">{errors.password.message}</p>}
          </div>
          <button type="submit" className="signin-button">Sign In</button>
        </form>
        <p className="signin-signup-text">Don't have an account? <Link to="/signup" >Sign Up</Link></p>
      </div>
    </div>
  );
};

export default SignIn;

