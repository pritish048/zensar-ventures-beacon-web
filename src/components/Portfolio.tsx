
const Portfolio = () => {
  const portfolioCompanies = [
    { name: "Zomato", website: "https://zomato.com", logo: "Z", sector: "Consumer Tech" },
    { name: "PharmEasy", website: "https://pharmeasy.in", logo: "PE", sector: "Healthcare" },
    { name: "BYJU'S", website: "https://byjus.com", logo: "B", sector: "EdTech" },
    { name: "Paytm", website: "https://paytm.com", logo: "P", sector: "Fintech" },
    { name: "Swiggy", website: "https://swiggy.com", logo: "S", sector: "Consumer Tech" },
    { name: "Policybazaar", website: "https://policybazaar.com", logo: "PB", sector: "Insurtech" },
    { name: "Lenskart", website: "https://lenskart.com", logo: "L", sector: "D2C" },
    { name: "Razorpay", website: "https://razorpay.com", logo: "R", sector: "Fintech" },
    { name: "Nykaa", website: "https://nykaa.com", logo: "N", sector: "Beauty Tech" },
    { name: "Freshworks", website: "https://freshworks.com", logo: "FW", sector: "SaaS" },
    { name: "Cure.fit", website: "https://cure.fit", logo: "CF", sector: "Health Tech" }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to partner with some of India's most innovative and successful companies
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {portfolioCompanies.slice(0, 11).map((company, index) => (
            <a
              key={index}
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{company.logo}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{company.name}</h3>
                <span className="text-sm text-gray-500">{company.sector}</span>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <span>And many more innovative companies</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
