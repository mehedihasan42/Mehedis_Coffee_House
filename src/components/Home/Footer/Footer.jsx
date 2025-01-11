import React from 'react';
import bgImage from '../../../images/more/10.png'
import logo1 from '../../../images/more/logo1.png'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
    return (
<>
<footer className="footer text-neutral-content p-10 mt-12" style={{
            backgroundImage: `url(${bgImage})`
        }}>
        <aside>
            <img src={logo1} className='w-16' alt="" />
         <h1 className='text-[#331A15] text-2xl ranchoRegular'>Espresso Emporium</h1>
         <p className='text-[#1B1A1A] raleway'>Always ready to be your friend. Come & Contact with <br/>  us to share your memorable moments, to share with your best companion.</p>
        <div className='flex text-black text-2xl space-x-2'>
        <FaFacebook />
         <FaTwitter />
         <FaInstagramSquare />
         <FaLinkedin />
        </div>
         <h2 className='text-[#331A15] text-2xl font-bold ranchoRegular'>Get in Touch</h2>
         <p className='text-[#1B1A1A] raleway flex '><FaPhoneAlt className='mr-2 mt-1'/>+88 01533 333 333</p>
         <p className='text-[#1B1A1A] raleway flex'><MdEmail className='mr-2 mt-1'/>info@gmail.com</p>
         <p className='text-[#1B1A1A] raleway flex'><MdLocationOn className='mr-2 mt-1'/>72, Wall street, King Road, Dhaka</p>
        </aside>
        <nav>
         <h1 className='text-2xl text-[#331A15] font-bold ranchoRegular'>Connect with Us</h1>
         <input
  type="text"
  placeholder="Name"
  className="input input-bordered input-md lg:w-96" />
  <input
  type="text"
  placeholder="Email"
  className="input input-bordered input-md lg:w-96" />
  <input
  type="text"
  placeholder="Message"
  className="input input-bordered input-lg lg:w-96" />
  <button class="btn btn-outline hover:bg-[#331A15]">Send Message</button>
        </nav>
      </footer>
      <footer className="footer footer-center bg-red-950 text-white p-4">
      <aside>
        <p className=''>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
      </aside>
    </footer>
</>
    );
};

export default Footer;