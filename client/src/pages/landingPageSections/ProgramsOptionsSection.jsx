import { useEffect, useState } from "react";

export default function LandingPageProgramsOptionsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="bg-white md:px-40 ">
      <div className={`container mx-auto px-2 ${isMobile ? 'scale-100 ml-0' : 'lg:scale-[1] '} lg:origin-top`}>
        {/* Section Header */}

        {/* Three Cards */}
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-3'} gap-8`}>
          {/* Card 1 */}
          <div className="bg-[#161730] text-white rounded-2xl overflow-hidden shadow-lg">
            <div className="px-6 py-10 lg:px-12 lg:py-14 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-3xl lg:text-4xl tracking-wide font-bold mb-8 text-center">
                  CODING BOOTCAMPS
                </h3>
                <p className="mb-6 text-center  text-sm lg:text-base">
                  Learn the art of building products, business, and users love.
                  Our programs include full-stack web development, full-stack
                  mobile application development, UI/UX, IoT, hardware, AI/VR,
                  blockchain, and industry-specific training tracks.
                </p>
              </div>
              <div className="flex justify-center mt-2">
                <a
                  href="/programs"
                  className="inline-block bg-white text-[#161730] font-bold py-4 px-8 md:py-3 md:px-10 md:text-lg rounded-full hover:bg-gray-100 transition-colors text-sm"
                >
                  View Programs
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#161730] text-white rounded-2xl overflow-hidden shadow-lg">
            <div className="px-6 py-10 lg:px-10 lg:py-14 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-3xl lg:text-4xl tracking-wide font-bold mb-8 text-center">
                  CS PROGRAM
                </h3>
                <p className="mb-10 text-center font-bold text-sm lg:text-[15px]">
                  Level up your code career with cs.code.in
                </p>
                <p className="mb-6 text-center  text-sm lg:text-base">
                  Become A Real Software Engineer In Just 12 Months. A Year-Long
                  Intensive CS Program. With A Holistic Experience For Tech
                  Enthusiasts In The Field Of Computer Science.
                </p>
              </div>
              <div className="flex justify-center mt-2">
                <a
                  href="/programs"
                  className="inline-block bg-white text-[#161730] font-bold py-4 px-8  md:py-3 md:px-10 md:text-lg  rounded-full hover:bg-gray-100 transition-colors text-sm"
                >
                  View Programs
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#161730] text-white rounded-2xl overflow-hidden shadow-lg">
            <div className="px-6 py-10 lg:px-10 lg:py-14 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-3xl lg:text-4xl tracking-wide font-bold mb-8 text-center">
                  PRE-BOOTCAMP
                </h3>
                <p className="mb-6 text-center  text-sm lg:text-base">
                  School Of Coding Is A Pre-Bootcamp Preparation School That
                  Helps Candidates Prepare For Their Upcoming Bootcamp Journey.
                  Our Focus Is To Help Candidates Get Started With Writing Their
                  First Lines Of Code.
                </p>
              </div>
              <div className="flex justify-center mt-2">
                <a
                  href="/programs"
                  className="inline-block bg-white text-[#161730] font-bold py-4 px-8  md:py-3 md:px-10 md:text-lg rounded-full hover:bg-gray-100 transition-colors text-sm"
                >
                  View Programs
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="mb-13 text-center">
            <h2 className="text-md md:text-2xl md:text-[40px] tracking-wide md:leading-20
 font-bold libre-franklin">
              Students All Over The World Trust
            </h2>
            <h2 className="text-md md:text-2xl md:text-[40px] font-bold mb-8 md:mb-4  libre-franklin">
              The Hacking School To Build Their Careers.
            </h2>
          </div>

          <div className="relative bg-yellow-400 rounded-xl shadow-lg p-4 md:p-8">
            {/* Astronaut Image - Positioned for both mobile and desktop */}
            <div className="absolute -bottom-12 md:-bottom-32 left-0 md:-left-16 z-10">
              <img
                src="/landing-page/astro-small.png"
                alt="Astronaut"
                className="h-24 md:h-50 lg:h-70 md:mb-[-70px]"
              />
            </div>

            {/* Stats Grid - Responsive for both mobile and desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 relative z-0 ml-0 md:ml-12 lg:ml-10">
              {/* Stat Item 1 */}
              <div className="flex flex-col md:flex-row font-extrabold
 items-center md:items-end">
                <div className="text-2xl md:text-[40px] font-black ubuntu text-black">#1</div>
                <div className="text-xs md:text-[16px] font-black md:font-black ubuntu uppercase tracking-wider md:ml-6 text-center md:text-left">
                  <div>CODING</div>
                  <div>BOOTCAMP</div>
                </div>
                <div className="hidden md:block h-15 w-px bg-black mx-8"></div>
              </div>

              {/* Stat Item 2 */}
              <div className="flex flex-col md:flex-row items-center md:items-end">
                <div className="text-2xl md:text-[40px] font-black ubuntu text-black">10+</div>
                <div className="text-xs md:text-[16px] font-black md:font-black ubuntu uppercase tracking-wider md:ml-6 text-center md:text-left">
                  <div>YEARS</div>
                  <div>EXPERIENCE</div>
                </div>
                <div className="hidden md:block h-15 w-px bg-black mx-5"></div>
              </div>

              {/* Stat Item 3 */}
              <div className="flex flex-col md:flex-row items-center md:items-end">
                <div className="text-2xl md:text-[40px] font-black ubuntu text-black">7000+</div>
                <div className="text-xs md:text-[16px] font-black md:font-black ubuntu uppercase tracking-wider md:ml-6 text-center md:text-left">
                  <div>GLOBAL</div>
                  <div>ALUMNI</div>
                </div>
                <div className="hidden md:block h-16 w-px bg-black mx-5"></div>
              </div>

              {/* Stat Item 4 */}
              <div className="flex flex-col md:flex-row items-center md:items-end">
                <div className="text-2xl md:text-[40px]  font-black ubuntu text-black">97%</div>
                <div className="text-xs md:text-[16px] font-black md:font-black ubuntu uppercase tracking-wider md:ml-6 text-center md:text-left">
                  <div>EMPLOYMENT</div>
                  <div>RATE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}