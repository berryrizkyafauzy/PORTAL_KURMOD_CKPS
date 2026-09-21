import React, { useState } from 'react';
import { Menu, X, BookOpen, Calendar, Sparkles } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  selectedYear?: 2026 | 2027;
  onYearChange?: (year: 2026 | 2027) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  selectedYear = 2026,
  onYearChange
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'kurmod', label: 'Kurikulum & Modul' },
    { id: 'sebaran', label: `Sebaran Bangkom ${selectedYear}` },
    { id: 'kalender-bangkom', label: `Kalender Bangkom ${selectedYear}` },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#002B66]/95 backdrop-blur-md text-white border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Title */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 group text-left focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-lg p-1 transition cursor-pointer"
          >
            <div className="bg-[#FFB800] text-[#001A40] font-black text-xl px-3 py-1.5 rounded-lg shadow-md group-hover:scale-105 transition-transform">
              PU
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight leading-none text-white group-hover:text-[#FFB800] transition">
                Portal Bangkom CKPS
              </span>
              <span className="text-[10px] text-slate-300 font-medium tracking-wider uppercase mt-1">
                Pusbangkom ACP - Kementerian PU
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 text-xs font-semibold uppercase tracking-wider">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-white/15 text-[#FFB800] border border-amber-400/30 font-bold shadow-inner'
                    : 'text-slate-200 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Year Switcher & Quick Action */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Year Switcher Pill */}
            {onYearChange && (
              <div className="bg-[#001A40] p-1 rounded-xl flex items-center border border-white/10">
                <button
                  onClick={() => onYearChange(2026)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-black transition cursor-pointer flex items-center gap-1 ${
                    selectedYear === 2026
                      ? 'bg-amber-400 text-slate-900 shadow-sm'
                      : 'text-slate-300 hover:text-white'
                  }`}
                  title="Tahun Anggaran 2026"
                >
                  <Calendar className="w-3 h-3" />
                  2026
                </button>
                <button
                  onClick={() => onYearChange(2027)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-black transition cursor-pointer flex items-center gap-1 ${
                    selectedYear === 2027
                      ? 'bg-emerald-500 text-white shadow-sm'
                      : 'text-slate-300 hover:text-white'
                  }`}
                  title="Tahun Anggaran 2027 (Input & Perencanaan)"
                >
                  <Sparkles className="w-3 h-3" />
                  2027
                </button>
              </div>
            )}

            <button
              onClick={() => handleNavClick('kalender-bangkom')}
              className="bg-[#FFB800] hover:bg-amber-400 text-[#001A40] font-bold text-xs uppercase px-4 py-2.5 rounded-lg shadow-md hover:shadow-lg transition flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4" /> Kalender {selectedYear}
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-slate-200 hover:text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#FFB800]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#001A40] border-b border-white/10 px-4 pt-3 pb-6 space-y-2 text-sm font-medium animate-fadeIn">
          {/* Year Switcher in Mobile */}
          {onYearChange && (
            <div className="bg-white/5 p-1.5 rounded-xl flex items-center justify-between border border-white/10 mb-3">
              <span className="text-xs text-slate-300 font-semibold pl-2">Pilih Tahun Anggaran:</span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => {
                    onYearChange(2026);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black transition ${
                    selectedYear === 2026
                      ? 'bg-amber-400 text-slate-900'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  2026
                </button>
                <button
                  onClick={() => {
                    onYearChange(2027);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black transition ${
                    selectedYear === 2027
                      ? 'bg-emerald-500 text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  2027
                </button>
              </div>
            </div>
          )}

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left block px-4 py-3 rounded-lg transition ${
                activeSection === item.id
                  ? 'bg-white/15 text-[#FFB800] font-bold'
                  : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-2">
            <button
              onClick={() => handleNavClick('kalender-bangkom')}
              className="w-full text-center bg-[#FFB800] text-[#001A40] font-bold px-4 py-3 rounded-lg flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <Calendar className="w-4 h-4" /> Buka Kalender Bangkom {selectedYear}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
