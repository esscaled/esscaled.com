import { motion } from "motion/react";
import { ArrowRight, BarChart3 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-48 sm:pb-32 lg:pt-64 lg:pb-40 overflow-hidden bg-grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-ink to-ink pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden sm:block"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-300"></span>
              </span>
              Taking on 2 new partners this month
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 sm:mb-8 leading-[1.1] px-4 sm:px-0"
          >
            Scale Your Revenue. <br className="hidden lg:block" />
            <span className="text-gradient font-display italic pr-2">
              Predictably.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-xl text-gray-400 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed font-light px-4 sm:px-0"
          >
            High-converting websites paired with data-driven ads. Stop wasting
            budget and start dominating your market.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-6 sm:px-0"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-10 py-5 bg-white hover:bg-gray-200 text-black rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:-translate-y-1 btn-large"
            >
              Book a Free Strategy Call
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-10 py-5 bg-transparent hover:bg-white/5 border border-white/20 text-white rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2 hover:-translate-y-1 btn-large"
            >
              Get a Free Website Audit
              <BarChart3 className="w-5 h-5 text-gray-400" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
