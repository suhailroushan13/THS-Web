import React from "react";
import Header from "../components/custom/header";
import Footer from "../components/custom/footer";
const URL = import.meta.env.VITE_URL;
const WHATSAPP = import.meta.env.VITE_WHATSAPP;
const REGISTER = import.meta.env.VITE_REGISTER;
const CS_REGISTER = import.meta.env.VITE_CS_REGISTER;

const HowToEnroll = () => {




  return (
    <section className="py-8 px-8 md:px-48 bg-white">
      <div className="container mx-auto">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold md:mb-24 mb-10">
            Application Process.
          </h1>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold md:mb-10 mb-2">
          How To Enrol:
        </h2>
        <div className="">
          <p className="text-[14px] md:text-[24px] lg:text-2xl mb-14 leading-relaxed ">
            At The Hacking School, we truly believe that anyone can learn to
            code, regardless of their academic or professional background. After
            teaching ~7000+ students, we have found that{" "}
            <strong>
              determination is the #1 factor to student success - NOT coding
              experience.
            </strong>{" "}
            That's why our admissions process does not include a coding
            challenge or explicit tech skills.
          </p>
          <p className="text-[12px] md:text-lg lg:text-2xl font-bold italic mb-4">
            Since we are quality obsessed, the program in-spite of having a low
            barrier to entry, is highly selective.
          </p>
        </div>
      </div>
    </section>
  );
};

