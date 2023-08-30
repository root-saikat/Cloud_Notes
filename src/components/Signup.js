import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'


const Signup = (props) => {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, cpassword } = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/");
            props.showAlert("Account Created Successfully", "success");
        }
        else {
            props.showAlert("Invalid Details", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-6">
                    <form className='signup-form' onSubmit={handleSubmit}>
                        <div className="login-form-header">
                            <h5>Signup</h5>
                            <p>Already have an account? <Link to="/login">Login</Link></p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" onChange={onChange} id="name" name="name" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" onChange={onChange} name="password" id="password" minLength={5} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" onChange={onChange} name="cpassword" id="cpassword" minLength={5} />
                        </div>

                        <div className="div text-center">
                        <button type="submit" className="btn btn-success login-btn">Signup</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup