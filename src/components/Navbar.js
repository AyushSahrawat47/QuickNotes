import React from 'react'
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import logo from '../assets/logo.png'



const Navbar = () => {
    let history = useHistory();

    const handleLogout = () => {
        localStorage.removeItem('token');
        history.push('/login')
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand " to="/">
                        <img
                            src={logo}
                            alt="QuickNotes"
                            style={{
                                width: '50px',
                                borderRadius: '50%',
                                marginRight: '20px'

                            }}
                        />
                        
                        QuickNotes
                </Link>
                {!localStorage.getItem('token') ? <form className="d-flex">
                    <Link className="btn btn-primary mx-1" to="/login" role="button"><i className="fa-solid fa-right-to-bracket"></i></Link>
                </form> : <button onClick={handleLogout} className="btn btn-primary"> <i className="fa-solid fa-right-from-bracket"></i></button>}
            </div>
        </nav >
        </>
    )
}

export default Navbar
