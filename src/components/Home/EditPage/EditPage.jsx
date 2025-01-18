import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useParams } from 'react-router';
import useItems from '../../hooks/useItems';
import Swal from 'sweetalert2';

const EditPage = () => {

    const {id} = useParams()

    const [item,setItem] = useState(null)


   const {
       register,
       handleSubmit,
       watch,
       reset,
       formState: { errors },
     } = useForm();

          useEffect(()=>{
        if(item){
            reset(item)
        }
     },[item,reset])

     useEffect(()=>{
        fetch(`http://localhost:5000/items/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setItem(data)
            // reset(data)
        })
        .then(error=>console.error(error))
        },[id])



     const onSubmit = (data) => {
        console.log(data)
        const info = {
            name: data.name,
            image: data.photo,
            category: data.category,
            chef: data.chef,
            details: data.details,
            supplier: data.supplier,
            taste: data.taste,
          }
        fetch(`http://localhost:5000/item/edit/${id}`, {
            method: "PUT",
            headers:{
              "content-type": "application/json",
            },
            body: JSON.stringify(info),
          })
        .then(res=>res.json())
        .then(result=>{
            if(result.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
        .catch(error=>console.error(error))
      };

    return (
        <div>
        <button className="btn ranchoRegular font-bold text-lg flex lg:ml-28 lg:mt-8"><Link className="flex" to="/"><FaArrowLeft className="mt-1 mr-1"/>Go To Home</Link></button>
        <div className="hero min-h-screen">
        <div className="card bg-base-300 w-9/12 shrink-0 my-6">
          <div className="text-center w-9/12 mx-auto pt-2">
            <h1 className="text-2xl font-extrabold ranchoRegular text-[#374151]">
              Add New Coffee
            </h1>
            <p className="py-6 raleway">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid lg:grid-cols-2 space-x-2">
              <div className="form-control ml-2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                 defaultValue={item?.name}
                  className="input input-bordered"
                  style={{ width: 529 }}
                  {...register("name")}
                  
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Chef</span>
                </label>
                <input
                  type="text"
                  defaultValue={item?.chef}
                  className="input input-bordered"
                  {...register("chef")}
                  
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Supplier</span>
                </label>
                <input
                  type="text"
                  defaultValue={item?.supplier}
                  className="input input-bordered"
                  {...register("supplier")}
                  
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Taste</span>
                </label>
                <input
                  type="text"
                  defaultValue={item?.taste}
                  className="input input-bordered"
                  {...register("taste")}
                  
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  defaultValue={item?.category}
                  className="input input-bordered"
                  {...register("category")}
                  
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <input
                  type="text"
                  defaultValue={item?.details}
                  className="input input-bordered"
                  {...register("details")}
                  
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button type='submit' className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default EditPage;