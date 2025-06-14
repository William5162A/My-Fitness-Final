import React from 'react'
import GooeyNav from '../components/GooeyNav.jsx'
import Card from "../components/Card.jsx";
import athletes from "../assets/undraw_athletes-training_koqa.svg"
import meditation from "../assets/undraw_meditation_vje0.svg"
import personal from "../assets/undraw_personal-trainer_bqkg.svg"
import skateboard from "../assets/undraw_skateboard_w3bz.svg"
import { FaDumbbell } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import { GrYoga } from "react-icons/gr";
import { MdOutlineSportsMartialArts } from "react-icons/md";



const Exercises = () => {

  const exOne = {
    photo:athletes,
    altPic:'Man Play In GYM',
    title:'Fitness exercises',
    icon:<FaDumbbell/>,
    level:'Beginner',
    timeTake:'10 minutes',
    calories:'250',
    mainColor:'text-[#0015FF]',
    bgColor:'bg-[#0015FF]',
  }

  const exTwo = {
    photo:meditation,
    altPic:'Carioca exercises',
    title:'Carioca exercises',
    icon:<FaRunning />,
    level:'Average',
    timeTake:'15 minutes',
    calories:'350',
    mainColor:'text-red-500',
    bgColor:'bg-red-500',
  }

  const exThree = {
    photo:personal,
    altPic:'Yoga exercises',
    title:'Yoga',
    icon:<GrYoga />,
    level:'Advanced',
    timeTake:'20 minutes',
    calories:'500',
    mainColor:'text-green-500',
    bgColor:'bg-green-500',
  }

  const exFour = {
    photo:skateboard,
    altPic:'HIIT exercises',
    title:'HIIT exercises',
    icon:<MdOutlineSportsMartialArts />,
    level:'Beginner',
    timeTake:'10 minutes',
    calories:'200',
    mainColor:'text-[#8B5CF6]',
    bgColor:'bg-[#8B5CF6]',
  }


  const items = [
    { label: "For beginners", href: "#forbeginners" },
    { label: "Average", href: "#average" },
    { label: "Advanced", href: "#advanced" },

  ];

  return (
   <div className={'bg-gray-100 pt-16 pb-24  '}>
     <div >
       <div className={'md:mx-32 mx-10 xl:mx-[152px] mt-10 '} id='exercises'>
         <div className={'text-center  '}>
           <h2 className={'font-bold text-3xl'}>
             Common exercises
           </h2>
           <p className={'text-gray-600 text-l'}>
             Choose from a variety of exercises designed for different fitness goals
           </p>
           <div className={'flex justify-center items-center mt-14 text-center gap-14'}>
             <GooeyNav
               items={items}
               particleCount={15}
               particleDistances={[90, 10]}
               particleR={100}
               initialActiveIndex={0}
               animationTime={600}
               timeVariance={300}
               colors={[1, 2, 3, 1, 2, 3, 1, 4]}
             />
           </div>
         </div>
         <div className={'mt-14 flex flex-wrap gap-4  bg-redh-700 justify-evenly '}>
           <Card
             {...exOne}
           />
           <Card
             {...exTwo}
           />
           <Card
             {...exThree}
           />
           <Card
             {...exFour}
           />
         </div>
       </div>
     </div>
   </div>
        )
}
export default Exercises
