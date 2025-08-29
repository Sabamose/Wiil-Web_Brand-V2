
import React from "react";
import { Button } from "./ui/button";
import { X, Linkedin, Youtube, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-white via-teal-100/60 to-teal-100 border-t border-teal-200 shadow-sm text-gray-900 mt-8">
      {/* CTA Section */}
      <div className="section-container py-8 sm:py-12 lg:py-16">

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-8 sm:pt-12 border-t border-teal-300">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              The no-code platform for building AI assistants that handle customer conversations at scale.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors text-sm">Use Cases</a></li>
              
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors text-sm">Integrations</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors text-sm">About</a></li>
              
              <li><a href="/contact" className="text-gray-600 hover:text-teal-600 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors text-sm">API Reference</a></li>
              
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="pt-8 mt-8 border-t border-teal-300">
          <div className="text-center text-gray-500 text-sm">
            <div className="flex justify-center gap-4 mb-6">
              <a 
                href="https://x.com/Wiil76581537624" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white hover:bg-teal-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/wiilai/?viewAsMember=true" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white hover:bg-teal-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@WillCX-r3c" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white hover:bg-teal-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            <p className="mb-2">© 2024 Travnex. All rights reserved.</p>
            <p className="text-xs">Owned and powered by Travnex</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
