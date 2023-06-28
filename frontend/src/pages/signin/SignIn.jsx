import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { RiMailLine, RiLockPasswordLine } from 'react-icons/ri'; // Import the desired icons
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { Context } from '../../context/userContext/Context';

import './signin.css'; // Import the CSS file for SignIn component

const SignIn = () => {

  const {dispatch} = useContext(Context);
  const navigate= useNavigate();




  
  const schema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Invalid email address'),
    password: Yup.string().required('Password is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [error, setError] = useState(null);

  const onSubmit = (data) => {
    try {
      Axios.post('http://localhost:8080/auth/login', data)
        .then(({ data }) => {
          if (data.token) {
            
            dispatch({ type:"LOGIN_SUCCESS",payload:data });
            navigate('/plans');
            alert('You are logged in!')
            // console.log(user)
          }
        })
         .catch(({ response }) => {
          alert('Authentication error. Enter Correct Credentials');
        });
    
      }finally{

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
              type="text"
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

