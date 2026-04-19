import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import {
  LayoutTemplate,
  Megaphone,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    title: "Website Design & Conversion Optimization",
    description:
      "We build beautiful, high-converting websites that turn visitors into paying customers. Stop losing sales to a confusing user experience.",
    icon: LayoutTemplate,
    benefits: [
      "Custom Shopify & WordPress builds",
      "Mobile-first responsive design",
      "Conversion rate optimization (CRO)",
      "Lightning-fast page speeds",
    ],
    cta: "Get a Free Audit",
  },
  {
    title: "Paid Ads Management",
    description:
      "Data-driven campaigns across Facebook, Instagram, and Google to acquire customers profitably and scale your revenue predictably.",
    icon: Megaphone,
    benefits: [
      "Meta (FB/IG) & Google Ads",
      "Creative strategy & testing",
      "Advanced retargeting funnels",
      "Daily optimization & reporting",
    ],
    cta: "Scale Your Ads",
  },
  {
    title: "Brand Scaling Strategy",
    description:
      "A holistic approach to growing your business online. We align your website, ads, and email marketing to maximize customer lifetime value.",
    icon: TrendingUp,
    benefits: [
      "Full-funnel marketing strategy",
      "Email & SMS automation setup",
      "Offer creation & positioning",
      "Competitor analysis",
    ],
    cta: "Build a Strategy",
  },
];

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 30 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 lg:py-40 bg-ink relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-zinc-400 font-semibold tracking-widest uppercase text-xs mb-3"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl font-display"
          >
            Everything you need to scale online
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-6 text-lg leading-8 text-gray-400 font-light max-w-xl mx-auto"
          >
            We don't just run ads or build websites. We build complete growth
            engines for ambitious brands.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-y-12 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <TiltCard className="flex flex-col h-full bg-zinc-900/30 border border-white/5 rounded-3xl p-6 sm:p-8 hover:bg-zinc-900/70 transition-colors duration-300 group">
                  <dt className="flex items-center gap-x-4 text-xl font-semibold leading-7 text-white font-display mb-6">
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="h-14 w-14 flex items-center justify-center rounded-2xl bg-white/5 text-zinc-300 group-hover:bg-white group-hover:text-black transition-colors duration-300 shrink-0"
                    >
                      <service.icon className="h-7 w-7" aria-hidden="true" />
                    </motion.div>
                    {service.title}
                  </dt>
                  <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-gray-400">
                    <p className="flex-auto mb-8 font-light leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-4 mb-10">
                      {service.benefits.map((benefit, bi) => (
                        <motion.li
                          key={benefit}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.12 + bi * 0.07 }}
                          className="flex items-start gap-3 text-sm text-gray-300"
                        >
                          <CheckCircle2 className="h-5 w-5 text-zinc-500 shrink-0 mt-0.5" />
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>

                    <div className="mt-auto">
                      <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="inline-flex w-full justify-center items-center gap-2 rounded-xl bg-white/5 px-6 py-4 text-base font-semibold text-white hover:bg-white hover:text-black border border-white/10 transition-colors duration-300 btn-large cursor-pointer"
                      >
                        {service.cta}
                      </motion.a>
                    </div>
                  </dd>
                </TiltCard>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
