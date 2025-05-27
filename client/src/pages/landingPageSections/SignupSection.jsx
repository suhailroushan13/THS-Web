import { useEffect, useState } from "react";
import MobileSignupLayout from "./MobileSignupLayout"
import DesktopSignupLayout from "./DesktopSignupLayout";


export default function LandingPageSignupSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? <MobileSignupLayout /> : <DesktopSignupLayout />;
}
