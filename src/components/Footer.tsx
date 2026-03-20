import { Twitter, Facebook, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <a
              href="#"
              className="font-display font-bold text-2xl tracking-tight text-white"
            >
              ESScaled
            </a>
            <p className="text-sm leading-6 text-gray-400 max-w-xs font-light">
              Scaling ecommerce brands and local businesses with data-driven ads
              and high-converting websites.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-xs font-semibold leading-6 text-white uppercase tracking-widest">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="#services"
                      className="text-sm leading-6 text-gray-400 hover:text-white transition-colors"
                    >
                      Web Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-sm leading-6 text-gray-400 hover:text-white transition-colors"
                    >
                      Paid Ads
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-sm leading-6 text-gray-400 hover:text-white transition-colors"
                    >
                      CRO
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-sm leading-6 text-gray-400 hover:text-white transition-colors"
                    >
                      Strategy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-xs font-semibold leading-6 text-white uppercase tracking-widest">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="#about"
                      className="text-sm leading-6 text-gray-400 hover:text-white transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#how-it-works"
                      className="text-sm leading-6 text-gray-400 hover:text-white transition-colors"
                    >
                      Process
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-xs font-semibold leading-6 text-white uppercase tracking-widest">
                  Contact
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="mailto:evanvicino@esscaled.com"
                      className="text-sm leading-6 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                      <Mail className="h-4 w-4" />
                      evanvicino@esscaled.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:stepanlebedev@esscaled.com"
                      className="text-sm leading-6 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                      <Mail className="h-4 w-4" />
                      stepanlebedev@esscaled.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:5082805346"
                      className="text-sm leading-6 text-gray-400 hover:text-white transition-colors block"
                    >
                      508-280-5346
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:5082747739"
                      className="text-sm leading-6 text-gray-400 hover:text-white transition-colors block"
                    >
                      508-274-7739
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} ESScaled. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
