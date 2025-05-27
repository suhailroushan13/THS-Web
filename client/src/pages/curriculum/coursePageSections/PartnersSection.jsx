export default function CoursePagePartnersSection() {
    return (
        <section className=" mb-20">
                <div className="container mx-auto px-4">
                    {/* Partners Header */}
                    <div className="flex justify-center items-center mb-12 w-full p-6">
                            <p className="text-black font-bold text-xl md:text-2xl text-center sm:text-lg mb-2 sm:mb-0 sm:mr-2">
                            LOVED BY LEARNERS AT THOUSANDS OF COMPANIES
                            </p>
                    </div>
                    
                    {/* Partners Grid with flex-wrap */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-2 md:gap-2">
                        {[
                            { id: 1, name: "iCollege Limited", logo: "/landing-page/iCollege Limited.png" },
                            { id: 2, name: "Google", logo: "/landing-page/Google.jpg" },
                            { id: 3, name: "Tech Domains", logo: "/landing-page/Tech Domains.png" },
                            { id: 4, name: "Salesforce", logo: "/landing-page/Salesforce.png" },
                            { id: 5, name: "Switch Maven", logo: "/landing-page/Switch Maven.png" },
                            { id: 6, name: "Amazon", logo: "/landing-page/Amazon.png" }
                        ].map((partner) => (
                            <div 
                                key={partner.id} 
                                className="flex items-center justify-center h-20 w-40 sm:w-48 transition-all duration-300"
                            >
                                <img 
                                    src={partner.logo} 
                                    alt={partner.name}
                                    className="max-h-full max-w-full object-contain filter grayscale  transition-all duration-300"
                                    style={{ maxWidth: '130px' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
    );
}
