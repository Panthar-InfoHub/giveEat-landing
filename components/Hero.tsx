'use client';

import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-purple-50 to-blue-50 pt-20 pb-32 px-4 min-h-screen flex items-center">
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes float-alt {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-25px); }
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
          @keyframes pulse-scale {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.05); opacity: 1; }
          }
          @keyframes bounce-rotation {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-30px) rotate(10deg); }
          }
          @keyframes swirl {
            0% { transform: rotate(0deg) translateX(80px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
          }
          @keyframes slide-right {
            0% { transform: translateX(-100%); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .animate-float-alt {
            animation: float-alt 3.5s ease-in-out infinite;
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
          .animate-pulse-scale {
            animation: pulse-scale 2s ease-in-out infinite;
          }
          .animate-bounce-rotation {
            animation: bounce-rotation 3s ease-in-out infinite;
          }
          .animate-swirl {
            animation: swirl 8s linear infinite;
          }
          .animate-slide-right {
            animation: slide-right 1s ease-out;
          }
        `}</style>

        {/* Animated background blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob-1"></div>
        <div className="absolute -bottom-8 right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob-2"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob-3"></div>

        {/* Food delivery themed animated graphics */}
        {/* Scooter element */}
        <div className="absolute top-32 right-12 md:right-20 text-6xl animate-swirl" style={{ animationDuration: '10s' }}>
          🛵
        </div>

        {/* Pizza element */}
        <div className="absolute top-48 left-8 md:left-16 text-5xl animate-bounce-rotation">
          🍕
        </div>

        {/* Utensils element */}
        <div className="absolute bottom-32 right-32 text-5xl animate-float">
          🍴
        </div>

        {/* Burger element */}
        <div className="absolute bottom-40 left-20 text-6xl animate-float-alt">
          🍔
        </div>

        {/* Delivery box element */}
        <div className="absolute top-1/3 right-1/3 text-5xl animate-pulse-scale">
          📦
        </div>

        {/* Fork and knife element */}
        <div className="absolute bottom-24 right-16 text-5xl animate-float" style={{ animationDelay: '0.5s' }}>
          🍽️
        </div>

        <div className="relative max-w-4xl mx-auto text-center z-10">
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
  );
}
