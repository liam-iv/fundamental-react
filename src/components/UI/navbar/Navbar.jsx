import React from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";
import { useContext } from "react";
 const Navbar = () => {

    const {setIsAuth} = useContext(AuthContext);
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <MyButton onClick={logout}>
                Выйти
            </MyButton>
            <div className="navbar__link">
                <Link to="/posts">Посты</Link>
                <Link to="/about">О сайте</Link>
            </div>
        </div>
    );
};

export default Navbar;