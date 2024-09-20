import React, { useState } from 'react'
import { FaLaptop } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavbarMenu } from '../../utils/data';
import { motion,AnimatePresence } from 'framer-motion';



const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);
    
  return (
   
    <>
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5,delay:0.5}}
    className='flex justify-around items-center space-y-5'>
        {/*Logo*/}
        <div className='flex gap-2 justify-center items-center'>
            <FaLaptop className='text-2xl lg:text-4xl text-blue-400'/>
            <p className='text-2xl xl:text-3xl '>Tutor-Nest</p>

        </div>

        {/*items*/}
        <div className='hidden lg:block'>
        <ul className='flex gap-4 py-3'>
        { 
          
            NavbarMenu.map((items)=>{
                return (
                    <li key={items.id}
                    className='text-lg xl:text-xl hover:bg-blue-400 hover:text-white py-1 rounded-full transition-all duration-300 px-2 xl:px-3  cursor-pointer'
                    >{items.title}</li>
                )
            })
            
        }
        </ul>
        </div>

        {/*button*/}
        <div className='space-x-4 text-xl hidden lg:block'>
            <button>Log In</button>
            <button className='bg-blue-500 text-white rounded-full px-3 py-2'>Register</button>
        </div>

        {/*Burger menu*/}
        <div className='lg:hidden ' onClick={()=>setIsOpen(!isOpen)}>
            <GiHamburgerMenu className='text-3xl cursor-pointer'/>
        </div>
    </motion.div>

    {/*mobile menu */}
    <div>
        <AnimatePresence mode='wait'>
            {
                isOpen && 
                <motion.div
                    initial={{opacity:0,y:-100}}
                    animate={{opacity:1,y:0}}
                    exit={{opacity:0,y:-100}}
                    transition={{duration:0.5}}
                    className='absolute top-20 left-0 h-screen w-full z-20 lg:hidden'
                >
                    <div className='text-xl font-semibold uppercase bg-primary text-white py-10 m-5 rounded-3xl shadow-2xl'>
                        <ul className='flex flex-col items-center justify-center gap-5 '>
                            {
                                NavbarMenu.map((items)=>{
                                    return(<li key={items.id}
                                                className='hover:text-blue-500 cursor-pointer'
                                            >{items.title}</li>)
                                })
                            }
                             <div className='space-x-4 text-xl  lg:block'>
                            <button className='text-blue-400'>Log In</button>
                           <button className='bg-blue-500 text-white rounded-full px-3 py-2'>Register</button>
                           </div>
                        </ul>
                       
                 </div>
                </motion.div>
            }

        </AnimatePresence>
    </div>

    </>
  )
}

export default Navbar