import React from "react";
import HeaderDarkOverlay from "../../components/custom/headerDarkOverlay";
import LandingPageStudyNowSection from "../landingPageSections/StudyNowSection";

const MobileProgramPage = () => {
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
    <section className="relative w-full h-screen text-white overflow-hidden">
      {/* Background with keyboard image and overlay */}
      <div className="absolute h-full inset-0 z-0">
        <img
          src="/programs/mobile.png"
          alt="Keyboard background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="scale-[0.9] relative z-10 container mx-auto px-4 py-16 md:py-24 mt-[20vh]">
        <div className="">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            MOBILE APP DEVELOPMENT
            <br /> WITH REACT NATIVE
          </h1>

          <p className="text-2xl md:text-4xl mb-8 mt-12">
            6 Weeks. 2 Real-World Applications.
          </p>

          <button className="bg-white text-black font-bold px-8 py-5 rounded-full hover:bg-gray-200 transition-colors text-xl mt-4">
            YES, I AM IN!
          </button>
        </div>
      </div>
    </section>
  );
};

// Program Details Section
const ProgramDetails = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="scale-[0.9] container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 font-medium">
          {/* Left Column - Program Description */}
          <div className="lg:w-7/12">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-14 text-black">
              LEARN TO DEVELOP
              <br />
              MOBILE APPLICATIONS
            </h2>

            <h3 className="text-xl md:text-2xl font-bold leading-8 mb-6 text-black">
              FULL STACK MOBILE DEVELOPMENT -<br /> REACT NATIVE TRAINING
              PROGRAM
            </h3>

            <p className="text-black mb-6 text-lg">
              Take your career in tech to the next level with our comprehensive
              Full Stack Mobile Development with React Native training program!
              Learn how to build powerful, user-friendly hybrid applications
              that run seamlessly across multiple platforms, including iOS and
              Android. Our expert instructors will guide you through an
              intensive and immersive curriculum that covers everything from the
              fundamentals of React Native to advanced techniques for building
              complex, enterprise-grade apps.
            </p>
            <p className="text-black mb-6 text-lg">
              With a focus on hands-on learning and practical project
              development, our program is specifically tailored to meet the
              demands of today's fast-paced mobile app development
              landscape.{" "}
            </p>

            <div className="mb-8">
              <h4 className="font-bold text-black mb-4 text-lg">
                Course Curriculum:
              </h4>
              <ul className="space-y-2 text-black text-lg">
                <li>• React Native (Hybrid Mobile Development)</li>
                <li>• Working With Core React Native Components</li>
                <li>• Responsive and Adaptive User Interfaces</li>
                <li>• Building Complex Mobile Applications</li>
                <li>• Publishing Apps to App Store and procedures.</li>
              </ul>
            </div>

            <p className="text-black mb-6 text-lg">
              By the end of the program, you'll have a solid understanding of
              React Native development and be able to create complex,
              enterprise-grade hybrid applications that run smoothly across
              multiple platforms. Additionally, you'll gain valuable experience
              in collaborative development, agile methodologies, and version
              control systems like Git, guaranteeing you receive cutting-edge
              training that sets you up for success.
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
                  Candidates will be certified as Full-Stack Mobile Developers/
                  React Native Developers.
                </li>
              </ol>
            </div>

            <div className="mt-12 flex gap-4">
              <button className="bg-[#161730] text-xl px-10 font-bold text-white font-medium px-6 py-3 rounded-full  ">
                Apply Now
              </button>
              <button
                onClick={() => (window.location.href = "/curriculum/2")}
                className="border border-[#161730] text-xl px-10 font-bold text-[#161730] font-medium px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                View Curriculum
              </button>
            </div>
          </div>

          {/* Right Column - Program Details Card */}
          <div className="lg:w-5/12">
            <div className="bg-[#161730] h-120 text-white rounded-3xl p-12">
              <h3 className="text-2xl font-bold mb-6">About the class</h3>

              <p className="mb-6 text-lg">
                This is a 6-Week hands on intensive mobile application
                development program where candidates will be driven through the
                basics, fundamentals to building 2 successful hybrid native
                mobile applications. This course can also be opted as an
                extension to the web development program.
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
    <section className="py-8 md:py-12 my-20">
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

export default MobileProgramPage;
