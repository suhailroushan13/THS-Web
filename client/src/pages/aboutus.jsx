import { useState } from "react";
import Header from "../components/custom/header";

const AboutUsPage = () => {
    return (
        <>
            <Header />
            <div className="max-w-5xl mx-auto p-6">
                <h2 className="text-4xl font-bold mb-6 text-center">About Us</h2>
                <p className="text-lg text-gray-700 mb-4">
                    The Hacking School is India’s first and premier coding bootcamp. We are on a mission to revolutionize tech education by providing hands-on, immersive learning experiences that equip students with the skills they need to build real-world products and succeed in the global tech industry.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    Inspired by Silicon Valley’s hacker culture, our bootcamps cover full-stack web and mobile development, UI/UX design, data science, AI, and more. We believe anyone can code and offer programs tailored for beginners, intermediate learners, and experienced coders looking to upskill.
                </p>

                <p className="text-lg text-gray-700 mb-4">
                    With a decade of experience, over 7000 alumni across the globe, and a 97% placement rate, The Hacking School is trusted by students and companies alike. We work closely with hiring partners, offer international internships, and provide a “study now, pay later” model, making education accessible and impactful.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-700 mb-4">
                    We envision a world where talent and passion — not privilege — determine access to great opportunities. We strive to make tech education inclusive, breaking down barriers so anyone with the drive to learn can thrive in the digital economy.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 mb-4">
                    Our mission is to create the next generation of skilled developers, designers, and innovators. We do this by offering cutting-edge programs, expert mentorship, and real-world projects that mirror the demands of the modern tech industry.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Our Team</h3>
                <p className="text-lg text-gray-700 mb-4">
                    Behind The Hacking School is a passionate team of educators, developers, entrepreneurs, and mentors with decades of combined experience. We are united by a commitment to pushing boundaries and helping students unlock their full potential.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Global Presence</h3>
                <p className="text-lg text-gray-700 mb-4">
                    While rooted in India, The Hacking School has expanded globally, with programs and partnerships in Australia, the Middle East, and Europe. We believe learning has no borders, and we aim to connect our students to opportunities worldwide.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Innovation & Impact</h3>
                <p className="text-lg text-gray-700 mb-4">
                    We constantly evolve our curriculum to keep pace with emerging technologies, ensuring our students are always industry-ready. From blockchain to AI and beyond, innovation drives everything we do, and we’re proud to contribute to shaping the future of tech.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Community & Social Responsibility</h3>
                <p className="text-lg text-gray-700">
                    We believe in giving back. Through scholarships, free community workshops, and collaborations with NGOs, we aim to create social impact and help underrepresented groups enter the tech workforce, fostering a more diverse and inclusive industry.
                </p>
            </div>
            <br />
            <br />
        </>
    );
};

export default AboutUsPage;
