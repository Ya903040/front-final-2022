import React from "react";

//      {Edit <code>src/home.js</code> and save to reload.}
const Home = () => {
    return (
        <div className='bg-gray-400 w-full h-screen'>
            <header>
                <p className="text-center justify-center text-4xl">
                    this is home page
                </p>
                <iframe style={{
                    width: '80%',
                    height: '80%',
                    textAlign: 'center',
                }} className='aspect-video md:container md:mx-auto' id='rick_roll' src="https://www.youtube.com/embed/1w432mbp2jQ"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen autoplay></iframe>
            </header>



        </div>
    );
}

export default Home