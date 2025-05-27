import LandingPageHeroSection from "./landingPageSections/HeroSection";
import LandingPageFocusSection from "./landingPageSections/FocusSection";
import LandingPageCareerDirection from "./landingPageSections/CareerDirection";
import LandingPageSignupSection from "./landingPageSections/SignupSection";
import LandingPageMissionSection from "./landingPageSections/MissionSection";
import LandingPageProgramsOptionsSection from "./landingPageSections/ProgramsOptionsSection";
import LandingPageProgramsSection from "./landingPageSections/ProgramsSection";
import LandingPageClearRoadmap from "./landingPageSections/ClearRoadmap";
import LandingPageCallToAction from "./landingPageSections/CallToAction";
import LandingPageThreeSimpleSteps from "./landingPageSections/ThreeSimpleSteps";
import LandingPageGlobalClassrooms from "./landingPageSections/GlobalClassrooms";
import LandingPageWhatOurStudentsSay from "./landingPageSections/WhatOurStudentsSay";
import LandingPagePartnershipsSection from "./landingPageSections/PartnershipsSection";
import LandingPagePartnersSection from "./landingPageSections/PartnersSection";
import LandingPageHackingSchoolSection from "./landingPageSections/HackingSchoolSection";
import LandingPageMediaLoveSection from "./landingPageSections/MediaLoveSection";
import LandingPageStudyNowSection from "./landingPageSections/StudyNowSection";
import LandingPageContactSection from "./landingPageSections/ContactSection";
import Header from "../components/custom/header";
import Footerm from "../components/custom/mfooter";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <LandingPageHeroSection />
      <LandingPageFocusSection />
      <LandingPageCareerDirection />
      <LandingPageSignupSection />
      <LandingPageMissionSection />
      <LandingPageProgramsOptionsSection />
      <LandingPageProgramsSection />
      <LandingPageClearRoadmap />
      <LandingPageCallToAction />
      <LandingPageThreeSimpleSteps />
      <LandingPageGlobalClassrooms />
      <LandingPageWhatOurStudentsSay />
      <LandingPagePartnershipsSection />
      <LandingPagePartnersSection />
      <LandingPageHackingSchoolSection />
      <LandingPageMediaLoveSection />
      <LandingPageStudyNowSection />
      <LandingPageContactSection />

      <Footerm />
    </div>
  );
};

export default LandingPage;
