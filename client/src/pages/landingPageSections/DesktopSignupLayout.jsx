import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function DesktopSignupLayout() {
    const [phone, setPhone] = useState('');

    return (
        <section className="relative  w-full h-screen overflow-hidden ">
            {/* Background Image */}
            <img
                src="/landing-page/div.png"
                alt="Coding Classroom"
                className="w-full h-full object-cover object-center"
            />

            {/* Content over Image */}
            <div className="scale-[0.9] absolute inset-0 flex items-center justify-center">
                <div className="container mx-auto  flex flex-col md:flex-row items-center justify-between gap-32">

                    {/* Left Side - Form */}
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <div className="max-w-lg mx-auto">
                            <h2 className="text-white text-5xl font-bold mb-2 text-center">
                                SIGN UP FOR FREE!
                            </h2>
                            <p className="text-white text-xl italic underline mb-10 text-center">
                                Get access to our courses and newsletter.
                            </p>

                            {/* Form Card */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl">
                                <form className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-full placeholder-black  bg-[#FFFDF7] focus:outline-none"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-full  placeholder-black bg-[#FFFDF7] focus:outline-none"
                                        />
                                    </div>

                                    <div>
                                        <PhoneInput
                                            country={'in'}
                                            value={phone}
                                            onChange={(phone) => setPhone(phone)}
                                            inputStyle={{
                                                width: '100%',
                                                height: '46px',
                                                backgroundColor: '#FFFDF7',
                                                borderRadius: '9999px',
                                                border: '1px solid #D3D3D3',
                                                paddingLeft: '48px',
                                            }}
                                            buttonStyle={{
                                                backgroundColor: '#FFFDF7',
                                                borderTopLeftRadius: '9999px',
                                                borderBottomLeftRadius: '9999px',
                                            }}
                                            containerStyle={{
                                                width: '100%',
                                                borderRadius: '9999px',
                                            }}
                                        />
                                    </div>

                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-full bg-[#FFFDF7] placeholder-black  focus:outline-none"
                                    />

                                    <input
                                        type="text"
                                        placeholder="What Do You Do?"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-full bg-[#FFFDF7] placeholder-black focus:outline-none"
                                    />


                                    <input
                                        type="text"
                                        placeholder="Program Applying For"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-full bg-[#FFFDF7] placeholder-black  focus:outline-none"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Select Country"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-full bg-[#FFFDF7] placeholder-black  focus:outline-none text-gray-500"
                                    />

                                    <div className="flex items-center mt-2">
                                        <input
                                            type="checkbox"
                                            id="terms"
                                            className="h-4 w-4 border-gray-300 rounded"
                                        />
                                        <label htmlFor="terms" className="ml-2 block text-sm text-black">
                                            I agree with <span className="underline">Terms & Condition</span> and <span className="underline">Privacy Policy</span>
                                        </label>
                                    </div>

                                    <a
                                        href="https://apply.thehackingschool.com/register"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button
                                            type="button"
                                            className="mt-4 bg-[#1A1F36] text-xl text-white px-8 py-3 rounded-full font-bold transition-all cursor-pointer"
                                        >
                                            Apply Now
                                        </button>
                                    </a>

                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Heading Text */}
                    <div className="w-full md:w-1/2 pt-24 text-end text-white md:pl-8">
                        <h2 className="text-5xl md:text-[80px] font-bold leading-tight">
                            Experience<br />
                            Your Way Up To<br />
                            The TOP!
                        </h2>

                        <div className="mt-10">
                            <h3 className="text-4xl md:text-[40px] font-bold text-yellow-400 mb-4">
                                Hello! Code Enthusiast,
                            </h3>
                            <p className="text-xl md:text-xl">
                                Enter your details and start your tech journey<br />
                                with The Hacking School, <span className="italic font-light">today</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}