import React from "react";
import cup9 from "../../../images/cups/Rectangle 9.png";
import cup10 from "../../../images/cups/Rectangle 10.png";
import cup11 from "../../../images/cups/Rectangle 11.png";
import cup12 from "../../../images/cups/Rectangle 12.png";
import cup13 from "../../../images/cups/Rectangle 13.png";
import cup14 from "../../../images/cups/Rectangle 14.png";
import cup15 from "../../../images/cups/Rectangle 15.png";
import cup16 from "../../../images/cups/Rectangle 16.png";

const Follow = () => {
  return (
    <div className="mt-24 w-full">
      <div className="text-center">
        <p className="raleway">Follow Us Now</p>
        <h1 className="text-[#331A15] text-2xl ranchoRegular font-bold">
          Follow on Instagram
        </h1>
      </div>
      <div className="grid grid-cols-4 w-7/12 mx-auto space-y-3">
        <img src={cup9} alt=""  className="w-52 mt-2"/>
        <img src={cup10} alt="" className="w-52"/>
        <img src={cup11} alt="" className="w-52"/>
        <img src={cup12} alt="" className="w-52"/>
        <img src={cup13} alt="" className="w-52"/>
        <img src={cup14} alt="" className="w-52"/>
        <img src={cup15} alt="" className="w-52"/>
        <img src={cup16} alt="" className="w-52"/>
      </div>
    </div>
  );
};

export default Follow;
