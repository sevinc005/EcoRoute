import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import RoutePlanner from './components/RoutePlanner';
import Stats from './components/Stats';
import Features from './components/Features';
import Calculator from './components/Calculator';
import AppPreview from './components/AppPreview';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-eco-navy text-slate-900 dark:text-white transition-colors">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <RoutePlanner />
        <Stats />
        <Features />
        <Calculator />
        <AppPreview />
      </main>
      <Footer />
    </div>
  );
}
