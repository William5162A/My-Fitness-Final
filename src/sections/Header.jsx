import React, {useEffect, useState} from 'react'
import GooeyNav from '../components/GooeyNav.jsx'
import { FaDumbbell } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";
import { GiLevelThreeAdvanced } from "react-icons/gi";
import { debounce } from 'lodash-es';
import {RiCloseLine, RiMenuLine} from "react-icons/ri";

const Header = () => {
  const [navBar, setNavBar] = useState(false)

  useEffect(() => {
    // دالة للتحقق من عرض الشاشة
    // const handleResize = () => {
    //   if (window.innerWidth > 1080) {
    //     setNavBar(false); // إذا كان العرض أقل من 1024px، اجعل الحالة false
    //   }
    //   else {
    //     setNavBar(false); // إذا كان العرض أكبر أو يساوي 1024px، اجعل الحالة true
    //   }
    // };
    const handleResize = debounce(() => {
      if (window.innerWidth > 1024) setNavBar(false);
    }, 250);

    // استدعاء الدالة عند تحميل الصفحة
    handleResize();
    // إضافة مستمع (listener) لتحديث الحالة عند تغيير حجم الشاشة
    window.addEventListener("resize", handleResize);
    // تنظيف المستمع عند إلغاء تحميل المكون
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // يتم تشغيل useEffect مرة واحدة عند تحميل المكون

  const handleCloseNav = () => {
    setTimeout(() => {
      setNavBar(false);
      },500)

  }

  const items = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Exercises", href: "#exercises" },
    { label: "Trainers", href: "#trainers" },
    { label: "Subscriptions", href: "#subscriptions" },
  ];

  return (
    <div className={'p-2 overflow-hidden bg-white text-black fixed top-0 left-0 z-[1110] w-full shadow-[0_12px_12px_-12px_rgba(0,0,0,0.4)]'}>
    {/*<div className={'p-2 overflow-hidden bg-white text-black  z-[1110] w-full shadow-[0_12px_12px_-12px_rgba(0,0,0,0.4)]'}>*/}
      <div className='px-4 md:px-8 lg:px-16 xl:px32 2xl:px-64'>
        <div className={'flex justify-between'}>
          <a href='#home' className={'font-bold flex items-center text-xl  '}>
            <div className={'mr-2 text-3xl text-primary'}>
              <FaDumbbell />
            </div>
           <div>My Fitness</div>
          </a>

          <div>
            <div className={'text-black hidden lg:flex min-h-[50px] relative'}>
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
              <button className={'text-black bg-primary font-bold px-4 py-2 rounded-2xl hover:bg-primaryDark duration-300'}>
                Start Now
              </button>
            </div>
            {navBar ? <button title={'closeNavBar'} aria-label={'closeNavBar'} className={'lg:hidden text-3xl mt-3'} onClick={() => setNavBar(!navBar)} value={'navButton'}>
              <RiCloseLine />
            </button> :<button title={'OpenNavBar'} aria-label={'OpenNavBar'} className={'lg:hidden text-3xl mt-3'} onClick={() => setNavBar(!navBar)} value={'navButton'}>
              <RiMenuLine />
            </button> }
          </div>
        </div>

        <div className={`${navBar ? 'flex justify-center items-center mt-10 transition-all' : 'hidden'}`} onClick={() => handleCloseNav()}>
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            col={'flex-col items-center'}
            liClass={'w-[500px] text-center'}
          />
        </div>

      </div>

    </div>
  )
}
export default Header
