import React from "react";
import {useNavigate} from "react-router-dom";
import alatoo_logo from '../../../../assets/images/alatoo_logo.jpg';
import './style/style.css';
const About = () => {
    let navigate = useNavigate()


    return (
        <div className=' w-full h-screen text-center'>
            <p className="text-center justify-center text-4xl ">about this web-site</p>
            <button onClick={() => {
                navigate(('/front-final-2022/'))
            }}
                    className='text-orange-900 hover:text-purple-800 transition-colors easy-in-out duration-300 p-2 border-solid border-2 border-b-amber-400 rounded-xl text-2xl'>
                change to home page
            </button>
            <p>hi everybody. My name is Suleiman.</p>

            <div  >
                <img className='App-logo' src={alatoo_logo} alt='alatoo_logo'/>
            </div>

        </div>
    );
}

export default About