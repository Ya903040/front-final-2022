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
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                }} className='aspect-video md:container md:mx-auto' src="https://www.youtube.com/embed/1w432mbp2jQ?vq=hd1080&autoplay=1&fs=0&color=white&controls=0"
                         title="cool boy"></iframe>

            </header>



        </div>
    );
}

export default Home