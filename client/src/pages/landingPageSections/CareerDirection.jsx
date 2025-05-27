export default function LandingPageCareerDirection() {
  const REGISTER = import.meta.env.VITE_REGISTER

  return (
    <section className="lg:py-22 lg:p-20 bg-white">
      <div className="md:max-w-400px mx-auto px-4 lg:px-8  lg:text-[8px]">

        {/* ===== Mobile Header ===== */}
        <div className="block md:hidden text-left mb-8 px-2">
          <p className="text-[#8888A5] mt-8 text-[10px] font-normal">
            &lt;code, build, deploy&gt;
          </p>
          <h2 className="text-2xl font-bold mb-1">
            Nudge Your Career
            <br />
            In The Right
            Direction.
            <div className="flex ml-35 w-full justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[600px] h-[37px] mt-[-20px]"
                viewBox="0 0 853 37"
                fill="none"
              >
                <path
                  d="M351.768 20.282C352.744 19.3056 352.744 17.7227 351.768 16.7464L335.858 0.83652C334.882 -0.139791 333.299 -0.139791 332.322 0.83652C331.346 1.81283 331.346 3.39574 332.322 4.37205L346.464 18.5142L332.322 32.6563C331.346 33.6326 331.346 35.2155 332.322 36.1919C333.299 37.1682 334.882 37.1682 335.858 36.1919L351.768 20.282ZM-2.18557e-07 21.0142L350 21.0142L350 16.0142L2.18557e-07 16.0142L-2.18557e-07 21.0142Z"
                  fill="#BA1A1A"
                />
              </svg>
            </div>
            <p className="text-[#8888A5]  text-[10px] font-normal mt-[-10px] ml-[160px]">
              &lt;code, build, deploy&gt;
            </p>
          </h2>
        </div>


        {/* ===== Desktop/Tablet Header ===== */}
        <div className="hidden md:block mb-12 text-left">
          <div className="mb-12 text-left">
            <p className="text-[#8888A5] mt-8 text-[14px] md:text-[12px] ml-15 font-normal lexend-giga">
              &lt;code, build, deploy&gt;
            </p>
            <h2 className="text-2xl text-start md:text-7xl md:ml-15 font-bold mb-1 libre-franklin">
              Nudge Your Career
              <br />
              In The Right{" "}
              <span className="relative inline-block">
                <span className="pb-2 mr-20">Direction.</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="782"
                  height="30"
                  viewBox="0 0 853 37"
                  fill="none"
                >
                  <path
                    d="M351.768 20.282C352.744 19.3056 352.744 17.7227 351.768 16.7464L335.858 0.83652C334.882 -0.139791 333.299 -0.139791 332.322 0.83652C331.346 1.81283 331.346 3.39574 332.322 4.37205L346.464 18.5142L332.322 32.6563C331.346 33.6326 331.346 35.2155 332.322 36.1919C333.299 37.1682 334.882 37.1682 335.858 36.1919L351.768 20.282ZM-2.18557e-07 21.0142L350 21.0142L350 16.0142L2.18557e-07 16.0142L-2.18557e-07 21.0142Z"
                    fill="#BA1A1A"
                  />
                </svg>
                <p className="absolute text-[#8888A5] text-[12px] mt-2 sm:text-[16px] md:text-[12px] font-normal top-[5.6rem] lexend-giga text-center ml-30">
                  &lt;/code, build, deploy&gt;
                </p>
              </span>
            </h2>
          </div>
        </div>



        {/* ===== Cards Section ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-4 md:px-10">
          {[...Array(3)].map((_, i) => {
            const cardData = [
              {
                title: "THE HACKING SCHOOL",
                img: "/landing-page/Rectangle_693_ctpnmi (1) 1.png",
                desc: `India needs to change the way it trains and skills its huge youth (student) population. India needs more coding bootcamps. And The Hacking School is taking India's very own talent to the next level.`,
                button: "About Us",
                href: "/about-us",
              },
              {
                title: "LEARN. CREATE. LAUNCH.",
                img: "/landing-page/Vector.png",
                desc: `With our global curriculum, the focus is on arming you with skills that are most in-demand in the industry. This makes The Hacking School a first preference to a lot of international students as well.`,
                button: "Our Curriculum",
                href: "/curriculum",
              },
              {
                title: "HACKER >> DEVELOPER",
                img: "/landing-page/Vector (1).png",
                desc: `We are inspired from the Silicon Valley and our objective is to bring the much needed hacker mindset and culture, so as to transform the Indian software training and development industry.`,
                button: "Apply Now",
                href: REGISTER,
              },
            ];

            const { title, img, desc, button, href } = cardData[i];

            return (
              <div
                key={i}
                className="bg-[#161730] text-white rounded-2xl  overflow-hidden shadow-xl m-2 sm:m-3 md:m-2 flex flex-col"
              >
                <div className="p-6 sm:p-8 flex shadow-lg flex-col shadow-xl justify-between h-full">
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-[20px] font-semibold  mb-6 text-center libre-franklin">
                      {title}
                    </h3>
                    <div className="mb-6">
                      <img
                        src={img}
                        alt={title}
                        className="w-full object-cover rounded-xl"
                      />
                    </div>
                    <p className="mb-6 ubuntu text-sm sm:text-base md:text-[16px]">
                      {desc}
                    </p>
                  </div>
                  <div className="flex justify-start">

                    <a
                      href={href}
                      className="bg-white text-[#161730] font-bold py-3 px-6 md:py-3 md:px-10 rounded-full hover:bg-gray-100 transition-colors ubuntu text-base sm:text-lg md:text-xl"
                    >
                      {button}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}