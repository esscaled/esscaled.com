import { motion } from "motion/react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import React, { useState } from "react";
import TermsModal from "./TermsModal";

export default function LeadCapture() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    revenue: "",
    problem: "",
    contactMethod: "Email"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInitialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.revenue || !formData.problem) {
      setError("Please fill out all required fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsTermsOpen(true);
  };

  const handleFinalSubmit = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch('/api/sendInquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          struggles: formData.problem,
          help: `Preferred Contact: ${formData.contactMethod}. Phone: ${formData.phone}`
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send inquiry');
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 lg:py-40 bg-ink overflow-hidden"
    >
      <div className="absolute inset-0 bg-zinc-900/20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl font-display">
            Ready to scale your business?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-400 font-light max-w-xl mx-auto">
            Fill out the form below to get your free, custom growth plan. We respond to all inquiries within 2 hours.
          </p>
          
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-8 text-gray-300">
            <div className="flex flex-col items-center md:items-end">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Email</span>
              <div className="flex flex-col items-center md:items-end gap-1">
                <a href="mailto:evanvicino@esscaled.com" className="hover:text-white transition-colors text-lg">
                  evanvicino@esscaled.com
                </a>
                <a href="mailto:stepanlebedev@esscaled.com" className="hover:text-white transition-colors text-lg">
                  stepanlebedev@esscaled.com
                </a>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/10"></div>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Phone</span>
              <div className="flex flex-col items-center md:items-start gap-1">
                <a href="tel:5082805346" className="hover:text-white transition-colors text-lg">
                  508-280-5346
                </a>
                <a href="tel:5082747739" className="hover:text-white transition-colors text-lg">
                  508-274-7739
                </a>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-6 sm:p-10 lg:p-12 rounded-3xl shadow-2xl"
        >
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="mx-auto w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">Request Received</h3>
              <p className="text-zinc-400">
                Thank you for your interest. We will review your information and get back to you within 2 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleInitialSubmit} className="space-y-8">
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-white mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    className="block w-full rounded-xl border-0 bg-white/5 py-4 px-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-white mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className="block w-full rounded-xl border-0 bg-white/5 py-4 px-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-white mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    className="block w-full rounded-xl border-0 bg-white/5 py-4 px-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium leading-6 text-white mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="block w-full rounded-xl border-0 bg-white/5 py-4 px-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm transition-all"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label
                    htmlFor="revenue"
                    className="block text-sm font-medium leading-6 text-white mb-2"
                  >
                    Monthly Revenue *
                  </label>
                  <select
                    id="revenue"
                    name="revenue"
                    required
                    value={formData.revenue}
                    onChange={handleChange}
                    className="block w-full rounded-xl border-0 bg-white/5 py-4 px-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm transition-all [&>option]:bg-zinc-900"
                  >
                    <option value="">Select an option</option>
                    <option value="under-10k">Under $10k</option>
                    <option value="10k-50k">$10k - $50k</option>
                    <option value="50k-100k">$50k - $100k</option>
                    <option value="over-100k">$100k+</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contactMethod"
                    className="block text-sm font-medium leading-6 text-white mb-2"
                  >
                    Preferred Contact Method
                  </label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    className="block w-full rounded-xl border-0 bg-white/5 py-4 px-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm transition-all [&>option]:bg-zinc-900"
                  >
                    <option value="Email">Email</option>
                    <option value="Phone Call">Phone Call</option>
                    <option value="Text Message">Text Message</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="problem"
                    className="block text-sm font-medium leading-6 text-white mb-2"
                  >
                    Biggest Marketing Problem *
                  </label>
                  <textarea
                    name="problem"
                    id="problem"
                    required
                    value={formData.problem}
                    onChange={handleChange}
                    rows={4}
                    className="block w-full rounded-xl border-0 bg-white/5 py-4 px-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm transition-all resize-none"
                    placeholder="e.g., We get traffic but no sales, or our ad costs are too high..."
                  />
                </div>
              </div>

              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <p className="text-sm text-red-400 text-center">{error}</p>
                </div>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-5 text-lg font-semibold text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      Processing...
                      <Loader2 className="w-5 h-5 animate-spin" />
                    </>
                  ) : (
                    <>
                      Get Your Free Growth Plan
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
              
              <p className="text-center text-sm text-zinc-300 mt-4 font-medium">
                ⚡ We respond to all inquiries within 2 hours.
              </p>
              
              <p className="text-center text-xs text-gray-500 mt-2">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          )}
        </motion.div>
      </div>

      <TermsModal 
        isOpen={isTermsOpen} 
        onClose={() => setIsTermsOpen(false)} 
        mode="accept" 
        onAccept={handleFinalSubmit} 
      />
    </section>
  );
}
