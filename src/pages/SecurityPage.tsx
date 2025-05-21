
import React from "react";
import { Shield, Camera, Weight, Lock, AlertTriangle, Fingerprint, Database, Eye, UserCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const SecurityPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-soapp-blue to-soapp-teal text-white">
        <div className="container mx-auto px-4">
          <div className="section-heading">
            <h1 className="text-white">Advanced Security</h1>
            <p className="text-white/90">
              Protecting retailers and customers with cutting-edge technology
            </p>
          </div>
        </div>
      </section>

      {/* Main Security Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-6">Comprehensive Security Ecosystem</h2>
            <p className="text-lg text-gray-600">
              SoApp integrates multiple layers of security to create a safe, trustworthy shopping environment while 
              maintaining a frictionless customer experience. Our advanced technology prevents theft, protects data, 
              and ensures accurate transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Increased Surveillance */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Surveillance Systems"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Camera className="text-soapp-blue" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Increased Surveillance</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  With SoApp's solutions, retailers can reinvest checkout counter savings into enhanced store security, 
                  including high-definition cameras and additional security personnel throughout the store.
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-6">
                  <li>HD surveillance coverage with AI-powered monitoring</li>
                  <li>Strategic security personnel placement</li>
                  <li>Real-time alerts for suspicious behavior</li>
                  <li>Remote monitoring capabilities</li>
                </ul>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 italic">
                    "SoApp's security systems have reduced our shrinkage rates by 35% while improving the shopping experience."
                    <br /><span className="font-medium">— Regional Manager, National Retail Chain</span>
                  </p>
                </div>
              </div>
            </div>

            {/* RFID/NFC Security */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="RFID Technology"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Shield className="text-soapp-blue" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">AI & RFID/NFC for Theft Prevention</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Every product is tagged with RFID/NFC technology that must be properly deactivated through the 
                  payment process. This creates a virtually impenetrable security system at store exits.
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-6">
                  <li>Tamper-proof RFID tags on all merchandise</li>
                  <li>Automatic exit gate locking for unpaid items</li>
                  <li>AI detection of tag removal attempts</li>
                  <li>Seamless experience for legitimate purchases</li>
                </ul>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 italic">
                    "The RFID system is invisible to honest shoppers but creates an effective deterrent against theft without 
                    the need for intrusive security checks."
                    <br /><span className="font-medium">— Loss Prevention Director, Major Department Store</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Product Monitoring Cameras */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Eye className="text-soapp-blue" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Product Monitoring Cameras</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Every shelf is equipped with discreet cameras that monitor product counts and prevent theft or 
                  accidental misplacements. These cameras provide real-time tracking and inventory insights.
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-6">
                  <li>Computer vision algorithms detect item removal</li>
                  <li>Automatic inventory updates when products are taken</li>
                  <li>Heat mapping for shopper behavior analysis</li>
                  <li>Alerts for unusual activity patterns</li>
                </ul>
                <div className="flex justify-center my-6">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Monitoring Technology"
                    className="rounded-lg shadow-md w-full max-w-md"
                  />
                </div>
              </div>
            </div>

            {/* Weighing Systems */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Weight className="text-soapp-blue" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Weighing Systems for Bulk Purchases</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Smart weighing machines for products like vegetables and fruits enable accurate tracking of quantities 
                  bought by weight. This system ensures transparent pricing and minimizes errors.
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-6">
                  <li>QR code generation for weighed items</li>
                  <li>Integration with the SoApp mobile application</li>
                  <li>Precision weight sensors with auto-calibration</li>
                  <li>Weight verification at checkout points</li>
                </ul>
                <div className="flex justify-center my-6">
                  <img
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Weighing System"
                    className="rounded-lg shadow-md w-full max-w-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Two-Factor Authentication */}
          <div className="mt-16">
            <div className="bg-gray-50 rounded-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="bg-white p-8 rounded-xl shadow-md text-center">
                    <Lock className="mx-auto text-soapp-blue mb-4" size={64} />
                    <h3 className="text-2xl font-bold mb-4">Two Factor Authentication</h3>
                    <p className="text-gray-600">
                      Every customer must complete both payment verification and receipt checking before exiting the store, 
                      creating a secure but streamlined process.
                    </p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl font-bold mb-4">Security Checkpoint Process</h4>
                  <ol className="space-y-4">
                    <li className="flex gap-4 items-start">
                      <span className="bg-soapp-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</span>
                      <div>
                        <h5 className="font-bold mb-1">Complete In-App Payment</h5>
                        <p className="text-gray-600">
                          After scanning all items, customers complete payment using their preferred method within the app, 
                          which may require biometric verification for added security.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="bg-soapp-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</span>
                      <div>
                        <h5 className="font-bold mb-1">Receipt Generation</h5>
                        <p className="text-gray-600">
                          Upon successful payment, a secure digital receipt with a unique QR code is generated and stored in the app.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="bg-soapp-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</span>
                      <div>
                        <h5 className="font-bold mb-1">Exit Verification</h5>
                        <p className="text-gray-600">
                          At the store exit, customers scan their receipt QR code at the verification station, which cross-checks 
                          with the items' RFID tags in their bag to confirm all items are paid for.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="bg-soapp-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</span>
                      <div>
                        <h5 className="font-bold mb-1">Seamless Exit</h5>
                        <p className="text-gray-600">
                          Once verified, customers can exit quickly and easily. The entire verification process takes just seconds, 
                          significantly faster than traditional checkout lines.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Security Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-heading">
            <h2>Additional Security Features</h2>
            <p>Comprehensive protection at every level</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Fingerprint className="text-soapp-blue" size={20} />
                </div>
                <h3 className="text-lg font-bold">Biometric Authentication</h3>
              </div>
              <p className="text-gray-600">
                Secure your account and transactions with fingerprint or facial recognition, adding an extra layer of protection.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Database className="text-soapp-blue" size={20} />
                </div>
                <h3 className="text-lg font-bold">Encrypted Data Storage</h3>
              </div>
              <p className="text-gray-600">
                All customer data and transaction records are protected with end-to-end encryption and secure cloud storage.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <AlertTriangle className="text-soapp-blue" size={20} />
                </div>
                <h3 className="text-lg font-bold">Fraud Detection</h3>
              </div>
              <p className="text-gray-600">
                AI algorithms continuously monitor transactions to detect unusual patterns and prevent fraudulent activity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <UserCheck className="text-soapp-blue" size={20} />
                </div>
                <h3 className="text-lg font-bold">User Verification</h3>
              </div>
              <p className="text-gray-600">
                Multi-step verification processes ensure only authorized users can access accounts and make purchases.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Lock className="text-soapp-blue" size={20} />
                </div>
                <h3 className="text-lg font-bold">Secure Checkout Gates</h3>
              </div>
              <p className="text-gray-600">
                Electronically controlled exit points that only open after successful payment verification.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Zap className="text-soapp-blue" size={20} />
                </div>
                <h3 className="text-lg font-bold">Real-Time Alerts</h3>
              </div>
              <p className="text-gray-600">
                Instant notifications for account activities, unusual purchases, or security concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Commitment */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">Our Security Commitment</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At SoApp, security isn't just a feature—it's foundational to our entire platform. We continuously 
                  update our security measures to stay ahead of potential threats while maintaining a seamless shopping experience.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Regular security audits by independent cybersecurity firms</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Compliance with global data protection regulations</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Transparent security practices and privacy policies</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Continuous security updates and improvement</p>
                  </li>
                </ul>
                <Button className="btn-primary">Learn About Our Security Standards</Button>
              </div>
              <div className="bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1580894732930-0babd100d356?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Security Technology" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-soapp-teal text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-white">Experience Secure Shopping with SoApp</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Join thousands of satisfied customers who trust our technology for a secure, seamless shopping experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-soapp-teal hover:bg-gray-100">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityPage;
