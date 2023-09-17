import React from 'react'


const imgSize  = 'w-[12px] h-[12px] '
export default function TopBar() {
  return (
    <div className = 'w-full bg-[#1A1A1A] h-[42px] flex justify-between text-[#626262] text-[12px] font-normal font-[Poppins]'>
        <div className = 'basis-1/2 basis-1/3 flex items-center md:justify-evenly justify-between ms-[1rem] md:ms-[8rem]'>
            <img src="assets/truckIcon.svg" alt=""  className = 'w-[21px] h-[13px] '/>
            <span className= 'md:basis-3/4'>Free Delivery | Return Policy</span>
        </div>

        <div className = 'md:basis-1/3 flex md:justify-evenly justify-between items-center  md:me-[8rem]'>
           
            <a href= '/' className = 'text-[10px] basis-20'>Login</a>

            <a href="/" className= 'hidden md:block'>Follow us</a>
            <div className="socials grid grid-cols-4 text-[#626262] font-[10px] gap-2 md:gap-4">
                <img src="assets/twiiter.svg" alt="" className = {imgSize}/>
                <img src="assets/insta.svg" alt="" className= {imgSize}/>
                <img src="assets/fb.svg" alt=""  className = {imgSize}/>
                <img src="assets/linkedin.svg" alt="" className = {imgSize}/>

            </div>
        </div>
    </div>
  )
}
