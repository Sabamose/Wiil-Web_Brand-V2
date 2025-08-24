
import React from "react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-teal-50 via-white to-teal-50 text-gray-900">
      {/* CTA Section */}
      <div className="section-container py-16 sm:py-20">

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-16 border-t border-gray-300">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              The no-code platform for building AI assistants that handle business conversations at scale.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors text-sm">Use Cases</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors text-sm">Integrations</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors text-sm">Blog</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-teal-600 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors text-sm">API Reference</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors text-sm">Help Center</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-300">
          <div className="text-center text-gray-500 text-sm">
            <p className="mb-2">© 2024 Travnex. All rights reserved.</p>
            <p className="text-xs">Owned and powered by Travnex</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
