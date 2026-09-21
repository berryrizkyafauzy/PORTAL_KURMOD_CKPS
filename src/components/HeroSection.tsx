import React from 'react';
import { BookOpen, MapPin, Sparkles, GraduationCap, Building2, Calendar } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  selectedYear?: 2026 | 2027;
  onYearChange?: (year: 2026 | 2027) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  selectedYear = 2026,
  onYearChange
}) => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-[#002B66] via-[#001A40] to-slate-900 text-white py-16 sm:py-24 px-4 overflow-hidden border-b border-white/10">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFB800_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold text-[#FFB800] uppercase tracking-widest mb-6">
          <Sparkles className="w-4 h-4 animate-pulse text-[#FFB800]" />
          Portal Informasi Bangkom & Kurmod CKPS
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4">
          Portal Pelatihan & <span className="text-[#FFB800]">Kalender Bangkom</span>
        </h1>

        <p className="text-base sm:text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed mb-6">
          Pusat Pengembangan Kompetensi Sumber Daya Air, Cipta Karya dan Prasarana Strategis (Pusbangkom SDA & CKPS)
          <br className="hidden sm:inline" /> Kementerian Pekerjaan Umum — T.A. 2026 & T.A. 2027
        </p>

        {/* Year Selector Pills in Hero */}
        {onYearChange && (
          <div className="inline-flex items-center bg-black/30 backdrop-blur-md border border-white/20 p-1.5 rounded-2xl mb-8">
            <button
              onClick={() => onYearChange(2026)}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-black transition cursor-pointer ${
                selectedYear === 2026
                  ? 'bg-[#FFB800] text-[#001A40] shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Calendar className="w-4 h-4" />
              Tahun Anggaran 2026
            </button>
            <button
              onClick={() => onYearChange(2027)}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-black transition cursor-pointer ${
                selectedYear === 2027
                  ? 'bg-emerald-500 text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#FFB800]" />
              Tahun Anggaran 2027 (Input & Perencanaan)
            </button>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => onNavigate('kalender-bangkom')}
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
          >
            <Calendar className="w-5 h-5 text-[#FFB800]" /> Kalender Bangkom {selectedYear}
          </button>
          <button
            onClick={() => onNavigate('kurmod')}
            className="bg-[#FFB800] hover:bg-amber-400 text-[#001A40] font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
          >
            <BookOpen className="w-5 h-5" /> Explore Modul & Kurikulum
          </button>
          <button
            onClick={() => onNavigate('sebaran')}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-sm px-6 py-3.5 rounded-xl backdrop-blur-sm transition flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
          >
            <MapPin className="w-5 h-5 text-[#FFB800]" /> Sebaran 9 Balai {selectedYear}
          </button>
        </div>

        {/* Quick Highlights Counter Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4 text-left">
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-amber-400/20 rounded-lg text-[#FFB800]">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-black text-white">33</div>
                <div className="text-xs text-slate-300 font-medium">Katalog Kurmod</div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-400/20 rounded-lg text-blue-300">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-black text-white">9</div>
                <div className="text-xs text-slate-300 font-medium">Balai Wilayah</div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-400/20 rounded-lg text-emerald-300">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-black text-white">
                  {selectedYear === 2026 ? '1.530' : 'Perencanaan'}
                </div>
                <div className="text-xs text-slate-300 font-medium">Target Peserta {selectedYear}</div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-purple-400/20 rounded-lg text-purple-300">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-black text-white">
                  {selectedYear === 2026 ? '30' : 'Aktif Input'}
                </div>
                <div className="text-xs text-slate-300 font-medium">Agenda Pelatihan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
