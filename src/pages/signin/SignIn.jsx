import React from 'react'

import './signin.css'

const SignIn = () => {
  return (
    <div className='container sign-in'>
       <div className='main-sign-in'>
        <h2>Sign In</h2>
        <div className="field">
          <label>UserName</label>
          <input type='text' name='username' placeholder='Username'/>
        </div>
        <div className="field">
          <label>UserName</label>
          <input type='text' name='username' placeholder='Username'/>
        </div>
        <button type='submit'>Sign In</button>
       </div>
    </div>
  )
}

export default SignIn
