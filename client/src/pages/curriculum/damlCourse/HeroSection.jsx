export default function CoursePageHeroSection() {
    return (
        <section className="py-8 bg-[#161730] text-white relative overflow-hidden p-6">
            <div className="scale-[0.9] container mx-auto px-4 flex flex-col md:flex-row justify-between">
                {/* Left Column - Course Info */}
                <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-10 md:mb-0 ">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-10">Data Analysis & Machine Learning</h1>

                    {/* Rating */}
                    <div className="flex items-center mb-8 my-8">
                        <span className="text-yellow-400 text-2xl font-bold mr-2">5.0</span>
                        <div className="flex text-yellow-400 text-2xl">
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                        </div>
                        <span className="ml-2 text-gray-300">• Beginner</span>
                    </div>

                    {/* Course Description */}
                    <p className="text-2xl mb-8">
                        Learn the data and ML skills you need online —from<br /> non-coding essentials to data science, AI, and ML.
                    </p>

                    {/* Start Course Button */}
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full mb-8">
                        START COURSE
                    </button>

                    {/* Course Stats */}
                    <div className="flex flex-wrap items-center text-sm">
                        <div className="flex items-center mr-6 mb-2 bg-gray-700 rounded-lg px-4 py-2">
                            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path>
                            </svg>
                            <span>17 weeks</span>
                        </div>
                        <div className="flex items-center mr-6 mb-2 bg-gray-700 rounded-lg px-4 py-2">
                            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>
                            </svg>
                            <span>100 Sessions</span>
                        </div>
                        <div className="flex items-center mr-6 mb-2 bg-gray-700 rounded-lg px-4 py-2">
                            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"></path>
                            </svg>
                            <span>5+ Products</span>
                        </div>
                        <div className="flex items-center mb-2 bg-gray-700 rounded-lg px-4 py-2">
                            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"></path>
                            </svg>
                            <span>15 Learners</span>
                        </div>
                    </div>
                </div>

                {/* Right Column - Application Form */}
                <div className="w-full hidden md:block md:w-4/12 bg-white text-black rounded-lg p-6 shadow-lg">
                    <h2 className="text-xl font-bold text-center mb-6">Submit Your Application For Free</h2>

                    {/* Social Login Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-4 px-16">
                        <button className="flex-1 flex items-center justify-center border border-gray-300 rounded-md py-2 px-4">
                            <img src="/course-page/google.png" alt="Google" className="w-5 h-5 mr-2" />
                            <span>Google</span>
                        </button>
                        <button className="flex-1 flex items-center justify-center border border-gray-300 rounded-md py-2 px-4">
                            <img src="/course-page/linkedin.png" alt="LinkedIn" className="w-5 h-5 mr-2" />
                            <span>LinkedIn</span>
                        </button>
                    </div>

                    <div className="flex items-center my-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="px-3 text-gray-500 text-sm">or</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    {/* Form Fields */}
                    <form>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Email Address</label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-full"
                        >
                            Start Course for Free
                        </button>
                    </form>

                    <p className="text-xs text-gray-500 mt-4">
                        By continuing, you accept our <a href="#" className="underline text-blue-400">Terms of Use</a> and <a href="#" className="underline text-blue-400   ">Privacy Policy</a> and that your data is stored.
                    </p>
                </div>
            </div>
        </section>
    );
}
