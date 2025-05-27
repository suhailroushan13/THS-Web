export default function CoursePageOutcomes() {
    return (
        <section className="bg-white">
            <div className="scale-[0.9] container mx-auto px-4">
                <h2 className="md:text-6xl text-4xl font-bold my-28">Course Outcomes.</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Training 30% */}
                    <div className="flex">
                        <div className="mr-4">
                            <div className="bg-purple-600 text-white p-4 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="h-1 w-3/4 bg-purple-200 mb-6 mt-6"></div>
                            <h3 className="text-2xl font-bold mb-4">Training 30%</h3>
                            <p className="text-gray-700">
                                The training part will cover 30% of the curriculum guided by instructors. You'll
                                be trained on the MERN Stack to be the best in the industry.
                            </p>
                        </div>
                    </div>

                    {/* World-class content */}
                    <div className="flex">
                        <div className="mr-4">
                            <div className="bg-blue-400 text-white p-4 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="h-1 w-3/4 bg-blue-200 mb-6 mt-6"></div>
                            <h3 className="text-2xl font-bold mb-4">World-class content</h3>
                            <p className="text-gray-700">
                                From in-demand career track to building real-time projects, connect
                                with content curated by leaders at the forefront of web revolution.
                            </p>
                        </div>
                    </div>

                    {/* Development 70% */}
                    <div className="flex">
                        <div className="mr-4">
                            <div className="bg-blue-600 text-white p-4 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="h-1 w-3/4 bg-blue-200 mb-6 mt-6"></div>
                            <h3 className="text-2xl font-bold mb-4">Development 70%</h3>
                            <p className="text-gray-700">
                                Most of the time at the bootcamp you will be spending time playing
                                with the code. Practical application is necessary whenever it comes to
                                becoming a good programmer.
                            </p>
                        </div>
                    </div>

                    {/* Portfolio Building */}
                    <div className="flex">
                        <div className="mr-4">
                            <div className="bg-green-500 text-white p-4 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="h-1 w-3/4 bg-blue-200 mb-6 mt-6 lg:w-full"></div>
                            <h3 className="text-2xl font-bold mb-4">Portfolio Building</h3>
                            <p className="text-gray-700">
                                Building amazing projects<br />
                                Project 1: Team Project (End-to-End Product Development)<br />
                                Project 2: If you have a great product idea, we will help you build that.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}