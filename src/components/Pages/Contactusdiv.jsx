import React from 'react'
import { Element } from "react-scroll";
import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import { Link } from 'react-scroll';

const Contactusdiv = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const transitionWhiteLine = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.15, 0.20,0.25,0.30 ,0.35,0.40],
    ["0.5s", "0.5s", "0.5s", "0.5s","0.5s","0.5s" ,"0.5s","0.5s"]
  );

  return (
    <Element name="Contact">
      <div className='relative flex items-center justify-center h-screen ' ref={targetRef}>
        {/* White line */}
        <motion.div className='w-0 border-[4px] h-[45%] border-solid border-white  absolute top-0 z-[-1]  mx-auto  sm:left-[50%]' style={{ height, transition: transitionWhiteLine }} >
        </motion.div>
        {/* Contact us div */}
        <Link activeClass="active"
          to="MainContact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}>
          <motion.div className='px-10 text-lg tracking-wider bg-white bg-opacity-25 rounded-md cursor-pointer backdrop-blur-2xl py-7 lg:text-4xl font-Kanit' style={
            { opacity }
          }>
            CONTACT US
          </motion.div>
        </Link>
        {/* White line */}
        <motion.div className='w-0 border-[4px] h-[45%] border-solid border-white  absolute bottom-0 z-[-1]  mx-auto  sm:left-[50%]' style={{ height, transition: transitionWhiteLine }}>
        </motion.div>
      </div>
    </Element>
  )
}

export default Contactusdiv