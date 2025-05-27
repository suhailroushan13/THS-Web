export default function LandingPageHackingSchoolSection() {
  const REGISTER = import.meta.env.VITE_REGISTER
  return (
    <section className="py-12 md:py-24 bg-[#161730] text-white">
      <div className="md:scale-[0.9] container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-12">
          {/* Left Column - Text Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-5">
            <h3 className="text-xl md:text-2xl ubuntu font-bold uppercase tracking-wide">
              INDIA'S FIRST AND THE BEST!
            </h3>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight md:leading-tight">
              INDIA NEEDS BOOTCAMPS.
              <br />
              WE'RE THE ANSWER.
            </h2>

            <p className="text-sm md:text-base font-medium leading-relaxed tracking-wide my-2 md:my-4">
              To scale the next leg of growth, India needs to move away from the
              traditional style of skill development. The Hacking School uses
              bootcamp styled programs with in-demand curriculum to produce
              highly skilled and employable talent.
            </p>

            <div className="mt-2 md:mt-4">
              <a
                href={REGISTER}
                className="inline-block bg-white text-[#161730] font-bold  md:py-3 md:px-8 rounded-full  transition-colors text-sm md:text-[20px] cursor-pointer"
              >
                Apply Now!
              </a>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="flex md:hidden w-full h-[2px] bg-yellow-400 my-8 relative">
            <div className="absolute -top-5 left-0 w-[35px] h-[35px] rounded-full bg-white border-[3px] border-yellow-400 flex items-center justify-center">
              <span className="font-bold text-black">1</span>
            </div>
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-[35px] h-[35px] rounded-full bg-white border-[3px] border-yellow-400 flex items-center justify-center">
              <span className="font-bold text-black">2</span>
            </div>
            <div className="absolute -top-5 right-0 w-[35px] h-[35px] rounded-full bg-white border-[3px] border-yellow-400 flex items-center justify-center">
              <span className="font-bold text-black">3</span>
            </div>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:flex justify-center items-center w-20">
            <div className="relative h-[345px] flex flex-col justify-center items-center">
              {/* Vertical Line */}
              <div className="absolute left-5 top-[45px] bottom-0 w-[3px] h-[255px] bg-yellow-400"></div>

              {/* Circle 1 */}
              <div className="absolute top-0 left-0 w-[45px] h-[45px] rounded-full bg-white border-[3px] border-yellow-400 flex items-center justify-center">
                <span className="font-bold text-black">1</span>
              </div>

              {/* Circle 2 */}
              <div className="absolute top-[150px] left-0 w-[45px] h-[45px] rounded-full bg-white border-[3px] border-yellow-400 flex items-center justify-center">
                <span className="font-bold text-black">2</span>
              </div>

              {/* Circle 3 */}
              <div className="absolute top-[300px] left-0 w-[45px] h-[45px] rounded-full bg-white border-[3px] border-yellow-400 flex items-center justify-center">
                <span className="font-bold text-black">3</span>
              </div>
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div className="w-full md:w-[435px] flex flex-col gap-8 md:gap-12">
            {/* Benefit 1 */}
            <div className="flex flex-col gap-2 md:gap-4">
              <h3 className="text-xl md:text-2xl font-bold leading-tight">
                Building Products; Not Just Code.
              </h3>
              <p className="text-sm md:text-base font-medium leading-relaxed">
                We are not just all about code. We are about product
                development.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="flex flex-col gap-2 md:gap-4">
              <h3 className="text-xl md:text-2xl font-bold leading-tight">
                What Industry Wants.
              </h3>
              <p className="text-sm md:text-base font-medium leading-relaxed">
                Our graduates are 'Most Wanted' in the Industry. We work on what
                industry demands and needs.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col gap-2 md:gap-4">
              <h3 className="text-xl md:text-2xl font-bold leading-tight">
                Employment and Entrepreneurship.
              </h3>
              <p className="text-sm md:text-base font-medium leading-relaxed">
                Our graduates don't just find great product developer roles in
                less than 30 days of graduating, but also become awesome
                entrepreneurs!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
