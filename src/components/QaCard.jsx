import React, {useState} from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";


const QaCard = ({qa , an}) => {
  const [isQaOpen, setIsQaOpen] = useState(false);
  return (
    <div className={'transition-all duration-300 '} onClick={() => setIsQaOpen(!isQaOpen)}>
      <div className={'flex justify-between items-center bg-primary m-2 px-10 py-4 cursor-pointer'}>
        <div>
          {qa}
        </div>
        <div>
          {isQaOpen ?<FaAngleUp /> :<FaAngleDown /> }
        </div>
      </div>
      <div>
        {isQaOpen ?
          <div className={'flex justify-between items-center bg-[#F9FAFB] m-3 px-10 py-4  cursor-pointer transition-all duration-300 ease-in-out scale-100'}>
            <div className={'transition-all duration-300 ease-in-out'}>
              {an}
            </div>
          </div>
        :
          <div className={'scale-0 bg-[#F9FAFB] h-1 transition-all duration-300 ease-in-out'}>
            <div className={'transition-all duration-700 ease-in-out'}>
              {an}
            </div>
          </div>
        }
      </div>
    </div>
  )
}
export default QaCard
