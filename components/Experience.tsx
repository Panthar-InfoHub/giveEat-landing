'use client';

export function Experience() {
  return (
    <section id="experience" className="py-32 px-4 bg-white relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Our Experience
          </div>
          <h2 className="text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Experience the Giveat Difference
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We've reimagined food delivery from the ground up. With cutting-edge technology, passionate partners, and relentless focus on quality, we deliver more than just food—we deliver an experience.
          </p>
        </div>

        {/* Three pillars section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-3xl border border-purple-100 hover:shadow-xl transition-all duration-300">
            <div className="text-5xl font-bold text-purple-600 mb-4">01</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
            <p className="text-gray-700 leading-relaxed">
              15-30 minute delivery guarantee. Our optimized network and smart routing ensures your food arrives hot, fresh, and on time, every single time.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl border border-blue-100 hover:shadow-xl transition-all duration-300">
            <div className="text-5xl font-bold text-blue-600 mb-4">02</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Curated Quality</h3>
            <p className="text-gray-700 leading-relaxed">
              We partner only with restaurants that meet our strict quality standards. From neighborhood gems to gourmet kitchens, every restaurant is verified for excellence.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-3xl border border-purple-100 hover:shadow-xl transition-all duration-300">
            <div className="text-5xl font-bold text-purple-600 mb-4">03</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Unbeatable Value</h3>
            <p className="text-gray-700 leading-relaxed">
              Cheapest prices with zero hidden fees. We support restaurants with 0% commission so you get the best deals without compromising on quality or service.
            </p>
          </div>
        </div>

        {/* Features grid */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 md:p-16 mb-20 text-white">
          <h3 className="text-4xl font-bold mb-12 text-center">Why Choose Giveat?</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold">✓</span>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Real-time Tracking</h4>
                <p className="text-white/80">Track your order live with GPS precision. Know exactly when your food arrives.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold">✓</span>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Trusted Riders</h4>
                <p className="text-white/80">Our delivery partners are verified professionals committed to your satisfaction.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold">✓</span>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">24/7 Support</h4>
                <p className="text-white/80">Round-the-clock customer support to resolve any issues instantly.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold">✓</span>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Secure Payments</h4>
                <p className="text-white/80">Multiple payment options with bank-level security and fraud protection.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Brand showcase */}
        <div className="bg-white rounded-3xl p-12 md:p-16 border-2 border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">The Giveat Ecosystem</h3>
            <p className="text-xl text-gray-700">
              Built for customers, restaurants, and riders. A complete platform designed to serve everyone better.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <img src="/giveat-logo.jpg" alt="Giveat Logo" className="h-24 w-auto rounded-2xl shadow-lg" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-6xl mb-4">👥</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">For Customers</h4>
              <p className="text-gray-600">Access thousands of restaurants at the cheapest prices with fast delivery</p>
            </div>
            <div className="p-6">
              <div className="text-6xl mb-4">🏪</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">For Restaurants</h4>
              <p className="text-gray-600">Reach more customers with zero commission and full earnings control</p>
            </div>
            <div className="p-6">
              <div className="text-6xl mb-4">🚴</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">For Riders</h4>
              <p className="text-gray-600">Flexible work with competitive earnings and reliable weekly payouts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
