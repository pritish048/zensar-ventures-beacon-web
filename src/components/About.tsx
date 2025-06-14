
const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Building Tomorrow's 
              <span className="text-blue-600"> Success Stories</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Since 2015, Zensar Ventures has been at the forefront of India's startup ecosystem, 
              identifying and nurturing exceptional entrepreneurs who are building transformative businesses.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Our deep sector expertise and hands-on approach help startups scale rapidly while 
              building sustainable, market-leading companies that create meaningful impact.
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Sector Expertise</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Deep domain knowledge across consumer, healthcare, fintech, and technology sectors</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Hands-on Support</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Active partnership in scaling operations, building teams, and expanding markets</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Network Access</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Extensive network of industry leaders, customers, and follow-on investors</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=600&fit=crop"
              alt="Professional working"
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl sm:rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-16 h-16 sm:w-32 sm:h-32 bg-blue-600 rounded-xl sm:rounded-2xl opacity-10"></div>
            <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-24 sm:h-24 bg-blue-400 rounded-xl sm:rounded-2xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
