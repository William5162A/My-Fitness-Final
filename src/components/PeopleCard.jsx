import React from 'react'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const PeopleCard = ({ peopleImg , peopleName ,altImg }) => {
  return (
    <div className={'shadow-2xl hover:shadow-black w-[300px] cursor-pointer hover:translate-y-[-8px] transition-all duration-200 ' +
      'rounded-2xl'}>
      <div className={'flex items-center justify-around pt-7  '}>
        <div>
          <p>{peopleName}</p>
          <div className={'flex  text-yellow-300'}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <CiStar />
          </div>
        </div>
        <div className={'w-[75px]'}>
          <img src={peopleImg} loading="lazy" alt={altImg} className={'rounded-full'} />
        </div>
      </div>

      <p className={'p-8 text-gray-600 '}><span className={'font-bold'}>Comment : </span>This Program Change My Life For Ever , Thanks You </p>
    </div>
  )
}
export default PeopleCard
