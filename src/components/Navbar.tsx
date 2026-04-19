import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#" },
    { name: "Services", href: "/#services" },
    { name: "Process", href: "/#how-it-works" },
    { name: "Calculator", href: "/#roi" },
    { name: "Contact", href: "/#contact" },
  ];

  const leftLinks = navLinks.slice(0, 2);
  const rightLinks = navLinks.slice(3);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur-lg py-2 border-b border-white/10" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout: 3-column grid */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center gap-24">
          {/* Left Navigation */}
          <div className="flex justify-end space-x-12">
            {leftLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium tracking-widest uppercase group"
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-0 h-px w-full bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </a>
            ))}
          </div>

          {/* Centered Logo */}
          <div className="flex-shrink-0 flex items-center justify-center px-4">
            <a href="/" className="transition-transform duration-300 hover:scale-[1.02]">
              <img 
                src="/ESScaled logo.png" 
                alt="ESScaled Marketing Agency" 
                className="h-auto w-full max-w-[280px]" 
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          {/* Right Navigation */}
          <div className="flex justify-start items-center space-x-12">
            {rightLinks.map((link) => (
              link.name === "Contact" ? (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="bg-white text-black px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_28px_rgba(255,255,255,0.25)] hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                >
                  {link.name}
                </motion.a>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium tracking-widest uppercase group"
                >
                  {link.name}
                  <span className="absolute -bottom-0.5 left-0 h-px w-full bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </a>
              )
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex items-center justify-between md:hidden">
          <div className="w-10"></div> {/* Spacer for centering */}
          
          <div className="flex-shrink-0 flex items-center justify-center">
            <a href="/">
              <img 
                src="/ESScaled logo.png" 
                alt="ESScaled Marketing Agency" 
                className="h-auto w-full max-w-[200px]" 
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          <div className="w-10 flex justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-ink/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    link.name === "Contact"
                      ? "bg-white text-black text-center mt-4"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
