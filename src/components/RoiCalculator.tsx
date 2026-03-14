import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, TrendingUp, DollarSign, Users, Target, BarChart } from 'lucide-react';

export default function RoiCalculator() {
  const [dailySpend, setDailySpend] = useState<number>(100);
  const [cpl, setCpl] = useState<number>(10);
  const [conversionRate, setConversionRate] = useState<number>(20);
  const [revenuePerCustomer, setRevenuePerCustomer] = useState<number>(500);

  // Calculations
  const monthlySpend = dailySpend * 30;
  const estimatedLeads = Math.floor(monthlySpend / cpl);
  const estimatedCustomers = Math.floor(estimatedLeads * (conversionRate / 100));
  const cac = estimatedCustomers > 0 ? Math.floor(monthlySpend / estimatedCustomers) : 0;
  const estimatedRevenue = estimatedCustomers * revenuePerCustomer;
  const roas = monthlySpend > 0 ? (estimatedRevenue / monthlySpend).toFixed(1) : "0.0";

  return (
    <section id="roi" className="py-24 sm:py-32 bg-zinc-950 border-y border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          
          {/* Left Side: The Value Proposition */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pr-8"
          >
            <h2 className="text-xs font-semibold leading-7 text-zinc-400 uppercase tracking-widest flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              Advertising Performance Calculator
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-display leading-tight">
              Focus on ROI. <br className="hidden sm:block"/>
              Scale with confidence.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-400 font-light">
              Stop guessing and start growing. Use our performance calculator to see how your ad spend translates into real business growth.
            </p>
            
            <div className="mt-10 space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white font-display">Predictable Growth</h3>
                  <p className="mt-2 text-sm text-gray-400 font-light">
                    We focus on the metrics that matter: leads, customers, and return on ad spend.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10">
                    <BarChart className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white font-display">Performance Driven</h3>
                  <p className="mt-2 text-sm text-gray-400 font-light">
                    Our strategies are optimized daily to lower your CAC and maximize your profit margins.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: The Calculator */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full max-w-full"
          >
            <div className="absolute -inset-1 bg-gradient-to-b from-white/20 to-transparent rounded-[2rem] blur-lg opacity-20 pointer-events-none" />
            
            <div className="relative bg-ink border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl w-full">
              <div className="space-y-6">
                
                {/* Inputs */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-white">Daily Ad Spend</label>
                    <span className="text-sm text-zinc-400">${dailySpend.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="15" 
                    max="1000" 
                    step="5"
                    value={dailySpend} 
                    onChange={(e) => setDailySpend(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-white">Cost Per Lead (CPL)</label>
                    <span className="text-sm text-zinc-400">${cpl.toFixed(2)}</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    step="1"
                    value={cpl} 
                    onChange={(e) => setCpl(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-white">Lead to Customer Rate (%)</label>
                    <span className="text-sm text-zinc-400">{conversionRate}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    step="1"
                    value={conversionRate} 
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-white">Revenue Per Customer</label>
                    <span className="text-sm text-zinc-400">${revenuePerCustomer.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="100" 
                    max="10000" 
                    step="100"
                    value={revenuePerCustomer} 
                    onChange={(e) => setRevenuePerCustomer(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
                  />
                </div>

              </div>

              {/* Results */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  
                  <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-4 h-4 text-zinc-400" />
                      <p className="text-[10px] text-zinc-400 uppercase tracking-wider">Est. Leads / Mo</p>
                    </div>
                    <p className="text-2xl sm:text-3xl font-display font-bold text-white">
                      {estimatedLeads.toLocaleString()}
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                      <Target className="w-4 h-4 text-zinc-400" />
                      <p className="text-[10px] text-zinc-400 uppercase tracking-wider">Est. Customers / Mo</p>
                    </div>
                    <p className="text-2xl sm:text-3xl font-display font-bold text-white">
                      {estimatedCustomers.toLocaleString()}
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                      <DollarSign className="w-4 h-4 text-zinc-400" />
                      <p className="text-[10px] text-zinc-400 uppercase tracking-wider">CAC (Acquisition Cost)</p>
                    </div>
                    <p className="text-2xl sm:text-3xl font-display font-bold text-white">
                      ${cac.toLocaleString()}
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="w-4 h-4 text-zinc-400" />
                      <p className="text-[10px] text-zinc-400 uppercase tracking-wider">Estimated ROAS</p>
                    </div>
                    <p className="text-2xl sm:text-3xl font-display font-bold text-white">
                      {roas}x
                    </p>
                  </div>

                </div>
              </div>

              <div className="mt-6">
                <p className="text-[10px] text-zinc-500 leading-relaxed italic text-center">
                  *Disclaimer: Results are estimates based on user inputs. Actual advertising performance depends on multiple factors including market conditions, product quality, and campaign strategy.
                </p>
              </div>

              <div className="mt-8">
                <a 
                  href="#contact" 
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-black shadow-sm hover:bg-gray-200 transition-all btn-large"
                >
                  Build Your Custom Strategy
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
