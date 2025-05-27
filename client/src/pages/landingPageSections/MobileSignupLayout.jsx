import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';

import 'react-phone-input-2/lib/style.css';

export default function MobileSignupLayout() {
    const [phone, setPhone] = useState('');
    return (
        <>
            {/* Hero Section */}
            <section className="mt-20 relative w-full h-70 overflow-hidden md:hidden">
                {/* Background image */}
                <div className="absolute inset-0 w-full h-100 z-0">
                    <img
                        src="/landing-page/div.png"
                        alt="Coding Classroom"
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                {/* Content on top of image */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
                    <h1
                        className="text-white font-bold text-[30px] leading-[33px] libre-franklin"
                        style={{
                            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        }}
                    >
                        Experience
                        <br />
                        Your Way Up To
                        <br />
                        The TOP!
                    </h1>
                    <p className="text-[#FED11B] font-bold text-lg mt-4">
                        Hello! Code Enthusiast,
                    </p>
                    <br />
                    <p className="text-white mt-2 text-sm font-normal leading-loose">
                        Enter your details and start your to-do journey
                        <br />
                        with The Hacking School, <span className="italic">today.</span>
                    </p>

                </div>
            </section >

            {/* Mobile-Only Signup Form Section */}
            < section className="bg-white px-4 py-10 md:hidden" >
                <div className="shadow-xl w-full max-w-[100%] mx-auto rounded-2xl">
                    <div className="p-6">
                        <h2 className="text-black text-2xl tracking-wide font-bold mb-2 text-center libre-franklin">
                            SIGN UP FOR FREE!
                        </h2>
                        <p className="text-black text-sm underline italic font-bold mb-6 mt-4 text-center ubuntu">
                            Get access to our courses and newsletter.
                        </p>

                        <form className="space-y-4 px-2">
                            <div className="grid grid-cols-1 gap-4">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-full bg-[#FFFDF7] focus:outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-full bg-[#FFFDF7] focus:outline-none"
                                />
                            </div>
                            <div className="w-full max-w-md">
                                <PhoneInput
                                    country={'in'}
                                    value={phone}
                                    onChange={(phone) => setPhone(phone)}
                                    inputStyle={{
                                        width: '100%',
                                        height: '45px',
                                        backgroundColor: '#FFFDF7',
                                        borderRadius: '9999px', // rounded-full
                                        border: '1px solid #D3D3D3',
                                        paddingLeft: '48px',
                                    }}
                                    buttonStyle={{
                                        backgroundColor: '#FFFDF7',
                                        borderTopLeftRadius: '9999px',
                                        borderBottomLeftRadius: '9999px',
                                    }}
                                    containerStyle={{
                                        borderRadius: '9999px',
                                        overflow: 'hidden',
                                    }}
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-2 border border-gray-300 rounded-full bg-[#FFFDF7] focus:outline-none"
                            />

                            <input
                                type="text"
                                placeholder="What Do You Do?"
                                className="w-full px-4 py-2 border border-gray-300 rounded-full bg-[#FFFDF7] focus:outline-none"
                            />

                            <input
                                type="text"
                                placeholder="Program Applying For"
                                className="w-full px-4 py-2 border border-gray-300 rounded-full bg-[#FFFDF7] focus:outline-none"
                            />

                            <select className="w-full px-4 py-2 border border-gray-300 rounded-full bg-[#FFFDF7] focus:outline-none text-gray-500 appearance-none">
                                <option value="">Select Country</option>
                                <option value="india">India</option>
                                <option value="usa">USA</option>
                                <option value="uk">UK</option>
                                <option value="canada">Canada</option>
                                <option value="australia">Australia</option>
                            </select>

                            <div className="flex items-start pt-2">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="h-4 w-4 border-gray-300 rounded"
                                />
                                <label htmlFor="terms" className="ml-2 block text-[10px] text-black">
                                    I agree with <span className="underline">Terms & Condition</span> and{" "}
                                    <span className="underline">Privacy Policy</span>
                                </label>
                            </div>

                            <button
                                onClick={() => window.open("https://apply.thehackingschool.com/register", "_blank", "noopener,noreferrer")}
                                type="button"
                                className="bg-[#161730] text-[20px] hover:bg-[#161730] text-white py-3 px-6 md:py-3 md:px-10 rounded-full font-bold transition-colors cursor-pointer"
                            >
                                Apply Now
                            </button>

                        </form>
                    </div>
                </div>
            </section >
        </>
    );
}
