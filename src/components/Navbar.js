import React, { useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate  = useNavigate ();

    const handleLogout = ()=>{
        localStorage.removeItem('token');
        navigate("/login");
    }

    let location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
    }, [location]);

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Cloud_Notes</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                    </ul>
                    {!localStorage.getItem('token')?<form className="d-flex">
                        <Link className="btn btn-success btn-sm mx-1" to="/login" role="button">Login</Link>
                        <Link className="btn btn-success btn-sm mx-1" to="/signup" role="button">Signup</Link>
                    </form>: <button onClick={handleLogout} className="btn btn-warning btn-sm mx-1" role="button">Logout</button>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;