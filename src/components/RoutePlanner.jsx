import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, Navigation, Car, Train, Bike, Footprints, Leaf, Clock, Banknote,
  ArrowRight, RotateCcw, AlertTriangle, Bus, ArrowRightLeft, Info, Zap,
} from 'lucide-react';

// ─── Bakı Metrosu Topologiyası ────────────────────────────────────
// Qərb xətti (Nizamiyə qədər)
const metroWest = ['20 Yanvar metro', 'İnşaatçılar metro', 'Elmlər Akademiyası metro', 'Nizami metro'];
// Şərq xətti (28 May-dan sonrakı qisim)
const metroEast = ['İçərişəhər metro', 'Sahil metro', '28 May metro', 'Gənclik metro', 'Nəriman Narimanov metro', 'Koroğlu metro', 'Həzi Aslanov metro'];

// Bütün lokasiyalar
const locations = [
  ...metroWest,
  ...metroEast,
  'Xətai metro',
  'Dəniz Mall',
  'Heydər Əliyev Mərkəzi',
  'BDU',
];

// Express marşrutlar və təxmini gediş vaxtları (dəqiqə)
const expressRoutes = [
  { id: 'M1', nodeA: 'Elmlər Akademiyası metro', nodeB: '28 May metro', timeMin: 18, color: 'bg-red-500' },
  { id: 'M2', nodeA: 'İnşaatçılar metro', nodeB: '28 May metro', timeMin: 22, color: 'bg-blue-500' },
  { id: 'M3', nodeA: '20 Yanvar metro', nodeB: '28 May metro', timeMin: 20, color: 'bg-emerald-500' },
  { id: 'M4', nodeA: '20 Yanvar metro', nodeB: 'Koroğlu metro', timeMin: 26, color: 'bg-orange-500' },
  { id: 'M5', nodeA: '20 Yanvar metro', nodeB: 'Gənclik metro', timeMin: 15, color: 'bg-purple-500' },
  { id: 'M6', nodeA: 'Elmlər Akademiyası metro', nodeB: 'Gənclik metro', timeMin: 16, color: 'bg-teal-500' },
];

// Stansiyalar arası vaxtı hesablamaq üçün köməkçi funksiya
function getMetroTime(a, b) {
  if (a === b) return 0;
  
  let idxA = metroWest.indexOf(a);
  let idxB = metroWest.indexOf(b);
  if (idxA !== -1 && idxB !== -1) return Math.abs(idxA - idxB) * 3 + 2; // +2 dəqiqə qatar gözləmə
  
  idxA = metroEast.indexOf(a);
  idxB = metroEast.indexOf(b);
  if (idxA !== -1 && idxB !== -1) return Math.abs(idxA - idxB) * 3 + 2;
  
  if ((a === 'Xətai metro' && b === '28 May metro') || (b === 'Xətai metro' && a === '28 May metro')) return 6;
  
  return Infinity; // Birbaşa metro ilə getmək olmur (qırıq xətt)
}

// Fiziki məsafə (km)
function getDistance(from, to) {
  if (from === to) return 0;
  const a = locations.indexOf(from);
  const b = locations.indexOf(to);
  const base = Math.abs(a - b) * 1.8 + 1.5;
  const variation = ((a * 7 + b * 13) % 10) / 10;
  return Math.round((base + variation) * 10) / 10;
}

