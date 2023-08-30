import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import users from '../assets/users-office.jpg'


const Login = (props) => {

    const [credentials, setCredentials] = useState({ email: "", password: "" })

    let navigate = useNavigate();

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
            props.showAlert("Login Successfully", "success")
            navigate("/");
        }
        else {
            props.showAlert("Invalid Details", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className='container'>
            <div className="row text-center">
                <h3>Welcome to Cloud-Notes</h3>
                <p>Please login to continue using Cloud-Notes.</p>
            </div>
            <div className="row mt-3 mb-3 gap-lg-2 gap-md-0" >
                <div className="col-md-6 col-12 login-seg justify-content-lg-end justify-content-center" style={{alignitems: "center"}}>
                    <form className='login-form' onSubmit={handleSubmit}>
                        <div className="login-form-header">
                            <h5>Login</h5>
                            <p>Doesn't have an account? <Link to="/signup">Signup</Link></p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                        </div>

                        <div className="div text-center">
                            <button type="submit" className="btn btn-success login-btn">LOGIN</button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-4 col-md-6 col-12 d-none d-md-block login-img">
                    <img  src={users} alt="" style={{width: "100%", height:"100%", objectFit: 'cover', borderRadius: "20px"}}  className="img-fluid"/>
                </div>
            </div>
        </div>
    )
}

export default Login