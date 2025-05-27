export default function LandingPageMediaLoveSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="scale-[0.8] container mx-auto px-4">
        <div className="mb-12 md:mb-16 relative text-center">
          <p
            className="text-[#8888A5] text-[10px] md:text-[12px] absolute top-0 left-28 md:left-150 transform -translate-x-1/2 -translate-y-full"
            style={{
              fontFamily: '"Lexend Giga", sans-serif',
              fontWeight: 400,
              fontSize: "12px"
            }}
          >
            &lt;social love&gt;
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            MEDIA LOVE!
          </h2>
          <p
            className="text-[#8888A5]  text-[10px] md:text-[12px]  absolute bottom-0 left-59 md:left-220 transform -translate-x-1/2 translate-y-full "
            style={{
              fontFamily: '"Lexend Giga", sans-serif',
              fontWeight: 400,
            }}
          >
            &lt;/social love&gt;
          </p>
        </div>

        <div className="mt-16">
          {/* First row - 4 logos with reduced gap */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-8 md:mb-12">
            <div className="flex items-center justify-center h-16 md:h-20">
              <img
                src="/landing-page/media-entrepreneur.png"
                alt="Entrepreneur Magazine"
                className="max-h-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 md:h-30">
              <img
                src="/landing-page/media-switchup.png"
                alt="SwitchUp"
                className="max-h-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 md:h-30">
              <img
                src="/landing-page/media-inc42.png"
                alt="Inc42"
                className="max-h-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 md:h-20">
              <img
                src="/landing-page/media-course-report.png"
                alt="Course Report"
                className="max-h-full object-contain"
              />
            </div>
          </div>

          {/* Second row - 3 big logos, centered */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center justify-center h-24 md:h-32">
              <img
                src="/landing-page/media-indian-express.png"
                alt="The Indian Express"
                className="max-h-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-24 md:h-32">
              <img
                src="/landing-page/media-siasat.png"
                alt="The Siasat Daily"
                className="max-h-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-24 md:h-32">
              <img
                src="/landing-page/media-toi.png"
                alt="Times of India"
                className="max-h-full object-contain"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}