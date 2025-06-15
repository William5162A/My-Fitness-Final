import React from 'react'

const Card = ({photo ,title ,icon ,level ,timeTake ,calories , mainColor , bgColor , altPic}) => {
  return (
    <div className={''}>
      <div className={'bg-gray-200 m-3 w-[300px] ms:w-[250px] p-2 rounded-2xl shadow-xl hover:shadow-2xl transition-all'}>
        <div className={' px-4 my-10'}>
          <img src={photo} loading="lazy" alt={altPic} className={` w-[250px] h-[200px] scale-75`} />
          <div className={'flex justify-between items-center'}>
            <h2 className={'font-bold text-xl'}>{title}</h2>
            <div className={`text-2xl ${mainColor}`}>
              {icon}
            </div>
          </div>
          <div className={'flex justify-between items-center mt-2 text-gray-700'}>
            <div>Level: {level}</div>
            <div>Time: {timeTake}</div>
          </div>

          <div>
            <div className="w-full bg-pink-200 rounded-full h-2.5 my-5 ">
              <div
                className={`h-2.5 rounded-full ${bgColor}`}
                style={{ width: `${(calories / 600) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className={'my-7 '}>
            <button className={'bg-primary w-full py-2 px-1 rounded-3xl hover:bg-primaryDark duration-300 transition-all hover:translate-y-[-5px]'}>Start Exercises</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card
