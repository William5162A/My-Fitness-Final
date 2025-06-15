import React from 'react'
import Plane from "../components/Plane.jsx";
import { FaCheck } from "react-icons/fa";
import { FaSkullCrossbones } from "react-icons/fa6";

const Subscriptions = () => {

  const basicPlan = [
    ['One Class Per Week' , <FaCheck/>],
    ['Limit Accesses To Exercises' , <FaCheck/>],
    ['Support By Email' , <FaCheck/>],
    ['Rate Your Fitness Once Per Month' , <FaCheck/>],
    ['Fast Support', <FaSkullCrossbones/>],
    ['Diet Program', <FaSkullCrossbones/>],

  ]
  const proPlan = [
    ['Three Class Per Week' , <FaCheck/>],
    ['Full Accesses To Exercises' , <FaCheck/>],
    ['Support By Email' , <FaCheck/>],
    ['Rate Your Fitness Twice Per Week' , <FaCheck/>],
    ['Fast Support', <FaCheck/>],
    ['Diet Personal Program', <FaSkullCrossbones/>],
  ]
  const plusPlan = [
    ['Seven Class Per Week' , <FaCheck/>],
    ['Full Accesses To Exercises' , <FaCheck/>],
    ['Support By Email' , <FaCheck/>],
    ['Rate Your Fitness Once Per Week' , <FaCheck/>],
    ['Live Support 24/7', <FaCheck/>],
    ['Diet Personal Program', <FaCheck/>],
  ]

  // <FaSkullCrossbones /><FaCheck />

  return (
    <div id='subscriptions' className={' text-white bg-gray-200 mt-20 pb-20  '}>
      <div className={' mx-10 xl:mx-[152px] mt-10'}>
        <div className={'text-center pt-16 '}>
          <h2 className={'font-bold text-3xl mb-5 text-black'}>
            Subscribe Planes
          </h2>
          <p className={'text-gray-600 text-l'}>
            Choose Your Planes
          </p>
          <div className={'flex flex-col xl:flex-row items-center justify-center bg-retd-700 m-1 p-1 gap-10 xl:justify-evenly my-10'}>
            <Plane
              plane={basicPlan}
              title={'Basic'}
              price={'99'}
            />
            <Plane
              plane={proPlan}
              popular={true}
              title={'Pro'}
              price={199}
            />
            <Plane
              plane={plusPlan}
              title={'Pro Plus'}
              price={299}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Subscriptions
