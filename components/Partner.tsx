import { ArrowRight, Check } from 'lucide-react';

export function Partner() {
  return (
    <section id="partner" className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Partner With Giveat</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join our growing community of restaurants and delivery partners. Whether you're serving delicious food or
            delivering it, we've got opportunities for you.
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
  );
}
