import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalcIcon, TreePine, Droplets, Car } from 'lucide-react';

export default function Calculator() {
  const [km, setKm] = useState(15);

  // 1 km avtomobil ≈ 120g CO₂
  const co2Monthly = ((km * 0.12) * 30).toFixed(1);
  const co2Yearly = ((km * 0.12) * 365).toFixed(0);
  const treesEquiv = Math.round(co2Monthly / 1.8);
  const fuelSaved = ((km * 0.07) * 30).toFixed(1); // ~0.07 litr/km orta

  return (
    <section
      id="calculator"
      className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-eco-navy-light dark:to-eco-navy"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-eco-emerald-light dark:bg-emerald-900/30 text-eco-emerald text-sm font-semibold rounded-full mb-4">
            <CalcIcon className="w-4 h-4" />
            İnteraktiv Alət
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-eco-navy dark:text-white">
            Ekoloji Təsirini <span className="text-eco-emerald">Hesabla</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg">
            Gündəlik məsafənizi daxil edin və EcoRoute ilə nə qədər qənaət edəcəyinizi görün.
          </p>
        </motion.div>

        {/* Calculator card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden">
            {/* Input area */}
            <div className="p-8 pb-6">
              <label className="flex items-center justify-between mb-6">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  Gündəlik qət etdiyiniz məsafə
                </span>
                <span className="text-2xl font-extrabold text-eco-emerald">
                  {km} km
                </span>
              </label>

              <input
                type="range"
                min="1"
                max="100"
                value={km}
                onChange={(e) => setKm(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-eco-emerald bg-gradient-to-r from-eco-emerald-light to-eco-emerald"
              />

              <div className="flex justify-between mt-2 text-xs text-slate-400">
                <span>1 km</span>
                <span>50 km</span>
                <span>100 km</span>
              </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-br from-eco-emerald-light/50 to-emerald-50 dark:from-emerald-900/20 dark:to-slate-800 p-8 border-t border-emerald-100 dark:border-emerald-800/30">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4 text-center">
                EcoRoute ilə təxmini qənaətiniz
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 text-center shadow-sm">
                  <Car className="w-5 h-5 text-eco-emerald mx-auto mb-2" />
                  <p className="text-2xl font-extrabold text-eco-navy dark:text-white">
                    {co2Monthly}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    kg CO₂ / ay
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 text-center shadow-sm">
                  <TreePine className="w-5 h-5 text-eco-emerald mx-auto mb-2" />
                  <p className="text-2xl font-extrabold text-eco-navy dark:text-white">
                    {treesEquiv}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    ağaca bərabər
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 text-center shadow-sm">
                  <Droplets className="w-5 h-5 text-eco-sky mx-auto mb-2" />
                  <p className="text-2xl font-extrabold text-eco-navy dark:text-white">
                    {fuelSaved}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    litr yanacaq / ay
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 text-center shadow-sm">
                  <CalcIcon className="w-5 h-5 text-indigo-500 mx-auto mb-2" />
                  <p className="text-2xl font-extrabold text-eco-navy dark:text-white">
                    {co2Yearly}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    kg CO₂ / il
                  </p>
                </div>
              </div>

              <p className="mt-6 text-center text-sm text-slate-400 dark:text-slate-500">
                * Hesablamalar orta avtomobil emissiyasına əsaslanır (120g CO₂/km)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
