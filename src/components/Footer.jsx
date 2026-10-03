import { Leaf, Mail, MapPin, Phone, Globe, MessageCircle, Link2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="about" className="bg-eco-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-eco-emerald to-emerald-400 rounded-xl flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-tight">
                Eco<span className="text-eco-emerald">Route</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              EcoRoute — şəhər daxili hərəkətlərinizi daha təmiz, daha qənaətcil və ekoloji
              cəhətdən məsuliyyətli etmək üçün yaradılmış müasir naviqasiya platformasıdır.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-eco-emerald rounded-xl flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-eco-emerald rounded-xl flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-eco-emerald rounded-xl flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Link2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Keçidlər
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Xüsusiyyətlər', href: '#features' },
                { label: 'Kalkulyator', href: '#calculator' },
                { label: 'Tətbiq', href: '#preview' },
                { label: 'Haqqımızda', href: '#about' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-eco-emerald transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Əlaqə
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <Mail className="w-4 h-4 text-eco-emerald" />
                info@ecoroute.az
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <Phone className="w-4 h-4 text-eco-emerald" />
                +994 12 345 67 89
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-eco-emerald" />
                Bakı, Azərbaycan
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} EcoRoute. Bütün hüquqlar qorunur.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-eco-emerald transition-colors">
              Məxfilik Siyasəti
            </a>
            <a href="#" className="hover:text-eco-emerald transition-colors">
              İstifadə Şərtləri
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
