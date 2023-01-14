import React from 'react';

import './styles/index.css';
import AppRouter from "../components/AppRouter/AppRouter";
import Navbar from "../components/UI/navbar/Navbar";
import {BrowserRouter} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    )
};
export default App;