// ─── Ağıllı Pathfinding Alqoritmi ──────────────────────────────────
function getSmartRoute(from, to) {
  const suggestions = [];
  const dist = getDistance(from, to);
  
  const isFromMetro = metroWest.includes(from) || metroEast.includes(from) || from === 'Xətai metro';
  const isToMetro = metroWest.includes(to) || metroEast.includes(to) || to === 'Xətai metro';

  // Ssenari 1: Hər iki nöqtə metrodur
  if (isFromMetro && isToMetro) {
    const directTime = getMetroTime(from, to);
    
    // Eyni xətdədirsə (məs: Elmlər -> 20 Yanvar və ya 28 May -> Koroğlu)
    if (directTime !== Infinity) {
      suggestions.push({
        type: 'direct-metro',
        label: 'Birbaşa Metro',
        emoji: '🚇',
        description: `${from} → ${to} (Xətt normal işləyir)`,
        timeMin: directTime,
        cost: 0.40,
        co2: 0.02 * (directTime / 3) * 2,
        priority: 1,
        tag: 'Ən sürətli',
      });
    } 
    // Qırıq xətdirsə (məs: Elmlər -> Koroğlu) - Ağıllı Kombinasiya!
    else {
      let bestCombo = null;
      let secondBestCombo = null;

      expressRoutes.forEach(exp => {
        // Avtobusun düz gedişi: from -> exp.nodeA -> exp.nodeB -> to
        const timeForward = getMetroTime(from, exp.nodeA) + exp.timeMin + getMetroTime(exp.nodeB, to);
        // Avtobusun əks gedişi: from -> exp.nodeB -> exp.nodeA -> to
        const timeBackward = getMetroTime(from, exp.nodeB) + exp.timeMin + getMetroTime(exp.nodeA, to);

        if (timeForward < Infinity) {
          const combo = {
            type: 'combo',
            label: `${exp.id} + Metro`,
            emoji: '🚌+🚇',
            description: `${from === exp.nodeA ? '' : 'Metro ilə ' + exp.nodeA + ' → '}${exp.id} express ilə ${exp.nodeB}${to === exp.nodeB ? '' : ' → Metro ilə ' + to}`,
            timeMin: timeForward + 3, // +3 dəq transfer
            cost: 0.40, // Metro ilə express inteqrasiyası 
            co2: 0.03 * dist,
            priority: 1,
            routeId: exp.id,
          };
          
          if (!bestCombo || combo.timeMin < bestCombo.timeMin) {
            secondBestCombo = bestCombo;
            bestCombo = combo;
          } else if (!secondBestCombo || combo.timeMin < secondBestCombo.timeMin) {
            secondBestCombo = combo;
          }
        }

        if (timeBackward < Infinity) {
          const combo = {
            type: 'combo',
            label: `${exp.id} + Metro`,
            emoji: '🚌+🚇',
            description: `${from === exp.nodeB ? '' : 'Metro ilə ' + exp.nodeB + ' → '}${exp.id} express ilə ${exp.nodeA}${to === exp.nodeA ? '' : ' → Metro ilə ' + to}`,
            timeMin: timeBackward + 3,
            cost: 0.40,
            co2: 0.03 * dist,
            priority: 1,
            routeId: exp.id,
          };
          
          if (!bestCombo || combo.timeMin < bestCombo.timeMin) {
            secondBestCombo = bestCombo;
            bestCombo = combo;
          } else if (!secondBestCombo || combo.timeMin < secondBestCombo.timeMin) {
            secondBestCombo = combo;
          }
        }
      });

      if (bestCombo) {
        bestCombo.tag = 'Ən sürətli qənaət';
        suggestions.push(bestCombo);
      }
      if (secondBestCombo) {
        secondBestCombo.priority = 2;
        secondBestCombo.tag = 'Alternativ';
        suggestions.push(secondBestCombo);
      }
    }
  } 
  // Ssenari 2: Biri metro deyil, məsələn Dəniz Mall
  else {
    suggestions.push({
      type: 'bus',
      label: 'Müntəzəm Avtobus',
      emoji: '🚌',
      description: `${from} → ${to} (Şəhərdaxili avtobus)`,
      timeMin: Math.round(dist * 4) + 10,
      cost: 0.40,
      co2: 0.05 * dist,
      priority: 2,
      tag: null,
    });
  }

  // Həmişə Avtomobili göstər ki, istifadəçi fərqi (CO2 və Pul) görsün
  suggestions.push({
    type: 'car',
    label: 'Avtomobil',
    emoji: '🚗',
    description: `${from} → ${to} (Şəxsi avtomobil və ya taksi)`,
    timeMin: Math.round(dist * 2.5) + 5,
    cost: +(dist * 0.35).toFixed(2),
    co2: +(dist * 0.12).toFixed(2),
    priority: 3,
    tag: 'Ən çox CO₂',
  });

  // Velosiped
  if (dist < 12) {
    suggestions.push({
      type: 'bike',
      label: 'Velosiped',
      emoji: '🚲',
      description: `${from} → ${to} (Velosiped yolu)`,
      timeMin: Math.round((dist / 14) * 60),
      cost: 0,
      co2: 0,
      priority: 2,
      tag: dist < 5 ? 'Ən ekoloji' : null,
    });
  }

  return suggestions.sort((a, b) => a.timeMin - b.timeMin).sort((a, b) => a.priority - b.priority);
}

