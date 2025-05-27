import React from "react";

const CurriculumTimeline = ({ phases, activePhase, onPhaseClick }) => {
  return (
    <div className="relative hidden md:block py-8 h-full flex flex-col justify-start overflow-hidden">
      {/* Timeline items */}
      <div className="relative z-10 flex flex-col justify-between px-4 space-y-10">
        {phases.map((phase, index) => (
          <div
            key={index}
            className="flex items-center cursor-pointer"
            onClick={() => onPhaseClick(phase.id)}
          >
            {/* Left text aligned to the right */}
            <div className="w-30 pr-2 text-right">
              <div className="font-semibold text-lg uppercase text-gray-800">
                {phase.title}
              </div>
              <div className="text-lg text-gray-600">{phase.subtitle}</div>
            </div>

            {/* Icon in the middle */}
            <div className="mx-3">
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
          </div>
        ))}

        {/* Arrow at the bottom */}
        <div className="flex justify-center mt-4 relative">
          <div
            className="absolute -bottom-1190 right-[-6%] transform -translate-x-1/2"
            style={{ zIndex: -20 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-12 text-gray-200"
              fill="none"
              viewBox="0 0 24 3360"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 980l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumTimeline;
