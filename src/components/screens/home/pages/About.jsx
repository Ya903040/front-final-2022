import React from "react";
import {useNavigate} from "react-router-dom";
import alatoo_logo from '../../../../assets/images/alatoo_logo.jpg';
import './style/style.css';

const About = () => {
    let navigate = useNavigate()


    return (
        <div className='bg-common_flag w-full h-screen text-center'>


            <div className="block">
                <p className="text-center justify-center text-4xl ">about this web-site</p>
                <button onClick={() => {
                    navigate(('/front-final-2022/'))
                }}
                        className='text-orange-900 hover:text-purple-800 transition-colors easy-in-out duration-300 p-2 border-solid border-2 border-b-amber-400 rounded-xl text-2xl'>
                    change to home page
                </button>
                <p className='text-2xl p-20'>hi everybody. My name is Suleiman. I made this website using react js and
                    tailwind.do not judge strictly. this is my first time using tailwind fully and I may have made a lot
                    of
                    mistakes. <br/>
                    I apologize very much in advance.</p>

                <div>
                    <img className='App-logo' src={alatoo_logo} alt='alatoo_logo'/>
                </div>
            </div>


        </div>

    );
}

export default About