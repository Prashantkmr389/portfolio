import React from "react";
// import {Tilt} from "react-tilt";
// import { motion } from "framer-motion";

import { styles } from "../styles";
// import { services } from "../constants";
import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";

// const ServiceCard = ({ index, title, icon }) => (
//   <Tilt className='xs:w-[250px] w-full'>
//     <motion.div
//       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
//     >
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
//       >
//         <img
//           src={icon}
//           alt='web-development'
//           className='w-16 h-16 object-contain'
//         />

//         <h3 className='text-white text-[20px] font-bold text-center'>
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   </Tilt>
// );

// const About = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubText}>Introduction</p>
//         <h2 className={styles.sectionHeadText}>Overview.</h2>
//       </motion.div>

//       <motion.p
//         variants={fadeIn("", "", 0.1, 1)}
//         className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
//       >
//         If you've found your way to this page, you're probably trying to get to
//         know more about me. First things first:{" "}
//         <code>tabs&gt;&gt;&gt;spaces.</code>
//         <br />
//         <br />
//         I'm a tech enthusiast; broadly interested in full-stack web development
//         mainly in Fintech Space. I am currently working on a StartUp and trying
//         hands on Finance. I read poetry in my spare time. I characterize myself
//         as a tech guy who wants to get better at everything.
//         <br />
//         <br />I love conversations about technology, businesses, and startups.
//         I'm into fitness, and I am in love with Comedy series ("Friends" is
//         G.O.A.T) and Coffe.
//       </motion.p>

//       <motion.div variants={textVariant()} className="mt-8">
//         <h7>Support me by buying me dinner.</h7>
//       </motion.div>

//       {/* <div className='mt-10 flex flex-wrap gap-10'>
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div> */}
//     </>
//   );
// };


const AboutWithout = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <div
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        If you've found your way to this page, you're probably trying to get to
        know more about me. First things first:{" "}
        <code>tabs&gt;&gt;&gt;spaces.</code>
        <br />
        <br />
        I'm a tech enthusiast; broadly interested in full-stack web development
        mainly in Fintech Space. I am currently working on a StartUp and trying
        hands on Finance. I read poetry in my spare time. I characterize myself
        as a tech guy who wants to get better at everything.
        <br />
        <br />I love conversations about technology, businesses, and startups.
        I'm into fitness, and I am in love with Comedy series ("Friends" is
        G.O.A.T) and Coffe.
      </div>

      <div className="mt-8">
        <h7>Support me by buying me dinner.</h7>
      </div>

      {/* <div className='mt-10 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(AboutWithout, "about");


