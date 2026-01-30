export function WhyGiveat() {
  return (
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
            <p className="text-gray-600">
              We support local businesses by keeping 100% of earnings with restaurant partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
