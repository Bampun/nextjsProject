import Link from 'next/link'
import React from 'react'

export default function Login() {
  return (
    <>
      <div className="login-wrapper">
        <div className="login-box">
        <div className='contact-form'>
          <div className="container">
          <h2>Login</h2>
            <form className="form">
              <label >Email Address</label>
              <input
                type="email"
                id="fname"
                name="customer_email"
                required
              />

              <label>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
              />
              <h4 className='login-forget-password'><Link href='#'>Forget your password</Link></h4>
              <input type="submit" value="Login"/>
              <button type="button" className='create-account'>Create An Account</button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}
