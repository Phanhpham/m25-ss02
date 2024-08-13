import React from "react";

export default function Bt3() {
  return (
    <>
      <div className="bg-slate-200 w-[30pc] h-[760px] rounded mt-[20px] ml-[20px]  ">
        <div>
          <h1
            className="text-3xl
             font-bold ml-[50px]"
          >
            {" "}
            Form Sign Up{" "}
          </h1>
          <p className="ml-[50px]">Name:</p>
          <input
            className=" ml-[50px] w-[350px] h-[40px] border-2 border-black"
            type="text"
            placeholder="Your name"
          />

          <p className=" mt-[20px] ml-[50px]">Email:</p>
          <input
            className="ml-[50px] w-[350px] h-[40px] border-2 border-black"
            type="text"
            placeholder="Your email"
          />

          <p className=" mt-[20px] ml-[50px]">Phone number:</p>
          <input
            className="ml-[50px] w-[350px] h-[40px] border-2 border-black"
            type="text"
            placeholder="US +84(123) 456-789"
          />
          <p className=" mt-[20px] ml-[50px]">Address:</p>
          <input
            className="ml-[50px] w-[350px] h-[110px] border-2 border-black"
            type="text"
            placeholder="Your address"
          />
          <p className=" mt-[20px] ml-[50px]">Skills:</p>
          <div className="ml-[50px]">
            <tr>
              <input className="mt-[10px]" type="checkbox" /> HTML
            </tr>
            <tr>
              <input className="mt-[20px]" type="checkbox" /> UX Design
            </tr>
            <tr>
              <input className="mt-[20px]" type="checkbox" /> CSS
            </tr>
            <tr>
              <input className="mt-[20px]" type="checkbox" /> Javascript 
            </tr>
            <tr>
              <input className="mt-[20px]" type="checkbox" /> React JS
            </tr>
            <tr>
              <input className="mt-[20px]" type="checkbox" /> Java
            </tr>
          </div>
          <button className="ml-[50px] bg-blue-400 w-[350px] h-[40px] mt-[20px]">Sign Up </button>
        </div>
      </div>
    </>
  );
}
