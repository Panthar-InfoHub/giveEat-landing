'use client';

import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-purple-50 to-blue-50 pt-20 pb-32 px-4 min-h-screen flex items-center">
      {/* Animated background blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob-1"></div>
      <div className="absolute -bottom-8 right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob-2"></div>
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob-3"></div>

      {/* Professional geometric graphics */}
      {/* Delivery element - rotating circle */}
      <div className="absolute top-32 right-12 md:right-20 animate-swirl" style={{ animationDuration: '10s' }}>
        <div className="w-32 h-32 border-4 border-blue-400 rounded-full opacity-30 flex items-center justify-center">
          <div className="w-20 h-20 border-2 border-blue-500 rounded-lg opacity-40"></div>
        </div>
      </div>

      {/* Speed lines - left side */}
      <div className="absolute top-48 left-8 md:left-16 animate-bounce-rotation">
        <div className="space-y-3">
          <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-transparent opacity-40"></div>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-transparent opacity-30"></div>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-transparent opacity-40"></div>
        </div>
      </div>

      {/* Floating card element - bottom right */}
      <div className="absolute bottom-32 right-32 animate-float">
        <div className="w-24 h-32 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 shadow-xl opacity-60 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 mb-2">15</div>
            <div className="text-xs text-gray-600">Minutes</div>
          </div>
        </div>
      </div>

      {/* Abstract network node - bottom left */}
      <div className="absolute bottom-40 left-20 animate-float-alt">
        <div className="relative w-28 h-28">
          <div className="absolute inset-0 rounded-full border-2 border-blue-300 opacity-30"></div>
          <div className="absolute inset-2 rounded-full border border-purple-300 opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full"></div>
        </div>
      </div>

      {/* Pulsing indicator - center right */}
      <div className="absolute top-1/3 right-1/3 animate-pulse-scale">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-xl opacity-50 shadow-lg"></div>
      </div>

      {/* Vertical accent line - right side */}
      <div className="absolute bottom-24 right-16 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="w-1 h-40 bg-gradient-to-t from-purple-500 to-transparent opacity-40"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <div className="mb-8 inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium animate-slide-in-down">
          Get the cheapest food delivered only on Giveat
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          style={{
            animation: 'fade-in-up 1s ease-out 0.2s both',
          }}
        >
          <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Fresh & Fast at Your Doorstep with Giveat
          </span>
        </h1>

        <p
          className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{
            animation: 'fade-in-up 1s ease-out 0.4s both',
          }}
        >
          Premium hyperlocal food delivery fresh, fast, reliable. From street food to gourmet meals, delivered hot in
          15–30 minutes.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{
            animation: 'fade-in-up 1s ease-out 0.6s both',
          }}
        >
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 min-w-fit animate-float">
            Get Started <ArrowRight size={20} />
          </button>
          <button
            className="bg-white text-gray-800 px-8 py-4 rounded-2xl font-semibold border-2 border-gray-200 hover:border-purple-300 hover:shadow-md hover:scale-105 transition-all duration-300 flex items-center gap-2 min-w-fit animate-float"
            style={{ animationDelay: '0.2s' }}
          >
            Download App <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
