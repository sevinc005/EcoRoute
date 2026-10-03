import { motion } from 'framer-motion';
import { MapPin, GitCompareArrows, Bike, Trophy, ArrowDown } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MapPin,
    title: 'Hara gedəcəyinizi daxil edin',
    description:
      'Başlanğıc və son nöqtənizi yazın — həmişəki kimi. EcoRoute arxa fonda bütün mümkün yolları hesablayır.',
    visual: (
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-eco-emerald border-2 border-eco-emerald-light" />
            <div className="flex-1 bg-slate-100 dark:bg-slate-700 rounded-lg px-3 py-2 text-sm text-slate-600 dark:text-slate-300">
              📍 28 May metro stansiyası
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-red-100" />
            <div className="flex-1 bg-slate-100 dark:bg-slate-700 rounded-lg px-3 py-2 text-sm text-slate-600 dark:text-slate-300">
              📍 Dəniz Mall
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: '02',
    icon: GitCompareArrows,
    title: 'Marşrutları müqayisə edin',
    description:
      'EcoRoute hər marşrutun yanında CO₂ miqdarını, vaxtını və xərcini göstərir. Avtomobil ilə nə qədər karbon buraxdığınızı, ictimai nəqliyyat və ya velosiped ilə nə qədər az olacağını aydın görürsünüz.',
    visual: (
      <div className="space-y-2">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 rounded-xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">🚗</span>
            <div>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">Avtomobil</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">18 dəq · 2.8 AZN benzin</p>
            </div>
          </div>
          <span className="text-sm font-bold text-red-500">+1.4 kg CO₂</span>
        </div>
        <div className="bg-eco-emerald-light dark:bg-emerald-900/20 border-2 border-eco-emerald/30 rounded-xl px-4 py-3 flex items-center justify-between ring-2 ring-eco-emerald/20">
          <div className="flex items-center gap-2">
            <span className="text-lg">🚇</span>
            <div>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">Metro + Piyada</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">22 dəq · 0.40 AZN</p>
            </div>
          </div>
          <span className="text-sm font-bold text-eco-emerald">-1.2 kg CO₂ ✓</span>
        </div>
        <div className="bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800/40 rounded-xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">🚲</span>
            <div>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">Velosiped</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">25 dəq · Pulsuz</p>
            </div>
          </div>
          <span className="text-sm font-bold text-eco-sky">-1.4 kg CO₂</span>
        </div>
      </div>
    ),
  },
  {
    number: '03',
    icon: Bike,
    title: 'Yaşıl marşrutu seçin',
    description:
      'Avtomobil əvəzinə metro, avtobus, velosiped və ya piyada yolu seçdikdə — həm yanacaq/parklanma xərcindən qurtulursunuz, həm də atmosferə buraxılan CO₂ azalır.',
    visual: (
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-eco-emerald-light dark:bg-emerald-900/20 rounded-xl p-3">
            <p className="text-2xl font-extrabold text-eco-emerald">2.8 ₼</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Yanacaq qənaəti</p>
          </div>
          <div className="bg-sky-100 dark:bg-sky-900/20 rounded-xl p-3">
            <p className="text-2xl font-extrabold text-eco-sky">1.4 kg</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">CO₂ azaldıldı</p>
          </div>
        </div>
        <p className="text-xs text-slate-400 mt-3">Hər gün belə etsəniz → ayda <b className="text-eco-emerald">84 ₼</b> qənaət</p>
      </div>
    ),
  },
  {
    number: '04',
    icon: Trophy,
    title: 'Xal qazanın, mükafat alın',
    description:
      'Hər yaşıl səfər üçün EcoPoints qazanırsınız. Bu xalları endirimli ictimai nəqliyyat biletlərinə, velosiped kirayəsinə və partnyor kampaniyalara dəyişə bilərsiniz — yəni daha çox qənaət!',
    visual: (
      <div className="bg-gradient-to-r from-eco-emerald to-emerald-400 rounded-2xl p-5 text-white">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-medium text-emerald-100">Bu həftə qazandınız</p>
          <span className="text-2xl">🏆</span>
        </div>
        <p className="text-3xl font-extrabold">+240 EP</p>
        <div className="mt-3 bg-white/20 rounded-xl px-3 py-2 text-sm">
          🎟️ 5 pulsuz avtobus bileti ilə dəyişə bilərsiniz
        </div>
      </div>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-gradient-to-b from-emerald-50/50 to-white dark:from-eco-navy-light dark:to-eco-navy"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-eco-emerald-light dark:bg-emerald-900/30 text-eco-emerald text-sm font-semibold rounded-full mb-4">
            Addım-Addım
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-eco-navy dark:text-white">
            Necə <span className="text-eco-emerald">İşləyir</span>?
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
            Avtomobil əvəzinə yaşıl nəqliyyat seçərək həm cibinizdə pul saxlayırsınız, həm də
            karbon emissiyasını azaldırsınız. Budur, bu qədər sadədir:
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-8"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 1;

            return (
              <div key={step.number}>
                <motion.div
                  variants={stepVariants}
                  className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}
                >
                  {/* Text */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <span className="text-4xl font-black text-eco-emerald/20 dark:text-eco-emerald/10">
                        {step.number}
                      </span>
                      <div className="w-12 h-12 bg-eco-emerald-light dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-eco-emerald" />
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-eco-navy dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-md mx-auto md:mx-0">
                      {step.description}
                    </p>
                  </div>

                  {/* Visual */}
                  <div className="flex-1 w-full max-w-sm">{step.visual}</div>
                </motion.div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4">
                    <ArrowDown className="w-6 h-6 text-eco-emerald/30 dark:text-eco-emerald/20" />
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Summary callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-gradient-to-r from-eco-emerald to-emerald-500 rounded-3xl p-8 md:p-10 text-center text-white shadow-xl shadow-eco-emerald/20"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Qısa desək: Avtomobil əvəzinə yaşıl nəqliyyat = Pul qənaəti + Təmiz hava
          </h3>
          <p className="text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            Gündəlik 10 km-lik marşrutu avtomobil əvəzinə metro ilə getmək sizə <b>ayda ~84 ₼</b>{' '}
            yanacaq qənaəti və <b>~36 kg</b> daha az CO₂ emissiyası qazandırır. Üstəlik EcoPoints
            xalları ilə əlavə endirim və mükafatlar əldə edirsiniz.
          </p>
          <a
            href="#calculator"
            className="inline-flex items-center gap-2 mt-6 px-8 py-3.5 bg-white text-eco-emerald font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Öz qənaətini hesabla →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
