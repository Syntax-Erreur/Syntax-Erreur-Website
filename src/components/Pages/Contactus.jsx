import React, { useEffect, useState } from "react";
import { Element, Link } from "react-scroll";
import Footer from "./Footer";
import Arrow from '../../assets/images/arrow.svg'

const Contactus = () => {
  useEffect(() => {
    document.getElementById("Software To Cloud");
  }, []);
  // form details handling
  const [data, setData] = useState({
    name: '',
    from: '',
    topic: '',
    message: '',
    budget: '',
    email: ''
  })

  // form details
  const onInput = (e) => {
    e.preventDefault();
    setData(state => ({ ...state, [e.target.name]: e.target.value }));
  };
  const handleSubmit = () => {
    console.log(data)
    setData(prev => {
      return {
        ...prev,
        name: '',
        from: '',
        topic: '',
        message: '',
        budget: '',
        email: ''
      }
    })
  }
  return (
    <Element name="MainContact">
      {/* Contact Us Container */}
      <div className="relative z-10 flex flex-col items-start justify-center pt-64 pb-20 sm:z-auto md:z-10 lg:pt-0 font-Kanit ">
        {" "}
        {/* Main container */}
        <div className="flex flex-col items-start justify-start w-full gap-16 px-10 mx-auto sm:w-11/12 max-w-7xl sm:px-8">
          {" "}
          {/* schedule a call */}
          <div className="relative z-10 flex flex-col items-start justify-start gap-5 font-Kanit ">
            <h1 className=" font-Kanit sm:text-left text-left font-normal text-2xl sm:text-5xl lg:text-6xl 2xl:text-[90px]  text-white">
              Welcome to Syntax Erreur
            </h1>
            <h2 className="text-xl font-normal text-left text-white font-Kanit sm:text-left sm:text-3xl md:text-4xl lg:text-5xl">
              Let's Connect
            </h2>
            <p className="text-lg font-normal text-left text-white font-Kanit sm:text-left sm:text-xl md:text-2xl lg:text-3xl">
              Transforming rough ideas into actionable success. Discover the possibilities with us by scheduling a call
            </p>
            <a href="https://calendly.com/syntaxerreur05/15min" target="_blank" className="py-2.5 px-4  hover:scale-105 transition-all duration-300  flex items-center justify-center gap-2 bg-white rounded-[30px]">
              <span className="text-[#0E1B2C] text-xl font-normal tracking-[0.4px]">Schedule a call</span>
              <img src={Arrow} alt="" />
            </a>
          </div>

          {/* discord */}
          <div className="relative z-10 flex flex-col items-start justify-start gap-5 font-Kanit ">
            <h1 className="text-xl font-normal text-left text-white font-Kanit sm:text-left sm:text-2xl">
              Email Us  :  syntaxerreur05@gmail.com
            </h1>
            <h4 className="text-xl font-normal text-left text-white font-Kanit sm:text-left sm:text-2xl">
              We work best on discord! (After all we are Gen z)
            </h4>
            <h4 className="text-xl font-normal text-left text-white font-Kanit sm:text-left sm:text-2xl">
              Connect with us on our server
            </h4>
            <a href="https://discord.com/invite/JaUaAdbD" target="_blank" className="py-2.5 px-4 flex items-center justify-center gap-2 bg-white rounded-[30px]  hover:scale-105 transition-all duration-300 ">
              <span className="text-[#0E1B2C] text-xl font-normal tracking-[0.4px]">Discord</span>
              <img src={Arrow} alt="" />
            </a>
          </div>

          <div className="relative z-10 flex flex-col items-start justify-start gap-5 font-Kanit ">
            <h4 className="max-w-4xl text-lg font-normal text-left text-white font-Kanit sm:text-left lg:text-xl xl:text-2xl">
              Remember, there are no rules here, just good vibes! So, unleash your brilliance and let's cook up something extraordinary that'll blow everyone's minds!            </h4>
          </div>

          {/* All Inputs */}
          {/* <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 px-5 sm:px-0 sm:flex-row sm:justify-start lg:justify-start lg:items-center sm:items-start font-Kanit ">
              <div className="flex flex-col gap-4 sm:items-center sm:flex-row">
                <label className="text-xl sm:text-3xl whitespace-nowrap">My Name is </label>
                <input
                  type="email"
                  id="helper-text"
                  onChange={onInput}
                  name="name"
                  value={data.name}
                  aria-describedby="helper-text-explanation"
                  className="w-full pb-1 text-sm text-gray-900 border-b-2 border-solid focus:outline-none dark:bg-transparent dark:text-white"
                  placeholder="YOUR NAME IS"
                ></input>
              </div>

              <div className="flex flex-col w-full gap-4 sm:items-center sm:flex-row lg:w-2/3">
                <label className="text-xl sm:text-3xl">from </label>
                <input
                  type="email"
                  id="helper-text"
                  onChange={onInput}
                  name="from"
                  value={data.from}
                  aria-describedby="helper-text-explanation"
                  className="w-full pb-1 text-sm text-gray-900 border-b-2 border-solid focus:outline-none dark:bg-transparent dark:text-white"
                  placeholder="WEBSITE OR COMPANY NAME"
                ></input>
              </div>
            </div>

            <div className="flex flex-col px-5 sm:flex-row sm:px-0 sm: lg:justify-between lg:items-center sm:items-start font-Kanit ">
              <div className="flex flex-col justify-between w-full sm:w-[53%] gap-4 sm:items-center sm:flex-row">

                <h4 className="text-xl sm:text-3xl ">I'd like to discuss </h4>
                <div>
                  <select
                    id="countries"
                    onChange={onInput}
                    name="topic"
                    value={data.topic}
                    className="py-2.5 text-center px-2 lg:w-62 xl:w-48  md:w-40  text-sm sm:w-64 w-full text-gray-900 bg-transparent border-0 border-b-2 border-l-0 border-white-300 dark:bg-[#1A2935] dark:placeholder-gray-400 dark:text-white  dark:focus:border-black-500 focus:outline-none ">

                    <option selected className=" font-Kanit">
                      Select a Topic
                    </option>
                    <option value="I Want To Make a Agency Website" className="font-Kanit">
                      Software To Cloud
                    </option>
                    <option value="I Want To Make a E-comm Website" className="font-Kanit">
                      Web Application
                    </option>
                    <option value="I Want To Make a Portfolio Website" className="font-Kanit">
                      SaaS
                    </option>
                    <option value="Web & Corporate" className="font-Kanit">
                      Mobile
                    </option>
                    <option value="Web & Corporate" className="font-Kanit">
                      Others
                    </option>
                  </select>
                </div>
              </div>

              <div className="flex flex-row items-center gap-5 pt-8 sm:pt-0 w-190">
                <label className="text-xl sm:text-3xl font-Kanit lg:whitespace-nowrap md:whitespace-nowrap ">
                  project idea & design brief{" "}
                </label>
              </div>
            </div>
            <div className="px-5 sm:w-full sm:px-0">
              <textarea
                id="helper-text"
                onChange={onInput}
                name="message"
                value={data.message}
                aria-describedby="helper-text-explanation"
                rows={3}
                className="w-full pb-1 text-sm text-gray-900 border-b-2 border-solid resize-none whitespace-nowrap focus:outline-none dark:bg-transparent dark:text-white"
                placeholder="PITCH YOUR PROJECT IDEA (OPTIONAL)"
              ></textarea>
            </div>

            <div className="flex flex-col gap-4 px-5 sm:px-0 sm:flex-row sm:justify-start lg:justify-start lg:items-center sm:items-start font-Kanit ">
              <label className="text-xl sm:text-3xl whitespace-nowrap">
                A Budget for this project is{" "}
              </label>
              <input
                type="text"
                id="helper-text"
                onChange={onInput}
                name="budget"
                value={data.budget}
                aria-describedby="helper-text-explanation"
                className="w-full pb-1 text-sm text-gray-900 border-b-2 border-solid focus:outline-none dark:bg-transparent dark:text-white "
                placeholder="YOUR BUDGET"
              ></input>
            </div>


            <div className="flex flex-col gap-4 px-5 sm:px-0 sm:flex-row sm:justify-start lg:justify-start lg:items-center sm:items-start font-Kanit ">
              <label className="text-xl sm:text-3xl whitespace-nowrap">
                Contact me back at{" "}
              </label>
              <input
                type="email"
                id="helper-text"
                onChange={onInput}
                name="email"
                value={data.email}
                aria-describedby="helper-text-explanation"
                className="w-full pb-1 text-sm text-gray-900 border-b-2 border-solid focus:outline-none dark:bg-transparent dark:text-white "
                placeholder="YOUR EMAIL"
              ></input>
            </div>
          </div> */}

          {/* <div className="flex justify-center ">
            <button onClick={handleSubmit} className=" w-32 h-32 z-20 px-5 py-5 backdrop-blur-lg bg-[#16212E] bg-opacity-100 sm:top-8 top-16  relative  text-lg font-bold  text-white uppercase transition-all duration-700 border-2 border-white rounded-full hover:text-black hover:bg-white  font-Kanit">
              Submit
            </button>
          </div> */}
          {/* <div>
            <p className=" px-10 sm:py-0 pb-[25px] mt-8 text-sm sm:text-lg tracking-widest rounded-md w-max font-Kanit">
              Based in Mumbai, Maharashtra
            </p>
          </div> */}
        </div>
      </div>
      <Footer />
    </Element>
  );
};

export default Contactus;
