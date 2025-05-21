
import React from "react";
import { Linkedin, Twitter, Mail } from "lucide-react";

const FoundersPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-soapp-blue to-soapp-teal text-white">
        <div className="container mx-auto px-4">
          <div className="section-heading">
            <h1 className="text-white">Meet Our Founders</h1>
            <p className="text-white/90">
              The visionary team behind SoApp's revolutionary retail technology
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Founder 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-w-4 aspect-h-5">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Sarah Johnson, CEO"
                  className="w-full h-72 object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">Sarah Johnson</h3>
                <p className="text-soapp-blue font-medium mb-4">Chief Executive Officer</p>
                <p className="text-gray-600 mb-6">
                  Sarah brings 15 years of retail technology experience, previously leading innovation at Amazon and Target. 
                  She founded SoApp with a vision to eliminate checkout lines and transform the shopping experience.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-600 hover:text-soapp-blue transition-colors" aria-label="LinkedIn profile">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-soapp-blue transition-colors" aria-label="Twitter profile">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-soapp-blue transition-colors" aria-label="Email contact">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-w-4 aspect-h-5">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Michael Chen, CTO"
                  className="w-full h-72 object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">Michael Chen</h3>
                <p className="text-soapp-blue font-medium mb-4">Chief Technology Officer</p>
                <p className="text-gray-600 mb-6">
                  With a Ph.D. in Computer Science specializing in RFID and NFC technology, Michael leads our technical 
                  development. His previous work at MIT's Media Lab focused on innovative retail solutions.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-600 hover:text-soapp-blue transition-colors" aria-label="LinkedIn profile">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-soapp-blue transition-colors" aria-label="Twitter profile">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-soapp-blue transition-colors" aria-label="Email contact">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Founder 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-w-4 aspect-h-5">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Priya Patel, COO"
                  className="w-full h-72 object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">Priya Patel</h3>
                <p className="text-soapp-blue font-medium mb-4">Chief Operating Officer</p>
                <p className="text-gray-600 mb-6">
                  Priya oversees operations and retail partnerships, bringing extensive experience from her previous role 
                  as VP of Operations at Walmart. She specializes in streamlining complex retail processes.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-600 hover:text-soapp-blue transition-colors" aria-label="LinkedIn profile">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-soapp-blue transition-colors" aria-label="Twitter profile">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-soapp-blue transition-colors" aria-label="Email contact">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-heading">
            <h2>Our Leadership Team</h2>
            <p>Meet the experts driving our innovation and growth</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="David Williams"
                  className="w-full h-64 object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">David Williams</h3>
                <p className="text-soapp-blue font-medium mb-3">VP of Engineering</p>
                <p className="text-gray-600 text-sm mb-4">
                  Leads our engineering team with 12+ years of experience in developing secure payment systems.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-600 hover:text-soapp-blue transition-colors" aria-label="LinkedIn profile">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-soapp-blue transition-colors" aria-label="Email contact">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Jennifer Lee"
                  className="w-full h-64 object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Jennifer Lee</h3>
                <p className="text-soapp-blue font-medium mb-3">VP of Marketing</p>
                <p className="text-gray-600 text-sm mb-4">
                  Expert in retail tech marketing with previous experience at Google and Shopify.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-600 hover:text-soapp-blue transition-colors" aria-label="LinkedIn profile">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-soapp-blue transition-colors" aria-label="Email contact">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Robert Taylor"
                  className="w-full h-64 object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Robert Taylor</h3>
                <p className="text-soapp-blue font-medium mb-3">Head of Security</p>
                <p className="text-gray-600 text-sm mb-4">
                  Former cybersecurity expert from Microsoft, specializing in payment systems and data protection.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-600 hover:text-soapp-blue transition-colors" aria-label="LinkedIn profile">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-soapp-blue transition-colors" aria-label="Email contact">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Maria Rodriguez"
                  className="w-full h-64 object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Maria Rodriguez</h3>
                <p className="text-soapp-blue font-medium mb-3">Director of Partnerships</p>
                <p className="text-gray-600 text-sm mb-4">
                  Builds strategic relationships with retailers and technology providers to expand SoApp's reach.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-600 hover:text-soapp-blue transition-colors" aria-label="LinkedIn profile">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-soapp-blue transition-colors" aria-label="Email contact">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                SoApp began in 2019 when our founders identified a persistent problem in retail: long checkout lines 
                were costing both retailers and shoppers valuable time and resources. With backgrounds spanning retail 
                operations, technology, and security, they set out to create a solution.
              </p>
              <p className="text-gray-600 mb-4">
                The team spent two years researching, developing, and testing the technology, working closely with 
                retailers to understand their specific needs and challenges. After successful pilot programs in 
                select stores showed a 70% reduction in checkout times and significant cost savings, SoApp officially 
                launched in 2021.
              </p>
              <p className="text-gray-600">
                Today, we're proud to partner with leading retailers nationwide, transforming the shopping 
                experience for millions of customers. Our vision is to make checkout lines obsolete while enhancing 
                security and convenience for both retailers and shoppers.
              </p>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Early SoApp prototype testing"
                  className="rounded-lg shadow-md h-48 object-cover w-full"
                />
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="SoApp innovation team"
                  className="rounded-lg shadow-md h-48 object-cover w-full"
                />
              </div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="SoApp technology development"
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-10 text-center">Our Journey</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
              
              {/* 2019 */}
              <div className="relative mb-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
                  <div className="bg-soapp-blue w-6 h-6 rounded-full"></div>
                  <div className="bg-white text-soapp-blue font-bold py-1 px-4 rounded-full shadow-lg border border-gray-100 mt-2">
                    2019
                  </div>
                </div>
                <div className="flex justify-end md:w-1/2 pr-8 md:pr-16">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-bold text-lg mb-2">Company Founded</h4>
                    <p className="text-gray-600">
                      Sarah Johnson, Michael Chen, and Priya Patel founded SoApp with a vision to eliminate checkout lines.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* 2020 */}
              <div className="relative mb-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
                  <div className="bg-soapp-blue w-6 h-6 rounded-full"></div>
                  <div className="bg-white text-soapp-blue font-bold py-1 px-4 rounded-full shadow-lg border border-gray-100 mt-2">
                    2020
                  </div>
                </div>
                <div className="flex justify-start md:w-1/2 md:ml-auto pl-8 md:pl-16">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-bold text-lg mb-2">Technology Development</h4>
                    <p className="text-gray-600">
                      R&D team created the first prototype of the SoApp system, integrating NFC and RFID technology.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* 2021 */}
              <div className="relative mb-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
                  <div className="bg-soapp-blue w-6 h-6 rounded-full"></div>
                  <div className="bg-white text-soapp-blue font-bold py-1 px-4 rounded-full shadow-lg border border-gray-100 mt-2">
                    2021
                  </div>
                </div>
                <div className="flex justify-end md:w-1/2 pr-8 md:pr-16">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-bold text-lg mb-2">First Pilot Program</h4>
                    <p className="text-gray-600">
                      Successfully launched pilot programs in select retail stores with promising results.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* 2022 */}
              <div className="relative mb-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
                  <div className="bg-soapp-blue w-6 h-6 rounded-full"></div>
                  <div className="bg-white text-soapp-blue font-bold py-1 px-4 rounded-full shadow-lg border border-gray-100 mt-2">
                    2022
                  </div>
                </div>
                <div className="flex justify-start md:w-1/2 md:ml-auto pl-8 md:pl-16">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-bold text-lg mb-2">Series A Funding</h4>
                    <p className="text-gray-600">
                      Secured $12 million in Series A funding to expand operations and enhance technology.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* 2023 */}
              <div className="relative mb-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
                  <div className="bg-soapp-blue w-6 h-6 rounded-full"></div>
                  <div className="bg-white text-soapp-blue font-bold py-1 px-4 rounded-full shadow-lg border border-gray-100 mt-2">
                    2023
                  </div>
                </div>
                <div className="flex justify-end md:w-1/2 pr-8 md:pr-16">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-bold text-lg mb-2">National Expansion</h4>
                    <p className="text-gray-600">
                      Partnered with major retail chains to implement SoApp technology nationwide.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* 2024 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
                  <div className="bg-soapp-blue w-6 h-6 rounded-full"></div>
                  <div className="bg-white text-soapp-blue font-bold py-1 px-4 rounded-full shadow-lg border border-gray-100 mt-2">
                    2024
                  </div>
                </div>
                <div className="flex justify-start md:w-1/2 md:ml-auto pl-8 md:pl-16">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-bold text-lg mb-2">International Launch</h4>
                    <p className="text-gray-600">
                      Began global expansion with partnerships in Europe and Asia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-heading">
            <h2>Our Values</h2>
            <p>The principles that drive our innovation and growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We constantly push boundaries to create technology that transforms retail experiences. 
                By challenging the status quo, we develop solutions that were once thought impossible.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Security</h3>
              <p className="text-gray-600">
                We believe convenience should never compromise safety. Every feature we develop 
                is built with multiple layers of security to protect both retailers and customers.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Accessibility</h3>
              <p className="text-gray-600">
                Our technology is designed to be intuitive and accessible for users of all ages and abilities. 
                We're committed to creating solutions that work for everyone.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Collaboration</h3>
              <p className="text-gray-600">
                We work closely with retailers and customers to understand their needs and challenges. 
                By fostering strong partnerships, we create solutions that deliver real-world value.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Efficiency</h3>
              <p className="text-gray-600">
                We're committed to eliminating waste—whether it's time spent in checkout lines, 
                unnecessary manpower, or inefficient processes that cost retailers money.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We hold ourselves to the highest standards in everything we do, from code quality 
                to customer service. Our commitment to excellence drives continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-soapp-blue to-soapp-teal rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 text-white">
                <h2 className="text-white mb-6">Join Our Team</h2>
                <p className="text-xl mb-6">
                  We're looking for passionate individuals who want to revolutionize the retail industry. 
                  Join our team and help build the future of shopping.
                </p>
                <button className="bg-white text-soapp-blue font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition-colors">
                  View Careers
                </button>
              </div>
              <div className="bg-white flex justify-center items-center p-8">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="SoApp Team" 
                  className="rounded-lg shadow-lg max-h-72"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoundersPage;
