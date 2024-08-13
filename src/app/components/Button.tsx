import React from "react";

type Props = {
  btn: string[]
};
export default function Button(props:Props) {

  return(
   <div>
    {props.btn.map((item,index)=>{
        return <button key ={index}>{item}</button>
})}
  </div>
  )
}
