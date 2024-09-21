import React from 'react'
import { motion } from 'framer-motion'
import { SlideUp } from '../../utils/animation'

const Banner = ({image,title,subtitle,link,tag}) => {
  return (
    <>
    <div className='bg-yellow-50 pb-14'>
        <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0'>
                {/*img section */}
               
               
                <motion.img 
                initial={{opacity:0,scale:0.5}}
                whileInView={{opacity:1,scale:1}}
                transition={{type:'spring',stiffness:100,delay:0.2}}
                src={image} alt="img1" className='w-[400px] h-full object-cover' />
                

                {/*descriptions */}
                <div className='flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]'>
                    <motion.p 
                    variants={SlideUp(0.5)}
                    initial='hidden'
                    whileInView={'visible'}
                    className='text-sm text-orange-700 font-semibold capitalize'>{tag}</motion.p>
                   <motion.p 
                    variants={SlideUp(0.6)}
                    initial='hidden'
                    whileInView={'visible'}
                   className='text-xl lg:text-2xl font-semibold capitalize'>{title}</motion.p>
                   <motion.p 
                    variants={SlideUp(0.7)}
                    initial='hidden'
                    whileInView={'visible'}
                   className='text-sm text-slate-400'>{subtitle}</motion.p>
                   <motion.div 
                    variants={SlideUp(0.9)}
                    initial='hidden'
                    whileInView={'visible'}
                   className='flex justify-center md:justify-start'>
                    <button className='primary-btn !mt-5'>Get Started</button>
                   </motion.div>
                </div>

            </div>

        </div>

    </div>
    </>
  )
}

export default Banner