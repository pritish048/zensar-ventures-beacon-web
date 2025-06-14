
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Building Tomorrow's 
              <span className="text-blue-600"> Success Stories</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Since 2015, Zensar Ventures has been at the forefront of India's startup ecosystem, 
              identifying and nurturing exceptional entrepreneurs who are building transformative businesses.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our deep sector expertise and hands-on approach help startups scale rapidly while 
              building sustainable, market-leading companies that create meaningful impact.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sector Expertise</h4>
                  <p className="text-gray-600">Deep domain knowledge across consumer, healthcare, fintech, and technology sectors</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Hands-on Support</h4>
                  <p className="text-gray-600">Active partnership in scaling operations, building teams, and expanding markets</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Network Access</h4>
                  <p className="text-gray-600">Extensive network of industry leaders, customers, and follow-on investors</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=600&fit=crop"
              alt="Professional working"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600 rounded-2xl opacity-10"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-400 rounded-2xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
