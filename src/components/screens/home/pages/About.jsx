import React from "react";
import {useNavigate} from "react-router-dom";

const About = () => {
    let navigate = useNavigate()

    return(
        <div className='bg-gray-400 w-full h-screen'>
            <p className="text-center justify-center text-4xl" >about this web-site</p>
            <button onClick={() => {navigate(('/front-final-2022/'))}} className='text-orange-900 hover:text-purple-800 transition-colors easy-in-out duration-300'>
                change to home page
            </button>
        </div>
    );
}

export default About