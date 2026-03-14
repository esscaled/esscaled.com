import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-zinc-950 border-y border-white/5"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pr-8 lg:pt-4"
          >
            <div className="lg:max-w-lg">
              <h2 className="text-zinc-400 font-semibold tracking-widest uppercase text-xs mb-3">
                Your Growth Partner
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
                We are ESScaled.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-400 font-light">
                We started our agency because we saw too many
                great businesses struggling with terrible websites and wasted ad
                spend from bloated agencies.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-400 font-light">
                Our mission is simple: build modern marketing systems that
                actually generate ROI. We don't care about vanity metrics; we care
                about scaling your revenue predictably. When you work with us,
                you work directly with the experts.
              </p>

              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-400 lg:max-w-none">
                {[
                  "Data-driven decisions over guesswork.",
                  "Transparent reporting, no BS.",
                  "We treat your budget like our own.",
                ].map((feature) => (
                  <div key={feature} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <CheckCircle2
                        className="absolute left-1 top-1 h-5 w-5 text-zinc-500"
                        aria-hidden="true"
                      />
                      {feature}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://picsum.photos/seed/teamwork/800/1000?grayscale"
              alt="ESScaled Team"
              className="w-[48rem] max-w-none rounded-2xl bg-zinc-900 shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />

            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl">
              <p className="text-4xl font-bold text-white font-display">100%</p>
              <p className="text-sm text-zinc-400 mt-1 uppercase tracking-widest">
                Focus on ROI
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
