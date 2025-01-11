import React from 'react';
import icon1 from '../../../images/icons/1.png'
import icon2 from '../../../images/icons/2.png'
import icon3 from '../../../images/icons/3.png'
import icon4 from '../../../images/icons/4.png'

const Feature = () => {
    return (
      <div className='w-full h-full bg-[#ECEAE3]'>
          <div className='ranchoRegular flex w-10/12 space-x-7 mx-auto py-10'>
            <div>
                <img src={icon1} alt="" />
                <h1 className='font-bold'>Awesome Aroma</h1>
                <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div>
                <img src={icon2} alt="" />
                <h1 className='font-bold'>High Quality</h1>
                <p>We served the coffee to you maintaining the best quality</p>
            </div>
            <div>
                <img src={icon3} alt="" />
                <h1 className='font-bold'>Pure Grades</h1>
                <p>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div>
                <img src={icon4} alt="" />
                <h1 className='font-bold'>Proper Roasting</h1>
                <p>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
        </div>
      </div>
    );
};

export default Feature;