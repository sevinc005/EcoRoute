import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MapPin, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-emerald-50/50 to-sky-50/50 dark:from-eco-navy dark:via-eco-navy-light dark:to-eco-navy pt-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-eco-emerald/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-eco-sky/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-eco-emerald/5 to-eco-sky/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-eco-emerald-light dark:bg-emerald-900/30 text-eco-emerald text-sm font-semibold rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Yeni Nəsil Yaşıl Naviqasiya
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-eco-navy dark:text-white leading-tight">
              Şəhər daxili
              <br />
              səfərlərinizi{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-emerald to-emerald-400">
                ekoloji dost
              </span>{' '}
              edin
            </h1>

            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              EcoRoute, hər gün getdiyiniz yolları daha az karbon emissiyası yaradan və daha sürətli
              alternativlərlə əvəz edir. Pul qənaət edin, xal qazanın, planeti qoruyun.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <motion.a
                href="#calculator"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-eco-emerald to-emerald-500 text-white font-bold rounded-2xl shadow-xl shadow-eco-emerald/25 hover:shadow-eco-emerald/40 transition-shadow text-lg"
              >
                Başla
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <a
                href="#features"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-eco-navy dark:text-white font-bold rounded-2xl shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-700 transition-all text-lg"
              >
                Daha çox öyrən
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-eco-emerald animate-pulse" />
                Pulsuz istifadə
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-eco-sky animate-pulse" />
                Real vaxt data
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                Təhlükəsiz
              </div>
            </div>
          </motion.div>

          {/* Right Visual — App mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Phone frame */}
              <div className="w-72 h-[580px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3rem] p-3 shadow-2xl shadow-slate-900/30">
                <div className="w-full h-full bg-gradient-to-br from-eco-emerald-light via-white to-emerald-50 rounded-[2.4rem] overflow-hidden relative">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-6 pt-4 text-xs font-medium text-slate-600">
                    <span>9:41</span>
                    <div className="w-20 h-5 bg-slate-900 rounded-full" />
                    <div className="flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Mock map */}
                  <div className="mx-4 mt-4 h-48 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl relative overflow-hidden">
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute top-8 left-6 w-32 h-1 bg-eco-emerald rounded-full" />
                      <div className="absolute top-8 left-38 w-1 h-20 bg-eco-emerald rounded-full" />
                      <div className="absolute top-28 left-38 w-24 h-1 bg-eco-emerald rounded-full" />
                      <div className="absolute top-16 left-16 w-20 h-1 bg-slate-400 rounded-full rotate-45" />
                      <div className="absolute top-20 right-8 w-16 h-1 bg-slate-400 rounded-full -rotate-12" />
                    </div>
                    <div className="absolute top-6 left-5">
                      <MapPin className="w-6 h-6 text-eco-emerald drop-shadow-lg" />
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <MapPin className="w-6 h-6 text-red-500 drop-shadow-lg" />
                    </div>
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur rounded-xl px-3 py-1.5 text-xs font-semibold text-eco-emerald shadow">
                      🌿 Ən yaşıl marşrut
                    </div>
                  </div>

                  {/* Mock route info */}
                  <div className="mx-4 mt-3 bg-white rounded-2xl p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-500">Təxmini vaxt</p>
                        <p className="text-lg font-bold text-eco-navy">23 dəq</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-500">CO₂ qənaət</p>
                        <p className="text-lg font-bold text-eco-emerald">-1.2 kg</p>
                      </div>
                    </div>
                  </div>

                  {/* Mock EcoPoints */}
                  <div className="mx-4 mt-3 bg-gradient-to-r from-eco-emerald to-emerald-400 rounded-2xl p-4 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-emerald-100">Qazanılan</p>
                        <p className="text-2xl font-extrabold">+35 EP</p>
                      </div>
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                        🏆
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-16 top-20 bg-white dark:bg-slate-800 rounded-2xl px-4 py-3 shadow-xl border border-slate-100 dark:border-slate-700"
              >
                <div className="flex items-center gap-2">
                  <div className="text-2xl">🌍</div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Bu ay</p>
                    <p className="text-sm font-bold text-eco-navy dark:text-white">-48 kg CO₂</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -right-12 bottom-32 bg-white dark:bg-slate-800 rounded-2xl px-4 py-3 shadow-xl border border-slate-100 dark:border-slate-700"
              >
                <div className="flex items-center gap-2">
                  <div className="text-2xl">⭐</div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">EcoPoints</p>
                    <p className="text-sm font-bold text-eco-navy dark:text-white">2,480 xal</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
