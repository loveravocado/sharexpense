import React, { Children } from 'react'
import { motion } from 'framer-motion'
import "./Animation.css"

export default function Hearup({children}) {

  return (
    <div>
        <motion.div initial={{height: "20vh", bottom: 0}} animate={{height: "20vh"}} className='back_income abs'>
            {children}
        </motion.div>
      
    </div>
  )
}
