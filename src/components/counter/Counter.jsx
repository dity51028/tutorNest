import React from 'react'
import CountUp from 'react-countup'
const Counter = () => {
  return (
    <>
    <div className='bg-blue-700 text-white py-12'>
        <div className='container grid grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='flex flex-col justify-center items-center space-y-2'>
                <p className='text-3xl font-bold'>
                    <CountUp start={0} end={898} duration={3} enableScrollSpy={true}/>
                </p>
                <p className='text-lg'>Expert tutor</p>
            </div>

            <div className='flex flex-col justify-center items-center space-y-2'>
                <p className='text-3xl font-bold'>
                <CountUp  end={20000} separator=',' suffix='+' duration={3} enableScrollSpy={true} scrollSpyOnce={true}/>
                </p>
                <p className='text-lg'>Hours content</p>
            </div>
            <div className='flex flex-col justify-center items-center space-y-2'>
                <p className='text-3xl font-bold'>
                <CountUp end={624} duration={3} enableScrollSpy={true}/>
                    </p>
                <p className='text-lg'>Subject & Courses</p>
            </div>
            <div className='flex flex-col justify-center items-center space-y-2'>
                <p className='text-3xl font-bold'>
                <CountUp  end={72898} separator=',' suffix='+' duration={3} enableScrollSpy={true} scrollSpyOnce={true}/>                </p>
                <p className='text-lg'>Active Students</p>
            </div>
        </div>


    </div>
    </>
  )
}

export default Counter