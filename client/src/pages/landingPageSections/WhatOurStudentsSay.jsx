import React from "react";
import rida from "../../../public/landing-page/rida.jpeg"
import fawaz from "../../../public/landing-page/fawaz.jpg"
import sara from "../../../public/landing-page/sara.png"

export default function LandingPageWhatOurStudentsSay() {
  // Testimonials data array
  const testimonials = [
    {
      id: 1,
      text: "Grateful for this Bootcamp. Every session leaves me feeling more confident. Huge credit to incredible teaching!",
      name: "Rida Mahveen",
      role: "Student",
      avatar: rida,
    },
    {
      id: 2,
      text: "The Hacking School changed my life. I went from knowing nothing about coding to landing a job as a full-stack developer in just 4 months!",
      name: "Fawaz",
      role: "Student",
      avatar: fawaz,
    },
    {
      id: 3,
      text: "The instructors are amazing and the curriculum is cutting-edge. I'm now working at a startup and using everything I learned every day.",
      name: "Sara",
      role: "Student",
      avatar: sara,
    },
  ];
  // State for testimonial slider
  const [currentTestimonialIndex, setCurrentTestimonialIndex] =
    React.useState(0);
  // Functions to handle testimonial navigation
  const goToPreviousTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Calculate which testimonials to show (current, previous, next)
  const visibleTestimonials = () => {
    // Previous
    const prevIndex =
      currentTestimonialIndex === 0
        ? testimonials.length - 1
        : currentTestimonialIndex - 1;
    // Current
    const currentIndex = currentTestimonialIndex;
    // Next
    const nextIndex =
      currentTestimonialIndex === testimonials.length - 1
        ? 0
        : currentTestimonialIndex + 1;

    return [
      testimonials[prevIndex],
      testimonials[currentIndex],
      testimonials[nextIndex],
    ];
  };

  // Get two testimonials for medium screens (current and next)
  const visibleTwoTestimonials = () => {
    // Current
    const currentIndex = currentTestimonialIndex;
    // Next
    const nextIndex =
      currentTestimonialIndex === testimonials.length - 1
        ? 0
        : currentTestimonialIndex + 1;

    return [testimonials[currentIndex], testimonials[nextIndex]];
  };

  return (
    <section className="pt-20 pb-10 bg-white">
      <div className="container mx-auto px-4 md:mt-2 sm:mt-16">
        {/* Section Header */}
        <div className="mb-10 sm:mb-16 relative text-center">
          <p
            className="text-[#8888A5] lexend-giga text-[7px] md:text-[12px] mb-2 block absolute left-[10%] md:left-[25%] bottom-7 sm:text-[7px]
             md:bottom-15
            "

          >
            &lt;life changing experiences&gt;
          </p>


          <h2 className="text-2xl md:text-6xl font-bold mb-2 libre-franklin">
            What Our Students Say.
          </h2>
          <p
            className="text-[#8888A5] lexend-giga text-[7px] md:text-[12px] mb-2 block absolute left-[45%] md:left-[55%] bottom-7 sm:text-[7px]
             md:bottom-15 md:top-17 top-8"


          >
            &lt;/life changing experiences&gt;
          </p>

        </div>

        {/* Testimonials - Mobile (Single View) */}
        <div className="flex sm:hidden justify-center items-center mb-8 mt-16">
          <div
            key={testimonials[currentTestimonialIndex].id}
            className="w-full max-w-sm p-6 bg-white rounded-xl border border-black shadow-md flex flex-col"
          >
            <p className="text-gray-800 mb-8 flex-grow">
              {testimonials[currentTestimonialIndex].text}
            </p>
            <div className="flex items-center">
              <img
                src={testimonials[currentTestimonialIndex].avatar}
                alt={testimonials[currentTestimonialIndex].name}
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <h4 className="font-bold text-sm mb-1">
                  {testimonials[currentTestimonialIndex].name}
                </h4>
                <p className="text-sm">
                  {testimonials[currentTestimonialIndex].role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials - Medium (Two Views) */}
        <div className="hidden sm:flex md:flex lg:hidden justify-center items-center gap-6 mb-10 mt-20 sm:mt-24 md:mt-28">
          {visibleTwoTestimonials().map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full sm:w-72 md:w-80 h-64 p-6 bg-white rounded-xl border border-black shadow-md flex flex-col"
            >
              <p className="text-gray-800 mb-8 flex-grow">{testimonial.text}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-15 h-15 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-bold text-sm mb-1">{testimonial.name}</h4>
                  <p className="text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials - Desktop (Three Views) */}
        <div className="scale-[0.9] hidden lg:flex justify-center items-center gap-8 xl:gap-16 mb-10 mt-32">
          {visibleTestimonials().map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-80 xl:w-96 h-64 xl:h-72 p-6 bg-white rounded-xl border border-black shadow-md flex flex-col"
            >
              <p className="text-gray-800 mb-8 xl:mb-12 flex-grow text-justify">
                {testimonial.text}
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 xl:w-16 xl:h-16 rounded-full mr-3 object-cover"
                />
                <div>
                  <h4 className="font-bold text-sm mb-1">{testimonial.name}</h4>
                  <p className="text-sm">{testimonial.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center space-x-8 sm:space-x-16 mt-8 sm:mt-12">
          <button
            onClick={goToPreviousTestimonial}
            className="flex items-center opacity-80 hover:opacity-100 transition-opacity group cursor-pointer"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="18" viewBox="0 0 19 18" fill="none">
              <g opacity="0.8">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.41436 10.0001L10.7073 16.293L9.293 17.7072L0.585938 9.0001L9.293 0.292969L10.7073 1.70718L4.41436 8.0001H19.0002V10.0001H4.41436Z" fill="#1E1E2F" />
              </g>
            </svg>
          </button>
          <button
            onClick={goToNextTestimonial}
            className="flex items-center opacity-80 hover:opacity-100 transition-opacity group cursor-pointer"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
              <g opacity="0.8">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5856 8.00008L8.2927 1.70719L9.707 0.292986L18.4141 9.00008L9.707 17.7072L8.2927 16.293L14.5856 10.0001H-0.000198364V8.00008H14.5856Z" fill="#1E1E2F" />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </section >
  );
}
