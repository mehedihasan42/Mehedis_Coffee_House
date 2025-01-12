import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {id} = useParams()
    const [item,setItem] = useState("")
   useEffect(()=>{
   fetch(`http://localhost:5000/items/${id}`)
   .then(res=>res.json())
   .then(data=>setItem(data))
   .then(error=>console.error(error))
   },[])
    return (
        <div className="card card-side w-3/5 mx-auto my-8 bg-base-300 space-x-28 p-24">
       <div>
       <figure>
          <img
            src={item?.image}
            alt="Movie" 
            className='h-80 object-cover'
            />
        </figure>
       </div>
        <div className="raleway">
          <h2 className="card-title text-2xl my-6 ranchoRegular font-extrabold text-[#331A15]">{item?.name}</h2>
         <div className='mt-8'>
         <p><span className='font-bold'>Category:</span> {item?.category}</p>
          <p><span className='font-bold'>taste:</span> {item?.taste}</p>
          <p><span className='font-bold'>chef:</span> {item?.chef}</p>
          <p><span className='font-bold'>details:</span> {item?.details}</p>
          <p><span className='font-bold'>supplier:</span> {item?.supplier}</p>
         </div>
        </div>
      </div>
    );
};

export default Details;