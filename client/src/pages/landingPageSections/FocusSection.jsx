export default function LandingPageFocusSection() {
  return (
    <section className="bg-[#161730] h-[340px] text-white py-25">
      <div className="container mx-auto px-3 relative">
        {/* Main heading */}
        <div className="text-center">
          <h2 className="relative text-3xl md:text-[85px]  font-bold mb-8 libre-franklin">
            THE FOCUS IS <span className="text-white">YOU.</span>
            <span className="inter absolute right-24 md:right-60 bottom-[-0.7rem]  md:bottom-[-0.1rem] bg-yellow-400  md:scale-[1.8] text-black text-[10px] px-3 py-2 rounded-sm mx-[-6rem] my-[-0.8rem] md:mx-[-0.6rem] md:my-[0rem] transform rotate-[-10deg] inline-block">
              Anybody Can Code!
            </span>
          </h2>

          {/* Features list */}
          <p className="md:text-[20px] font-medium lexend-giga">
            International Internships • Study Now Pay Later • Multiple Skill Tracks • PAN India
          </p>
        </div>
      </div>
    </section>
  );
}
