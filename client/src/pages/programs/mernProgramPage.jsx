import React from "react";
import HeaderDarkOverlay from "../../components/custom/headerDarkOverlay";
import LandingPageStudyNowSection from "../landingPageSections/StudyNowSection";
import { Link } from 'react-router-dom';


const REGISTER = import.meta.env.VITE_REGISTER


const MernProgramPage = () => {
  return (
    <div className="min-h-screen relative">
      <div className="absolute top-0 left-0 w-full" style={{ zIndex: 100 }}>
        <HeaderDarkOverlay />
        <hr className="border-t border-white opacity-50 " />
      </div>
      <HeroSection />
      <ProgramDetails />
      <LandingPageStudyNowSection />
      <CourseGuidebook />
      {/* Additional sections will be added here */}


    </div>
  );
};


// Hero Section component that matches the image
const HeroSection = () => {
  return (
    <section className=" relative w-full p-10 h-screen text-white overflow-hidden">
      <div className="absolute h-full inset-0 z-0">
        {/* Background with keyboard image and overlay */}
        <img
          src="/programs/mern.png"
          alt="Keyboard background"
          className="w-full h-full object-cover"
        />
      </div>


      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 mt-[20vh]">

        <div className="">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">MERN STACK</h1>

          <p className="text-2xl md:text-4xl mb-8 mt-12">
            Become a World-class Full stack Web Developer in 17 Weeks.
          </p>


          <Link to="/curriculum/1">
            <button className="bg-white text-black font-bold px-8 py-5 rounded-full hover:bg-gray-200 transition-colors text-[22px] mt-4 cursor-pointer">
              YES, I AM IN!
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Program Details Section
const ProgramDetails = () => {
  return (
    <section className="py-8 md:py-12 bg-white ">
      <div className="scale-[0.9] container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 font-medium">
          {/* Left Column - Program Description */}
          <div className="lg:w-7/12">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-14 text-black">
              LEARN END TO END
              <br />
              PRODUCT DEVELOPMENT
            </h2>

            <h3 className="text-xl md:text-2xl font-bold leading-8 mb-6 text-black">
              FULL STACK WEB DEVELOPMENT -<br />
              MERN + AI TRAINING PROGRAM
            </h3>

            <p className="text-black mb-6 text-lg">
              The Full Stack Web Development bootcamp is an intensive and
              immersive hands-on development program. It takes you from the
              basics of the world wide web to learning essential web programming
              from scratch.
            </p>

            <div className="mb-8">
              <h4 className="font-bold text-black mb-4 text-lg">
                Course Curriculum:
              </h4>
              <ul className="space-y-2 text-black text-lg">
                <li>• MERN Stack (MongoDB, Express, React.Js, Node.Js)</li>
                <li>• Redux, Next.Js, TypeScript</li>
                <li>• Data Structures & Algorithms</li>
                <li>• UI/UX Designing (HTML5/CSS3)</li>
                <li>• Working with Open AI APIs and open source LLMs</li>
                <li>• Building GEN AI + Prompt Engineering and RAG Apps</li>
                <li>• Project Based Learning</li>
              </ul>
            </div>

            <p className="text-black mb-6 text-lg">
              Our MERN Stack curriculum structure equips candidates with
              essential skills for web application development. Learn Front-End
              and Back-End technologies, mastering MongoDB, Express.js, React,
              and Node.js. Delve into advanced tools like Next.js and state
              management with Redux, and enhance your coding skills with
              TypeScript and Data Structures & Algorithms using JavaScript.
            </p>

            <p className="text-black mb-6 text-lg">
              Experience hands-on learning by working with OpenAI APIs and
              open-source LLMs to build innovative applications in the field of
              Generative AI, along with prompt engineering and
              Retrieval-Augmented Generation (RAG) applications. Our project-
              based approach ensures practical experience under the guidance of
              industry experts, preparing you to excel in the tech landscape.
            </p>

            <p className="text-black mb-8 text-lg">
              Designed to accommodate both technical and non-technical
              backgrounds, our project-based learning approach ensures that
              candidates gain practical experience while receiving guidance from
              industry experts on best practices.
            </p>

            <div>
              <h4 className="font-bold text-black mb-4 text-lg">
                COURSE OFFERINGS:
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-black ml-4 text-lg">
                <li>Placement Training & Job Assistance</li>
                <li>
                  International Internships in (Australia, UAE, Philippines)
                </li>
                <li>
                  Candidates will be certified as Full-Stack Web Developers
                </li>
              </ol>
            </div>

            <div className="mt-12 flex gap-4">
              <button className="bg-[#161730] text-xl px-10 font-bold text-white font-medium px-6 py-3 rounded-full  ">
                Apply Now
              </button>
              <button
                onClick={() => (window.location.href = "/curriculum/1")}
                className="border border-[#161730] text-xl px-10 font-bold text-[#161730] font-medium px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                View Curriculum
              </button>
            </div>
          </div>

          {/* Right Column - Program Details Card */}
          <div className="lg:w-5/12 ">
            <div className="bg-[#161730] h-150 text-white rounded-3xl p-12">
              <h3 className="text-2xl font-bold mb-6">About the class</h3>

              <p className="mb-6 text-lg">
                This program will be a 17-week long intensive and immersive one.
                Here you'll start from the scratch to learn the art of
                programming, web development, and product development. This
                helps the candidates to master the front-end, back-end, and
                databases technologies covering every aspect of Web Development
                alongside, GEN AI skills.
              </p>

              <div className="flex items-center mb-6">
                <div className="rounded-full p-3 mr-4">
                  <img
                    src="/programs/clock.svg"
                    alt="Weeks Icon"
                    className="h-10 w-10"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Overall time</h4>
                  <p>8 Hours/Day</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="rounded-full p-3 mr-4">
                  <img
                    src="/programs/teach.svg"
                    alt="Weeks Icon"
                    className="h-10 w-10"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Batch size</h4>
                  <p>10-12 Candidates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Course Guidebook Section
const CourseGuidebook = () => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the download functionality here
  };

  return (
    <section className="py-8 md:py-12">
      <div className="scale-[0.9] container mx-auto px-4">
        <div className="mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-20">
            Take a look inside
            <br />
            the course guidebook.
          </h2>

          <p className="text-xl md:text-2xl">
            Discover and understand our Course Curriculum better
          </p>

          <p className="text-xl md:text-2xl mb-14">
            Our extensive curriculum is carefully designed to provide a solid
            foundation in
            <br />
            computer science, with a focus on practical application and
            real-world relevance.
          </p>

          <p className="text-xl md:text-2xl font-bold mb-12">
            Download the curriculum now and see the <em>depth and breadth</em>{" "}
            of what we offer.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="max-w-2xl">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="coder@email.com"
                className="w-full px-6 py-4 text-lg border-2 border-[#161730] rounded-full focus:outline-none focus:border-[#161730]"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-[#161730] text-white text-lg font-medium px-12 py-4 rounded-full  "
            >
              Download Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MernProgramPage;
