import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './signin.css';

const SignIn = () => {
  const [isGoogleSignIn, setIsGoogleSignIn] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
      // Handle sign-in logic here
    },
  });

  const toggleSignInMethod = () => {
    setIsGoogleSignIn((prev) => !prev);
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form className="signin-form" onSubmit={formik.handleSubmit}>
        {!isGoogleSignIn && (
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error-message">{formik.errors.email}</div>
            )}

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="error-message">{formik.errors.password}</div>
            )}

            <button type="submit">Sign In</button>
          </div>
        )}

        {isGoogleSignIn ? (
          <button className="google-signin-button" type="button">
            Sign In with Google
          </button>
        ) : (
          <div className="signin-options">
            <p>
              Don't have an account?{' '}
              <Link to="/signup">Sign Up</Link> instead.
            </p>
            <p>
              Or sign in with{' '}
              <button
                className="toggle-signin-method-button"
                type="button"
                onClick={toggleSignInMethod}
              >
                Google
              </button>
              .
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default SignIn;
