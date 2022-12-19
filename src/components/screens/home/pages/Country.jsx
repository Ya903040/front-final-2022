import React from "react";
import usa_logo from "../../../../assets/images/logo_flag.png";
import './style/style.css';
const Country = () => {
    return(
        <div id = "country_back" className='w-full h-screen text-center justify-center'>


            <div className='block'>
                <h1 className="text-4xl">Interesting facts about the USA.</h1>

                <p className='pt-5 text-2xl'>1-)In Las Vegas, there is 1 slot machine for 8 citizens.</p>
                <p className='pt-3 text-2xl'>2-)More than half of American adults drink at least one cup of coffee a day.</p>
                <p className='pt-3 text-2xl'>3-)It was in the USA that the first mass-produced car was produced and the Internet was invented.</p>


                <img className='App-logo pt-3' src={usa_logo} alt="usa_logo"/>
            </div>


        </div>
    );
}

export default Country

