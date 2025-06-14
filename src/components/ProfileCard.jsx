import React from 'react'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";


const ProfileCard = ({ trainerName , trainerField , rate , experience ,pImage , altImg }) => {
  return (
    <div className={' w-[250px] min-h-[200px] rounded-2xl shadow-xl hover:shadow-2xl transition-all px-5 duration-300 hover:translate-y-[-5px] '}>
      <div>
        <div className={'w-full flex justify-center my-10 '}>
          <img src={`${pImage}`} loading="lazy" alt={altImg} width={'100prx'} height={'100prx'} className={'rounded-full'}/>
        </div>
        <div className={'p-2 '}>
          <h2>{trainerName}</h2>
          <p>{trainerField}</p>
        </div>
        <div className={'flex px-2 text-yellow-700'}>
          <div className={'flex -center'}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <CiStar />
          </div>
          <p>{rate}</p>
        </div>
        <div className={'px-2'}>
          Experience:   {experience} years
        </div>
        <div className={'flex justify-center items-center my-6'}>
          <button className={'bg-primary hover:bg-primaryDark p-2 rounded-full w-full'}>Show Profile</button>
        </div>
      </div>


    </div>
  )
}
export default ProfileCard
