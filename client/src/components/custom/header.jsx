import React, { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: "Programs", href: "/programs" },
    { name: "Curriculum", href: "/curriculum" },
    { name: "Admissions", href: "/admissions" },
    { name: "Partnerships", href: "/partnerships" },
    { name: "About Us", href: "/about-us" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <header className="w-full  py-6 px-8 md:py-15  md:px-30 bg-white">
      <div className="md:scale-[0.9] origin-top w-full">

        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src="/Logo.png"
                alt="The Hacking School Logo"
                className="h-18 mt-4 md:h-20"

              />
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center w-full justify-center">
            <div className="flex items-center border border-gray-900 w-full border-2 justify-around mx-10 rounded-full px-6 py-6">
              {navItems.map((item) => (
                <React.Fragment key={item.name}>
                  <a
                    href={item.href}
                    className="text-black text-lg
 font-bold  transition-colors px-3"
                  >
                    {item.name}
                  </a>
                </React.Fragment>
              ))}
            </div>
          </nav>

          {/* Apply Now Button */}
          <div className="hidden md:flex flex-shrink-0">
            <a
              target="_blank" rel="noopener noreferrer"
              href="https://apply.thehackingschool.com/register"
              className="bg-[#1A1F36]  text-xl
  text-white px-10 py-6 rounded-full font-bold  transition-colors"
            >
              APPLY NOW
            </a>
          </div>

          {/* Mobile Menu Button - Only visible on mobile */}
          <button
            className="md:hidden text-black z-50"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Full Screen Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 md:hidden flex flex-col">
            <div className="container mx-auto px-4 py-20 flex flex-col h-full">
              <div className="flex flex-col items-center space-y-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-black font-bold hover:text-blue-600 text-2xl transition-colors px-3 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                {/* <div className="border-t border-gray-200 w-1/2"></div> */}
                <a
                  target="_blank" rel="noopener noreferrer"
                  href="https://apply.thehackingschool.com/register"
                  className="bg-[#1A1F36] hover:bg-[#2d3456] mb-5 text-white px-8 py-4 rounded-full font-bold transition-colors text-xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  APPLY NOW
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;