import React from "react";
import './style/style.css';

const About = () => {


    return (
        <div className='bg-common_flag w-full h-screen text-center' style={{
            display: 'flex',
            minHeight: '100vh',
            position: 'relative',
            overflowy: 'scroll',
        }}>


            <div className="block">

                <p className='text-2xl text-black'>hi everybody. My name is Suleiman. <br/> I made this website using react js and
                    tailwind.do not judge strictly. <br/> this is my first time using tailwind fully and I may have made a lot
                    of
                    mistakes. <br/>
                    I apologize very much in advance.</p>


            </div>


        </div>

    );
}

export default About