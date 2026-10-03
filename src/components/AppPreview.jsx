import { motion } from 'framer-motion';
import {
  Smartphone,
  Monitor,
  MapPin,
  Navigation,
  Award,
  TrendingUp,
  Bell,
  Shield,
} from 'lucide-react';

const screens = [
  {
    title: 'Xəritə & Marşrut',
    items: [
      { icon: MapPin, text: 'Canlı xəritə görüntüsü' },
      { icon: Navigation, text: 'Yaşıl marşrut seçimi' },
    ],
    color: 'from-eco-emerald to-emerald-400',
  },
  {
    title: 'Mükafatlar',
    items: [
      { icon: Award, text: 'EcoPoints balansı' },
      { icon: TrendingUp, text: 'Həftəlik irəliləyiş' },
    ],
    color: 'from-eco-sky to-blue-400',
  },
  {
    title: 'Bildirişlər',
    items: [
      { icon: Bell, text: 'Ekoloji yeniliklər' },
      { icon: Shield, text: 'Təhlükəsizlik xəbərdarlığı' },
    ],
    color: 'from-indigo-500 to-violet-400',
  },
];

export default function AppPreview() {
  return (
    <section
      id="preview"
      className="py-24 bg-gradient-to-b from-white to-emerald-50/50 dark:from-eco-navy dark:to-eco-navy-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-eco-emerald-light dark:bg-emerald-900/30 text-eco-emerald text-sm font-semibold rounded-full mb-4">
            <Smartphone className="w-4 h-4" />
            Tətbiq İcmalı
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-eco-navy dark:text-white">
            Hər Yerdə <span className="text-eco-emerald">Əlinizdə</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg">
            Mobil və veb platformalarda eyni rahat təcrübə ilə yaşıl hərəkatın bir parçası olun.
          </p>
        </motion.div>

        {/* Platform badges */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <Smartphone className="w-5 h-5 text-eco-emerald" />
            <span className="text-sm font-semibold text-eco-navy dark:text-white">iOS & Android</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <Monitor className="w-5 h-5 text-eco-sky" />
            <span className="text-sm font-semibold text-eco-navy dark:text-white">Veb Tətbiq</span>
          </div>
        </div>

        {/* Screen previews */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          {screens.map((screen) => (
            <motion.div
              key={screen.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                {/* Screen header */}
                <div className={`bg-gradient-to-r ${screen.color} p-6 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <h3 className="text-lg font-bold text-white relative z-10">{screen.title}</h3>
                  <p className="text-sm text-white/80 mt-1 relative z-10">EcoRoute Ekranı</p>
                </div>

                {/* Screen features */}
                <div className="p-6 space-y-4">
                  {screen.items.map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-eco-emerald" />
                      </div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
