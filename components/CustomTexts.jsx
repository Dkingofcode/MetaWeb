'use client';

import { motion } from 'framer-motion';

import { textContainer } from '../utils/motion';


export const TypingText = ({ title, textStyles }) => (
   <motion.p variants={textContainer} className={`font-normal text-[14px] text-white ${textStyles}`}>
     {Array.from(title).map((letter, index) => (
        <motion.span vriants={textVariant2} key={index}>
            {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
     ))}      
   </motion.p> 
);

const CustomTexts = () => {
  return (
    <div>
      
    </div>
  )
}

export default CustomTexts;
