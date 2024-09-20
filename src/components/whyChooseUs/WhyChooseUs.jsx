import React from 'react'
import { WhyChooseData } from '../../utils/whyChooseUsData';
import { motion } from 'framer-motion';
import { FaDumbbell } from "react-icons/fa6";
import { SlideLeft } from '../../utils/animation';

const WhyChooseUs = () => {
  return (
    <>
    <div className='bg-slate-200'>
        <div className='container py-24'>

            {/*Header section */}
            <div className='space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5'>
                <h1 className='uppercase font-semibold leading-loose text-orange-800'>Why choose us</h1>
                <p className='font-semibold text-3xl'>Benefits of online tutoring services with us</p>
            </div>

            {/*cards section*/}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                {
                    WhyChooseData.map((item)=>{
                        return(
                            <motion.div 
                            variants={SlideLeft(item.delay)}
                            initial="hidden"
                            whileInView={"visible"}

                            className='space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)] '>
                                {/*icon */}
                                <div style={{backgroundColor:item.bgColor}} className='w-10 h-10 rounded-lg flex justify-center items-center text-white'>
                                    <FaDumbbell className='text-2xl'/>
                                </div>
                                <p className='font-semibold'>{item.title}</p>
                                <p className='text-sm text-gray-500'>{item.desc}</p>

                            </motion.div>
                        )
                    })
                }
            </div>


        </div>
    </div>
    </>
  )
}

export default WhyChooseUs