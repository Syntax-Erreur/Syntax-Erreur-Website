import React from "react";
import { Element } from "react-scroll";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Link } from "react-scroll";
import disclogo from "../../assets/images/discordlogo.svg";
import instalogo from "../../assets/images/instalogo.svg";

const Contactusdiv = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const height = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);
  const transitionWhiteLine = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4],
    ["0.5s", "0.5s", "0.5s", "0.5s", "0.5s", "0.5s", "0.5s", "0.5s"]
  );

  return (
    <Element name="Contact">
      <div
        className="relative flex items-center justify-center h-screen mt-0 sm:mt-0 "
        ref={targetRef}
      >
        {/* White line */}
        <motion.div
          className="w-0 border-[2px] h-[45%] border-solid border-white  absolute top-0 z-[-1]  mx-auto  sm:left-[50%]"
          style={{
            height,
            transition: transitionWhiteLine,
            transitionDelay: "500ms",
          }}
        ></motion.div>
        {/* Contact us div */}
        <Link
          activeClass="active"
          to="MainContact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          <div className="flex flex-col items-center justify-center gap-10">
            <motion.div
              className=" flex items-center uppercase group z-10 justify-center h-16 mx-auto text-[25px] leading-9 font-semibold tracking-wider w-56 backdrop-blur-2xl cursor-pointer rounded-[14px] bg-bgPrimary xl:mt-8 transition-all duration-1000 hover:bg-slate-900"
              style={{ opacity }}
            >
              <span>
                CONTACT US
                <span class="block w-0 group-hover:w-full transition-all duration-1000 h-0.5 navLink"></span>
              </span>

            </motion.div>
            <div className="flex flex-col items-center justify-center gap-12 md:flex-col lg:flex-row sm:flex-row sm:gap-36">
              <div className="p-10  rounded-lg bg-[#4a4a4a]  bg-opacity-50 sm:w-[361px] w-[350px] sm:h-[360px] h-[350px] backdrop-blur flex flex-col justify-center items-center">
                <div className="flex flex-row items-center justify-center gap-5 font-Kanit">
                  <div>
                    {" "}
                    <img
                      src={disclogo}
                      className="mt-5 mb-6 sm:w-[120px] w-[100px]"
                      alt=""
                    />{" "}
                  </div>
                  <div className="flex flex-col justify-evenly gap-5 whitespace-nowrap w-[120px] h-[120px] ">
                    <p className="text-center">
                      Join Us <br /> Discord
                    </p>
                    <div className="flex justify-center">
                      <button className="flex items-center justify-center gap-2 px-3 rounded-sm hover:scale-90 transition-all duration-150">
                        <Link
onClick={()=>window.open("https://discord.com/invite/M3B5nueqXf","_blank")}
                          className="button-animation"
                          target="_blank"
                        >
                          <span className="flex items-center justify-center w-20 h-5 gap-5 text-sm capitalize font-Kanit">
                            Join
                            <img
                              src="https://img.icons8.com/material-rounded/24/FFFFFF/long-arrow-right.png"
                              alt="long-arrow-right"
                            />{" "}
                          </span>
                          <div class="liquid"></div>
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
                <p className="w-full px-5 text-justify">
                  {" "}
                  Join our Discord server for engaging discussions, valuable
                  advice, and relaxed sessions on app and web development. Let's
                  connect, learn, and chill together!
                </p>
              </div>
              <div className="p-10  rounded-lg bg-[#4a4a4a]  bg-opacity-50 sm:w-[361px] w-[350px] sm:h-[360px] h-[350px] backdrop-blur flex flex-col justify-center items-center">
                <div className="flex flex-row items-center justify-center gap-5 font-Kanit">
                  <div>
                    {" "}
                    <img
                      src={instalogo}
                      className="mt-5 mb-6 sm:w-[120px] w-[100px]"
                      alt=""
                    />{" "}
                  </div>
                  <div className="flex flex-col justify-evenly gap-5 whitespace-nowrap w-[120px] h-[120px] ">
                    <p className="text-center">
                      Join Us <br /> Instagram
                    </p>
                    <div className="flex justify-center">
                      <button className="flex items-center justify-center gap-2 px-3 rounded-sm hover:scale-90 transition-all duration-150" >
                    
                        <Link
                         onClick={()=>window.open("https://www.instagram.com/syntaxerreur/?igshid=MzRIODBiNWFIZA","_blank")}
                          className="button-animation"
                          
                        >
                          <span className="flex items-center justify-center w-20 h-5 gap-5 text-sm capitalize font-Kanit">
                            Join
                            <img
                              src="https://img.icons8.com/material-rounded/24/FFFFFF/long-arrow-right.png"
                              alt="long-arrow-right"
                            />{" "}
                          </span>
                          <div class="liquid"></div>
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
                <p className="w-full px-5 text-justify">
                  {" "}
                  Follow our Instagram for inspiring web development journeys
                  from student to CEO. Meet our team, gain coding insights, and
                  get empowered as an aspiring developer.
                </p>
              </div>
            </div>
          </div>
        </Link>
        {/* White line */}
        <motion.div
          className="w-0 border-[2px] h-[45%] border-solid border-white  absolute bottom-0 z-[-1]  mx-auto  sm:left-[50%]"
          style={{
            height,
            transition: transitionWhiteLine,
            transitionDelay: "500ms",
          }}
        ></motion.div>
      </div>
    </Element>
  );
};

export default Contactusdiv;
