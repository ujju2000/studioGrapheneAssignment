
import React from 'react'

const headingStyle = 'relative leading-[102px] z-10 md:z-0';
export default function Hero() {
  return (
    <div className = 'text-white'>
         <div className = 'px-[90px] relative w-full my-[200px] text-[55px] md:text-[135px] font-[Syne] font-extrabold '> 
            <h1 className= {headingStyle}>Fresh</h1>
            <h1 className ={`${headingStyle} relative md:left-[30%] md:w-[50%] left-[10%]`}>2022</h1>
            <h1 className = {headingStyle}>Look</h1>
            <div className='w-[993px] h-[355px] opacity-[0.5] absolute top-[20%] right-0 bg-[#F07E15] z-10'></div>
            <img src="assets/hero.png" alt="" className='h-[700px] w-[432px] absolute right-[10%] top-[-50%] z-0'/>
        </div>
        <hr className = 'h-[1px] w-[70%]' />
        <img src="assets/star.png" alt="" className = 'relative top-[-45px] left-[68%] w-[64px] h-[90px]' />
    </div>
  )
}
