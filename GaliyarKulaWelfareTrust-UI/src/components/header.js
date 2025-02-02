import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

const Header = () => {
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem('logged_user');
        navigate('/');
    }

    return (
        <>
            <h4 className='logo'><img src={logo} alt="Logo" /> Galiyar Kula Welfare Trust <br /><span>Sengalipalayam, Coimbatore 641022</span>
                <span className='logout' onClick={logOut}>Logout<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-power" viewBox="0 0 16 16">
                    <path d="M7.5 1v7h1V1z" />
                    <path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812" />
                </svg></span></h4>
        </>
    )
}

export default Header;

