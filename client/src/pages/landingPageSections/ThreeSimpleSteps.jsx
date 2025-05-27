export default function LandingPageThreeSimpleSteps() {
  const REGISTER = import.meta.env.VITE_REGISTER
  return (
    <section className="py-8 md:px-40 p-3 md:py-20 bg-white">
      <div className="lg:origin-top">
        <div className="container mx-auto px-2">
          {/* Section Header */}
          <div className="mb-4 md:mb-20 mt-10">
            <p
              className="text-[#8888A5] mt-8  md:ml-1 text-[8px]  md:text-[12px]  font-normal lexend-giga"
            >
              &lt;code like a pro&gt;
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 libre-franklin">
              Apply In
              <br />
              Three Simple Steps.
            </h2>
            <p
              className="text-[#8888A5] mb-2 text-[8px]   md:text-[12px] ml-46 lg:ml-95 font-normal lexend-giga"
            >
              &lt;/code like a pro&gt;
            </p>
          </div>

          {/* Application Steps - fit all in one line */}
          <div className="flex flex-row flex-nowrap justify-between items-center gap-2 sm:gap-4 mb-16 w-full">
            {[
              { title: "Submit Application", img: "/landing-page/d1.png" },
              { title: "Evaluation Call", img: "/landing-page/d2.png" },
              { title: "Submit SoP", img: "/landing-page/d3.png" },
              { title: "You're In!", img: "/landing-page/d4.png" },
            ].map((step, index, arr) => (
              <div key={index} className="flex items-center">
                {/* Step */}
                <div className="flex flex-col items-center flex-1 max-w-[90px] sm:max-w-[160px]">
                  <h3 className="text-[8px] sm:text-sm md:text-2xl text-center font-bold mb-2">
                    {step.title}
                  </h3>
                  <br />
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-[40px] h-[40px] md:w-30 md:h-30"
                  />
                </div>

                {index < arr.length - 1 && (
                  <div className="mx-2 mt-2 sm:mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20" // set width here
                      height="20" // set height here
                      viewBox="0 0 13 13"
                      fill="none"
                      className="w-4 h-4 sm:w-10 sm:h-10 sm:ml-20" // sm scale for larger screens
                    >
                      <path
                        d="M12.5 6.5C12.5 3.188 9.812 0.5 6.5 0.5C3.188 0.5 0.5 3.188 0.5 6.5C0.5 9.812 3.188 12.5 6.5 12.5C9.812 12.5 12.5 9.812 12.5 6.5ZM6.5 7.1H4.1V5.9H6.5V4.1L8.9 6.5L6.5 8.9V7.1Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                )}

              </div>
            ))}
          </div>


          {/* Announcement Banner */}
          <a
            href={REGISTER}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-[#161730] text-white py-6 px-4 rounded-full border-2 border-black shadow-md flex justify-center items-center">
              <p className="text-center text-[10px] md:text-2xl font-bold uppercase">
                New Online Full-Stack Web Development Cohort Begins Now
                <span className="text-yellow-400 ml-2">APPLY NOW!</span>
              </p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}