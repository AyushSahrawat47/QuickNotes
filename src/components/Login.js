import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './login.css'
import { Link } from 'react-router-dom'


const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            history.push("/");

        }
        else {
            alert("Invalid credentials");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
            <div className="container d-flex justify-content-center align-items-center  " style={{marginTop:'100px'}}>
                <div className="custom-shadow w-100" style={{ maxWidth: '400px', minHeight:'350px'}}>
                    <h2 className="text-center mb-4">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input
                                name='email'
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                                value={credentials.email}
                                onChange={onChange}
                            />
                        </div>

                        <div className="form-group my-3">
                            <label htmlFor="password">Password</label>
                            <input
                                name='password'
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                value={credentials.password}
                                onChange={onChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100 mt-3 ">
                            Login
                        </button>
                        <div>
                            <p className="text-center mt-3">Don't have an account? <Link className="text-decoration-none text-info" to="/signup">Signup</Link></p>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default Login
