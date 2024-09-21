import React from 'react'
import { subjectList } from '../../utils/subjectData'
import { FaBook } from "react-icons/fa";
import { motion } from 'framer-motion';


const Subject = () => {
  return (
    <>
    <div className='container py-14 md:py-20'>
        {/*header section */}
        <div className='text-center space-y-4'>
            <h1 className='text-orange-600 text-lg md:text-2xl uppercase'>our tutor subjects</h1>
            <p className='font-semibold capitalize text-2xl md:text-4xl'>Find online tutor in any subject</p>
        </div>
        {/*cards section */}
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10'>
                {
                    subjectList.map((item)=>{
                       return (<motion.div 
                        initial={{opacity:0,x:-200}}
                        whileInView={{opacity:1,x:0}}
                        transition={{
                            type:'spring',
                            stiffness:100,
                            delay:item.delay
                        }}
                           key={item.id} 
                           className='border border-slate-400 p-4 text-base md:text-lg flex space-x-1 justify-start md:justify-center items-center m-6 hover:scale-105 duration-75 cursor-pointer hover:shadow-2xl'>
                           <div 
                           style={{
                            color:item.color,
                            backgroundColor:item.color+'50'}}
                           className='h-10 w-10 rounded-full flex items-center justify-center'>
                           <FaBook className='hover:rotate-180 duration-100'/>
                           </div>
                            
                            <h2>{item.name}</h2>
                           </motion.div>)
                    })

                }
            </div>
        </div>

    </div>
    </>
  )
}

export default Subject