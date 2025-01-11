import React from 'react';
import bannerImage from '../../../images/more/3.png'

const Banner = () => {
    return (
        <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center',
        }}>
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-neutral-content text-start ml-auto lg:mr-28">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-3xl font-bold text-[#FFFFFF] ranchoRegular">Would you like a Cup of Delicious Coffee?</h1>
            <p className="mb-5 text-[#FFFFFF] raleway">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
            </p>
            <button className="btn bg-[#E3B577] ranchoRegular">Learn More</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;