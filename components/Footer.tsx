import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4">
      <div className="max-w-6xl mx-auto mb-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src="/giveat-logo.jpg" alt="Giveat" className="h-8 w-auto mb-4" />
            <p className="text-sm text-gray-400">
              Delivering fresh, quality food from your neighborhood to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#partner" className="hover:text-purple-400 transition">
                  Partner
                </a>
              </li>
            </ul>
          </div>

          {/* For Customers */}
          <div>
            <h4 className="font-semibold text-white mb-4">For Customers</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Download App
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 items-start">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-purple-400" />
                <span>Jhansi, India</span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone size={18} className="flex-shrink-0 text-purple-400" />
                <span>+91 73098 33068</span>
              </li>
              <li className="flex gap-2 items-center">
                <Mail size={18} className="flex-shrink-0 text-purple-400" />
                <span>support@giveat.in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 pt-8"></div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400">© 2024 Giveat. All rights reserved.</p>

        <div className="flex gap-4">
          <a href="#" className="text-gray-400 hover:text-purple-400 transition">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition">
            Twitter
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
