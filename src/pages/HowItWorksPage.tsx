
import React from "react";
import { Smartphone, ShoppingBag, CreditCard, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorksPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-soapp-blue to-soapp-teal text-white">
        <div className="container mx-auto px-4">
          <div className="section-heading">
            <h1 className="text-white">How SoApp Works</h1>
            <p className="text-white/90">
              Understanding the seamless shopping experience powered by our technology
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">A Simple Four-Step Process</h2>
              <p className="text-lg text-gray-600">
                SoApp transforms the traditional shopping experience with a streamlined process that 
                eliminates checkout lines and enhances security.
              </p>
            </div>

            <div className="space-y-16 mt-12">
              {/* Step 1 */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-2 order-2 md:order-1">
                  <div className="bg-gray-100 p-6 rounded-xl relative">
                    <span className="absolute -top-4 -left-4 bg-soapp-blue text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
                      1
                    </span>
                    <div className="pt-3">
                      <img 
                        src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Scanning products" 
                        className="rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3 order-1 md:order-2">
                  <div className="flex gap-4 items-start">
                    <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 mt-1">
                      <Smartphone className="text-soapp-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">1. Scan Products</h3>
                      <p className="text-gray-600 mb-4">
                        As you enter the store, open the SoApp application and scan the store's QR code to connect 
                        your device with the store's system. While shopping, use your smartphone's camera to scan 
                        product barcodes and add items to your virtual cart.
                      </p>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Benefits:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>No need to use store-provided carts or baskets</li>
                          <li>Instantly see product details, prices, and availability</li>
                          <li>Keep track of your spending as you shop</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="flex justify-center">
                <ArrowRight size={24} className="text-gray-300 rotate-90" />
              </div>

              {/* Step 2 */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-3">
                  <div className="flex gap-4 items-start">
                    <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 mt-1">
                      <ShoppingBag className="text-soapp-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">2. View & Manage Items</h3>
                      <p className="text-gray-600 mb-4">
                        As you add products to your virtual cart, you can view detailed information about each item, 
                        including ingredients, nutritional facts, and related products. Add or remove items, adjust 
                        quantities, and organize your shopping in real-time.
                      </p>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Features:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Categorize items for easy management</li>
                          <li>Receive recommendations for complementary products</li>
                          <li>View running total cost of your items</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="bg-gray-100 p-6 rounded-xl relative">
                    <span className="absolute -top-4 -left-4 bg-soapp-blue text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
                      2
                    </span>
                    <div className="pt-3">
                      <img 
                        src="https://images.unsplash.com/photo-1567114500504-8c56f83886e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Managing cart items" 
                        className="rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="flex justify-center">
                <ArrowRight size={24} className="text-gray-300 rotate-90" />
              </div>

              {/* Step 3 */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-2 order-2 md:order-1">
                  <div className="bg-gray-100 p-6 rounded-xl relative">
                    <span className="absolute -top-4 -left-4 bg-soapp-blue text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
                      3
                    </span>
                    <div className="pt-3">
                      <img 
                        src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Mobile payment" 
                        className="rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3 order-1 md:order-2">
                  <div className="flex gap-4 items-start">
                    <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 mt-1">
                      <CreditCard className="text-soapp-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">3. Pay in the App</h3>
                      <p className="text-gray-600 mb-4">
                        When you've finished shopping, complete your payment directly through the app using your 
                        preferred payment method. SoApp supports credit cards, digital wallets, and contactless 
                        payment options with biometric verification for added security.
                      </p>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Security Features:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Facial recognition or fingerprint verification</li>
                          <li>End-to-end encrypted transactions</li>
                          <li>Instant digital receipt storage</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="flex justify-center">
                <ArrowRight size={24} className="text-gray-300 rotate-90" />
              </div>

              {/* Step 4 */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-3">
                  <div className="flex gap-4 items-start">
                    <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="text-soapp-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">4. Verify & Exit</h3>
                      <p className="text-gray-600 mb-4">
                        After payment, proceed to the exit where you'll scan your digital receipt QR code at the 
                        verification station. The RFID security system will confirm that all items in your bag have 
                        been paid for, and you can leave the store without any delay.
                      </p>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Security Measures:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>RFID verification ensures all items are paid for</li>
                          <li>Two-factor authentication at exits</li>
                          <li>Anti-theft triggers for unpaid items</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="bg-gray-100 p-6 rounded-xl relative">
                    <span className="absolute -top-4 -left-4 bg-soapp-blue text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
                      4
                    </span>
                    <div className="pt-3">
                      <img 
                        src="https://images.unsplash.com/photo-1559131397-f94da358f7ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Verification at exit" 
                        className="rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Behind */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-heading">
            <h2>Technology Behind SoApp</h2>
            <p>Innovative technologies powering our seamless shopping experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">NFC Technology</h3>
              <p className="text-gray-600 mb-4">
                Near Field Communication enables seamless connection between your smartphone 
                and the store's systems. It allows for quick product identification and information transfer.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="NFC Technology" 
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">RFID Security</h3>
              <p className="text-gray-600 mb-4">
                Radio-Frequency Identification tags on products provide an additional layer of 
                security, preventing theft while ensuring legitimate purchases can exit smoothly.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="RFID Security" 
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">AI-Powered Analytics</h3>
              <p className="text-gray-600 mb-4">
                Artificial intelligence algorithms help optimize store layouts, inventory management, 
                and provide personalized recommendations to enhance the shopping experience.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="AI Technology" 
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="section-heading">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about how SoApp works</p>
          </div>
          
          <div className="max-w-3xl mx-auto mt-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-3">What happens if the app crashes during shopping?</h3>
                <p className="text-gray-600">
                  Your shopping cart is constantly synchronized with our secure cloud servers. If your app crashes, 
                  simply restart it, log back in, and all your items will be restored exactly as they were.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-3">How does the system prevent theft?</h3>
                <p className="text-gray-600">
                  Each product has an RFID tag that can only be deactivated after payment. If someone tries to exit 
                  with unpaid items, the system will automatically trigger an alert and lock the exit gates.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-3">What if I want to pay with cash?</h3>
                <p className="text-gray-600">
                  While SoApp is designed primarily for cashless transactions, participating stores may have 
                  designated payment kiosks where you can pay with cash and receive a digital receipt to exit.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-3">Do I need an internet connection to use SoApp?</h3>
                <p className="text-gray-600">
                  Yes, a stable internet connection is required for the app to function properly. However, most 
                  participating stores offer free Wi-Fi for customers to ensure seamless shopping.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-3">What happens if an item doesn't have a barcode?</h3>
                <p className="text-gray-600">
                  For items without barcodes, such as fresh produce, the app provides alternative scanning methods 
                  like weighing stations or manual entry options with store associate assistance if needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-soapp-blue text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-white">Ready to Experience the Future of Shopping?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Download the SoApp application today and transform your shopping experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-soapp-blue hover:bg-gray-100 border-white">
              Download Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
