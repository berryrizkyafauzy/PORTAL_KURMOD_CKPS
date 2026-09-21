import React from 'react';
import { MapPin, Youtube, Instagram, Globe, BookOpen, ChevronRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#001A40] text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-[#FFB800] text-[#001A40] font-black text-lg px-2.5 py-1 rounded-md">
                PU
              </div>
              <span className="font-extrabold text-lg tracking-tight">Pusbangkom ACP</span>
            </div>
            <p className="text-xs text-slate-300 max-w-md leading-relaxed mb-6">
              Pusat Pengembangan Kompetensi Sumber Daya Air, Cipta Karya dan Prasarana Strategis (Pusbangkom ACP) — Kementerian Pekerjaan Umum T.A. 2026.
            </p>
            <div className="text-xs text-slate-300 space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FFB800] shrink-0 mt-0.5" />
                <span>Jl. Abdul Hamid, Cicaheum - Bandung, Jawa Barat 40195</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-[#FFB800] uppercase tracking-widest mb-4">
              Navigasi Layanan
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#FFB800] transition flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#FFB800]" /> Home Portal Kurmod CKPS 2026
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('kurmod')}
                  className="hover:text-[#FFB800] transition flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#FFB800]" /> Kurikulum & Modul Bangkom CKPS
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sebaran')}
                  className="hover:text-[#FFB800] transition flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#FFB800]" /> Sebaran Bangkom 2026 (9 Wilayah)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('kalender-bangkom')}
                  className="hover:text-[#FFB800] transition flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#FFB800]" /> Kalender Bangkom 2026 (Jadwal & Target)
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media & Official Portal */}
          <div className="flex flex-col md:items-start justify-start">
            <h4 className="text-xs font-bold text-[#FFB800] uppercase tracking-widest mb-4">
              Media Sosial Resmi
            </h4>
            <div className="flex space-x-3 mb-6">
              <a
                href="https://www.youtube.com/@pusat2bpsdm649"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-red-600 rounded-xl flex items-center justify-center transition text-white"
                aria-label="YouTube Pusbangkom ACP"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/pusbangkom_acp"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-pink-600 rounded-xl flex items-center justify-center transition text-white"
                aria-label="Instagram Pusbangkom ACP"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl text-xs text-slate-300 w-full">
              <span className="font-bold text-white block mb-1">Badan Pengembangan SDM (BPSDM)</span>
              Kementerian Pekerjaan Umum Republik Indonesia
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-white/10 text-center text-[11px] text-slate-400">
          COPYRIGHT © 2026 KEMENTERIAN PEKERJAAN UMUM. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};
