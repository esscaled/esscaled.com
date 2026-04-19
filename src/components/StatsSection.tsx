import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

const stats = [
  { label: "Clients Secured", value: "25+" },
  { label: "Leads Generated", value: "1500+" },
  { label: "Average Leads Per Ad Campaign", value: "1500–2000+" },
  { label: "Conversion Focused Systems", value: "100%" },
];

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const match = value.match(/^(\d+)/);
    if (!match) { setDisplay(value); return; }
    const end = parseInt(match[1]);
    const suffix = value.slice(match[0].length);
    const duration = 1600;
    const startTime = Date.now();

    function tick() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * end);
      setDisplay(current.toLocaleString() + suffix);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
}

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
            initial={{ opacity: 0, y: 16 }}
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
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.1 * (index + 1),
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="flex flex-col items-center text-center"
            >
              <span className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tighter text-white tabular-nums">
                <AnimatedNumber value={stat.value} />
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
