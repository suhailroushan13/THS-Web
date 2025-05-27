import React from "react";
import college from "../../../public/landing-page/college.png";
import hire from "../../../public/landing-page/hire.png";
import enter from "../../../public/landing-page/enter.png";

export default function LandingPagePartnershipsSection() {
  // Partnership categories data
  const partnershipCategories = [
    {
      id: 1,
      title: "Hiring",
      image: hire,
      url: "/partnerships"
    },
    {
      id: 2,
      title: "Colleges",
      image: college,
      url: "/partnerships"
    },
    {
      id: 3,
      title: "Enterprise",
      image: enter,
      url: "/partnerships"
    }
  ];


  // State for mobile and medium screen carousel
  const [currentCategoryIndex, setCurrentCategoryIndex] = React.useState(0);

  // Navigation functions
  const goToPreviousCategory = () => {
    setCurrentCategoryIndex((prevIndex) =>
      prevIndex === 0 ? partnershipCategories.length - 1 : prevIndex - 1
    );
  };

  const goToNextCategory = () => {
    setCurrentCategoryIndex((prevIndex) =>
      prevIndex === partnershipCategories.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Get two categories for medium screens (current and next)
  const visibleTwoCategories = () => {
    // Current
    const currentIndex = currentCategoryIndex;
    // Next
    const nextIndex =
      currentCategoryIndex === partnershipCategories.length - 1
        ? 0
        : currentCategoryIndex + 1;

    return [partnershipCategories[currentIndex], partnershipCategories[nextIndex]];
  };

  return (
    <section className="bg-white">
      <div className="scale-[0.8] container mx-auto px-4 mb-10 sm:mt-16 md:mt-2">
        {/* Section Header */}
        <div className="mb-10 sm:mb-16 relative text-center">
          <p className="text-[#8888A5] text-[10px] mr-40 md:text-[12px] md:mr-90 font-normal lexend-giga sm:left-[20%]  sm:-top-2">
            &lt;collaborations FTWs&gt;
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-2 libre-franklin">
            Explore Partnerships.
          </h2>
          <p className="text-[#8888A5] text-[10px] ml-40 md:text-[12px] md:ml-110 font-normal lexend-giga sm:right-[30%] sm:-bottom-6">
            &lt;/collaborations FTW&gt;
          </p>
        </div>


        {/* Partnership Description */}
        <div className="text-center mb-10 sm:mb-16 mt-10 sm:mt-20">
          <p className="text-xs sm:text-2xl font-medium px-4">
            Partner with India's leading coding bootcamp to drive innovation and
            growth.
            <span className="italic font-bold  ml-2">Join Our Network!</span>
          </p>
        </div>

        {/* Mobile View - Single Category */}
        <div className="flex sm:hidden justify-center items-center mb-8 mt-10">
          <div className="w-full max-w-sm h-64 sm:h-80 bg-white rounded-xl flex flex-col">
            <a href={partnershipCategories[currentCategoryIndex].url}

              className="w-full max-w-sm h-64 sm:h-80 bg-white rounded-xl flex flex-col cursor-pointer hover:shadow-lg transition"
            >
              <div
                style={{
                  backgroundImage: `url(${partnershipCategories[currentCategoryIndex].image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  objectFit: 'cover',
                }}
                className={`w-full h-full p-5 rounded-lg mb-4 shadow-md`}
              ></div>
              <div className="flex items-center justify-center">
                <div>
                  <h4 className="font-bold text-xl text-center mb-1 mt-3">
                    {partnershipCategories[currentCategoryIndex].title}
                  </h4>
                </div>
              </div>
            </a>

            <div className="flex items-center justify-center">
              <div>
                <h4 className="font-bold text-xl text-center mb-1 mt-3">
                  {partnershipCategories[currentCategoryIndex].title}
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Medium View - Two Categories */}
        <div className="hidden sm:flex lg:hidden justify-center items-center gap-6 mb-10 mt-16">
          {visibleTwoCategories().map((category) => (
            <a
              key={category.id}
              href={category.url}
              className="w-full sm:w-72 md:w-80 h-64 sm:h-80 bg-white rounded-xl flex flex-col cursor-pointer hover:shadow-lg transition"
            >
              <div
                style={{
                  backgroundImage: `url(${category.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  objectFit: 'cover',
                }}
                className={`w-full h-full p-5 rounded-lg mb-4 shadow-md`}
              ></div>
              <div className="flex items-center justify-center">
                <div>
                  <h4 className="font-bold text-xl md:text-2xl text-center mb-1 mt-3">
                    {category.title}
                  </h4>
                </div>
              </div>
            </a>
          ))}

        </div>

        {/* Desktop View - All Three Categories */}
        <div className="hidden lg:flex justify-center items-center gap-8 xl:gap-16 mb-10 mt-20">
          {partnershipCategories.map((category) => (
            <a
              key={category.id}
              href={category.url}
              className="w-80 xl:w-96 h-80 xl:h-96 bg-white rounded-xl flex flex-col cursor-pointer  transition"
            >
              <div
                className="w-full h-full p-5 rounded-lg mb-6 shadow-md bg-cover bg-center object-cover"
                style={{ backgroundImage: `url(${category.image})` }}
              ></div>
              <div className="flex items-center justify-center">
                <div>
                  <h4 className="font-bold text-2xl text-center mb-1 mt-5">
                    {category.title}
                  </h4>
                </div>
              </div>
            </a>
          ))}
        </div>




        {/* Navigation Arrows - Only visible on small and medium screens */}
        <div className="flex lg:hidden justify-center items-center space-x-8 sm:space-x-16 mt-8">
          <button
            onClick={goToPreviousCategory}
            className="flex items-center opacity-80 hover:opacity-100 transition-opacity"
            aria-label="Previous category"
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
          <button
            onClick={goToNextCategory}
            className="flex items-center opacity-80 hover:opacity-100 transition-opacity"
            aria-label="Next category"
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