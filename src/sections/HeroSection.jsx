import React from 'react'
import OIP from '../assets/undraw_skateboard_w3bz.svg'
import SplitText from "../components/SplitText.jsx";

const HeroSection = () => {

  const handleAnimationComplete = () => {

    console.log('All letters have animated!');
  };
  //  background: linear-gradient(to left, #a8ff78, #78ffd6);
  return (
      <div className={` text-white bg-gradient-to-r from-[#22C55E] to-[#78ffd6]`}>
        <div className={' md:mx-32 mx-10 xl:mx-[152px]'} id='home'>
          {/*<div className={'flex items-center gap-4 py-24'}>*/}
          <div className={'flex justify-center items-center flex-col  lg:flex-row lg:items-center lg:gap-4 py-36'}>
            <div className={'lg:w-[50%]'}>
              <h1 className={' font-bold'}>
                <SplitText
                  text=
                    "Start your journey towards better health and high fitness"
                  aria='Start your journey towards better health and high fitness'
                  className="text-5xl font-semibold text-center"
                  delay={250}
                  duration={0.6}
                  ease="power3.out"
                  splitType="words"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center" onLetterAnimationComplete={handleAnimationComplete}
                />
              </h1>
              <p className={'py-8'}>
                With professional trainers and tailor-made training programs
              </p>
              <div className={'flex gap-2 grow'}>
                <button className={'bg-white hover:bg-gray-200 duration-300 text-black rounded-full p-5 w-[45%]'}>Start training now</button>
                <button className={'bg-transparent hover:bg-white hover:text-primary duration-300 text-white border-white border-2  rounded-full w-[45%]'}>Learn about our programs</button>
              </div>
            </div>
            <div className={'w-[39%] flex justify-center items-center py-5 '}>
              <img src={OIP}  loading="lazy" alt="Photo of one who do sport" className={'hidden lg:flex'} width={'200px'} />
            </div>
          </div>
        </div>
      </div>
  )
}
export default HeroSection
