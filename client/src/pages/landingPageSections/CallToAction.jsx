export default function LandingPageCallToAction() {

  const WHATSAPP = import.meta.env.VITE_WHATSAPP
  return (
    <section className="px-0 sm:px-10 md:px-20 py-16 sm:py-20 bg-[#161730] text-white relative overflow-hidden">
      <div className="mx-auto px-5">
        <div className="mx-auto flex flex-col items-center text-center tracking-widest">
          <h2 className="text-white text-sm text-center font-bold sm:text-[50px] sm:leading-[70px] tracking-[2px] libre-franklin">
            Take the first step to a new career.
          </h2>

          <p className="text-white text-center text-sm font-bold sm:text-[50px] sm:leading-[70px] tracking-[2px] libre-franklin text-nowrap">
            Book a call with our{" "}
            <span className="text-yellow-400 libre-franklin font-bold italic">
              Programs Advisor!
            </span>
          </p>

          <br />
          <br />

          <a
            target="_blank"
            rel="noopener noreferrer"
            href={WHATSAPP}
            className="bg-white text-black text-center font-ubuntu text-sm sm:text-lg md:text-[24px] font-extrabold
            leading-[50px] sm:leading-[70px] uppercase rounded-full border border-white shadow-md hover:bg-gray-100 transition-colors flex justify-center items-center gap-2 max-w-[220px] sm:max-w-[580px] md:w-[523px] h-[50px] sm:h-[74px] md:h-[80px] px-4 sm:px-[50px] md:px-[55px]"
          >
            <p className="text-black text-center font-ubuntu text-sm sm:text-[24px] not-italic font-bold leading-[50px] sm:leading-[70px] uppercase">
              SCHEDULE A CALL!
            </p>
          </a>
        </div>

        {/* Illustration positioned absolutely */}
        <div className="absolute right-2 sm:right-4 md:right-10 lg:right-50 bottom-0 w-24 sm:w-32 md:w-60">
          <img
            src="/landing-page/advisor-illustration.png"
            alt="Programs Advisor"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
