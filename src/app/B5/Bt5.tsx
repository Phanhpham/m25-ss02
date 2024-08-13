import React from "react";

export default function Bt5() {
  return (
    <>
      <div className="bg-slate-200 w-[30pc] h-[300px] rounded mt-[20px] ml-[20px] ">
        <img
          className=" w-[70px] ml-[60px] "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Error.svg/497px-Error.svg.png"
        ></img>
        <p className=" mt-[30px] ml-[60px] font-bold text-2xl">
          Delete blog post
        </p>
        <p className=" mt-[30px] ml-[60px]">
          Are you sure you want to delete this post ? This<br></br>
          action cannot be undone.
        </p>

        <button className="border-2 border-black mt-[30px] ml-[60px] w-[170px] h-[50px]">
          Cancel
        </button>
        <button className="border-2 border-black mt-[30px] bg-red-500 ml-[50px] w-[170px] h-[50px]">
          Delete
        </button>
      </div>
    </>
  );
}
