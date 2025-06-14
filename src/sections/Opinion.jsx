import React from 'react'
import PeopleCard from "../components/PeopleCard.jsx";
import ww from "../assets/ww.webp"

const Opinion = () => {
  return (
    <div id='trainers' className={'   '}>
      <div className={'md:mx-32 mx-10 xl:mx-[152px] mt-10'}>
        <div className={'text-center pt-16 '}>
          <h2 className={'font-bold text-3xl mb-5'}>
            What Our Client Says
          </h2>
          <p className={'text-gray-600 text-l'}>
            Join To Thousand Of People Who Change Their Life With Our Programs
          </p>
        </div>
        <div className={'flex flex-col xl:flex-row items-center justify-around bg-red-7s00 my-10'}>
          <PeopleCard
            altImg={'William Photo'}
            peopleImg={ww}
            peopleName={'Fadi Hanna'}
          />
          <PeopleCard
            altImg={'William Photo'}
            peopleImg={ww}
            peopleName={'Raghad Kossa'}
          />
          <PeopleCard
            altImg={'William Photo'}
            peopleImg={ww}
            peopleName={'Hala Halabi'}
          />
        </div>
      </div>
    </div>
  )
}
export default Opinion
