
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Search, Globe, Shield, RefreshCw, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex-1 text-center lg:text-left mb-10 lg:mb-0">
              <h1 className="mb-6">
                <span className="block text-soapp-blue">Skip the Queues.</span>
                <span className="block">Shop Smarter.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Revolutionize your shopping experience with SoApp. Scan, shop, and go – no more checkout lines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/how-it-works">
                  <Button size="lg" className="btn-primary">
                    Get Started
                  </Button>
                </Link>
                <Link to="/features">
                  <Button variant="outline" size="lg" className="btn-secondary">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                  alt="Person using SoApp"
                  className="rounded-lg shadow-2xl max-w-full mx-auto lg:ml-auto animate-float"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-3 rounded-full">
                      <TrendingUp className="text-green-600" size={24} />
                    </div>
                    <div>
                      <p className="font-bold">Checkout Time</p>
                      <p className="text-green-600 font-medium">Reduced by 70%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-heading">
            <h2>Why Choose SoApp?</h2>
            <p>Our innovative technology is transforming the retail experience for both customers and businesses.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="feature-card">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <ShoppingBag className="text-soapp-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Seamless Checkout</h3>
              <p className="text-gray-600">
                Scan products while shopping using your smartphone and check out instantly without queuing.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Search className="text-soapp-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">In-Store Navigation</h3>
              <p className="text-gray-600">
                Easily find products with exact aisle directions and real-time inventory information.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Globe className="text-soapp-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Multiple Languages</h3>
              <p className="text-gray-600">
                Shop in your preferred language with support for voice commands for accessibility.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="text-soapp-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Enhanced Security</h3>
              <p className="text-gray-600">
                Advanced RFID technology prevents shoplifting while facial recognition secures payments.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <TrendingUp className="text-soapp-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-Time Inventory</h3>
              <p className="text-gray-600">
                Store managers and customers receive alerts when products are running low or out of stock.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <RefreshCw className="text-soapp-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Contactless Returns</h3>
              <p className="text-gray-600">
                Process returns directly through the app without waiting in customer service lines.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/features">
              <Button variant="outline" size="lg" className="group">
                Explore All Features
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="section-heading">
            <h2>How SoApp Works</h2>
            <p>Experience the future of shopping with our easy-to-use platform.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                alt="SoApp Technology"
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-soapp-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Scan Products</h3>
                    <p className="text-gray-600">
                      Use your smartphone to scan product barcodes while shopping and add items to your virtual cart.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-soapp-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">View & Manage Items</h3>
                    <p className="text-gray-600">
                      Track your items and view product details as you add them to your own shopping bag.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-soapp-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Pay in the App</h3>
                    <p className="text-gray-600">
                      Complete your payment securely within the app using your preferred payment method.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-soapp-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Verify & Exit</h3>
                    <p className="text-gray-600">
                      Scan your digital receipt at the exit for quick verification and seamlessly leave the store.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/how-it-works">
                  <Button className="btn-primary">
                    Learn More About the Process
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-soapp-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">Ready to Transform Your Shopping Experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the retail revolution with SoApp and say goodbye to checkout lines forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-soapp-blue hover:bg-gray-100 border-white">
              Download the App
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="border-white text-white hover:bg-white/10">
                Partner with Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
