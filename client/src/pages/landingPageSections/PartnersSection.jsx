import React from "react";

export default function LandingPagePartnersSection() {
  // Partners/Clients data array - Updated to match the logos in the image
  const partnersData = [
    {
      id: 1,
      name: "iCollege Limited",
      logo: "/landing-page/iCollege Limited.png",
    },
    { id: 2, name: "Google", logo: "/landing-page/Google.jpg" },
    { id: 3, name: "Tech Domains", logo: "/landing-page/Tech Domains.png" },
    { id: 4, name: "Salesforce", logo: "/landing-page/Salesforce.png" },
    { id: 5, name: "Switch Maven", logo: "/landing-page/Switch Maven.png" },
    { id: 6, name: "Amazon", logo: "/landing-page/Amazon.png" },
  ];

  // State for partners slider (for desktop view)
  const [currentPartnerIndex, setCurrentPartnerIndex] = React.useState(0);

  // Functions to handle partners navigation
  const goToPreviousPartner = () => {
    setCurrentPartnerIndex((prevIndex) =>
      prevIndex === 0 ? partnersData.length - 1 : prevIndex - 1
    );
  };

  const goToNextPartner = () => {
    setCurrentPartnerIndex((prevIndex) =>
      prevIndex === partnersData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Calculate which partners to show based on screen size
  const getVisiblePartners = (count) => {
    const result = [];
    for (let i = 0; i < count; i++) {
      const index = (currentPartnerIndex + i) % partnersData.length;
      result.push(partnersData[index]);
    }
    return result;
  };

  return (
    <section className="bg-white pb-20 sm:py-24 md:p-0">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Partners Header - Centered for mobile, flex for larger screens */}
        <div className="flex flex-col sm:flex-row justify-center items-center mb-8 sm:mb-12 text-center sm:text-left">
          <p className="text-black text-opacity-60  text-xl sm:text-lg font-bold leading-tight mb-3 sm:mb-0 sm:mr-2 px-2 sm:px-0">
            Trusted by the world's most ambitious tech teams.
          </p>

          <div className="flex items-center text-red-600">
            <p className="font-bold text-lg sm:text-base md:text-lg italic">
              Let's Partner Up. <span className="inline-block">→</span>
            </p>
          </div>
        </div>

        {/* Mobile Partners Grid View (matches the image) */}
        <div className="sm:hidden">
          <div className="grid grid-cols-3 gap-4">
            {partnersData.map((partner) => (
              <div
                key={partner.id}
                className="flex items-center justify-center h-16 p-2"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Small Tablet Partners (2 at a time) - Keep as is for desktop views */}
        <div className="hidden sm:flex md:hidden relative justify-center items-center py-2">
          <button
            onClick={goToPreviousPartner}
            className="absolute left-0 z-10 p-2"
            aria-label="Previous partners"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#1E1E2F"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div className="flex justify-center items-center space-x-6 px-12">
            {getVisiblePartners(2).map((partner) => (
              <div
                key={partner.id}
                className="flex items-center justify-center h-16"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full w-auto object-contain"
                />
              </div>
            ))}
          </div>

          <button
            onClick={goToNextPartner}
            className="absolute right-0 z-10 p-2"
            aria-label="Next partners"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#1E1E2F"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Medium Tablet Partners (3 at a time) - Keep as is for desktop views */}
        <div className="hidden md:flex lg:hidden relative justify-center items-center py-2">
          <button
            onClick={goToPreviousPartner}
            className="absolute left-0 z-10 p-2"
            aria-label="Previous partners"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#1E1E2F"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div className="flex justify-center items-center space-x-4 md:space-x-6 px-10">
            {getVisiblePartners(3).map((partner) => (
              <div
                key={partner.id}
                className="flex items-center justify-center h-16"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full w-auto max-w-full object-contain"
                />
              </div>
            ))}
          </div>

          <button
            onClick={goToNextPartner}
            className="absolute right-0 z-10 p-2"
            aria-label="Next partners"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#1E1E2F"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Partners (4+ at a time) - Keep as is for desktop views */}
        <div className="hidden lg:flex relative justify-center items-center pb-20">
          <button
            onClick={goToPreviousPartner}
            className="absolute left-0 z-10 p-2"
            aria-label="Previous partners"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#1E1E2F"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div className=" flex justify-center items-center space-x-4 xl:space-x-8 px-10">
            {getVisiblePartners(6).map((partner) => (
              <div
                key={partner.id}
                className="flex items-center justify-center h-20 lg:h-20"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full  max-w-full w-auto object-contain"
                />
              </div>
            ))}
          </div>

          <button
            onClick={goToNextPartner}
            className="absolute right-0 z-10 p-2"
            aria-label="Next partners"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#1E1E2F"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}