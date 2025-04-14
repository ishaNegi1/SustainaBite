import React from 'react'

const Button = ({btnText}) => {
  return (
    <button className=" font-Coustard bg-[#FFFFFF] text-black w-24 h-9 rounded-md text-[1.1rem] font-medium lg:mr-11 mr-11 sm:mr-5 transition-all duration-500 ease-linear transform hover:scale-110">
            {btnText}
    </button>
  )
}

export default Button
