import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { RiUserLine, RiMailLine, RiLockPasswordLine } from 'react-icons/ri';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { apiDomain } from '../../Utils/Utils';

const SignUp = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string()
      .required('Email is required')
      .matches(
        /^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$/,
        'Invalid email address'
      ),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])[a-zA-Z\d!@#$%^&*()\-_=+{};:,<.>]+$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    axios.post(`${apiDomain}/auth/register`, data)
      .then((response) => {
        response.data.message && alert(response.data.message);
        navigate("/plans");
      })
      .catch(({ response }) => {
        console.log(response);
        alert(response.data.error);
      });
  };
 
  return (
    <div className="signin-container">
      <div className="signin-content">
        <h1 className="signin-heading">Sign Up</h1>
        <form className="signin-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="signin-form-field">
            <label htmlFor="username" className="signin-label">
              <RiUserLine className="signin-input-icon" />
            </label>
            <input type="text" id="username" placeholder='username...' {...register('username')} className="signin-input" />
            {errors.username && <p className="signin-error">{errors.username.message}</p>}
          </div>
          <div className="signin-form-field">
            <label htmlFor="email" className="signin-label">
              <RiMailLine className="signin-input-icon" />
            </label>
            <input type="email" id="email" placeholder='Email...' {...register('email')} className="signin-input" />
            {errors.email && <p className="signin-error">{errors.email.message}</p>}
          </div>
          <div className="signin-form-field">
            <label htmlFor="password" className="signin-label">
              <RiLockPasswordLine className="signin-input-icon" />
            </label>
            <input type="password" id="password" placeholder='password...' {...register('password')} className="signin-input" />
            {errors.password && <p className="signin-error">{errors.password.message}</p>}
          </div>
          <div className="signin-form-field">
            <label htmlFor="confirmPassword" className="signin-label">
              <RiLockPasswordLine className="signin-input-icon" />
            </label>
            <input type="password" id="confirmPassword" placeholder='Confirm password ...' {...register('confirmPassword')} className="signin-input" />
            {errors.confirmPassword && <p className="signin-error">{errors.confirmPassword.message}</p>}
          </div>
          <button type="submit" className="signin-button">Sign Up</button>
        </form>
        <p className="signin-signup-text">Already have an account? <Link to="/signin">Sign In</Link></p>
      </div>
    </div>
  );
};

export default SignUp;

