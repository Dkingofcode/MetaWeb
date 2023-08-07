'use client';
import { motion } from "framer-motion";

import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => ( 
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
         <motion.div  
           variants={staggerContainer}
           initial="hidden"
           whileInView="show"
           viewport={{ once: false, amount: 0.25 }}
           className="border flex justify-center text-center"
         >
           <div className="border-2 w-1/2 flex">
            <motion.h1 variants={textVariant(1.1)} className="text-white text-xl border">
              Metaverse  
            </motion.h1>
            <motion.div variants={textVariant(1.2)} className="border-2 flex">
               <h1 className="">Ma</h1>
               <div className="border-2">d</div>
               <h1 className="text-xl">Ness</h1> 
             </motion.div>     
            </div>    
            </motion.div> 
           </section>
);

export default Hero;