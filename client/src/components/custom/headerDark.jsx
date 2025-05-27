import React, { useState } from "react";

const HeaderDark = () => {
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
    <header className="w-full py-12 px-12 bg-[#161730] text-white">
      <div className="scale-[0.9] container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/">
            <img
              src="/Logo-white.png"
              alt="The Hacking School Logo"
              className="h-20"
            />
          </a>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center w-full justify-center">
          <div className="flex items-center border border-white w-full border-2 justify-around mx-10 rounded-full px-8 py-6">
            {navItems.map((item) => (
              <React.Fragment key={item.name}>
                <a
                  href={item.href}
                  className="text-white font-bold hover:text-blue-300 font-medium transition-colors px-3"
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
            href="/"
            className="bg-white hover:bg-gray-200 text-[#161730] px-10 py-6 rounded-full font-bold transition-colors"
          >
            APPLY NOW
          </a>
        </div>

        {/* Mobile Menu Button - Only visible on mobile */}
        <button
          className="md:hidden text-white z-50"
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
        <div className="fixed inset-0 bg-[#161730] z-40 md:hidden flex flex-col">
          <div className="container mx-auto px-4 py-20 flex flex-col h-full">
            <div className="flex flex-col items-center space-y-8 mt-10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white font-bold hover:text-blue-300 text-2xl transition-colors px-3 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="mt-10 pt-10 border-t border-gray-600 w-1/2"></div>
              <a
                href="/"
                className="bg-white hover:bg-gray-200 text-[#161730] px-8 py-6 rounded-full font-bold transition-colors text-xl mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                APPLY NOW
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderDark;
