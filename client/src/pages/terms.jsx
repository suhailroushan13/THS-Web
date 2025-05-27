
import { useState } from "react";
import Header from "../components/custom/header";


const TermsAndConditions = () => {
    return (

        <>
            <Header />
            <div className="max-w-5xl mx-auto p-6">
                <h2 className="text-4xl font-bold mb-6 text-center">Terms and Conditions</h2>
                <p className="mb-4">Effective Date: May 27, 2025</p>
                <ul className="list-disc pl-6 mb-4">
                    <li><strong>Eligibility:</strong> 18+ or parental consent required.</li>
                    <li><strong>Program Enrollment:</strong> Subject to availability and acceptance.</li>
                    <li><strong>Payments & Refunds:</strong> As per enrollment agreement.</li>
                    <li><strong>Intellectual Property:</strong> All materials owned by The Hacking School; no unauthorized use.</li>
                    <li><strong>Code of Conduct:</strong> Professional and respectful behavior required.</li>
                    <li><strong>Liability Limitation:</strong> We are not liable for indirect or consequential damages.</li>
                    <li><strong>External Links:</strong> Not responsible for third-party content.</li>
                    <li><strong>Modifications:</strong> Terms may change; continued use means acceptance.</li>
                </ul>
                <p className="mb-4">
                    Questions?
                    <br />
                    Please contact us at
                    <a href="mailto:meraj@thehackingschool.com" className="text-blue-600 underline"> meraj@thehackingschool.com</a> or call us at
                    <a href="tel:+919959682957" className="text-blue-600 underline"> +91 9959 682 957</a>.
                </p>

            </div>
        </>
    );
};

export default TermsAndConditions;