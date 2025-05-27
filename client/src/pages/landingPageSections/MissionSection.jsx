import { useEffect, useState } from "react";

export default function LandingPageMissionSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="md:py-32  relative overflow-hidden">
      {/* Background image */}
      {!isMobile ? (
        <img
          src="/landing-page/ths.png"
          alt="The Hacking School Office"
          className="w-full h-[500px] object-cover object-center brightness-90"
        />
      ) : (
        <img
          src="/landing-page/ths.png" // <-- replace with mobile image if needed
          alt="The Hacking School Office Mobile"
          className=" h-[30vh] object-cover object-center"
        />
      )}

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent"></div>

      {/* Content */}
      {!isMobile ? (
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-25   py-38  lg:origin-bottom-left">
            <div className="w-full">
              <img
                className="relative md:ml-16 left-105 top-6"
                src="/public/landing-page/star.png"
                alt="star"
              />
              <h2 className="text-5xl md:text-6xl md:ml-16 lg:text-7xl font-bold text-black flex items-center flex-wrap">
                One Mission.
              </h2>
              <br />
              <h2 className="text-5xl md:text-6xl md:ml-16 lg:text-7xl font-bold text-black flex items-center flex-wrap">
                Many Paths To Success.
              </h2>
              <p className="text-xl lexend-giga md:text-xl md:ml-16 font-bold text-black mt-4 mb-4">
                Code Faster. Pay Lesser. Build Smarter. Deploy Greater. Succeed
                Better.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative pb-6  z-10 mt-[-140px] px-6">
          <div className="w-full">
            <div className="relative inline-block">
              <h2 className="text-3xl font-bold text-black">
                One Missi<span className="relative inline-block">
                  o
                  <img
                    src="/public/landing-page/star.png"
                    alt="star"
                    className="absolute -top-4 left-1/2 ml-6 mt-2 transform -translate-x-1/2 w-4 h-4"
                  />
                </span>n.
              </h2>
            </div>


            <h2 className="text-xl font-bold text-black mt-2">
              Many Paths To Success.
            </h2>
            <p className="text-[10px] font-bold text-black lexend-giga mt-6 mb-2">
              Code Faster. Pay Lesser. Build Smarter. Deploy Greater. Succeed
              Better.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
