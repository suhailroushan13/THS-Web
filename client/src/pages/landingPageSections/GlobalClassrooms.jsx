export default function LandingPageGlobalClassrooms() {
  return (
    <div>
      <section className="md:py-20 relative flex justify-center items-center">
        {/* Background collage of faces */}
        <div className="absolute inset-0 w-full h-177">
          <img
            src="/landing-page/people-collage.jpg"
            alt="Global Students"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main content container */}
        <div className="container  px-4 relative flex justify-center">
          <div className="max-w-6xl mt-32 md:mt-14 bg-[#161730] shadow-lg  overflow-hidden rounded-lg">
            <div className="flex flex-col-reverse  gap-12 md:flex-row p-8 md:p-12">
              {/* Left column with icons and text */}
              <div className="w-full md:w-2/5 pr-0  md:pr-8 text-justify">
                <div className="flex">
                  {/* Icons column */}
                  <div className="flex flex-col items-center mr-6">
                    {/* Icon 1 */}
                    <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center ">
                      <img
                        src="/landing-page/icon1.svg"
                        alt="Global Icon"
                        className="w-6 h-6 "
                      />
                    </div>

                    {/* Vertical line */}
                    <div className="h-[5.2rem] border-l border-white border-dashed opacity-50 my-4"></div>

                    {/* Icon 2 */}
                    <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center">
                      <img
                        src="/landing-page/icon2.svg"
                        alt="Portfolio Icon"
                        className="w-5 h-5"
                      />
                    </div>

                    {/* Vertical line */}
                    <div className="h-[4.7rem] border-l border-white border-dashed opacity-50 my-4"></div>

                    {/* Icon 3 */}
                    <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center">
                      <img
                        src="/landing-page/icon3.svg"
                        alt="Placement Icon"
                        className="w-full h-full mt-1"
                      />
                    </div>
                  </div>

                  {/* Text column */}
                  <div className="flex-1">
                    {/* Global Classrooms */}
                    <div className="mb-10" id="about-us">
                      <h3 className="text-xl font-bold text-white mb-4">
                        Global Classrooms
                      </h3>
                      <p className="text-gray-400 text-sm sm:text-base font-normal ">
                        Join a global community of learners from over 25+ countries. and tap into a world-clas coding curriculum in our camp.
                      </p>
                    </div>

                    {/* Portfolio Building */}
                    <div className="mb-10">
                      <h3 className="text-xl font-bold text-white mb-4">
                        Portfolio <span className="text-xl">Building</span>
                      </h3>
                      <p className="text-gray-400 text-sm  sm:text-base font-normal ">
                        Build an impressive portfolio that showcases your coding
                        skills and sets you apart from the competition.
                      </p>
                    </div>

                    {/* 100% Placements */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">
                        100% Placements
                      </h3>
                      <p className="text-gray-400 text-sm  sm:text-base font-normal ">
                        Experience the power of a truly global classroom and
                        gain the skills you need to succeed in the tech
                        industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column with image and form */}
              <div className="w-full md:w-3/5 mt-8 md:mt-0 rounded-3xl overflow-hidden">
                <div className="flex flex-col h-full">
                  {/* Team image */}
                  <div className="flex-1">
                    <img
                      src="/landing-page/dev-team.jpg"
                      alt="Development Team"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Download form */}
                  <div className="bg-white p-6">
                    <h3 className="text-[12px]  lg:text-[1.8rem] font-bold text-center mb-4">
                      Download The Course Packet Now!
                    </h3>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="email"
                        placeholder="Enter Email Address here."
                        className="flex-1 px-4 py-2 bg-gray-200 bg-opacity-50 rounded-full border border-gray-400 border-opacity-40 text-gray-500 italic placeholder:text-[13px] sm:placeholder:text-base"
                      />

                      <a
                        href="https://drive.google.com/file/d/1iE5bWKHbN1ucq8Ng0-e7hrnYy3VQkMjV/view"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="px-8 py-2 bg-[#161730] text-white font-bold rounded-full border border-black cursor-pointer">
                          Download
                        </button>
                      </a>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Infinity logo */}
          <div className="absolute top-[-0.2rem] sm:top-[-20rem] right-4 md:right-24 md:top-[-7rem]">
            <div className="w-24 h-24 sm:w-38 sm:h-38 p-1 rounded-full">
              <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/landing-page/ribbon-inspire.png"
                  alt="Infinity Logo"
                  className="w-38 h-38 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}