const ApplicationSteps = () => {
  return (
    <section className="py-12  px-8 md:px-16 bg-[#1a1a2e]">
      <div className="container md:pl-30 md:pr-30 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Research Step */}
          <div className="flex gap-12">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <img
                  src="/admissions-page/explore.svg"
                  alt="Research"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
                Research (optional)
              </h3>
              <p className="text-white text-sm md:text-base mb-2">
                <span className="text-[#FED11B]">
                  Schedule a Q&A call with Admissions
                </span>{" "}
                to get quick answers about the bootcamp.
              </p>
            </div>
          </div>

          {/* Submit Application Step */}
          <div className="flex gap-12">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <img
                  src="/admissions-page/submit.svg"
                  alt="Submit Application"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
                Submit Application
              </h3>
              <p className="text-white text-sm md:text-base mb-2">
                The first step is to{" "}
                <span className="text-[#FED11B]">submit your application</span>
                . The application process is straightforward and will only take
                you a few minutes to complete. The application form asks for
                some basic information.
              </p>
            </div>
          </div>

          {/* Phone Screening Step */}
          <div className="flex gap-12">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <img
                  src="/admissions-page/call.svg"
                  alt="Phone Screening"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
                Phone Screening
              </h3>
              <p className="text-white text-sm md:text-base mb-2">
                Once we receive your application, our admissions team will
                review it and contact you to{" "}
                <span className="text-[#FED11B]">
                  schedule a phone screening
                </span>
                . The phone screening is an opportunity for us to learn more
                about you, your interests, and your goals. It also gives you a
                chance to ask any questions you may have about the bootcamp
                programs.
              </p>
            </div>
          </div>

          {/* Statement Of Purpose Step */}
          <div className="flex gap-12">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <img
                  src="/admissions-page/purpose.svg"
                  alt="Statement Of Purpose"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
                Statement Of Purpose
              </h3>
              <p className="text-white text-sm md:text-base mb-2">
                The SOP is a crucial part of the  <span className="text-[#FED11B]">
                  admission application process
                </span>.
                The admission committee and supervisors go through the statement
                of purpose to check your thought process and program fitness.
              </p>
            </div>
          </div>

          {/* Interview Round Step */}
          <div className="flex gap-12">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <img
                  src="/admissions-page/vc.svg"
                  alt="Interview Round"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
                Interview Round
              </h3>
              <p className="text-white text-sm md:text-base mb-2">
                Once you've cleared the technical assessment and submitted your
                SOP, you'll be scheduled an interview with us. The interview
                will be conducted online and will focus on your programming
                background, and motivation for pursuing a career in tech.  <span className="text-[#FED11B]">
                  The
                  interview will be conducted by our admissions team
                </span>., and it will
                be an opportunity for us to get to know you better.
              </p>
            </div>
          </div>

          {/* Seat Booking Deposit Step */}
          <div className="flex gap-12">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <img
                  src="/admissions-page/cash.svg"
                  alt="Seat Booking Deposit"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
                Seat Booking Deposit
              </h3>
              <p className="text-white text-sm md:text-base mb-2">
                Based on your application, evaluation call, SoP and interview,
                we will make a decision about your admission.  <span className="text-[#FED11B]">
                  The
                  interview will be conducted by our admissions team
                </span>. The board of
                admission will be issued to qualified applicants and the results
                will be communicated to you by the program team. You will
                confirm your acceptance by paying the program fee (seat booking
                deposit).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const UpcomingBatches = () => {
  return (
    <section className="py-8 px-8 md:px-16 mt-18 bg-[#E9E9E8] md:pb-52">
      <div className="container mx-auto">
        <h2 className="text-xl md:text-[48px] lg:text-[48px] font-bold mb-10 text-center">
          Upcoming Program Batches.
        </h2>
        <div className="flex flex-col gap-8 max-w-7xl mx-auto">
          <a href="/programs/1" className="text-white font-bold cursor-pointer">
            <div className="bg-[#161631] text-white py-4 px-4 rounded-full flex flex-col md:flex-row justify-center items-center text-center gap-2 md:gap-4 text-[12px] md:text-lg lg:text-xl">
              <span className="font-bold">
                ACCEPTING APPLICATIONS FOR WEB DEVELOPMENT BOOTCAMP.
              </span>
              <span className="font-bold text-[#FDC601] underline">
                APPLY NOW.
              </span>
            </div>
          </a>

          <a href="/programs/2" className="text-white font-bold cursor-pointer">
            <div className="bg-[#161631] text-white py-4 px-4 rounded-full flex flex-col md:flex-row justify-center items-center text-center gap-2 md:gap-4 text-[12px] md:text-lg lg:text-xl">
              <span className="font-bold">
                ACCEPTING APPLICATIONS FOR MOBILE DEVELOPMENT BOOTCAMP.
              </span>
              <span className="font-bold text-[#FDC601] underline">
                APPLY NOW.
              </span>
            </div>
          </a>

          <a href="/programs/3" className="text-white font-bold cursor-pointer">
            <div className="bg-[#161631] text-white py-4 px-4 rounded-full flex flex-col md:flex-row justify-center items-center text-center gap-2 md:gap-4 text-[12px] md:text-lg lg:text-xl">
              <span className="font-bold">
                ACCEPTING APPLICATIONS FOR DATA ANALYSIS & ML BOOTCAMP.
              </span>
              <span className="font-bold text-[#FDC601] underline">
                APPLY NOW.
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};




const QuestionsSection = () => {
  return (
    <section className="px-8 -mt-[150px] md:px-16 mb-20">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-14 text-center">
          Still Have Questions?
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <a
            href="#"
            className="bg-white text-black py-5 px-10 text-sm md:text-base lg:text-lg rounded-full border-2 border-black font-bold text-center"
          >
            Attend an Info-session
          </a>
          <a
            href="#"
            className="bg-[#161631] text-white py-5 px-10 text-sm md:text-base lg:text-lg rounded-full font-bold text-center"
          >
            Talk to Admissions
          </a>
        </div>
      </div>
    </section>
  );
};

const MobileQuestionSection = () => {
  return (
    <section className="px-4 py-8 md:hidden">
      <div className="bg-white  p-6">
        <h2 className="text-xl font-bold mb-6 text-center">
          Still Have Questions?
        </h2>
        <div className="flex flex-col gap-4">
          <a
            href={WHATSAPP}
            className="bg-white text-black py-4 px-6 text-sm rounded-full border-2 border-black font-bold text-center"
          >
            Attend an Info-session
          </a>
          <a
            href={WHATSAPP}
            className="bg-[#161631] text-white py-4 px-6 text-sm rounded-full font-bold text-center"
          >
            Talk to Admissions
          </a>
        </div>
      </div>
    </section>
  );
};

const AdmissionsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HowToEnroll />
        <ApplicationSteps />
        <UpcomingBatches />

        {/* Desktop / Tablet Questions Section */}
        <div className="hidden md:block">
          <QuestionsSection />
        </div>

        {/* Mobile-only Questions Section */}
        <div className="block md:hidden">
          <MobileQuestionSection />
        </div>
      </main>
    </div>
  );
};

export default AdmissionsPage;

