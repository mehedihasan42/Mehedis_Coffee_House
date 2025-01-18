import React from "react";
import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";

const AddNew = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    fetch("http://localhost:5000/items", {
      method: "POST",
      headers:{
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        image: data.photo,
        category: data.category,
        chef: data.chef,
        details: data.details,
        supplier: data.supplier,
        taste: data.taste,
      }),
    });
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Item added successfully",
      showConfirmButton: false,
      timer: 1500
    });
    reset()
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
                placeholder="Name"
                className="input input-bordered"
                style={{ width: 529 }}
                {...register("name")}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Chef</span>
              </label>
              <input
                type="text"
                placeholder="Chef"
                className="input input-bordered"
                {...register("chef")}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <input
                type="text"
                placeholder="Supplier"
                className="input input-bordered"
                {...register("supplier")}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input
                type="text"
                placeholder="Taste"
                className="input input-bordered"
                {...register("taste")}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                placeholder="Category"
                className="input input-bordered"
                {...register("category")}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                placeholder="Details"
                className="input input-bordered"
                {...register("details")}
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                placeholder="Photo"
                className="input input-bordered w-full"
                {...register("photo")}
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#D2B48C]">Update Coffee Details</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default AddNew;
