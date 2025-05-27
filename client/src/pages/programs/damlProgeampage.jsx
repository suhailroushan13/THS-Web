import React from "react";
import HeaderDarkOverlay from "../../components/custom/headerDarkOverlay";
import LandingPageStudyNowSection from "../landingPageSections/StudyNowSection";

const DamlProgramPage = () => {
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
          src="/programs/daml.png"
          alt="Keyboard background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="scale-[0.9] relative z-10 container mx-auto px-4 py-16 md:py-24 mt-[20vh]">
        <div className="">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            DATA ANALYSIS AND
            <br />
            MACHINE LEARNING
          </h1>

          <p className="text-2xl md:text-4xl mb-8 mt-12">
            Unlock the power of data and become a data analyst in just 17 Weeks.
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
              BUILD DATA AND
              <br />
              MACHINE LEARNING SKILLS
            </h2>

            <h3 className="text-xl md:text-2xl font-bold leading-8 mb-6 text-black">
              DATA ANALYSIS WITH MACHINE LEARNING
              <br />
              TRAINING PROGRAM
            </h3>

            <p className="text-gray-700 mb-6 text-lg">
              The curriculum helps understand the issues and create models based
              on the data gathered with the help of several Machine Learning
              tools and technologies, build statistical models with huge chunks
              of business data. It is completely hands-on and comprehensive to
              skill candidates on end-to-end product development.
            </p>

            <div className="mb-8">
              <h4 className="font-bold text-black mb-4 text-lg">
                Course Curriculum:
              </h4>
              <ul className="space-y-2 text-gray-700 text-lg">
                <li>• Data Preprocessing and Visualization</li>
                <li>• Statistics and Probability</li>
                <li>
                  • Create customized frameworks to import, cleanse, transform
                  and validate data
                </li>
                <li>• Natural Language Processing</li>
                <li>• Data extraction report generation</li>
                <li>
                  • Build machine learning models to derive insights for
                  products and services
                </li>
              </ul>
            </div>

            <p className="text-gray-700 mb-6 text-lg">
              The curriculum structure is used to help students learn how to
              work with diverse data sets, apply statistical methods, and
              utilize machine learning algorithms to extract meaningful patterns
              and trends.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              Additionally, the curriculum includes real-world projects that
              gives you hands-on experience working with complex data sets and
              applying machine learning algorithms. These projects are designed
              to simulate real-life scenarios, allowing you to develop
              problem-solving skills and critical thinking abilities that are
              highly sought after in the job market.
            </p>

            <div>
              <h4 className="font-bold text-black mb-4 text-lg">
                COURSE OFFERINGS:
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4 text-lg">
                <li>Placement Training & Job Assistance.</li>
                <li>
                  Opportunities to intern with the most reputed companies in the
                  Tech Ecosystem.
                </li>
                <li>
                  Candidates will be certified as Data Analysts and ML Experts.
                </li>
              </ol>
            </div>

            <div className="mt-12 flex gap-4">
              <button className="bg-[#161730] text-xl px-10 font-bold text-white font-medium px-6 py-3 rounded-full ">
                Apply Now
              </button>
              <button
                onClick={() => (window.location.href = "/curriculum/3")}
                className="border border-[#161730] text-xl px-10 font-bold text-[#161730] font-medium px-6 py-3 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
              >
                View Curriculum
              </button>
            </div>
          </div>

          {/* Right Column - Program Details Card */}
          <div className="lg:w-5/12">
            <div className="bg-[#161730] h-140 text-white rounded-3xl p-12">
              <h3 className="text-2xl font-bold mb-6">About the class</h3>

              <p className="mb-6 text-lg">
                Our comprehensive curriculum covers everything from the basics
                of data analysis to advanced machine learning techniques. Our
                17-week DA with ML training program is designed to help you
                understand the practical applications of data analysis and
                machine learning in various industries.
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
            Discover and understand our Course Curriculum better—
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

export default DamlProgramPage;
