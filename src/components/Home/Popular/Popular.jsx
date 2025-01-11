import React, { useEffect, useState } from "react";
import { BsFillCupFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Popular = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-full">
      <div className="space-y-1 ranchoRegular text-[#331A15] my-4 mt-12 text-center">
        <p>--- Sip & Savor ---</p>
        <h1 className="text-2xl ">Our Popular Products</h1>
        <button className="btn btn-xs flex gap-1 border border-[#331A15] bg-[#E3B577] mx-auto">
          Add Coffee <BsFillCupFill className="mt-2" />
        </button>
      </div>
      <div className="grid grid-cols-2 space-y-3">
        {
            items?.map(item=>
                <div className="card card-side w-96 bg-[#F5F4F1] mx-auto">
  <figure>
    <img
    className="justify-start"
      src={item.image}
      alt="Movie" />
  </figure>
  <div className="card-body justify-center my-auto">
    <h2 className=""><span className="font-bold">Name:</span>{item.name}</h2>
    <p><span className="font-bold">Price:</span> {item.price}</p> 
  </div>
  <div className="card-actions my-auto justify-end grid grid-cols-1 lg:mr-6">
      <button className="btn btn-sm bg-[#D2B48C]"><FaEye className="text-2xl text-white"/></button>
      <button className="btn btn-sm bg-[#3C393B]"><MdEdit className="text-2xl text-white"/></button>
      <button className="btn btn-sm bg-[#EA4744]"><MdDelete className="text-2xl text-white"/></button>
    </div>
</div>
            )
        }
      </div>
    </div>
  );
};

export default Popular;
