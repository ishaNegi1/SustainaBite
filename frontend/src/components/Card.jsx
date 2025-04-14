import React from 'react'

function Card({src, alt, title, desc, btnText }) {
  return (
    <>
    <div className=' w-auto sm:w-[23%] h-auto bg-[#FFFFFF] text-[#133221] rounded-lg shadow-xl shadow-[rgba(0,0,0,0.7)] p-2 flex flex-col flex-wrap'>
    <img src={src} alt={alt} className=' rounded-md'/>
      <p className=' text-lg font-Nunito font-semibold py-1'>{title}</p>
      <p className=' text-sm'>{desc}</p>
      <button className=' text-white font-Coustard bg-[#fa453c] sm:w-[85%] md:w-[85%] lg:w-[60%] w-[60%] sm:text-sm md:text-sm lg:text-lg text-lg  mx-auto mb-1 mt-3 py-1 px-1 rounded-lg transition-all duration-500 ease-linear transform hover:scale-110'>{btnText}</button>
    </div>
    </>
  )
}

export default Card