// Nəqliyyat növü üçün stil
function getRouteStyle(type) {
  const styles = {
    'direct-metro': { bg: 'bg-eco-emerald-light dark:bg-emerald-900/20', border: 'border-eco-emerald/30', text: 'text-eco-emerald' },
    'combo':        { bg: 'bg-sky-50 dark:bg-sky-900/20', border: 'border-sky-200 dark:border-sky-800/40', text: 'text-eco-sky' },
    'bus':          { bg: 'bg-indigo-50 dark:bg-indigo-900/20', border: 'border-indigo-200 dark:border-indigo-800/40', text: 'text-indigo-500' },
    'car':          { bg: 'bg-red-50 dark:bg-red-900/20', border: 'border-red-200 dark:border-red-800/40', text: 'text-red-500' },
    'bike':         { bg: 'bg-violet-50 dark:bg-violet-900/20', border: 'border-violet-200 dark:border-violet-800/40', text: 'text-violet-500' },
  };
  return styles[type] || styles['bus'];
}

// ═════════════════════════════════════════════════════════════════
export default function RoutePlanner() {
  const [from, setFrom] = useState('Elmlər Akademiyası metro');
  const [to, setTo] = useState('Koroğlu metro');
  const [showResults, setShowResults] = useState(false);

  const distance = useMemo(() => {
    if (!from || !to || from === to) return 0;
    return getDistance(from, to);
  }, [from, to]);

  const suggestions = useMemo(() => {
    if (!from || !to || from === to) return [];
    return getSmartRoute(from, to);
  }, [from, to]);

  const handleSearch = () => {
    if (from && to && from !== to) setShowResults(true);
  };

  const handleReset = () => {
    setFrom('');
    setTo('');
    setShowResults(false);
  };

  const carRoute = suggestions.find((s) => s.type === 'car');
  const bestRoute = suggestions.find((s) => s.priority === 1);

  return (
    <section id="route-planner" className="py-24 bg-gradient-to-b from-white to-emerald-50/30 dark:from-eco-navy dark:to-eco-navy-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Heading ─────────────────────────────────────────── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} className="text-center max-w-2xl mx-auto mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-eco-emerald-light dark:bg-emerald-900/30 text-eco-emerald text-sm font-semibold rounded-full mb-4">
            <Navigation className="w-4 h-4" /> Ağıllı Pathfinding Demo
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-eco-navy dark:text-white">
            Vaxta və Pula <span className="text-eco-emerald">Qənaət Et</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg">
            Sistem bütün mümkün kombinasiyaları hesablayıb ən optimal yolu tapır.
          </p>
        </motion.div>

        {/* ── Route Input Card ──────────────────────────────── */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-4 items-end">
              <div className="flex-1 w-full">
                <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Haradan</label>
                <select value={from} onChange={(e) => { setFrom(e.target.value); setShowResults(false); }} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-eco-emerald">
                  <option value="">Yer seçin...</option>
                  <optgroup label="🟢 Qərb Xətti (İşləyir)">{metroWest.map(l => <option key={l} value={l}>{l}</option>)}</optgroup>
                  <optgroup label="🔴 Şərq Xətti (İşləyir)">{metroEast.map(l => <option key={l} value={l}>{l}</option>)}</optgroup>
                  <optgroup label="🏢 Digər">{['Dəniz Mall', 'Heydər Əliyev Mərkəzi', 'BDU'].map(l => <option key={l} value={l}>{l}</option>)}</optgroup>
                </select>
              </div>

              <div className="hidden sm:flex items-center justify-center w-10 h-10 mb-0.5"><ArrowRightLeft className="w-5 h-5 text-slate-400" /></div>

              <div className="flex-1 w-full">
                <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Haraya</label>
                <select value={to} onChange={(e) => { setTo(e.target.value); setShowResults(false); }} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-eco-emerald">
                  <option value="">Yer seçin...</option>
                  <optgroup label="🟢 Qərb Xətti (İşləyir)">{metroWest.map(l => <option key={l} value={l}>{l}</option>)}</optgroup>
                  <optgroup label="🔴 Şərq Xətti (İşləyir)">{metroEast.map(l => <option key={l} value={l}>{l}</option>)}</optgroup>
                  <optgroup label="🏢 Digər">{['Dəniz Mall', 'Heydər Əliyev Mərkəzi', 'BDU'].map(l => <option key={l} value={l}>{l}</option>)}</optgroup>
                </select>
              </div>

              <div className="w-full sm:w-auto flex gap-2">
                <motion.button whileHover={{ scale: 1.03 }} onClick={handleSearch} disabled={!from || !to || from===to} className="px-6 py-3 bg-gradient-to-r from-eco-emerald to-emerald-500 text-white font-semibold rounded-xl shadow-lg disabled:opacity-40">Müqayisə et</motion.button>
              </div>
            </div>
          </div>

          {/* ── Results ────────────────────────────────────── */}
          <AnimatePresence>
            {showResults && suggestions.length > 0 && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="border-t border-slate-100 dark:border-slate-700">
                <div className="p-6 sm:p-8 space-y-3">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-4 h-4 text-eco-emerald" />
                    <p className="text-sm font-medium text-slate-500">EcoRoute Ağıllı Tövsiyələri ({suggestions.length} variant):</p>
                  </div>

                  {suggestions.map((route, i) => {
                    const style = getRouteStyle(route.type);
                    const isBest = i === 0;
                    return (
                      <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} className={`relative border rounded-2xl px-5 py-4 ${style.bg} ${style.border} ${isBest ? 'ring-2 ring-eco-emerald/30 shadow-md' : ''}`}>
                        {route.tag && (
                          <span className={`absolute -top-2.5 right-4 px-3 py-0.5 text-white text-xs font-bold rounded-full shadow ${isBest ? 'bg-eco-emerald' : (route.tag === 'Ən çox CO₂' ? 'bg-red-500' : 'bg-slate-500')}`}>
                            {isBest && '⭐ '} {route.tag}
                          </span>
                        )}

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <span className="text-2xl mt-0.5">{route.emoji}</span>
                            <div>
                              <p className="font-bold text-slate-700">{route.label}</p>
                              <p className="text-sm text-slate-600 mt-0.5 font-medium">{route.description}</p>
                              <div className="flex items-center gap-3 mt-2 text-xs font-bold text-slate-500">
                                <span className={`inline-flex items-center gap-1 ${isBest ? 'text-eco-emerald text-sm' : ''}`}><Clock className="w-3.5 h-3.5" /> {route.timeMin} dəqiqə</span>
                                <span className="inline-flex items-center gap-1"><Banknote className="w-3.5 h-3.5" /> {route.cost.toFixed(2)} ₼</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 shrink-0">
                            <div className="text-right">
                              <p className={`text-lg font-extrabold ${style.text}`}>{route.type === 'car' ? '+' : ''}{route.co2.toFixed(2)} kg</p>
                              <p className="text-xs text-slate-400">CO₂</p>
                            </div>
                            {route.type !== 'car' && carRoute && (
                              <div className="text-right pl-3 border-l border-slate-200">
                                <p className="text-sm font-bold text-eco-emerald">-{(carRoute.co2 - route.co2).toFixed(2)} kg</p>
                                <p className="text-sm font-bold text-eco-emerald">+{(carRoute.cost - route.cost).toFixed(2)} ₼</p>
                                <p className="text-xs text-slate-400">qənaət</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
