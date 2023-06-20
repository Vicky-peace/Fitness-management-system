import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './signup.css';

const SignUp = () => {
  

  const [signUpError, setSignUpError] = useState('');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required').min(8, 'Password must be at least 8 characters'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
    }),
    onSubmit: (values) => {
      // Perform sign-up logic here
      // For example, make an API call to register the user

      // Simulating sign-up error
      setSignUpError('Email is already in use');

      // If sign-up is successful, redirect to the dashboard
      // history.push('/dashboard');
    },
  });

  const handleSignInRedirect = () => {
    // Redirect to sign-in page
    history.push('/signin');
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <span className="error-message">{formik.errors.email}</span>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <span className="error-message">{formik.errors.password}</span>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <span className="error-message">{formik.errors.confirmPassword}</span>
          )}
        </div>

        {signUpError && <span className="error-message">{signUpError}</span>}

        <button type="submit">Sign Up</button>
      </form>

      <div className="signup-options">
        <span className="signin-link">
          Already have an account?{' '}
          <a href="/signin" onClick={handleSignInRedirect}>
            Sign In
          </a>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
