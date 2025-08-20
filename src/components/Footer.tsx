
import React from "react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-white">
      {/* CTA Section */}
      <div className="section-container py-16 sm:py-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Communications?
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 mb-8">
            Start using Will to automate conversations and grow your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white px-8 py-3 text-lg">
              Start Building Free →
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg">
              Talk to an Expert
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-16 border-t border-slate-700">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              The no-code platform for building AI assistants that handle business conversations at scale.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors text-sm">Use Cases</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors text-sm">Integrations</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors text-sm">Blog</a></li>
              <li><a href="/contact" className="text-slate-300 hover:text-teal-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors text-sm">API Reference</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors text-sm">Help Center</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-slate-700">
          <div className="text-center text-slate-400 text-sm">
            <p className="mb-2">© 2024 Travnex. All rights reserved.</p>
            <p className="text-xs">Owned and powered by Travnex</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
