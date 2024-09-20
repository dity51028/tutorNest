import { motion } from 'framer-motion'
import React, { useState } from 'react'

const NavbarBanner = () => {
    const [isOpen,setIsOpen] = useState(true)
  return (
    isOpen && (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5,delay:0.8}}
        className='bg-primary flex items-center  justify-around py-1 shadow-lg' >
            <p>Are you a university or a school student for an online tutoring partnership?
           <span className='text-blue-500 cursor-help'> Talk to us</span>
           </p>
            <div className='font-extrabold cursor-pointer '
            onClick={()=>setIsOpen(false)}
            >
                X
            </div>
        </motion.div>
    )
  )
}

export default NavbarBanner