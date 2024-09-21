import React from 'react'
import img from '../../assets/hero.png'
import { FaPlay } from "react-icons/fa";
import { motion } from 'framer-motion';
import { SlideRight } from '../../utils/animation';

const Hero = () => {
  return (
    <>
    <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>
        {/*info */}
        <div className='flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0'>
            <div className='text-center md:text-left space-y-6'>
                <motion.p 
                variants={SlideRight(0.4)}
                initial='hidden'
                animate='visible'
                className='text-orange-800 uppercase leading-loose text-xl '>100% Satisfaction Gurantee</motion.p>
                <motion.h1 
                variants={SlideRight(0.6)}
                initial='hidden'
                animate='visible'
                className='text-5xl font-semibold lg:text-6xl text-center ' >Find Your Perfect 
                <span className='text-primary'> Tutor</span></motion.h1>
                <motion.p 
                    variants={SlideRight(0.8)}
                    initial='hidden'
                    animate='visible'
                    className='font-medium text-xl text-center'>We help you find perfect tutor for 1-on-1 lessons.
                    It is completely free and private
                </motion.p>

                <motion.div 
                variants={SlideRight(1.0)}
                initial='hidden'
                animate='visible'
                className='flex gap-4 justify-center md:flex-col lg:flex-row mt-8 items-center'>
                <button className='bg-primary text-sm md:text-xl font-semibold rounded-full px-4 py-2 hover:!scale-110 hover:!shadow-xl duration-300'>Get Started</button>
                <button className='flex items-center gap-1 text-xs md:text-base md:font-medium'>
                    <span className='w-10 h-10 bg-blue-100 rounded-full flex justify-center items-center hover:!scale-110 hover:!shadow-xl hover:rotate-90 duration-300'>
                    <FaPlay className='text-blue-600'/>
                    </span>
                    See how it Works</button>
                </motion.div>

            </div>

        </div>

        {/*Img */}
        <div className='flex justify-center items-center'>
            <motion.img
            initial={{opacity:0,x:200}}
            animate={{opacity:1,x:0}}
            transition={{type:"spring",stiffness:100,delay:0.8}}
            
            src={img} alt="img" 
            className='w-[350px] md:w-[550px] xl:w-[700px]'/>

        </div>
        
    </div>
    </>
  )
}

export default Hero 