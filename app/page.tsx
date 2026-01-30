'use client';

import { ArrowRight, Check, MapPin, Phone, Mail, Instagram } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex-shrink-0">
            <img src="/giveat-logo.jpg" alt="Giveat Logo" className="h-12 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition">About</a>
            <a href="#why" className="text-gray-700 hover:text-purple-600 transition">Why Giveat</a>
            <a href="#partner" className="text-gray-700 hover:text-purple-600 transition">Partner</a>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition font-semibold">
            Join Us
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-purple-50 to-purple-100 pt-20 pb-32 px-4">
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes blob-animation-1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          @keyframes blob-animation-2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(-50px, 30px) scale(0.9); }
            66% { transform: translate(40px, -30px) scale(1.1); }
          }
          @keyframes blob-animation-3 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(20px, 40px) scale(1.05); }
            66% { transform: translate(-30px, -40px) scale(0.95); }
          }
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slide-in-down {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .animate-blob-1 {
            animation: blob-animation-1 8s ease-in-out infinite;
          }
          .animate-blob-2 {
            animation: blob-animation-2 7s ease-in-out infinite;
          }
          .animate-blob-3 {
            animation: blob-animation-3 9s ease-in-out infinite;
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out;
          }
          .animate-slide-in-down {
            animation: slide-in-down 0.6s ease-out;
          }
        `}</style>

        {/* Animated background blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob-1"></div>
        <div className="absolute -bottom-8 right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob-2"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob-3"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium animate-slide-in-down">
            Get the cheapest food delivered only on Giveat
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{
            animation: 'fade-in-up 1s ease-out 0.2s both'
          }}>
            <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Fresh & Fast at Your Doorstep with Giveat
            </span>
          </h1>

          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed" style={{
            animation: 'fade-in-up 1s ease-out 0.4s both'
          }}>
            Premium hyperlocal food delivery fresh, fast, reliable. From street food to gourmet meals, delivered hot in 15–30 minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" style={{
            animation: 'fade-in-up 1s ease-out 0.6s both'
          }}>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 min-w-fit animate-float">
              Get Started <ArrowRight size={20} />
            </button>
            <button className="bg-white text-gray-800 px-8 py-4 rounded-2xl font-semibold border-2 border-gray-200 hover:border-purple-300 hover:shadow-md hover:scale-105 transition-all duration-300 flex items-center gap-2 min-w-fit animate-float" style={{animationDelay: '0.2s'}}>
              Download App <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">About Giveat</h2>
          
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            Giveat brings delicious food minutes away. We connect food lovers with local restaurants while supporting vendors and delivery partners.
          </p>

          <p className="text-xl text-gray-700 leading-relaxed">
            We aim to bring you quality, freshness, and unbeatable speed right from your neighborhood to your doorstep.
          </p>
        </div>
      </section>

      {/* Why Giveat Section */}
      <section id="why" className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">Why Giveat?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl hover:shadow-lg transition">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-4 text-2xl">
                $
              </div>
              <h3 className="text-2xl font-bold mb-3">Cheapest food delivery platform for users</h3>
              <p className="text-gray-600">Get the best prices without compromising on quality or service.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl hover:shadow-lg transition">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-4 text-2xl">
                🛍️
              </div>
              <h3 className="text-2xl font-bold mb-3">0% vendor fees – full earnings go to local restaurants</h3>
              <p className="text-gray-600">We support local businesses by keeping 100% of earnings with restaurant partners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Experience Giveat</h2>
          
          <p className="text-xl text-gray-700 mb-16 leading-relaxed">
            Experience the future of food delivery with Giveat. Fresh, fast, and reliable service connecting you with the finest local restaurants and cloud kitchens.
          </p>

          <div className="flex justify-center">
            <div className="bg-white rounded-3xl p-12 shadow-2xl max-w-sm w-full">
              <img src="/giveat-logo.jpg" alt="Giveat Logo" className="w-full rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* App Launch Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">The Giveat App is almost ready.</h2>
          
          <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-2xl mx-auto">
            Your favourite dishes, smoother ordering, faster deliveries — all inside one beautifully crafted mobile experience. We're adding the finishing touches before it hits the stores.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition">
              Get it on Google Play
            </button>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition">
              Download on the App Store
            </button>
          </div>

          <p className="text-gray-500 italic mb-12">App not launched yet – store access locked.</p>

          <div className="bg-gradient-to-br from-blue-400 via-purple-400 to-purple-600 rounded-3xl p-12 min-h-96 flex items-center justify-center text-white text-center">
            <div>
              <div className="text-4xl font-bold mb-2">📱</div>
              <p className="text-lg">3D App Mockup</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section id="partner" className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Partner With Giveat</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Join our growing community of restaurants and delivery partners. Whether you're serving delicious food or delivering it, we've got opportunities for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Restaurants */}
            <div className="bg-white p-8 rounded-3xl hover:shadow-xl transition">
              <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                For Restaurants
              </div>

              <h3 className="text-3xl font-bold mb-6">Grow Your Restaurant</h3>
              
              <p className="text-gray-700 mb-8">
                Join thousands of restaurants already growing with Giveat. Reach more customers and increase your revenue.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Zero Commission Launch Offer</h4>
                    <p className="text-gray-600">Keep 100% of your earnings with no fees</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Local Customer Reach</h4>
                    <p className="text-gray-600">Connect with hungry customers in your area</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Fast Delivery Network</h4>
                    <p className="text-gray-600">Reliable riders ensure quick deliveries</p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-2xl font-semibold hover:shadow-lg transition flex items-center justify-center gap-2">
                Register Your Restaurant <ArrowRight size={20} />
              </button>
            </div>

            {/* Riders */}
            <div className="bg-white p-8 rounded-3xl hover:shadow-xl transition">
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                For Riders
              </div>

              <h3 className="text-3xl font-bold mb-6">Start Earning Today</h3>
              
              <p className="text-gray-700 mb-8">
                Become a delivery partner with flexible schedules and competitive earnings. Work on your own terms.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Flexible Working Hours</h4>
                    <p className="text-gray-600">Work when you want, as much as you want</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Competitive Earnings</h4>
                    <p className="text-gray-600">Industry-leading pay rates for every delivery</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Weekly Payouts</h4>
                    <p className="text-gray-600">Get paid every week, no delays</p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-semibold hover:shadow-lg transition flex items-center justify-center gap-2">
                Join as Delivery Rider <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-4">
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <img src="/giveat-logo.jpg" alt="Giveat Logo" className="h-10 w-auto mb-4 rounded-md" />
              <p className="text-gray-400 mb-6 text-sm">
                Experience the future of food delivery with Giveat. Fresh, fast, and reliable.
              </p>
              <div className="flex gap-4">
                <Instagram size={20} className="cursor-pointer hover:text-purple-400 transition" />
              </div>
              <p className="text-gray-500 text-xs mt-2">Follow our journey</p>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-white mb-6 text-sm">Support</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Help Center</a></li>
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h4 className="font-semibold text-white mb-6 text-sm">Get In Touch</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3 items-center">
                  <Mail size={18} className="text-purple-400 flex-shrink-0" />
                  <a href="mailto:famqiktechnology@gmail.com" className="text-gray-400 hover:text-purple-400 transition">famqiktechnology@gmail.com</a>
                </li>
                <li className="flex gap-3 items-center">
                  <Phone size={18} className="text-purple-400 flex-shrink-0" />
                  <a href="tel:+916388840845" className="text-gray-400 hover:text-purple-400 transition">+91-6388840845</a>
                </li>
                <li className="flex gap-3 items-start">
                  <MapPin size={18} className="text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">Rise Jhansi Incubation Centre</span>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-white mb-6 text-sm">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition">Blog</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© 2026 Giveat. All rights reserved. Crafted with ❤️ by Panthar Infohub</p>
        </div>
      </footer>
    </div>
  );
}
