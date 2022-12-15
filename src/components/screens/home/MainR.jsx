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
            <Link to ='/front-final-2022/' className='text-orange-900 hover:text-purple-800 transition-colors easy-in-out duration-300' >home</Link>
            <Link to ='/front-final-2022/about/' className='text-orange-900 hover:text-purple-800 transition-colors easy-in-out duration-300' >about</Link>
            <Link to ='/front-final-2022/game' className='text-orange-900 hover:text-purple-800 transition-colors easy-in-out duration-300' >game</Link>
            <Link to ='/front-final-2022/country' className='text-orange-900 hover:text-purple-800 transition-colors easy-in-out duration-300' >country</Link>
        </nav>

        <Routes>
            <Route path='/front-final-2022/' element=<Home/> />
            <Route path='/front-final-2022/about' element=<About/> />
            <Route path='/front-final-2022/game' element=<Game/> />
            <Route path='/front-final-2022/country' element=<Country/> />
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
