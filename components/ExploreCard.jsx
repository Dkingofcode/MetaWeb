'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => ( 

  
    <motion.div variants={fadeIn('right', 'spring', index * 0.5, 0.75)} className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'}
      flex item-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-ointer`}>
      <img 
       src={imgUrl}
       alt={title} 
       className='absolute w-full h-full object-cover rounded-[24px]'   />
    </motion.div>
  )


export default ExploreCard;
