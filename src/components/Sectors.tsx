
const Sectors = () => {
  const sectors = [
    {
      title: "Consumer Tech",
      description: "Direct-to-consumer brands, e-commerce platforms, and digital consumer services",
      examples: ["E-commerce", "D2C Brands", "Consumer Apps"]
    },
    {
      title: "Healthcare",
      description: "Digital health solutions, med-tech innovations, and healthcare services",
      examples: ["Telemedicine", "Health Tech", "Medical Devices"]
    },
    {
      title: "New-Age Tech",
      description: "AI/ML, IoT, blockchain, and emerging technology solutions",
      examples: ["Artificial Intelligence", "IoT Solutions", "Blockchain"]
    },
    {
      title: "BFSI",
      description: "Fintech, insurtech, and financial services innovation",
      examples: ["Digital Payments", "Lending Platforms", "Insurtech"]
    }
  ];

  return (
    <section id="sectors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Investment <span className="text-blue-600">Focus Areas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We invest in high-growth sectors that are transforming India's economy and creating new market opportunities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{sector.title}</h3>
              <p className="text-gray-600 mb-4">{sector.description}</p>
              <div className="space-y-1">
                {sector.examples.map((example, idx) => (
                  <div key={idx} className="text-sm text-blue-600 font-medium">
                    • {example}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
