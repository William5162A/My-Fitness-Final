import React from 'react'
import {FaCheck} from "react-icons/fa";
import {FaSkullCrossbones} from "react-icons/fa6";

const Plane = ({ title , price , plane , popular=false}) => {

  return (
    <div className={`xl:w-[400px] xl:h-[600px] w-[800px] bg-gray-100 rounded-2xl text-black p-10  relative shadow-[10px_12px_12px_-12px_rgba(0,0,0,0.9)] hover:rotate-[0.5deg] hover:scale-105 hover:bg-white duration-300
      `}>
      <div className={'w-full flex justify-center items-center'}>
        {popular ? (<div className={'absolute top-2 text-black bg-primary px-4 py-1 rounded-full'}>Most Popular</div>) : null}
      </div>
      <div className={'flex flex-col justify-around bg-ered-700 h-full'}>
        <div  className={'font-bold'}>
          <h1 className={'text-2xl'}>{title}</h1>
          <h2 className={'text-2xl'}>${price} <span className={'font-normal text-lg  '}>Per/Month</span></h2>
        </div>
        <div>
          {plane.map((item, index) => {
              // console.log(item[1].type.name === 'FaCheck')
            return (
              <div key={item + index} className={'flex justify-between items-center my-5'}>
                <p>{item[0]}</p>
                <p className={`${item[1].type === FaCheck ? 'text-primary' : 'text-red-600'}`}>{item[1]}</p>
              </div>
            )
          })}

        </div>
        <div className={'flex '}>
          <button className={'bg-primary hover:bg-primaryDark p-2 rounded-full w-full transition-all duration-100 '}>
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  )
}
export default Plane
