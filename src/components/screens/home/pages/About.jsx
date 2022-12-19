import React from "react";
import {useNavigate} from "react-router-dom";
import './style/style.css';

const About = () => {
    let navigate = useNavigate()


    return (
        <div className='bg-common_flag w-full h-screen text-center' style={{
            display: 'flex',
            minHeight: '100vh',
            position: 'relative',
            overflowy: 'scroll',
        }}>


            <div className="block pt-10">
                <button onClick={() => {
                    navigate(('/front-final-2022/'))
                }}
                        className='text-orange-900 hover:text-purple-800 transition-colors easy-in-out duration-300 p-2 border-solid border-2 border-b-amber-400 rounded-xl text-2xl'>
                    change to home page
                </button>
                <p className='text-2xl p-20'>hi everybody. My name is Suleiman. <br/> I made this website using react js and
                    tailwind.do not judge strictly. <br/> this is my first time using tailwind fully and I may have made a lot
                    of
                    mistakes. <br/>
                    I apologize very much in advance.</p>


            </div>


        </div>

    );
}

export default About