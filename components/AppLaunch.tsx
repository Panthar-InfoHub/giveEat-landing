export function AppLaunch() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">The Giveat App is almost ready.</h2>

        <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-2xl mx-auto">
          Your favourite dishes, smoother ordering, faster deliveries — all inside one beautifully crafted mobile
          experience. We're adding the finishing touches before it hits the stores.
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
  );
}
