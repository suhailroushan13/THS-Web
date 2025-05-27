import React from "react";

const CurriculumTimelineHorizontal = ({
  phases,
  activePhase,
  onPhaseClick,
}) => {
  return (
    <div className="relative block md:hidden py-6 w-full">
      {/* Horizontal line */}
      <div className="absolute left-0 right-0 top-[42px] w-[98%] h-1 bg-gray-200"></div>

      {/* Timeline items */}
      <div className="relative z-10 flex flex-row overflow-x-auto scroll-hide pb-6 space-x-8 px-4">
        {phases.map((phase, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer min-w-[120px]"
            onClick={() => onPhaseClick(phase.id)}
          >
            {/* Icon at the top */}
            <div className="mb-3">
              <div
                className={`w-12 h-12 rounded-md flex items-center justify-center
                  ${
                    phase.id === "graduation"
                      ? "bg-gray-200 text-gray-700"
                      : phase.id.startsWith("warmup")
                        ? "bg-black text-white"
                        : "bg-black text-white"
                  }`}
              >
                {phase.id === "graduation" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                ) : phase.id.startsWith("warmup") ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                )}
              </div>
            </div>

            {/* Text below icon, center aligned */}
            <div className="text-center">
              <div className="font-semibold text-lg uppercase text-gray-800">
                {phase.title}
              </div>
              <div className="text-sm text-gray-600">{phase.subtitle}</div>
            </div>
          </div>
        ))}

        {/* Right arrow */}
        <div className="flex items-start justify-center relative">
          <div className="pl-2 translate-x-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumTimelineHorizontal;
