import React from 'react';
import Header from '../components/custom/header';
import Footer from '../components/custom/footer';
import LandingPagePartnersSection from './landingPageSections/PartnersSection';


const WHATSAPP = import.meta.env.VITE_WHATSAPP;

const HireTopTalent = () => {
  return (
    <section className="px-8  md:px-42 bg-white">
      <div className="md:py-0 py-6 container mx-auto">
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight md:leading-tight lg:leading-20">
          Be The First To<br />
          Hire Top Tech Talent.
        </h1><p className="text-xl font-semibold md:text-3xl lg:text-[45px]  mt-8 leading-relaxed md:leading-relaxed lg:leading-14 ">
          Discover top-tier tech talent faster than ever and<br />
          streamline your recruitment process while cutting costs.
        </p>
        <div className="flex flex-col lg:flex-row gap-12 items-start w-full justify-between mt-10">
          <div className="lg:w-7/12">

            <p className="text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed">
              <span className="hidden lg:inline">At The Hacking School, we're not just a coding <br /></span>
              <span className="lg:hidden">At The Hacking School, we're not just a coding </span>
              <span className="hidden lg:inline">bootcamp; we're a talent incubator. Our graduates are <br /></span>
              <span className="lg:hidden">bootcamp; we're a talent incubator. Our graduates are </span>
              <span className="hidden lg:inline">industry-ready software developers, well-versed in the <br /></span>
              <span className="lg:hidden">industry-ready software developers, well-versed in the </span>
              latest technologies and best practices.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 leading-relaxed">
              <span className="hidden lg:inline">If you're looking to hire exceptional tech talent, <br /></span>
              <span className="lg:hidden">If you're looking to hire exceptional tech talent, </span>
              you've come to the right place.
            </p>
            <a href={WHATSAPP} className="bg-[#161631] text-white py-3 px-8 mt-2 rounded-full font-bold inline-block text-lg cursor-pointer">
              Contact Us
            </a>
          </div>
          <div className="lg:w-5/12 h-full">
            <img
              src="/partnerships-page/team.png"
              alt="The Hacking School Graduates"
              className="rounded-lg w-full h-auto "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyHireSection = () => {
  return (
    <section className="py-5 px-8 md:px-16">
      <div className="container md:p-30 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Why Hire From The Hacking School?
        </h2>

        <p className="text-lg md:text-2xl mb-8 max-w-7xl mx-auto">
          Expand with fresh, qualified talent.<br />
          In today's fast-changing environment, scaling your team with tech-savvy professionals helps you stay
          competitive, enabling faster decision-making and achieving results more efficiently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-green-500 flex-shrink-0 mr-3 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 18 18" fill="none">
                <g clip-path="url(#clip0_407_50)">
                  <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="#00C573" />
                  <path d="M5.7583 9.36019L7.9165 11.5202L12.2383 7.2002" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_407_50">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span className="text-xl font-medium">Diverse Skillset</span>
          </div>

          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-green-500 flex-shrink-0 mr-3 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 18 18" fill="none">
                <g clip-path="url(#clip0_407_50)">
                  <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="#00C573" />
                  <path d="M5.7583 9.36019L7.9165 11.5202L12.2383 7.2002" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_407_50">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span className="text-[19px] font-medium">Continuous Learning mindset</span>
          </div>

          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-green-500 flex-shrink-0 mr-3 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 18 18" fill="none">
                <g clip-path="url(#clip0_407_50)">
                  <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="#00C573" />
                  <path d="M5.7583 9.36019L7.9165 11.5202L12.2383 7.2002" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_407_50">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span className="text-xl font-medium">Tailored To Your Needs</span>
          </div>

          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-green-500 flex-shrink-0 mr-3 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 18 18" fill="none">
                <g clip-path="url(#clip0_407_50)">
                  <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="#00C573" />
                  <path d="M5.7583 9.36019L7.9165 11.5202L12.2383 7.2002" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_407_50">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span className="text-xl font-medium">A global network</span>
          </div>

          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-green-500 flex-shrink-0 mr-3 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 18 18" fill="none">
                <g clip-path="url(#clip0_407_50)">
                  <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="#00C573" />
                  <path d="M5.7583 9.36019L7.9165 11.5202L12.2383 7.2002" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_407_50">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span className="text-[19px] font-medium">Industry-Ready Professionals</span>
          </div>

          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-green-500 flex-shrink-0 mr-3 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 18 18" fill="none">
                <g clip-path="url(#clip0_407_50)">
                  <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="#00C573" />
                  <path d="M5.7583 9.36019L7.9165 11.5202L12.2383 7.2002" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_407_50">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span className="text-xl font-medium">Hands-On Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="py-12 px-8  md:px-16 md:py-10 mb-20 bg-[#161631] text-white">
      <div className=" container md:p-30 mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:w-1/2">
            <ul className="text-4xl md:text-5xl lg:text-6xl ubuntu font-semibold mb-10 md:leading-20">
              Find The Right<br />
              Tech Talent For<br />
              Your Team.
            </ul>

            <ul className="space-y-10 text-lg md:text-2xl ubuntu">
              <li className="flex items-start">
                <span className="text-2xl mr-3">•</span>
                <span>Meet our graduates to find the tech talent that meet your needs.</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">•</span>
                <span>Reduce your recruitment costs and time.</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">•</span>
                <span>Recruit the right candidate by assessing their skills.</span>
              </li>
            </ul>
          </div>


          <div className="lg:w-1/2 bg-white text-black p-4 md:p-8 rounded-4xl">
            <ul className="text-xl md:text-4xl font-bold mb-8 mt-6 text-center">Become a hiring partner.</ul>

            <form className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-1">First name<span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Sadiya"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                  required
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last name<span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Sabera"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email<span className="text-red-500">*</span></label>
                <input
                  type="email"
                  id="email"
                  placeholder="sadiya@code.in"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone number<span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+91"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                  required
                />
              </div>

              <div>
                <label htmlFor="jobTitle" className="block text-sm font-medium mb-1">Job title<span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="jobTitle"
                  placeholder="Head of talents"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">Company name<span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="company"
                  placeholder="What is your company name?"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message<span className="text-red-500">*</span></label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mr-2"
                  required
                />
                <label htmlFor="privacy" className="text-[13px] md:text-sm">
                  By submitting this form, I accept The Hacking School <a href="#" className="text-blue-600 underline">Privacy Policy</a>
                </label>
              </div>

              <button
                type="submit"
                className="bg-[#161631] text-white px-4 py-3 md:px-8 md:py-4  rounded-full w-30 font-bold md:w-[100px] md:w-auto"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const PartnershipsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HireTopTalent />
        <WhyHireSection />
        <ContactSection />
        <LandingPagePartnersSection />

      </main>
    </div>
  );
};

export default PartnershipsPage;
