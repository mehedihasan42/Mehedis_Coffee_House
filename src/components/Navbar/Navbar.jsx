import React from "react";
import logo from "../../images/more/logo1.png";
import navBg from "../../images/more/15.jpg"


const Navbar = () => {
  return (
    <div className="navbar" style={{
        backgroundImage: `url(${navBg})`,
        backgroundPosition: 'center',
    }}>
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <a className="btn btn-ghost">
          <img src={logo} alt="Logo" className="h-10 w-10" />
        </a>
        <a className="btn btn-ghost text-xl ranchoRegular text-white">Espresso Emporium</a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
