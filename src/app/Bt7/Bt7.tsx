import React from 'react'

export default function Bt7() {
  return (
    <>
     <div className="bg-slate-300 w-[40pc] h-[60px] rounded mt-[20px] ml-[20px] ">
        <div>
            <button className='bg-green-300 w-[120px] h-[40px] border-black border-2 ml-[26px] mt-[10px]'>Sucess</button>
            <button className='bg-orange-400 w-[120px] h-[40px] border-black border-2 ml-[26px] mt-[10px]'>Warning</button>
            <button className='bg-red-300 w-[120px] h-[40px] border-black border-2 ml-[26px] mt-[10px]'>Danger</button>
            <button className='bg-blue-400 w-[120px] h-[40px] border-black border-2 ml-[26px] mt-[10px]'>Primary</button>
        </div>
     </div>
    </>
  )
}
