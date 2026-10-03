import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
  };

  const links = [
    { label: 'Necə İşləyir?', href: '#how-it-works' },
    { label: 'Marşrut Planla', href: '#route-planner' },
    { label: 'Xüsusiyyətlər', href: '#features' },
    { label: 'Kalkulyator', href: '#calculator' },
    { label: 'Tətbiq', href: '#preview' },
    { label: 'Haqqımızda', href: '#about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-eco-navy/90 backdrop-blur-lg border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-eco-emerald to-emerald-400 rounded-xl flex items-center justify-center shadow-lg shadow-eco-emerald/20 group-hover:shadow-eco-emerald/40 transition-shadow">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-extrabold text-eco-navy dark:text-white tracking-tight">
              Eco<span className="text-eco-emerald">Route</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-eco-emerald dark:hover:text-eco-emerald rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDark}
              className="p-2 rounded-xl text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              aria-label="Dark mode toggle"
            >
              {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <a
              href="#calculator"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-eco-emerald to-emerald-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-eco-emerald/25 hover:shadow-eco-emerald/40 hover:scale-105 transition-all"
            >
              Başla
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-eco-navy border-t border-slate-200 dark:border-slate-700 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-eco-emerald hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-xl transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#calculator"
                onClick={() => setIsOpen(false)}
                className="block text-center px-4 py-3 mt-2 bg-gradient-to-r from-eco-emerald to-emerald-500 text-white text-sm font-semibold rounded-xl"
              >
                Başla
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
