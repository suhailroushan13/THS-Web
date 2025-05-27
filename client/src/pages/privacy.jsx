import { useState } from "react";
import Header from "../components/custom/header";


const PrivacyPolicy = () => {
    return (

        <>
            <Header />
            <div className="max-w-5xl mx-auto p-6">
                <h2 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h2>
                <p className="mb-4">Effective Date: May 27, 2025</p>
                <p className="mb-4">The Hacking School ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, apply for our programs, or interact with us.</p>
                <ul className="list-disc pl-6 mb-4">
                    <li><strong>Information We Collect:</strong> Personal details, educational background, payment info, technical data.</li>
                    <li><strong>How We Use Your Information:</strong> Process applications, communicate updates, improve services, comply with laws.</li>
                    <li><strong>Information Sharing:</strong> Only with trusted partners; no selling or renting data.</li>
                    <li><strong>Data Security:</strong> Industry-standard measures, but no guaranteed absolute security.</li>
                    <li><strong>Cookies & Tracking:</strong> Used for improving site functionality; can be managed via browser settings.</li>
                    <li><strong>Your Rights:</strong> Access, correct, or delete data by contacting meraj@thehackingschool.com.</li>
                </ul>
                <p className="mb-4">
                    We may update this Privacy Policy from time to time, and any changes will be posted on this page.
                    <br />
                    If you have any questions or concerns, please feel free to contact us at
                    <a href="tel:+919959682957" className="text-blue-600 underline"> +91 9959 682 957</a> or email us at
                    <a href="mailto:meraj@thehackingschool.com" className="text-blue-600 underline"> meraj@thehackingschool.com</a>.
                </p>

            </div>
        </>
    );
};

export default PrivacyPolicy;