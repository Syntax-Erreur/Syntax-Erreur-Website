import React, { memo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Element } from "react-scroll";

// import Navbar2 from "./Navbar2";
const About = memo(() => {
  // used for rotation of planet in framer motion instead of uing state
  //   const [rotate, cycleRotate] = useCycle(0,360);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.3], ["0vh", "120vh"]);

  // TRansition to make it better(Line)
  const transitionWhiteLine = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4],
    ["2s", "2s", "2s", "2s", "2s", "2s", "2s", "2s"]
  );

  return (
    <>
      <Element name="About" className="relative mt-44 md:mt-0 mb-44">
        {/* White line */}
        {/* White line */}
        {/* <motion.div
          className="w-0 border-[2px] h-[30%] xl:h-[17.5%]   border-solid border-white  absolute top-0 z-[1]  mx-auto  left-[50%]"
          style={{
            height: height,
            transition: transitionWhiteLine,
            transitionDelay: "500ms",
          }}
        ></motion.div> */}
        <motion.div className="">
          <motion.div className="container flex flex-col items-center justify-around gap-10 p-4 mx-auto">
            <br />
            <br />

            <section className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-between  pt-10 sm:pt-0   text-white rounded-lg backdrop-blur-sm gap-8 sm:gap-0  bg-opacity-80 bg-[rgba(43,43,43,0.26)] sm:w-[85%] w-full z-10 ">
              <div className=" sm:w-[50%] sm:h-[212px] sm:flex sm:items-center sm:justify-center">
                {" "}
                <h1 className="px-6 mt-2 text-4xl text-center sm:px-0 sm:mt-0 sm:text-5xl font-Kanit sm:text-left">
                  About
                </h1>
              </div>
              <div className="bg-[#101010] px-8 flex items-stretch justify-center py-8   sm:w-1/2">
                <p className=" leading-7  text-justify px-3 text-[#1rem]">
                  At Syntax, we're not just your average IT consulting firm.
                  We're a team of tech enthusiasts who love what we do. Our
                  mission? To bring your ideas to life! Whether it's web
                  development, app development - we've got you covered. We'll
                  work closely with you to understand your unique needs and
                  create tailored solutions that make your business thrive. With
                  us by your side, you'll experience the perfect blend of user
                  experiance, innovation, and friendly support. Let's embark on
                  this exciting tech journey together!
                </p>
              </div>
            </section>
            <section className="backdrop-blur-sm text-white flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-between gap-10 sm:gap-0  bg-opacity-80  pt-10 sm:w-[85%] w-full  sm:py-0 rounded-lg  bg-[rgba(43,43,43,0.26)] z-10">
              <div className=" sm:w-[50%] sm:h-[212px] sm:flex sm:items-center sm:justify-center">
                <h1 className="px-6 mt-2 text-4xl text-center sm:px-0 sm:mt-0 sm:text-5xl font-Kanit sm:text-left">
                  What we do
                </h1>
              </div>

              <div className="bg-[#101010] px-8 flex items-stretch justify-center py-8  sm:w-1/2">
                <p className=" leading-7  text-justify px-3 text-[#1rem]">
                  We have a successful track record of working with 8+
                  interactive websites and apps which have seamless performance.
                  Our dedication and excellence has attracted a growing client
                  base with them fully entrusting us with their digital needs.
                  We have achieved impressive growth with our discord community
                  and young people who follow us for our journey and experience.
                  Moving forward we are committed to providing innovating
                  solutions to drive your business's success.
                </p>
              </div>
            </section>
          </motion.div>
        </motion.div>
      </Element>
    </>
  );
});

export default About;