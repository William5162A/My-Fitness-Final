import React from 'react'
import QaCard from "../components/QaCard.jsx";

const Qa = () => {
  return (
    <div className={'bg-gray-100 mt-20 pb-20  '}>
      <div className={'md:mx-32 mx-10 xl:mx-[152px] mt-10'}>
        <div className={'text-center pt-16 '}>
          <h2 className={'font-bold text-3xl mb-5'}>
            Most Popular Question
          </h2>
          <p className={'text-gray-600 text-l'}>
            Please Read All Of Them Before You Ask And Thank You
          </p>
        </div>
        <div className={'flex flex-col bg-gray-200 gap-5 mt-14 '}>
          <QaCard
            qa={'How often should I exercise each week?'}
            an={'For general health, aim for at least 150 minutes of moderate aerobic activity (like brisk walking) or 75 minutes of vigorous activity (like running) weekly, plus strength training twice a week. Consistency matters more than intensity—start small if you’re new!'}
          />
          <QaCard
            qa={'What are the best strength exercises for beginners?'}
            an={'Focus on compound movements that work multiple muscles:\n' +
              '\n' +
              'Squats (legs/core)\n' +
              '\n' +
              'Push-ups (chest/arms)\n' +
              '\n' +
              'Rows (back)\n' +
              '\n' +
              'Planks (core).\n' +
              'Start with 2 sets of 10–15 reps, using light weights or bodyweight. Prioritize proper form over heavy loads.'}
          />
          <QaCard
            qa={'Can I lose weight with exercise alone?'}
            an={'Exercise supports weight loss by burning calories, but nutrition is key. Combine cardio (e.g., cycling, swimming) and strength training to boost metabolism. For optimal results, pair workouts with a balanced, calorie-controlled diet.'}
          />
          <QaCard
            qa={'What exercises can I do at home without equipment?'}
            an={'Try these effective bodyweight exercises:\n' +
              '\n' +
              'Burpees (full-body cardio)\n' +
              '\n' +
              'Lunges (legs/glutes)\n' +
              '\n' +
              'Tricep dips (using a chair)\n' +
              '\n' +
              'Jumping jacks (heart health).\n' +
              'HIIT workouts (20 mins, 3x/week) are great for efficiency!'}
          />
        </div>
      </div>
    </div>
  )
}
export default Qa
