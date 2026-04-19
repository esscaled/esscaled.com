import { motion } from "motion/react";
import { ArrowRight, BarChart3 } from "lucide-react";

const headlineWords = ["Scale", "Your", "Revenue."];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-48 sm:pb-32 lg:pt-64 lg:pb-40 overflow-hidden bg-grid-pattern">
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-white/[0.03] blur-[130px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-zinc-400/[0.06] blur-[110px]"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-ink to-ink pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 8, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease }}
            className="hidden sm:block"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-300" />
              </span>
              Taking on 2 new partners this month
            </span>
          </motion.div>

          {/* Headline — word by word with blur reveal */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 sm:mb-8 leading-[1.1] px-4 sm:px-0">
            <span className="inline">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={word}
                  className="inline-block mr-[0.25em]"
                  initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.65, delay: 0.08 + i * 0.09, ease }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <br className="hidden lg:block" />
            <motion.span
              className="text-gradient font-display italic pr-2"
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.08 + headlineWords.length * 0.09, ease }}
            >
              Predictably.
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.48, ease }}
            className="text-base sm:text-xl text-gray-400 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed font-light px-4 sm:px-0"
          >
            High-converting websites paired with data-driven ads. Stop wasting
            budget and start dominating your market.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.58, ease }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-6 sm:px-0"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 22 }}
              className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-full font-semibold text-lg flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(255,255,255,0.15)] hover:shadow-[0_0_44px_rgba(255,255,255,0.3)] btn-large cursor-pointer"
            >
              Book a Free Strategy Call
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -3, borderColor: "rgba(255,255,255,0.4)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 22 }}
              className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/20 text-white rounded-full font-semibold text-lg flex items-center justify-center gap-2 btn-large hover:bg-white/5 cursor-pointer"
            >
              Get a Free Website Audit
              <BarChart3 className="w-5 h-5 text-gray-400" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
