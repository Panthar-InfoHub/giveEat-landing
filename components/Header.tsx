import { ArrowRight } from 'lucide-react';

export function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex-shrink-0">
          <img src="/giveat-logo.jpg" alt="Giveat Logo" className="h-12 w-auto" />
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-gray-700 hover:text-purple-600 transition">
            About
          </a>
          <a href="#why" className="text-gray-700 hover:text-purple-600 transition">
            Why Giveat
          </a>
          <a href="#partner" className="text-gray-700 hover:text-purple-600 transition">
            Partner
          </a>
        </div>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition font-semibold">
          Join Us
        </button>
      </div>
    </nav>
  );
}
