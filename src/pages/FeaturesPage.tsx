
import React from "react";
import { ShoppingBag, Search, Shield, TrendingUp, Smartphone, CreditCard, Clock, UserCheck, AlertCircle, Share2 } from "lucide-react";

const FeaturesPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-soapp-blue to-soapp-teal text-white">
        <div className="container mx-auto px-4">
          <div className="section-heading">
            <h1 className="text-white">Powerful Features</h1>
            <p className="text-white/90">
              Discover all the innovative features that make SoApp the future of retail shopping.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="feature-card flex flex-col">
              <div className="mb-6">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                  <ShoppingBag className="text-soapp-blue" size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Seamless Checkout</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Customers scan products directly while shopping using their own devices, 
                eliminating the need to wait in long checkout queues. Simply scan, pay 
                via the app, and walk out with your purchases.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-sm uppercase text-gray-500 mb-2">Benefits</h4>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Eliminates waiting times</li>
                  <li>Reduces staff requirements</li>
                  <li>Improves customer satisfaction</li>
                </ul>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="feature-card flex flex-col">
              <div className="mb-6">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                  <TrendingUp className="text-soapp-blue" size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Real-Time Inventory Management</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Store owners gain complete control over their inventory with real-time tracking and automated alerts. 
                The system provides insights on stock levels, product performance, and automatically flags when 
                restocking is needed.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-sm uppercase text-gray-500 mb-2">Benefits</h4>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Optimizes stock levels</li>
                  <li>Reduces inventory costs</li>
                  <li>Automates reordering processes</li>
                </ul>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="feature-card flex flex-col">
              <div className="mb-6">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                  <Search className="text-soapp-blue" size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Real-Time Product Availability</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Customers can instantly check product availability before or during their shopping trip.
                The app displays real-time stock levels, helping shoppers make informed decisions and save time.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-sm uppercase text-gray-500 mb-2">Benefits</h4>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Prevents wasted shopping trips</li>
                  <li>Enhances customer experience</li>
                  <li>Reduces customer frustration</li>
                </ul>
              </div>
            </div>

            {/* Feature 4 - Enhanced Security */}
            <div className="feature-card flex flex-col">
              <div className="mb-6">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                  <Shield className="text-soapp-blue" size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Enhanced Security</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Offers secure payments using facial recognition and fingerprint authorization.
                RFID technology prevents theft while maintaining a frictionless shopping experience.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-sm uppercase text-gray-500 mb-2">Benefits</h4>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Biometric authentication</li>
                  <li>Theft prevention</li>
                  <li>Data protection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-heading">
            <h2>More Powerful Features</h2>
            <p>Discover the complete ecosystem of SoApp's retail revolution</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Additional Feature 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md flex gap-4">
              <div className="bg-blue-100 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                <Smartphone className="text-soapp-blue" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Mobile App Integration</h3>
                <p className="text-gray-600">
                  A seamless app experience that connects with in-store systems using QR codes and NFC technology.
                </p>
              </div>
            </div>

            {/* Additional Feature 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md flex gap-4">
              <div className="bg-blue-100 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                <CreditCard className="text-soapp-blue" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Multiple Payment Options</h3>
                <p className="text-gray-600">
                  Support for all major credit cards, digital wallets, and contactless payment methods.
                </p>
              </div>
            </div>

            {/* Additional Feature 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md flex gap-4">
              <div className="bg-blue-100 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                <Clock className="text-soapp-blue" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Shopping History</h3>
                <p className="text-gray-600">
                  Track past purchases, repeat orders, and maintain shopping lists for future visits.
                </p>
              </div>
            </div>

            {/* Additional Feature 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md flex gap-4">
              <div className="bg-blue-100 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                <UserCheck className="text-soapp-blue" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Personalized Recommendations</h3>
                <p className="text-gray-600">
                  AI-driven product suggestions based on shopping habits and preferences.
                </p>
              </div>
            </div>

            {/* Additional Feature 5 */}
            <div className="bg-white p-6 rounded-xl shadow-md flex gap-4">
              <div className="bg-blue-100 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="text-soapp-blue" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Product Alerts</h3>
                <p className="text-gray-600">
                  Notifications about discounts on favorite items or when items on your wishlist are in stock.
                </p>
              </div>
            </div>

            {/* Additional Feature 6 */}
            <div className="bg-white p-6 rounded-xl shadow-md flex gap-4">
              <div className="bg-blue-100 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                <Share2 className="text-soapp-blue" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Social Sharing</h3>
                <p className="text-gray-600">
                  Share shopping lists with family members or friends for collaborative shopping experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-soapp-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-white">Ready to Experience These Features?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Download the SoApp application or contact us to integrate our technology into your retail business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary bg-white text-soapp-teal border-white hover:bg-white/90">
              Download App
            </button>
            <button className="btn-secondary border-white text-white hover:bg-white/10">
              Request Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
