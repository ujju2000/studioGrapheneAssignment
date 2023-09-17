import React from 'react'

const inputStyle = 'w-[350px] md:w-[500px] h-[30px] outline-none border-b-2 border-paragraphColor text-[18px] font-WorkSans font-normal bg-inherit my-5 md:p-5 p-3';
const buttonStyle = 'h-[100px] w-[100px] md:h-[180px] md:w-[180px] rounded-full border-2 border-[#F07E15] text-[14px] md:text-[26px] text-WorkSans font-normal leading-4 text-[#F07E15] absolute right-[0%] bottom-[-50%] md:right-[-30%] md:bottom-[-70%]';

export default function Footer() {
  return (
    <div className = ' w-full p-[40px] bg-footerBack bg-cover text-paragraphColor'>

      <div className = 'flex flex-col md:flex-row md:justify-around justify-center '>
      <div className = 'md:basis-[19rem] text-paragraphColor mt-8'>
        <h3 className = 'font-semibold font-Syne font-[26px] text-center md:text-left'>NewsLetter</h3>
        <p className = 'text-[18px] font-normal'>Get news about articles and updates in your inbox</p>

        </div>

      <form action="" className = 'flex flex-col item-center relative '>
        <input type="text" name="" id=""  placeholder='NAME' className = {inputStyle} />
        <input type="email" name="" id="" placeholder='EMAIL' className = {inputStyle}/>
        <input type="text" name="" id="" placeholder='MESSAGE' className = {inputStyle}/>

        <button className = {buttonStyle}>SEND</button>

      </form>
      </div>

      <div className='font-Syne font-extrabold text-[55px] md:text-[135px] text-white md:leading-[10rem]'>
        <h1 className = ''>GET</h1>
        <h1>IN TOUCH</h1>
      </div>


     
    </div>
  )
}
