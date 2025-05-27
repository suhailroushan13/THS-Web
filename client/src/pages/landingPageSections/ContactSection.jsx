export default function LandingPageContactSection() {
  const URL = import.meta.env.VITE_URL;
  const WHATSAPP = import.meta.env.VITE_WHATSAPP;
  const REGISTER = import.meta.env.VITE_REGISTER;
  const CS_REGISTER = import.meta.env.VITE_CS_REGISTER;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Left side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-1">
              QUESTIONS? ASK!
            </h2>

            <p className="text-lg">

              <a href={WHATSAPP} target="_blank" className="text-black font-medium">
                WhatsApp: +91 9959682957
              </a>

            </p>
          </div>

          {/* Right side */}
          <div className="flex items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-1 text-[#C11210]">
                Planning to change your life?
              </h2>
              <p className="text-lg font-medium ubuntu">
                Don't hesitate. We're here to assist you.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Map Card */}

          <form className="bg-gray-200 rounded-lg p-8 flex flex-col justify-between">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              <p className="text-gray-600 text-xs italic">This field is required.</p>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              <p className="text-gray-600 text-xs italic">This field is required.</p>
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="program" className="block text-gray-700 text-sm font-bold mb-2">
                Program Applying For <span className="text-red-500">*</span>
              </label>
              <select
                id="program"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="">Select a program</option>

                <option>Coding Bootcamp - Fullstack Web Dev.</option>
                <option>Coding Bootcamp - Fullstack Mobile Dev.</option>
                <option>Growth Bootcamp - Fullstack Digital Marketing</option>
                <option>Blockchain Workshop</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
                Location Preference <span className="text-red-500">*</span>
              </label>
              <select
                id="location"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option>Select Location</option>
                <option>Hyderabad - HQ</option>
                <option>Bangalore</option>
                <option>Mumbai</option>
                <option>Delhi</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="mt-4 flex justify-center">
              <a
                href={REGISTER}
                className="inline-block bg-[#E7000B] text-center md:text-[20px] text-white font-bold py-3 px-8 rounded-full cursor-pointer"
              >
                Apply Now!
              </a>
            </div>
          </form>

          {/* Contact Info Card */}
          <div className="bg-gray-200 rounded-lg p-8 flex flex-col justify-between h-[360px]">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-3">TALK TO US</h3>
              <p className="text-sm">
                If you have any questions or need
                <br />
                extra info. Contact us!
              </p>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-3">CALL US</h3>
              <p className="text-sm mb-1">Feel free to call us on:</p>
              <a href={WHATSAPP} target="_blank" className="text-[#C11210] font-medium">
                +91 9959 682 957
              </a>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold mb-3">MAIL US</h3>
              <p className="text-sm mb-1">Feel free to mail us on:</p>
              <a
                href="mailto:sadiya@thehackingschool.com"
                className="text-[#C11210] font-medium"
              >
                sadiya@thehackingschool.com
              </a>
            </div>
          </div>

          {/* Location Info Card */}
          <div className="bg-gray-200 rounded-lg p-8 flex flex-col justify-between h-[420px]">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-3">HEAD QUARTERS</h3>
              <a href="https://maps.app.goo.gl/QFYmJUGCz64RuqG96" target="_blank" rel="noopener noreferrer">
                <p className="text-sm text-center">
                  Trillion, 4th Floor, Fortune Towers,
                  <br />
                  Near Wells Fargo, Raidurgam,
                  <br />
                  Hyderabad.
                </p>
              </a>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-3">BRANCHES</h3>
              <p className="text-sm">
                Hyderabad,
                <br />
                Bangalore, Mumbai and Delhi.
              </p>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">MONDAY - SATURDAY</h3>
              <p className="text-sm">09:00 - 21:00</p>
            </div>
            <div className="text-center">
              <div>
                <h3 className="text-xl font-bold mb-2">SUNDAY</h3>
                <p className="text-sm">09:00 - 17:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
