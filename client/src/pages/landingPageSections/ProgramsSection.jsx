export default function LandingPageProgramsSection() {
  const REGISTER = import.meta.env.VITE_REGISTER;
  const programsData = [
    {
      title: "Pre-bootcamp For Beginners",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript Fundamentals",
        "Intro To Frameworks",
        "CRUD Operations",
      ],
      url: REGISTER,
    },
    {
      title: "Full-stack Web Development and AI",
      technologies: [
        "ReactJS",
        "JavaScript",
        "Mongo DB",
        "Express JS",
        "React JS",
        "Node JS",
        "GPT and Python",
        "Cloud Computing",
        "LangChain",
        "OpenAI API / Gemini AI / Claude AI / Grok AI",
      ],
      url: "/programs/1",
    },
    {
      title: "Full-stack Mobile Development",
      technologies: [
        "JavaScript",
        "Advanced JavaScript",
        "MERN Frameworks",
        "DSA",
        "React Native",
        "React Native Hooks",
        "Debugging",
        "Redux JS",
        "Performance Monitoring",
      ],
      url: "programs/2",
    },
    {
      title: "Data Analysis And Machine Learning",
      technologies: [
        "Python Programming",
        "Python Libraries",
        "Math For Data Science",
        "Machine Learning",
        "AI Descriptive Statistics",
        "Exploratory Data Analysis",
      ],
      url: "programs/3",
    },
    {
      title: "UI/UX Design Bootcamp",
      technologies: [
        "UX Research",
        "Design Thinking",
        "Usability Testing",
        "Visual Design Principles",
        "Color Theory",
        "Wireframes",
        "Prototyping",
        "Figma",
        "Adobe XD",
      ],
      url: REGISTER,
    },
    {
      title: "Full-stack CS Web Engineering Bootcamp",
      technologies: [
        "C",
        "C++",
        "Object Oriented Programming with Java",
        "Web Development with MERN",
        "Operating Systems",
        "Computer Networks",
        "Cyber Security",
        "DevOps",
      ],
      url: "https://apply.cs.code.in/register",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-3 md:pl-42  md:mt-62">
      <div className="lg:origin-top">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="">
            <p className="text-[#8888A5] flex justify-start mt-8 text-[8px] md:ml-10  md:text-[12px]  font-normal lexend-giga">
              &lt;for everyone&gt;
            </p>

            <h2 className="text-5xl sm:text-[70px] font-bold mb-2 libre-franklin">
              Our Programs.
            </h2>
            <p className="text-[#8888A5] mt-2 text-[8px]   md:ml-90  md:text-[12px] ml-35 font-normal lexend-giga">
              &lt;/for everyone&gt;
            </p>
          </div>


          <div className="flex flex-col space-y-6 md:pr-40 pt-10">
            {programsData.map((program, index) => (
              <a
                key={index}
                href={program.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="block" // make sure the anchor behaves like a block
              >
                <div className="bg-[#161631] ubuntu text-white rounded-2xl overflow-hidden shadow-lg w-full h-[150px] transition-transform hover:scale-105">
                  <div className="px-6 py-4 ubuntu flex justify-between items-center h-full">
                    <div className="flex ubuntu flex-col justify-center">
                      <div className="ubuntu text-lg font-medium mb-8 text-white md:text-[32px] md:leading-[36.56px]">
                        {program.title}
                      </div>
                      <div className="flex flex-row flex-nowrap justify-start items-center gap-2 w-full overflow-x-scroll overflow-y-hidden scroll-hide">
                        {program.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-[#161631] ubuntu text-white font-normal whitespace-nowrap inline-block px-3 py-2 rounded-lg border border-white text-[11.162px] leading-[13.162px]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-3xl ml-4 self-center">›</div>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
