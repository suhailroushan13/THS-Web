import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import WebCoursePage from "./pages/curriculum/webCourse/CoursePage";
import MobileCoursePage from "./pages/curriculum/mobileCourse/CoursePage";
import LandingPage from "./pages/landingPage";
import Footer from "./components/custom/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdmissionsPage from "./pages/admissionsPage";
import PartnershipsPage from "./pages/partnershipsPage";
import DamlCoursePage from "./pages/curriculum/damlCourse/CoursePage";
import MernProgramPage from "./pages/programs/mernProgramPage";
import MobileProgramPage from "./pages/programs/mobileProgramPage";
import DamlProgramPage from "./pages/programs/damlProgeampage";
import ProgramsPage from "./pages/programsPage";
import PdfDownloadPage from "./pages/PdfDownloadPage";
import FaqPage from "./pages/faq"
import AboutUsPage from "./pages/aboutus";
import TermsAndConditions from "./pages/terms";
import PrivacyPolicy from "./pages/privacy";

import SuhailRedirect from "./pages/SuhailRedirect"; // Adjust the path as needed



function App() {
  const location = window.location.pathname;
  const hideFooterRoutes = ["/"];

  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/curriculum" element={<PdfDownloadPage />} />

            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-condition" element={<TermsAndConditions />} />



            <Route path="/programs/1" element={<MernProgramPage />} />
            <Route path="/curriculum/1" element={<WebCoursePage />} />

            <Route path="/curriculum/2" element={<MobileCoursePage />} />
            <Route path="/curriculum/3" element={<DamlCoursePage />} />
            <Route path="/programs/2" element={<MobileProgramPage />} />
            <Route path="/programs/3" element={<DamlProgramPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/partnerships" element={<PartnershipsPage />} />
            <Route path="/suhail" element={<SuhailRedirect />} />
            <Route
              path="*"
              element={
                <div className="container mx-auto py-20 px-4">
                  <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
                  <p>The page you are looking for does not exist.</p>
                </div>
              }
            />
          </Routes>
          {!hideFooterRoutes.includes(location) && <Footer />}
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
