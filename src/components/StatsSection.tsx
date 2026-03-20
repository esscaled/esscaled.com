import { motion } from "motion/react";

const stats = [
  {
    label: "Clients Secured",
    value: "25+",
  },
  {
    label: "Leads Generated",
    value: "1500+",
  },
  {
    label: "Average Leads Per Ad Campaign",
    value: "1500–2000+",
  },
  {
    label: "Conversion Focused Systems",
    value: "100%",
  },
];

export default function StatsSection() {
  return (
    <section className="py-24 bg-zinc-950 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          >
            Proven Results
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 text-lg font-light"
          >
            Real performance from real campaigns.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 2) }}
              className="flex flex-col items-center text-center"
            >
              <span className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tighter text-white">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm uppercase tracking-widest text-zinc-500 font-semibold">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
