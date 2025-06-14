import React from 'react'
import SpotlightCard from '../components/SpotlightCard';
import { FaUserFriends } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Features = () => {
  return (
    <div >
      <div className={' md:mx-32 mx-10 mb-20  xl:mx-[152px]'} id='features'>
        <div className={'text-center mt-14 '}>
          <h2 className={'font-bold text-3xl'}>
            Why choose our training programs?
          </h2>
          <p className={'text-gray-600 text-l'}>
            We provide integrated training solutions to suit all levels and fitness goals
          </p>
        </div>

        <div className={'flex flex-col lx:flex-row lx:justify-center items-center gap-14 mt-14 text-center'}>

          <SpotlightCard className="custom-spotlight-card min-h-[267px] lx:w-[30%] w-[70%] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] hover:translate-y-[-10px] duration-300 ease-in-out" spotlightColor="#22C55E">
            <div className={'text-3xl w-full flex justify-center '} style={{ color: '#22C55E' }}>
              <div className={'w-fit bg-[#22C55E55] p-4 rounded-full'}>
                <FaUserFriends />
              </div>
            </div>
            <p className={'text-xl font-bold my-5 '}>Personal trainers</p>
            <p className={''}>Certified trainers follow your progress and adjust the program according to your needs and goals</p>
          </SpotlightCard>

          <SpotlightCard className="custom-spotlight-card min-h-[267px] lx:w-[30%] w-[70%] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] hover:translate-y-[-10px] duration-300 ease-in-out" spotlightColor="#1559ff">
            <div className={'text-3xl w-full flex justify-center'} style={{ color: '#1559ff' }}>
              <div className={'w-fit bg-[#1559ff55] p-4 rounded-full'}>
                <FaCalendarAlt />
              </div>
            </div>
            <p className={'text-xl font-bold my-5 '}>Flexible programs</p>
            <p>Choose the right time and place for you, with the ability to adjust to your daily schedule</p>
          </SpotlightCard>

          <SpotlightCard className="custom-spotlight-card min-h-[267px] lx:w-[30%] w-[70%] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] hover:translate-y-[-10px] duration-300 ease-in-out" spotlightColor="#8B5CF6">
            <div className={'text-3xl w-full flex justify-center'} style={{ color: '#8B5CF6' }}>
              <div className={'w-fit bg-[#8B5CF655] p-4 rounded-full'}>
                <FaStar />
              </div>
            </div>
            <p className={'text-xl font-bold my-5 '}>Guaranteed results</p>
            <p>More than 90% of our clients achieved their fitness goals within 3 months</p>
          </SpotlightCard>
        </div>

      </div>
    </div>
  )
}
export default Features
