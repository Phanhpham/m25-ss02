import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faTurnUp } from "@fortawesome/free-solid-svg-icons";
export default function () {
  return (
    <>
      <div>
        <div className="bg-gray-200 w-[23pc] h-[250px] rounded mt-[20px] ml-[20px]">
          <div className="ml-[20px]">
            <p className="text-black "> Input Lable</p>
            <input
              type="text"
              className="rounded border border-blue-700 h-[30px] w-[300px] absolute "
            />
            <FontAwesomeIcon
              className="w-[16px] relative  mb-[9px] text-black mt-[7px]"
              icon={faClock}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="w-[14px] absolute top-[185px] ml-[260px] mb-[20px]  text-black mt-[7px]"
              icon={faTurnUp}
            ></FontAwesomeIcon>
            <div className="border-2 border-black w-[300px] h-[170px]">
              <div className="flex justify-around">
                <label className="ml-[20px]">Label</label>
                <input type="checkbox"></input>
              </div>
              <div className="flex justify-around">
                <label className="ml-[20px]">Label</label>
                <input type="checkbox"></input>
              </div>
              <div className="flex justify-around">
                <label className="ml-[20px]">Label</label>
                <input type="checkbox"></input>
              </div>
              <div className="flex justify-around">
                <label className="ml-[20px]">Label</label>
                <input type="checkbox"></input>
              </div>
                <button className="border-2 border-black text-gray-400 ml-[20px] w-[120px] mt-[10px]">CLEAR </button>
                <button className="border-2 border-black text-white bg-black ml-[20px] w-[120px] mt-[10px]">APPLY </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
