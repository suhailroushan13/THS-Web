export default function LandingPageStudyNowSection() {
  const REGISTER = import.meta.env.VITE_REGISTER;


  return (
    <section className="py-16 md:px-36 md:pl-34 md:py-20 bg-[#161730] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-end">
          <div className="w-full md:w-3/4 mb-8 md:mb-0">
            <h2 className="text-4xl pr-12 md:pr-0  md:text-6xl font-bold mb-10 libre-franklin">
              STUDY NOW, PAY LATER.


            </h2>
            <p className="text-base text- md:text-2xl max-w-2xl ubuntu leading-loose">
              Don't have the money to study upfront?



              <br />
              Checkout our hassle-free financial facility.
            </p>
          </div>

          <div className="w-full h-full md:w-1/4 flex justify-start md:justify-end">
            <a
              href={REGISTER}
              className="inline-block bg-white text-[#161730] md:text-[20px] font-bold py-3 px-8 rounded-full cursor-pointer  transition-colors"
            >
              Apply Now!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
