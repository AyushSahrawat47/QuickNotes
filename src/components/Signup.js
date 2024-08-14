import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom'

const SignupForm = () => {
  const [credentials, setcredentials] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  let history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setcredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.username, email: credentials.email, password: credentials.password })
    });
    const json = await response.json()
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      history.push("/");

    }
    else {
      alert("User Already exist");
    }
  }

  return (


    <div className="container d-flex justify-content-center align-items-center  " style={{ marginTop: '100px' }}>
      <div className="custom-shadow w-100" style={{ maxWidth: '400px', minHeight: '350px' }}>
        <h2 className="text-center mb-4">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-3">
            <label className='mb-2' htmlFor="Text">Name</label>
            <input
              name='username'
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter full name"
              value={credentials.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label className='mb-2' htmlFor="email">Email address</label>
            <input
              name='email'
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={credentials.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mt-3">
            <label className='mb-2' htmlFor="password">Password</label>
            <input
              name='password'
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label className='mb-2' htmlFor="password"> Confirm Password</label>
            <input
              name='confirmPassword'
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="confirmPassword"
              value={credentials.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3 ">
            Login
          </button>
          <div>
            <p className="text-center mt-3">Already have an account? <Link className="text-decoration-none text-info" to="/Login">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
