const Footerm = () => {
  const URL = import.meta.env.VITE_URL;
  const WHATSAPP = import.meta.env.VITE_WHATSAPP;
  const REGISTER = import.meta.env.VITE_REGISTER;
  const CS_REGISTER = import.meta.env.VITE_CS_REGISTER;

  return (
    <footer className="bg-[#161730] text-white py-12 px-4 md:px-30 rounded-t-[5vw]">
      <div className=" relative container mx-auto flex flex-col md:flex-row gap-10 justify-between">
        <div className="w-full md:w-[50%]">
          <div className="flex items-start mb-12">
            {/* Logo */}
            <div className="mt-4">
              <img
                src="/Logo-white.png"
                alt="The Hacking School"
                className="w-64 h-auto"
              />
            </div>
          </div>

          <p className="text-lg text-[#FFFDF7] opacity-60 mb-12">
            A one of its kind premium India's first coding bootcamp.
            <br />
            Experience unmatched and unprecedented quality of technology
            education in the industry.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-5 my-12">
            <a
              href="https://www.facebook.com/thehackingschool/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center  hover:text-[#161730] transition-colors"
            >
              <img
                src="/footer/facebook.svg"
                alt="Facebook"
                className="w-full h-full"
              />
            </a>
            <a
              href="https://instagram.com/thehackingschool"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center  hover:text-[#161730] transition-colors"
            >
              <img
                src="/footer/insta.svg"
                alt="Instagram"
                className="w-full h-full"
              />
            </a>

            <a
              href="https://www.youtube.com/@merajfaheem"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center  hover:text-[#161730] transition-colors"
            >
              <img
                src="/footer/youtube.svg"
                alt="YouTube"
                className="w-full h-full"
              />
            </a>
            <a
              href="https://in.linkedin.com/school/thehackingschool/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center  hover:text-[#161730] transition-colors"
            >
              <img
                src="/footer/linkedin.svg"
                alt="LinkedIn"
                className="w-full h-full"
              />
            </a>
            <a
              href="https://x.com/thackingschool"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-12 rounded-full flex items-center justify-center  hover:text-[#161730] transition-colors"
            >
              <img
                src="/footer/x.png"
                alt="Twitter"
                className="w-full h-full"
              />
            </a>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <p
              style={{
                color: "#FFFDF7",
                fontFamily: "Ubuntu",
                fontSize: "22px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
              className="mb-8"
            >
              To know more about our coding bootcamp.
            </p>

            <div className="flex flex-col md:flex-row gap-y-5">
              <input
                type="email"
                placeholder="Enter your email ID"
                className="bg-transparent border border-gray-600 rounded-full py-2 px-10 text-lg w-full focus:outline-none focus:border-white"
              />
              <a
                href="https://apply.thehackingschool.com/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white text-[#161730] rounded-full md:ml-8 py-4 px-16 text-lg font-medium hover:bg-gray-200 transition-colors cursor-pointer">
                  Subscribe
                </button>
              </a>

            </div>
          </div>
        </div>
        <div className="w-full md:w-[70%] flex justify-start mt-10 flex-col"> {/* Adjusted width for better spacing */}
          <div className="grid  grid-cols-1 md:grid-cols-3 gap-8 md:gap-0  mb-12">
            {/* Logo and Description Column (Implicitly handled by the first div) */}

            {/* Discover Column */}
            <div className="col-span-1 ">
              <h3 className="text-xl font-bold mb-6">Discover</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/about-us"
                    className="text-[#FFFDF7] opacity-60 hover:text-white ubuntu transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href={WHATSAPP}
                    className="text-[#FFFDF7] opacity-60 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    className="text-[#FFFDF7] opacity-60 hover:text-white transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-[#FFFDF7] opacity-60 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-condition"
                    className="text-[#FFFDF7] opacity-60 hover:text-white transition-colors"
                  >
                    Terms & Condition
                  </a>
                </li>
              </ul>
            </div>

            {/* Partnerships Column */}
            <div className="col-span-1">
              <h3 className="text-xl font-bold mb-6">Partnerships</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/partnerships"
                    className="text-[#FFFDF7] opacity-60 hover:text-white transition-colors"
                  >
                    Hiring
                  </a>
                </li>
                <li>
                  <a
                    href="/partnerships"
                    className="text-[#FFFDF7] opacity-60 hover:text-white transition-colors"
                  >
                    Colleges
                  </a>
                </li>
                <li>
                  <a
                    href="/partnerships"
                    className="text-[#FFFDF7] opacity-60 hover:text-white transition-colors"
                  >
                    Enterprise
                  </a>
                </li>
              </ul>
            </div>

            {/* Courses Column */}
            <div className="col-span-1">
              <h3 className="text-xl font-bold mb-6">Courses</h3>
              <ul className="space-y-3">

                <li>
                  <a
                    href={REGISTER}
                    className="text-[#FFFDF7] opacity-60 hover:text-white transition-colors md:whitespace-nowrap"
                  >
                    Beginners Pre-Bootcamp
                  </a>
                </li>


                <li>
                  <a
                    href="/programs/1"
                    className="text-[#FFFDF7] opacity-60 hover:text-white transition-colors md:whitespace-nowrap"
                  >
                    Full-stack Web Development
                  </a>
                </li>


                <li>
                  <a
                    href="/programs/2"
                    className="text-[#FFFDF7] opacity-60 hover:text-white transition-colors md:whitespace-nowrap"
                  >
                    Full-stack Mobile Development
                  </a>
                </li>


                <li>
                  <a
                    href="/programs/3"
                    className="text-[#FFFDF7] opacity-60 hover:text-white transition-colors md:whitespace-nowrap"
                  >
                    Data Analysis And Machine Learning
                  </a>
                </li>


                <li>
                  <a
                    href={CS_REGISTER}
                    className="text-[#FFFDF7] opacity-60 hover:text-white transition-colors md:whitespace-nowrap"
                  >
                    Full-stack CS Web Engineering
                  </a>
                </li>
                <li>
                  <a
                    href={REGISTER}
                    className="text-[#FFFDF7] opacity-60 hover:text-white transition-colors md:whitespace-nowrap"
                  >
                    UI/UX Design
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Tagline */}

          <div></div>
        </div>
      </div>
      <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-[30%]"></div> {/* Adjusted width to push more to the right */}
        <div className="text-right md:pr-4"> {/* Added right padding for better spacing */}
          <h2 className="text-2xl md:text-6xl">

            Let's build the


            <br />
            <span className="ml-[-2vw] md:ml-[-5vw]">next big thing, together.</span> {/* Added negative margin-left */}
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footerm;