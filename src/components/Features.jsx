import { motion } from 'framer-motion';
import { featuresData } from '../data/featuresData';

const colorMap = {
  emerald: {
    bg: 'bg-eco-emerald-light dark:bg-emerald-900/30',
    icon: 'text-eco-emerald',
    border: 'border-eco-emerald/20',
    glow: 'group-hover:shadow-eco-emerald/10',
  },
  sky: {
    bg: 'bg-sky-100 dark:bg-sky-900/30',
    icon: 'text-eco-sky',
    border: 'border-eco-sky/20',
    glow: 'group-hover:shadow-sky-400/10',
  },
  indigo: {
    bg: 'bg-indigo-100 dark:bg-indigo-900/30',
    icon: 'text-indigo-500',
    border: 'border-indigo-500/20',
    glow: 'group-hover:shadow-indigo-500/10',
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-eco-navy dark:to-eco-navy-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-eco-emerald-light dark:bg-emerald-900/30 text-eco-emerald text-sm font-semibold rounded-full mb-4">
            Üstünlüklər
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-eco-navy dark:text-white">
            Niyə <span className="text-eco-emerald">EcoRoute</span>?
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
            Gündəlik səfərlərinizi daha təmiz, daha qənaətcil və daha ağıllı etmək üçün
            bizim güclü alətlərdən istifadə edin.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-3 gap-8"
        >
          {featuresData.map((feature) => {
            const colors = colorMap[feature.color];
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className={`group relative bg-white dark:bg-slate-800 rounded-3xl p-8 border ${colors.border} shadow-sm hover:shadow-xl ${colors.glow} transition-all duration-300`}
              >
                <div
                  className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <Icon className={`w-8 h-8 ${colors.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-eco-navy dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
