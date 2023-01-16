import React, {useEffect, useState} from 'react';

import './styles/index.css';
import AppRouter from "../components/AppRouter/AppRouter";
import Navbar from "../components/UI/navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import {AuthContext} from "../context";


const App = () => {
    const  [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth, isLoading}}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
};
export default App;