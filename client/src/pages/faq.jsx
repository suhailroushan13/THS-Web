import { useState } from "react";
import Header from "../components/custom/header";

const FAQPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const REGISTER = import.meta.env.VITE_REGISTER;
    const WHATSAPP = import.meta.env.VITE_WHATSAPP;

    const faqs = [
        {
            question: "What is The Hacking School?",
            answer:
                "The Hacking School is India’s first coding bootcamp that focuses on teaching the most in-demand tech skills, helping students and professionals become job-ready in a few months."
        },
        {
            question: "What programs do you offer?",
            answer:
                "We offer bootcamps in Full-stack Web Development, Full-stack Mobile Development, Data Analysis and Machine Learning, UI/UX Design, and a comprehensive CS Web Engineering track."
        },
        {
            question: "Do I need prior coding experience?",
            answer:
                "No! Our Pre-Bootcamp program is designed to help complete beginners get started and prepare for the main bootcamps."
        },
        {
            question: "What is the duration of the programs?",
            answer:
                "Our programs range from 6 weeks (Pre-Bootcamp) to 18 weeks (Full-stack Web or Mobile) to 12 months (CS Web Engineering)."
        },
        {
            question: "Do you provide job placement assistance?",
            answer:
                "Yes, we have a 97% employment rate and provide portfolio building, resume support, mock interviews, and connect students with top companies."
        }
    ];

    const toggleIndex = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <Header />
            <div className="max-w-4xl mx-auto p-6 mb-20">
                <h2 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border-b border-gray-300 py-4 cursor-pointer"
                        onClick={() => toggleIndex(index)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-semibold">{faq.question}</h3>
                            <span className="text-2xl">{activeIndex === index ? "-" : "+"}</span>
                        </div>
                        {activeIndex === index && (
                            <p className="mt-2 text-gray-700 text-base">{faq.answer}</p>
                        )}
                    </div>
                ))}

                <div className="flex flex-col md:flex-row justify-center mt-10 space-y-4 md:space-y-0 md:space-x-6">
                    <a href={REGISTER} target="_blank" rel="noopener noreferrer">
                        <button className="flex w-full md:w-[325px] h-[50px] md:h-[94px] px-4 md:px-[75px] justify-center items-center cursor-pointer rounded-full border border-[#161631] text-white text-center font-ubuntu text-sm md:text-[24px] font-bold uppercase bg-[#161631]">
                            APPLY NOW!
                        </button>
                    </a>

                    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                        <button className="flex w-full md:w-auto h-[50px] md:h-auto py-4 px-4 md:py-6 md:px-12 rounded-full border border-[#161631] bg-white text-[#161631] text-[10px] md:text-xl lg:text-2xl font-bold items-center justify-center">
                            <span className="flex-grow text-center">TALK TO THE TEAM!</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 flex-shrink-0" width="20" height="20" viewBox="0 0 45 44" fill="none">
                                <path d="M20.5209 8.85409C19.7155 8.04864 18.4095 8.04864 17.6041 8.85409C16.7986 9.65953 16.7986 10.9655 17.6041 11.7709L20.5209 8.85409ZM30.75 22L32.2083 23.4584C33.0138 22.653 33.0138 21.347 32.2083 20.5416L30.75 22ZM17.6041 32.2292C16.7986 33.0346 16.7986 34.3403 17.6041 35.1458C18.4095 35.9513 19.7155 35.9513 20.5209 35.1458L17.6041 32.2292ZM17.6041 11.7709L29.2917 23.4584L32.2083 20.5416L20.5209 8.85409L17.6041 11.7709ZM29.2917 20.5416L17.6041 32.2292L20.5209 35.1458L32.2083 23.4584L29.2917 20.5416Z" fill="#161631" />
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
};

export default FAQPage;
