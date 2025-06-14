import React from 'react'
import ProfileCard from "../components/ProfileCard.jsx";
import ww from "../assets/ww.webp"


const Trainers = () => {
  return (
    <div id='trainers' className={'md:mx-32 mx-10 xl:mx-[152px] mt-10'}>
      <div className={'text-center mt-36 '}>
        <h2 className={'font-bold text-3xl'}>
          Professional Trainers
        </h2>
        <p className={'text-gray-600 text-l'}>
          Team Of Professional Trainers
        </p>
      </div>
     <div className={'flex flex-wrap gap-4  justify-evenly my-10 '}>
       <ProfileCard
         altImg={'William Photo'}
         pImage={ww}
         trainerName={'William'}
         trainerField={'Front-End'}
         rate={'4.9'}
         experience={'7'}
       />
       <ProfileCard
         altImg={'William Photo'}
         pImage={ww}
         trainerName={'William'}
         trainerField={'Front-End'}
         rate={'4.9'}
         experience={'6'}
       />
       <ProfileCard
         altImg={'William Photo'}
         pImage={ww}
         trainerName={'William'}
         trainerField={'Front-End'}
         rate={'4.9'}
         experience={'2'}
       />
       <ProfileCard
         altImg={'William Photo'}
         pImage={ww}
         trainerName={'William'}
         trainerField={'Front-End'}
         rate={'4.9'}
         experience={'10'}
       />
     </div>
    </div>
  )
}
export default Trainers
