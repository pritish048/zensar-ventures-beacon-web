
const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6 sm:mb-8">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
              Founded in 2015
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
              Empowering India's
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent block mt-1 sm:mt-0">
                Next Generation
              </span>
              of Innovators
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
              We are a leading venture capital firm managing $200 million across 2 AIF funds, 
              investing $20-25 million on average in India's most promising startups across consumer, 
              healthcare, new-age tech, and BFSI sectors.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base">
              View Portfolio
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 text-sm sm:text-base">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-16 px-2">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop"
              alt="Team collaboration"
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-blue-900/20 rounded-xl sm:rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
