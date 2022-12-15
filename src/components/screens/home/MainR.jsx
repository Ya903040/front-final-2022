import React from "react";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Game from "./pages/Game";
import Country from "./pages/Country";
import ErrorPage from "./pages/ErrorPage";
import './style/style.css';

const MainR = () => {
    return <Router>
        <nav id='navBar' >
            <Link to ='/' className='text-orange-900 hover:text-purple-800 transition-colors easy-in-out duration-300' >home</Link>
            <Link to ='/game' className='text-orange-900 hover:text-purple-800 transition-colors easy-in-out duration-300' >game</Link>
            <Link to ='/country' className='text-orange-900 hover:text-purple-800 transition-colors easy-in-out duration-300' >country</Link>
            <Link to ='/about' className='text-orange-900 hover:text-purple-800 transition-colors easy-in-out duration-300' >about</Link>
        </nav>

        <Routes>
            <Route path='/' element=<Home/> />
            <Route path='/about' element=<About/> />
            <Route path='/game' element=<Game/> />
            <Route path='/country' element=<Country/> />
            <Route path='*' element=<ErrorPage/>/>
        </Routes>

        <footer>
            <div>
                <p>footer</p>
            </div>
        </footer>
    </Router>;
}

export default MainR;
