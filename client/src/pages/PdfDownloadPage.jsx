import { useState } from "react";
import Header from "../components/custom/header";

const PdfDownloadPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleDownload = () => {
    if (!email || !email.includes("@")) {
      setError("Please Enter a Valid Email.");
      return;
    }

    setError(""); // Clear error if valid
    const pdfUrl = "https://drive.google.com/file/d/1iE5bWKHbN1ucq8Ng0-e7hrnYy3VQkMjV/view"; // PDF file in public folder
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "curriculum.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-center mb-10">
        <div className="p-8 w-full max-w-2xl rounded-lg">
          <h2 className="text-3xl font-semibold text-[#161730] text-center mb-4">
            Get Curriculum
          </h2>
          <p className="text-[#161730] text-center text-2xl mb-6">
            Enter your email to download the curriculum.
          </p>

          {error && (
            <p className="text-red-500 text-sm mt-3 text-center">{error}</p>
          )}

          <br />

          <div className="flex flex-col md:flex-row items-center gap-y-5">
            <input
              type="email"
              placeholder="Enter your email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border border-gray-600 rounded-full py-3 px-6 text-lg w-full text-[#161730]"
            />
            <button
              onClick={handleDownload}
              className="bg-[#161730] text-white rounded-full md:ml-6 py-3 px-12 text-lg font-medium  cursor-pointer"
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PdfDownloadPage;
