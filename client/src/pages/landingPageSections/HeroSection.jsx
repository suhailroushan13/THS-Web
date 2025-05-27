export default function LandingPageHeroSection() {

  const REGISTER = import.meta.env.VITE_REGISTER


  return (
    <section className="mt-5 px-2 sm:px-5 md:mt-2 text-center w-screen">
      <div className="container mx-auto">
        <p className="text-[#000] text-center lexend-giga text-[12px] font-semibold leading-[20px] mb-10 tracking-[-0.96px] uppercase md:text-[25px] md:leading-[50px]  md:tracking-[-0.8px]">
          INDIA'S FIRST CODING BOOTCAMP<sup>®</sup>
        </p>
        <h1 className="text-[#000] w-full text-center libre-franklin text-[38px] font-bold tracking-[-2px] capitalize md:text-[82px] md:leading-[80px] md:tracking-[1.9px] md:mb-5 mb-2 py-1">
          The Hacking School
        </h1>




        <p className="text-[#000] text-center ubuntu text-[13px] font-bold leading-normal capitalize md:text-[40px] md:leading-[100px]">
          The Bootcamp that Does more than{" "}
          <em className="ubuntu text-[14px] italic font-bold leading-normal capitalize md:text-[40px] md:leading-[100px]">
            just teach code.
          </em>
        </p>


        <div className="flex justify-center items-center mt-10">
          <a
            target="_blank" rel="noopener noreferrer"
            href={REGISTER}
            className="w-[220px] h-[55px]   md:w-[520px] md:h-[95px] flex justify-center items-center rounded-full 
              border-2 border-black bg-white bg-opacity-20 
              hover:bg-black hover:text-white transition-colors duration-300 
              px-8 py-3 text-[12px] md:text-[28px] font-bold text-black"
          >
            UNLOCK YOUR FUTURE!
          </a>
        </div>

        <br />

        <br />

        {/* Embedded YouTube Video - Responsive Fix */}
        <div className="mt-2 flex justify-center relative">
          <div className="max-w-full w-11/12 md:w-7/12 border-t-[16px] border-l-[16px] border-r-[16px] border-black rounded-t-[2.4vw] overflow-hidden shadow-2xl mx-auto">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/w3484mRXzJ0?autoplay=1&mute=0&controls=0&modestbranding=1&rel=0&showinfo=0&playsinline=1&loop=1&playlist=w3484mRXzJ0&disablekb=1&iv_load_policy=3"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>




          {/* Astronaut SVG */}
          <img
            src="/landing-page/astronaut.svg"
            alt="Astronaut"
            className="absolute right-[-10px] md:left-260 bottom-[-1.5rem] md:bottom-[-4rem] h-[90%]"
          />

        </div>
      </div>
    </section>
  );
}
