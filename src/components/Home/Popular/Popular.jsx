import { BsFillCupFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import useItems from "../../hooks/useItems";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Popular = () => {
  const items = useItems()
  const [prod,setProd] = useState([])

  useEffect(()=>{
    setProd(items)
  },[items])

  const handleClick = id =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/items/${id}`,{
          method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.deletedCount >0){
            setProd((prevItems) => prevItems.filter((item) => item._id !== id));
            Swal.fire({
              title: "Good Luck!",
              text: "Deleted coffee details",
              icon: "success"
            });
          }
        })
        .then(error=>console.error(error))
      }
    });


  }

  return (
    <div className="w-full">
      <div className="space-y-1 ranchoRegular text-[#331A15] my-4 mt-12 text-center">
        <p>--- Sip & Savor ---</p>
        <h1 className="text-2xl ">Our Popular Products</h1>

        <Link to="/addNew">
          <button className="btn btn-xs flex gap-1 border border-[#331A15] bg-[#E3B577] mx-auto">
            Add Coffee
            <BsFillCupFill className="mt-2" />
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 space-y-3">
        {prod?.map((item) => (
          <div className="card card-side bg-[#F5F4F1] mx-auto w-[384px] h-[192px] flex-shrink-0">
            <figure className="h-full w-48">
              <img
                className="object-cover h-full w-full"
                src={item.image}
                alt="Movie"
              />
            </figure>
            <div className="card-body justify-center my-auto">
              <h2 className="">
                <span className="font-bold">Name:</span>
                {item.name}
              </h2>
              <p>
                <span className="font-bold">Price:</span> ${item.price}0
              </p>
            </div>
            <div className="card-actions my-auto justify-end grid grid-cols-1 lg:mr-6">
              <button className="btn btn-sm bg-[#D2B48C]">
                <Link to={`/details/${item._id}`}><FaEye className="text-2xl text-white"/></Link>
              </button>
              <button className="btn btn-sm bg-[#3C393B]">
                <Link to={`/edit/${item._id}`}><MdEdit className="text-2xl text-white" /></Link>
              </button>
              <button onClick={()=>handleClick(item._id)} className="btn btn-sm bg-[#EA4744]">
                <MdDelete className="text-2xl text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
