import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { fadeIn } from "../utils/motion";

const scaleAnimation = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
};

const Hero = ({theme, setTheme}) => {
  return (
    <section className={`relative w-full h-screen mx-auto`}
    style={
      {
        color : theme.text,
        
      }
    }
    >
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <motion.div variants={scaleAnimation} initial="initial" animate="animate">
          <h1 className={`${styles.heroHeadText} text-white`} style={{fontFamily: 'sans-serif'}}>
            Hi, I'm <span className='text-[#aa8cf5]'>Prashant</span>
          </h1>
          </motion.div>
          
          <motion.h3 variants={scaleAnimation} initial="initial" animate="animate" className={`${styles.heroEmailText} text-white`}>
    prashantkmr389@gmail.com
  </motion.h3>
  <motion.p variants={scaleAnimation} initial="initial" animate="animate" className={`${styles.heroSubText} mt-2 text-white-100`}>
    I have graduated in <u>Computer Science and Engineering</u>
    <br />from National Institute of Technology Patna.<br/> I'm a <i>full-stack developer</i> and I love to build
    <br />reliable software that solves real-world problems! 
  </motion.p>
        </div>
      </div>

      

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;