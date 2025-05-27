import React from "react";
import Header from "../components/custom/header";
import Footer from "../components/custom/footer";

const URL = import.meta.env.VITE_URL;
const WHATSAPP = import.meta.env.VITE_WHATSAPP;
const REGISTER = import.meta.env.VITE_REGISTER;
const CS_REGISTER = import.meta.env.VITE_CS_REGISTER;





const ProgramsSection = () => {
  return (

    <section className=" px-8 md:px-28 bg-white">

      <div className="md:scale-[0.9] container mx-auto">

        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-2 leading-relaxed lg:leading-25">
          Find The Right <br />
          Program For YOU!
        </h1>

        <p className="text-black font-[500] text-[16px] md:text-[24px] md:leading-[60px] tracking-[2px] capitalize font-ubuntu mt-8 mb-8 md:mt-4 mb-0">
          INTENSIVE, INDUSTRY DRIVEN & COMPREHENSIVE PROGRAMS
        </p>

        <p className="text-[20px] md:text-3xl lg:text-5xl mb-12 font-black leading-relaxed">
          WEB, MOBILE, DESIGN & LATEST IN THE TECH.
        </p>

      </div>
    </section>
  );
};

const ProgramsGridSection = () => {
  return (
    <section className="px-8 md:px-28 text-white">
      <div className=" container mx-auto md:pl-12 md:mb-20 md:pr-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Pre Bootcamp for Beginners */}
        <div className="bg-[#1a1a2e] p-8 md:p-14 rounded-3xl">
          <h2 className="text-[20px] md:text-2xl font-bold mb-4">
            PRE BOOTCAMP FOR BEGINNERS
          </h2>
          <p className="mb-10">
            A tailored hands-on 6-week program to prepare you for a career in
            Technology.
          </p>


          <ul className="space-y-6">
            <li className="flex items-center">
              <div className="w-[40px] h-12 mr-10">
                <img
                  src="/programs/hand.svg"
                  alt="Computer Icon"
                  className="w-full mr-10"
                />
              </div>

              <div>
                <span className="text-[14px] font-bold md:font-bold md:text-lg md:mb-10">
                  Intro to Computer Programming.
                </span>
                <p className="md:text-base md:mt-4 mt-4">
                  Beginner Friendly Curriculum. Starts From Scratch.
                </p>
              </div>
            </li>

            <li className="flex items-center">
              <div className="w-[40px] h-12 mr-10">
                <img
                  src="/programs/driver.svg"
                  alt="CRUD Icon"
                  className="w-full mr-10"
                />
              </div>
              <div>
                <span className="text-[14px] font-bold md:font-bold md:text-lg md:mb-10">
                  Building CRUD Apps.
                </span>
                <p className="text-[10px] md:text-base md:mt-4 mt-4 ">
                  You will create apps from scratch with web technologies like,
                  HTML/CSS, JavaScript language, etc.
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-[40px] h-12 mr-10">
                <img
                  src="/programs/teach.svg"
                  alt="Candidates Icon"
                  className="w-full mr-10"
                />
              </div>
              <div>
                <span className="text-[14px] font-bold md:font-bold md:text-lg md:mb-10">
                  Candidates Per Cohort.
                </span>
                <p className="text-[10px] md:text-base md:mt-4 mt-4 ">
                  Finely curated class to ensure positive peer to peer learning.
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-[40px] h-12 mr-10">
                <img
                  src="/programs/clock.svg"
                  alt="Weeks Icon"
                  className="w-full mr-10"
                />
              </div>
              <div>
                <span className="text-[14px] font-bold md:font-bold md:text-lg md:mb-10">6 Weeks Program.</span>
                <p className="text-[10px] md:text-base md:mt-4 mt-4 ">
                  6 Weeks of Intensive hands-on coding.
                </p>
              </div>
            </li>
          </ul>
          <div className="mt-6 flex space-x-4">
            <button className="flex-1 bg-white text-black py-4 px-2 rounded-full cursor-pointer text-sm md:text-lg font-bold whitespace-nowrap"
              onClick={() => (window.location.href = REGISTER)}
            >
              Apply Now
            </button>

            <button className="flex-1 bg-transparent border border-white py-4 px-4 rounded-full cursor-pointer text-sm md:text-lg font-bold whitespace-nowrap"
              onClick={() => (window.location.href = REGISTER)}
            >
              View Program
            </button>
          </div>

        </div>{" "}
        <div className="bg-[#1a1a2e] p-8 md:p-14 rounded-3xl">
          <h2 className="text-[20px] md:text-2xl font-bold mb-4">
            FULLSTACK WEB DEVELOPMENT + AI
          </h2>
          <p className="mb-10">
            18 Weeks of Intensive Product Development with MERN, Next,
            Typescript and AI.
          </p>
          <ul className="space-y-6">
            <li className="flex items-center">
              <div className="w-[40px] h-12 mr-10">
                <img
                  src="/programs/hand.svg"
                  alt="Computer Icon"
                  className="w-full mr-10"
                />
              </div>
              <div>
                <span className="text-[14px] font-bold md:font-bold md:text-lg md:mb-10">
                  Fullstack Web Development.
                </span>
                <p className="text-[10px] md:text-base md:mt-4 mt-4 ">
                  MongoDB, Express JS, ReactJS, Node JS, NextJs, Gen AI,
                  Building RAG with Open Source LLM's.
                </p>
              </div>
            </li>


            <li className="flex item s-center">
              <div className="w-[40px] h-12 mr-10">
                <img
                  src="/programs/driver.svg"
                  alt="CRUD Icon"
                  className="w-full mr-10"
                />
              </div>
              <div>
                <span className="text-[14px] font-bold md:font-bold md:text-lg md:mb-10">
                  Build 2 Real time Fullstack MERN Products.
                </span>
                <p className="text-[10px] md:text-base md:mt-4 mt-4 ">
                  Create a Portfolio of Products; Flaunt Your Skills.
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-[40px] h-12 mr-10">
                <img
                  src="/programs/teach.svg"
                  alt="Candidates Icon"
                  className="w-full mr-10"
                />
              </div>
              <div>
                <span className="text-[14px] font-bold md:font-bold md:text-lg md:mb-10">
                  15 Candidates Per Cohort.
                </span>
                <p className="text-[10px] md:text-base md:mt-4 mt-4 ">
                  International Curriculum with international internships
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-[40px] h-12 mr-10">
                <img
                  src="/programs/clock.svg"
                  alt="Weeks Icon"
                  className="w-full mr-10"
                />
              </div>
              <div>
                <span className="text-[14px] font-bold md:font-bold md:text-lg md:mb-10">
                  18 Weeks Program.
                </span>
                <p className="text-[10px] md:text-base md:mt-4 mt-4 ">
                  Study Now Pay later Option for Deserving Applicants.
                </p>
              </div>
            </li>
          </ul>
          <div className="mt-6 flex space-x-4">
            <button className="flex-1 bg-white text-black py-4 px-4 rounded-full cursor-pointer text-sm md:text-lg font-bold whitespace-nowrap"
              onClick={() => (window.location.href = "/programs/1")}
            >
              Apply Now
            </button>

            <button className="flex-1 bg-transparent border border-white py-4 px-4 rounded-full cursor-pointer text-sm md:text-lg font-bold whitespace-nowrap"
              onClick={() => (window.location.href = "/curriculum/1")}
            >
              View Program
            </button>
          </div>

        </div>{" "}
        <div className="bg-[#1a1a2e] p-8 md:p-14 rounded-3xl">
          <h2 className="text-[20px] md:text-2xl font-bold mb-4">MOBILE DEVELOPMENT</h2>
          <p className="mb-10">
            23 Weeks of Intensive Product Development and DSA.
          </p>
          <ul className="space-y-6">
            <li className="flex items-center">
              <div className="w-[40px] h-12 mr-10">
                <img
                  src="/programs/hand.svg"
                  alt="App Development Icon"
                  className="w-full mr-10"
                />
              </div>
              <div>
                <span className="text-[14px] font-bold md:font-bold md:text-lg md:mb-10">
                  Hybrid/ React Native App Development.
                </span>
                <p className="text-[10px] md:text-base md:mt-4 mt-4 ">
                  Industry focused curriculum and projects.
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-[40px] h-12 mr-10">
                <img
                  src="/programs/driver.svg"
                  alt="Real-time Apps Icon"
                  className="w-full mr-10"
                />
              </div>
              <div>
                <span className="text-[14px] font-bold md:font-bold md:text-lg md:mb-10">
                  Work on Real-time Apps.
                </span>
                <p className="text-[10px] md:text-base md:mt-4 mt-4 ">
                  You will create end to end react native projects from scratch.
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-[40px] h-12 mr-10">
                <img
                  src="/programs/teach.svg"
                  alt="Candidates Icon"
                  className="w-full mr-10"
                />
              </div>
              <div>
                <span className="text-[14px] font-bold md:font-bold md:text-lg md:mb-10">
                  15 Candidates Per Cohort.
                </span>
                <p className="text-[10px] md:text-base md:mt-4 mt-4 ">
                  Study Now Pay Later Option Available.
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-[40px] h-12 mr-10">
                <img
                  src="/programs/clock.svg"
                  alt="Weeks Icon"
                  className="w-full mr-10"
                />
              </div>
              <div>
                <span className="text-[14px] font-bold md:font-bold md:text-lg md:mb-10">6 Weeks Program.</span>
                <p className="text-[10px] md:text-base md:mt-4 mt-4 ">
                  6 Weeks of Intensive hands-on coding and problem solving.
                </p>
              </div>
            </li>
          </ul>
          <div className="mt-6 flex space-x-4">
            <button className="flex-1 bg-white text-black py-4 px-4 rounded-full cursor-pointer text-sm md:text-lg font-bold whitespace-nowrap"
              onClick={() => (window.location.href = "/programs/2")}
            >
              Apply Now
            </button>

            <button className="flex-1 bg-transparent border border-white py-4 px-4 rounded-full cursor-pointer text-sm md:text-lg font-bold whitespace-nowrap"
              onClick={() => (window.location.href = "/curriculum/2")}
            >
              View Program
            </button>
          </div>

        </div>{" "}
        <div className="bg-[#1a1a2e] p-8 md:p-14 rounded-3xl">
          <h2 className="text-[20px] md:text-2xl font-bold mb-4">DATA ANALYTICS AND ML</h2>
          <p className="mb-10">
            Learn from the best SMEs and mentors the Visualization Skills you
            need to become a Data Analyst in just 4 months.
          </p>
          <ul className="space-y-6">
            <li className="flex items-center">
              <div className="w-[40px] h-12 mr-10">
                <img
                  src="/programs/hand.svg"
                  alt="Computer Icon"
                  className="w-full mr-10"
                />
              </div>
              <div>
                <span className="text-[14px] font-bold md:font-bold md:text-lg md:mb-10">
                  Comprehensive Program on DA and ML.
                </span>
                <p className="text-[10px] md:text-base md:mt-4 mt-4 ">
                  Industry focused Data Science Program with ML.
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-[40px] h-12 mr-10">
                <img
                  src="/programs/driver.svg"
                  alt="CRUD Icon"
                  className="w-full mr-10"
                />
              </div>
              <div>
                <span className="text-[14px] font-bold md:font-bold md:text-lg md:mb-10">
                  Build Your Personal Portfolio.
                </span>
                <p className="text-[10px] md:text-base md:mt-4 mt-4 ">
                  Develop data models, statistic models and multiple milestone
                  projects.
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-[40px] h-12 mr-10">
                <img
                  src="/programs/teach.svg"
                  alt="Candidates Icon"
                  className="w-full mr-10"
                />
              </div>
              <div>
                <span className="text-[14px] font-bold md:font-bold md:text-lg md:mb-10">
                  15 Candidates Per Cohort.
                </span>
                <p className="text-[10px] md:text-base md:mt-4 mt-4 ">
                  Study Now Pay Later Option Available.
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-[40px] h-12 mr-10">
                <img
                  src="/programs/clock.svg"
                  alt="Weeks Icon"
                  className="w-full mr-10"
                />
              </div>
              <div>
                <span className="text-[14px] font-bold md:font-bold md:text-lg md:mb-10">
                  17 Weeks Program.
                </span>
                <p className="text-[10px] md:text-base md:mt-4 mt-4 ">
                  17 Weeks of Intensive hands-on coding and building.
                </p>
              </div>
            </li>
          </ul>
          <div className="mt-6 flex space-x-4">
            <button className="flex-1 bg-white text-black py-4 px-4 rounded-full cursor-pointer text-sm md:text-lg font-bold whitespace-nowrap"
              onClick={() => (window.location.href = "/programs/3")}
            >
              Apply Now
            </button>

            <button className="flex-1 bg-transparent border border-white py-4 px-4 rounded-full cursor-pointer text-sm md:text-lg font-bold whitespace-nowrap"
              onClick={() => (window.location.href = "/curriculum/3")}
            >
              View Program
            </button>
          </div>

        </div>{" "}
        <div className="bg-[#1a1a2e] p-8 md:p-14 rounded-3xl">
          <h2 className="text-[20px] md:text-2xl font-bold mb-4">UI / UX DESIGN</h2>
          <p className="mb-10">
            Design Bootcamp that enables you to design High-Impact User
            Experiences, Visually Driven Applications and Websites.{" "}
          </p>
          <ul className="space-y-6">
            <li className="flex items-center">
              <div className="w-[40px] h-12 mr-10">
                <img
                  src="/programs/hand.svg"
                  alt="App Development Icon"
                  className="w-full mr-10"
                />
              </div>
              <div>
                <span className="text-[14px] font-bold md:font-bold md:text-lg md:mb-10">
                  Interactive, Project-Based Learning.
                </span>
                <p className="text-[10px] md:text-base md:mt-4 mt-4 ">
                  100% on learning -by-doing policy.
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-[40px] h-12 mr-10">
                <img
                  src="/programs/driver.svg"
                  alt="Real-time Apps Icon"
                  className="w-full mr-10"
                />
              </div>
              <div>
                <span className="text-[14px] font-bold md:font-bold md:text-lg md:mb-10">
                  15 Candidates Per Cohort.
                </span>
                <p className="text-[10px] md:text-base md:mt-4 mt-4 ">
                  Study Now Pay Later Option Available.
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-[40px] h-12 mr-10">
                <img
                  src="/programs/teach.svg"
                  alt="Candidates Icon"
                  className="w-full mr-10"
                />
              </div>
              <div>
                <span className="text-[14px] font-bold md:font-bold md:text-lg md:mb-10">
                  15 Candidates Per Cohort.
                </span>
                <p className="text-[10px] md:text-base md:mt-4 mt-4 ">
                  Study Now Pay Later Option Available.
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-[40px] h-12 mr-10">
                <img
                  src="/programs/clock.svg"
                  alt="Weeks Icon"
                  className="w-full mr-10"
                />
              </div>
              <div>
                <span className="text-[14px] font-bold md:font-bold md:text-lg md:mb-10">8 Weeks Program.</span>
                <p className="text-[10px] md:text-base md:mt-4 mt-4 ">
                  8 Weeks of Intensive hands-on designing and building.
                </p>
              </div>
            </li>
          </ul>
          <div className="mt-6 flex space-x-4">
            <button className="flex-1 bg-white text-black py-4 px-4 rounded-full cursor-pointer text-sm md:text-lg font-bold whitespace-nowrap"
              onClick={() => (window.location.href = REGISTER)}
            >
              Apply Now
            </button>

            <button className="flex-1 bg-transparent border border-white py-4 px-4 rounded-full cursor-pointer text-sm md:text-lg font-bold whitespace-nowrap"
              onClick={() => (window.location.href = REGISTER)}
            >
              View Program
            </button>
          </div>

        </div>{" "}
        <div className="bg-[#1a1a2e] p-8 md:p-14 rounded-3xl">
          <h2 className="text-[20px] md:text-2xl font-bold mb-4">
            CS.CODE.IN ENGINEERING PROGRAM
          </h2>
          <p className="mb-10">
            Become a real Software Engineer in just 12 months.
          </p>
          <ul className="space-y-6">
            <li className="flex items-center">
              <div className="w-[40px] h-12 mr-10">
                <img
                  src="/programs/hand.svg"
                  alt="Computer Icon"
                  className="w-full mr-10"
                />
              </div>
              <div>
                <span className="text-[14px] font-bold md:font-bold md:text-lg md:mb-10">
                  The No-Nonsense CS Curriculum.
                </span>
                <p className="text-[10px] md:text-base md:mt-4 mt-4 ">
                  Become a CS Engineer: 4x faster, spend 3x lesser and save
                  hundreds of hours wasted on boring tutorials, in just 12
                  months.
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-[40px] h-12 mr-10">
                <img
                  src="/programs/driver.svg"
                  alt="CRUD Icon"
                  className="w-full mr-10"
                />
              </div>
              <div>
                <span className="text-[14px] font-bold md:font-bold md:text-lg md:mb-10">
                  Scale dynamically to 100s of products.
                </span>
                <p className="text-[10px] md:text-base md:mt-4 mt-4 ">
                  Everything you need to launch your career in the software
                  industry, while building a world-class portfolio.
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-[40px] h-12 mr-10">
                <img
                  src="/programs/teach.svg"
                  alt="Candidates Icon"
                  className="w-full mr-10"
                />
              </div>
              <div>
                <span className="text-[14px] font-bold md:font-bold md:text-lg md:mb-10">
                  20 Candidates Per Cohort.
                </span>
                <p className="text-[10px] md:text-base md:mt-4 mt-4 ">
                  Study Now Pay Later Option Available.
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-[40px] h-12 mr-10">
                <img
                  src="/programs/clock.svg"
                  alt="Weeks Icon"
                  className="w-full mr-10"
                />
              </div>
              <div>
                <span className="text-[14px] text-[14px] font-bold md:font-bold md:text-lg md:mb-10">
                  12 Months of Building.
                </span>
                <p className="text-[10px] text-[10px] md:text-base md:mt-4 mt-4 ">
                  Spend 360 days working non-stop, and advance from newbie
                  programmers to full stack web engineers.
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-6 flex space-x-4">
            <button className="flex-1 bg-white text-black py-4 px-4 rounded-full cursor-pointer text-sm md:text-lg font-bold whitespace-nowrap"
              onClick={() => (window.location.href = CS_REGISTER)}
            >
              Apply Now
            </button>

            <button className="flex-1 bg-transparent border border-white py-4 px-4 rounded-full cursor-pointer text-sm md:text-lg font-bold whitespace-nowrap"
              onClick={() => (window.location.href = CS_REGISTER)}
            >
              View Program
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

const WhatSetsUsApartSection = () => {
  return (
    <section className="px-8 py-10 md:px-8 mt-12  md:pt-12 bg-[#161631] text-white">
      <div className="container mx-auto  text-center">
        <h2 className="text-2xl mb-10 md:text-5xl lg:text-6xl font-bold mb-4">
          WHAT SETS US APART?
        </h2>
        <p className="md:text-2xl text-[20px] mb-16 mt-14">
          WE ARE PASSIONATE ABOUT PRODUCT DEVELOPMENT.
        </p>


        <div className="flex flex-col lg:flex-row items-start lg:items-end gap-8">
          {/* Hacker from Day 1 */}
          <div className="bg-white text-black p-8 rounded-3xl flex-1 flex justify-between items-center gap-5 lg:items-start lg:block">
            <div className="flex w-1/4 lg:w-full justify-center mb-4 items-center">
              <img
                src="/programs/laptop.png"
                alt="Laptop Icon"
                className="lg:h-18 lg:mb-6"
              />
            </div>
            <div className="w-3/4 lg:w-full">
              <h3 className="text-[13px]  md:text-2xl font-bold mb-4 text-left lg:text-center">
                HACKER. FROM DAY 1.
              </h3>
              <p className="text-left text-[#737373] text-[10px] lg:text-center md:text-lg text-justify">
                We focus on building products. Right from Day 1. Learn how the
                best coders in the industry do it. No fancy stuff, only hardcore
                coding!
              </p>
            </div>
          </div>

          {/* What Did You Build? */}
          <div className="bg-white text-black p-8 rounded-3xl flex-1 flex justify-between items-center gap-5 lg:items-start lg:block">
            <div className="flex w-1/4 lg:w-full justify-center mb-4 items-center">
              <img
                src="/programs/blocks.png"
                alt="Blocks Icon"
                className=" lg:h-18 lg:mb-6"
              />
            </div>
            <div className="w-3/4 lg:w-full">
              <h3 className="text-[13px] md:text-2xl font-bold mb-4 text-left lg:text-center">
                WHAT DID YOU BUILD?
              </h3>
              <p className="text-left text-[#737373] text-[10px] lg:text-center md:text-lg text-justify">
                At The Hacking School, we learn by doing. You choose your
                project, learn how to build it, and take it to the market. The
                idea here is to learn the tricks of the trade.
              </p>
            </div>
          </div>

          {/* Not Just Code */}
          <div className="bg-white text-black p-8 rounded-3xl flex-1 flex justify-between items-center gap-5 lg:items-start lg:block">
            <div className="flex w-1/4 lg:w-full justify-center mb-4 items-center">
              <img
                src="/programs/graph.png"
                alt="Graph Icon"
                className=" lg:h-18 lg:mb-6"
              />
            </div>
            <div className="w-3/4 lg:w-full">
              <h3 className="text-[13px] md:text-2xl font-bold mb-4 text-left lg:text-center">
                NOT JUST CODE.
              </h3>
              <p className="text-left text-[#737373] text-[10px] lg:text-center md:text-lg text-justify">
                Product building is just one aspect of this program. You'll
                learn design, UI & UX best practices and best in the industry
                development methodologies and get to interact with the best in
                the industry for each of the product development step.
              </p>
            </div>
          </div>

          {/* What is Expected of You */}
          <div className="bg-white text-black p-8 rounded-3xl flex-1 flex justify-between items-center gap-5 lg:items-start lg:block">
            <div className="flex w-1/4 lg:w-full justify-center mb-4 items-center">
              <img
                src="/programs/person.png"
                alt="Person Icon"
                className=" lg:h-18 lg:mb-6"
              />
            </div>
            <div className="w-3/4 lg:w-full">
              <h3 className="text-[13px] md:text-2xl font-bold mb-4 text-left lg:text-center">
                WHAT IS EXPECTED OF YOU?
              </h3>
              <p className="text-left text-[#737373] text-[10px] lg:text-center md:text-lg">
                Lots of enthusiasm, a hunger to learn, and a clear mindset are essential. We prefer candidates with prior experience or a background in programming. However, that shouldn’t stop you from applying! If you come from a marketing or non-software background and want to switch careers, feel free to talk to us  we’ll help you figure out what’s best for you!
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BuildTogetherSection = () => {
  return (
    <section className="py-12 md:py-24 px-8 md:px-16 bg-white text-center mb-10">
      <div className="container mx-auto">
        <h2 className="text-[23px] md:text-5xl lg:text-7xl libre-franklin font-bold mb-6 leading-tight">
          The place for anyone<br /> from
          anywhere to build <em>anything</em>!
        </h2>
        <p className="text-[12px] md:text-xl text-black  mb-10 leading-relaxed text-center lg:text-[24px] lg:leading-[40px] lg:font-medium lg:font-['Ubuntu'] lg:not-italic">
          Whether you're just learning how to code or scaling your startup, The
          Hacking School is your home.
          <br /> Join India's first cutting-edge developer bootcamp to excel in
          the ever-evolving world of technology.
          <br />

          Let's build together!
        </p>

        <div className="flex justify-center  ml-10 space-x-6">
          <a href={REGISTER} target="_blank" rel="noopener noreferrer">
            <button
              className="flex w-[150px] h-[50px] md:w-[325px] md:h-[94px] px-4 md:px-[75px] justify-center items-center cursor-pointer md:gap-[10px] rounded-full border border-[#161631] text-white text-center font-ubuntu text-sm md:text-[24px] font-bold uppercase bg-[#161631] flex-shrink-0"
            >
              APPLY NOW!
            </button>
          </a>

          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            <button className="flex w-[170px] mr-10 h-[50px] md:w-auto md:h-auto py-4 px-4 md:py-6 md:px-12 rounded-full border border-[#161631] bg-white text-[#161631] text-[10px] md:text-xl lg:text-2xl font-bold items-center cursor-pointer justify-between whitespace-nowrap">
              <span className="flex-grow text-center">TALK TO THE TEAM!</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 flex-shrink-0" width="20" height="20" md:width="45" md:height="44" viewBox="0 0 45 44" fill="none">
                <path d="M20.5209 8.85409C19.7155 8.04864 18.4095 8.04864 17.6041 8.85409C16.7986 9.65953 16.7986 10.9655 17.6041 11.7709L20.5209 8.85409ZM30.75 22L32.2083 23.4584C33.0138 22.653 33.0138 21.347 32.2083 20.5416L30.75 22ZM17.6041 32.2292C16.7986 33.0346 16.7986 34.3403 17.6041 35.1458C18.4095 35.9513 19.7155 35.9513 20.5209 35.1458L17.6041 32.2292ZM17.6041 11.7709L29.2917 23.4584L32.2083 20.5416L20.5209 8.85409L17.6041 11.7709ZM29.2917 20.5416L17.6041 32.2292L20.5209 35.1458L32.2083 23.4584L29.2917 20.5416Z" fill="#161631" />
              </svg>
            </button>
          </a>



        </div>
      </div>
    </section>
  );
};

const ProgramsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ProgramsSection />

        <ProgramsGridSection />

        <WhatSetsUsApartSection />
        <BuildTogetherSection />
      </main>
    </div>
  );
};

export default ProgramsPage;
