export default function LandingPageClearRoadmap() {
  const roadmapData = [
    {
      title: "Pre-Bootcamp Track",
      duration: "6 Weeks",
      bgColor: "bg-[#ea4b5188]",
      textColor: "text-black",
      width: "50.5%", // 6/48 = 12.5%
    },
    {
      title: "Full-stack Web Development & AI",
      duration: "18 Weeks",
      bgColor: "bg-[#161730]",
      textColor: "text-white",
      width: "70.5%", // 18/48
    },
    {
      title: "Full-stack Mobile Development",
      duration: "6 Weeks",
      bgColor: "bg-[#161730]",
      textColor: "text-white",
      width: "60.5%",
    },
    {
      title: "UI/UX Track",
      duration: "8 Weeks",
      bgColor: "bg-black",
      textColor: "text-white",
      width: "65.7%", // 8/48
    },
    {
      title: "Data Analysis with Machine Learning",
      duration: "17 Weeks",
      bgColor: "bg-black",
      textColor: "text-white",
      width: "75.4%", // 17/48
    },
    {
      title: "The cs.code.in Program",
      duration: "12 Months",
      bgColor: "bg-[#0000DC]",
      textColor: "text-white",
      width: "100%", // Full
    },
  ];


  return (
    <section className="py-2 md:py-20 md:px-36 sm:py-0  bg-white">
      <div className="lg:origin-top">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="mb-12">
            <p
              className="text-[#8888A5] mt-8 text-[10px]  md:text-[12px]  font-normal lexend-giga"
            >
              &lt;exponential growth&gt;
            </p>
            <h2 className="text-4xl sm:text-7xl font-bold mb-2 libre-franklin">
              Clear Roadmap.
            </h2>
            <p
              className="text-[#8888A5] mt-2 text-[10px]  md:text-[12px] ml-48 sm:ml-90 font-normal lexend-giga"

            >
              &lt;/exponential growth&gt;
            </p>

            <div className="mt-10 max-w-4xl">
              <p className="text-xl md:text-2xl mb-6 font-medium md:font-medium">
                Our programs will teach you everything you need to get your first
                job in tech in as little as 4 months, even if you don't have any
                previous experience.
              </p>
              <p className="text-xl md:text-2xl mb-6 font-medium md:font-medium">
                Take the first step in transforming your career and start learning
                development skills today!
              </p>
              {/* Timeline */}
              <div className="mt-16 w-full md:w-[1350px] max-w-[1250px] mx-auto overflow-x-hidden">
                {/* Desktop View */}

                <div className="hidden md:block w-full max-w-8xl pr-40 mx-auto">
                  {roadmapData.map((track, index) => (
                    <div key={index} className="relative mb-6 flex flex-col">
                      <div className="w-full h-2 bg-black"></div>
                      <div className="flex w-full">
                        <div className="w-30 h-20 bg-black text-xs flex-shrink-0"></div>
                        <div className="flex-1 m-2 overflow-x-auto">
                          <div
                            className={`${track.bgColor} ${track.textColor} text-base font-bold rounded-md py-4 px-4 flex justify-between items-center ubuntu h-16 overflow-hidden`}
                            style={{
                              width: track.width,
                              minWidth: '200px',
                              maxWidth: '100%',

                            }}
                          >
                            <span className="text-lg font-bold">{track.title}</span>
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                                className="flex-shrink-0"
                              >
                                <path
                                  d="M10.0547 20.8501C4.55469 20.8501 0.0546875 16.3501 0.0546875 10.8501C0.0546875 5.3501 4.55469 0.850098 10.0547 0.850098C15.5547 0.850098 20.0547 5.3501 20.0547 10.8501C20.0547 16.3501 15.5547 20.8501 10.0547 20.8501ZM10.0547 2.8501C5.65469 2.8501 2.05469 6.4501 2.05469 10.8501C2.05469 15.2501 5.65469 18.8501 10.0547 18.8501C14.4547 18.8501 18.0547 15.2501 18.0547 10.8501C18.0547 6.4501 14.4547 2.8501 10.0547 2.8501Z"
                                  fill="white"
                                />
                                <path
                                  d="M13.5547 11.8501H10.2547C9.65469 11.8501 9.05469 11.2501 9.05469 10.5501V5.8501C9.05469 5.2501 9.45469 4.8501 10.0547 4.8501C10.6547 4.8501 11.0547 5.2501 11.0547 5.8501V9.8501H13.5547C14.1547 9.8501 14.5547 10.2501 14.5547 10.8501C14.5547 11.4501 14.1547 11.8501 13.5547 11.8501Z"
                                  fill="white"
                                />
                              </svg>
                              <span className="text-lg ml-2">{track.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Mobile View */}
                <div className="md:hidden">
                  {roadmapData.map((track, index) => (
                    <div key={index} className="relative mb-5">
                      <div className="w-full h-[6px] bg-black"></div>
                      <div className="flex items-start">
                        <div className="w-4 h-12 bg-black mr-1 shrink-0"></div>
                        <div className="flex-1 mt-2">
                          <div
                            className={`${track.bgColor} ${track.textColor} rounded-lg p-3 flex justify-between items-center`}
                            style={{ width: track.width }}
                          >
                            <div className="text-[6px] sm:text-sm font-bold pr-1">{track.title}</div>
                            <div className="flex items-center text-xs whitespace-nowrap">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 21 21"
                                fill="none"
                                className="shrink-0"
                              >
                                <path
                                  d="M10.0547 20.8501C4.55469 20.8501 0.0546875 16.3501 0.0546875 10.8501C0.0546875 5.3501 4.55469 0.850098 10.0547 0.850098C15.5547 0.850098 20.0547 5.3501 20.0547 10.8501C20.0547 16.3501 15.5547 20.8501 10.0547 20.8501ZM10.0547 2.8501C5.65469 2.8501 2.05469 6.4501 2.05469 10.8501C2.05469 15.2501 5.65469 18.8501 10.0547 18.8501C14.4547 18.8501 18.0547 15.2501 18.0547 10.8501C18.0547 6.4501 14.4547 2.8501 10.0547 2.8501Z"
                                  fill="white"
                                />
                                <path
                                  d="M13.5547 11.8501H10.2547C9.65469 11.8501 9.05469 11.2501 9.05469 10.5501V5.8501C9.05469 5.2501 9.45469 4.8501 10.0547 4.8501C10.6547 4.8501 11.0547 5.2501 11.0547 5.8501V9.8501H13.5547C14.1547 9.8501 14.5547 10.2501 14.5547 10.8501C14.5547 11.4501 14.1547 11.8501 13.5547 11.8501Z"
                                  fill="white"
                                />
                              </svg>
                              <span className="ml-1 text-[10px] sm:text-xs">{track.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}