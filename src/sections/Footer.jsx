import React from 'react'
import {FaDumbbell, FaPhone} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import {MdOutlineMailOutline} from "react-icons/md";


const Footer = () => {
  return (
    <div className={'bg-gray-900 min-h-[200px] text-white '}>
      <div className={'md:mx-32 mx-10   xl:mx-[152px]'}>
        <div className={' flex flex-col xl:flex-row xl:justify-around'}>
          <div className={'m-5 w-2/3 '}>
            <div className={'flex xl:justify-center xl:items-center mb-3'}>
              <div className={'mr-2 text-3xl text-primary'}>
                <FaDumbbell />
              </div>
              <h1 className={'text-white'}>My Fitness</h1>
            </div>
            <p className={'text-gray-400 ml-3 '}>
              Motivational Version: "We provide customized training programs designed to empower you in reaching your health and fitness potential!"
            </p>
          </div>

          <div className={'m-5 w-2/3 '}>
            <div className={'flex xl:justify-center xl:items-center mb-3'}>
              <h1 className={'text-white'}>Fast Link</h1>
            </div>
            <div className={'flex flex-col text-gray-400 ml-3 xl:justify-center xl:items-center '}>
              <a href="#home" className={'hover:text-gray-200'}>Home</a>
              <a href="#features" className={'hover:text-gray-200'}>Features</a>
              <a href="#exercises" className={'hover:text-gray-200'}>Exercises</a>
              <a href="#trainers" className={'hover:text-gray-200'}>Trainers</a>
              <a href="#subscriptions" className={'hover:text-gray-200'}>Subscriptions</a>
            </div>
          </div>

          <div className={'m-5 w-2/3 '}>
            <div className={'flex xl:justify-center xl:items-center mb-3'}>
              <h1 className={'text-white'}>Exercises</h1>
            </div>
            <div className={'flex flex-col text-gray-400 ml-3 xl:justify-center xl:items-center '}>
              <a href="#home" className={'hover:text-gray-200'}>Home</a>
              <a href="#features" className={'hover:text-gray-200'}>Features</a>
              <a href="#exercises" className={'hover:text-gray-200'}>Exercises</a>
              <a href="#trainers" className={'hover:text-gray-200'}>Trainers</a>
              <a href="#subscriptions" className={'hover:text-gray-200'}>Subscriptions</a>
            </div>
          </div>

          <div className={'m-5 w-2/3 '}>
            <div className={'flex xl:justify-center xl:items-center mb-4 '}>
              <h1 className={'text-white'}>Contact Us</h1>
            </div>
            <div className={'text-gray-400 ml-3 '}>
              <a href={'#'} className={'flex justify-between xl:justify-arocund hover:text-gray-200'}>Syria / RifDimashq / Yabroud <FaPhone />
              </a>
              <a href={'#'} className={'flex justify-between xl:justifsy-around my-1 hover:text-gray-200  '}>+963937136019 <CiLocationOn />
              </a>
              <a href={'#'} className={'flex justify-between xl:justify-arcound hover:text-gray-200'}>William.arbash99@gmail.com <MdOutlineMailOutline />
              </a>

            </div>
          </div>

        </div>
        <hr className={'mx-20 my-8'}/>
        <div className={'flex justify-center items-center pb-10 '}>
          <p>© 2025 My Fitness. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}
export default Footer
