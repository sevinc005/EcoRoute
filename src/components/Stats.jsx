import { motion } from 'framer-motion';
import { TreePine, Users, MapPinned, Leaf } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '15K+',
    label: 'Aktiv İstifadəçi',
    color: 'text-eco-emerald',
    bg: 'bg-eco-emerald-light dark:bg-emerald-900/30',
  },
  {
    icon: MapPinned,
    value: '2.4M',
    label: 'Yaşıl Marşrut',
    color: 'text-eco-sky',
    bg: 'bg-sky-100 dark:bg-sky-900/30',
  },
  {
    icon: TreePine,
    value: '840K',
    label: 'kg CO₂ Qənaəti',
    color: 'text-emerald-600',
    bg: 'bg-emerald-100 dark:bg-emerald-900/20',
  },
  {
    icon: Leaf,
    value: '96%',
    label: 'Məmnuniyyət',
    color: 'text-teal-600',
    bg: 'bg-teal-100 dark:bg-teal-900/30',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Stats() {
  return (
    <section className="py-16 bg-white dark:bg-eco-navy-light border-y border-slate-100 dark:border-slate-800">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:shadow-lg transition-shadow"
            >
              <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center mb-4`}>
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <p className="text-3xl sm:text-4xl font-extrabold text-eco-navy dark:text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
