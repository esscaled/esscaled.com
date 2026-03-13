import { motion } from "motion/react";
import React, { useRef } from "react";

interface Step {
  id: string;
  name: string;
  description: string;
  animation: React.ReactNode;
}

const steps: Step[] = [
  {
    id: "01",
    name: "Free Consultation",
    description:
      "We analyze your current marketing, website, and goals to find the biggest opportunities for growth.",
    animation: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Laptop Screen */}
        <motion.rect
          x="25"
          y="30"
          width="50"
          height="38"
          rx="2"
          fill="none"
          stroke="white"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        {/* Laptop Base */}
        <motion.path
          d="M20 70 L80 70 L85 75 L15 75 Z"
          fill="none"
          stroke="white"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
        />
        {/* Phone Graphic (Simplified) */}
        <motion.rect
          x="65"
          y="45"
          width="12"
          height="22"
          rx="2"
          fill="zinc-900"
          stroke="white"
          strokeWidth="1.5"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />
      </svg>
    ),
  },
  {
    id: "02",
    name: "Custom Growth Plan",
    description:
      "We build a tailored strategy combining high-converting web design and targeted paid ads to scale your revenue.",
    animation: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Gear Graphic */}
        <motion.path
          d="M50 25 L55 25 L57 30 A20 20 0 0 1 63 32 L68 30 L72 34 L70 39 A20 20 0 0 1 72 45 L77 47 L77 53 L72 55 A20 20 0 0 1 70 61 L72 66 L68 70 L63 68 A20 20 0 0 1 57 70 L55 75 L45 75 L43 70 A20 20 0 0 1 37 68 L32 70 L28 66 L30 61 A20 20 0 0 1 28 55 L23 53 L23 47 L28 45 A20 20 0 0 1 30 39 L28 34 L32 30 L37 32 A20 20 0 0 1 43 30 L45 25 Z"
          fill="none"
          stroke="white"
          strokeWidth="2"
          initial={{ pathLength: 0, rotate: -90, opacity: 0 }}
          whileInView={{ pathLength: 1, rotate: 0, opacity: 1 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 0.9, ease: "circOut" }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="8"
          fill="none"
          stroke="white"
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </svg>
    ),
  },
  {
    id: "03",
    name: "Scale & Optimize",
    description:
      "We launch your campaigns, optimize your site, and continuously test to maximize your return on ad spend (ROAS).",
    animation: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Gear (remains) */}
        <path
          d="M50 45 L53 45 L54 48 A12 12 0 0 1 58 49 L61 48 L63 50 L62 53 A12 12 0 0 1 63 57 L66 58 L66 62 L63 63 A12 12 0 0 1 62 67 L63 70 L61 72 L58 71 A12 12 0 0 1 54 72 L53 75 L47 75 L46 72 A12 12 0 0 1 42 71 L39 72 L37 70 L38 67 A12 12 0 0 1 37 63 L34 62 L34 58 L37 57 A12 12 0 0 1 38 53 L37 50 L39 48 L42 49 A12 12 0 0 1 46 48 L47 45 Z"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeOpacity="0.3"
        />
        {/* Upward Trend Line */}
        <motion.path
          d="M20 75 L40 55 L55 60 L85 20"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        {/* Arrow head */}
        <motion.path
          d="M75 20 L85 20 L85 30"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 0.3, delay: 0.8 }}
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 sm:py-32 lg:py-48 bg-zinc-950 border-y border-white/5 relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-24 sm:mb-32">
          <h2 className="text-xs font-semibold leading-7 text-zinc-400 uppercase tracking-widest">
            Our Process
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl font-display">
            How we scale your business
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400 font-light max-w-xl lg:mx-auto">
            A simple, proven 3-step process to turn your website into a customer
            acquisition machine.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Line */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-24 sm:space-y-40">
            {steps.map((step, index) => (
              <TimelineStep key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-32 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-black transition-all bg-white rounded-full hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-105 btn-large"
          >
            Start Step 01 Today
          </a>
        </div>
      </div>
    </section>
  );
}

function TimelineStep({ step, index }: any) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-24 items-center">
      {/* Animation Column */}
      <div className={`${isEven ? "sm:order-1" : "sm:order-2"} flex justify-center`}>
        <div className="w-48 h-48 sm:w-64 sm:h-64 relative">
          <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl opacity-50" />
          {step.animation}
        </div>
      </div>

      {/* Content Column */}
      <div className={`${isEven ? "sm:order-2 sm:text-left" : "sm:order-1 sm:text-right"} text-left`}>
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-black font-bold font-display text-xl mb-6 ${!isEven && "sm:ml-auto"}`}>
          {step.id}
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-4">
          {step.name}
        </h3>
        <p className="text-lg text-gray-400 font-light leading-relaxed">
          {step.description}
        </p>
      </div>

      {/* Dot on the line */}
      <div className="absolute left-8 sm:left-1/2 top-0 sm:top-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 border-4 border-zinc-950 hidden sm:block" />
    </div>
  );
}
