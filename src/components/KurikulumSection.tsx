import React, { useState } from 'react';
import { RumpunType, TrainingProgram } from '../types';
import { TRAINING_METHODS, TRAINING_PROGRAMS, LEGAL_BASIS_INFO } from '../data/cmrcData';
import { ProgramDetailModal } from './ProgramDetailModal';
import { 
  BookOpen, 
  Search, 
  Users, 
  Layers, 
  Laptop, 
  GraduationCap, 
  Building2, 
  Droplets, 
  Recycle,
  Landmark, 
  Scale, 
  Clock, 
  ChevronRight,
  Filter
} from 'lucide-react';

export const KurikulumSection: React.FC = () => {
  const [selectedRumpun, setSelectedRumpun] = useState<RumpunType>('all');
  const [selectedMethod, setSelectedMethod] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProgram, setActiveModalProgram] = useState<TrainingProgram | null>(null);

  // Filter programs
  const filteredPrograms = TRAINING_PROGRAMS.filter((prog) => {
    const matchesRumpun = selectedRumpun === 'all' || prog.rumpun === selectedRumpun;
    const matchesMethod = selectedMethod === 'all' || prog.method === selectedMethod;
    const matchesSearch = 
      prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.keyModules.some(m => m.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesRumpun && matchesMethod && matchesSearch;
  });

  const methodIcons: Record<string, React.ReactNode> = {
    Klasikal: <Users className="w-6 h-6 text-[#FFB800]" />,
    'Blended Learning': <Layers className="w-6 h-6 text-[#FFB800]" />,
    'Distance Learning': <Laptop className="w-6 h-6 text-[#FFB800]" />,
    'E-Learning': <GraduationCap className="w-6 h-6 text-[#FFB800]" />,
  };

  return (
    <section id="kurmod" className="py-16 lg:py-24 bg-[#001A40] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#FFB800] font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/10">
            Bahan Materi & Program T.A. 2026
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold mt-3">
            Kurikulum & Modul Bangkom Bidang CKPS
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Pengembangan Kompetensi Sektor Cipta Karya dan Prasarana Strategis Kementerian Pekerjaan Umum.
          </p>
        </div>

        {/* 4 Metode Pelaksanaan Pelatihan */}
        <div className="mb-16">
          <h3 className="text-center text-xs font-bold text-[#FFB800] uppercase tracking-widest mb-6">
            4 Metode Pelaksanaan Pelatihan
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TRAINING_METHODS.map((m) => (
              <div
                key={m.id}
                onClick={() => setSelectedMethod(selectedMethod === m.id ? 'all' : m.id)}
                className={`p-5 rounded-xl border transition cursor-pointer backdrop-blur-sm ${
                  selectedMethod === m.id
                    ? 'bg-white/20 border-[#FFB800] ring-2 ring-[#FFB800]'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="mb-3 flex items-center justify-between">
                  {methodIcons[m.id]}
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-white/10 text-amber-300">
                    {m.id}
                  </span>
                </div>
                <h4 className="font-bold text-base text-white mb-1.5">{m.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
          {selectedMethod !== 'all' && (
            <div className="text-center mt-3">
              <button
                onClick={() => setSelectedMethod('all')}
                className="text-xs text-[#FFB800] underline hover:text-amber-300 cursor-pointer"
              >
                Reset Filter Metode Pelaksanaan
              </button>
            </div>
          )}
        </div>

        {/* Search & Rumpun Filter Controls */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 mb-10 backdrop-blur-md">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full lg:w-96">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Cari program, modul, atau kata kunci..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl pl-11 pr-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FFB800]"
              />
            </div>

            {/* Rumpun Filter Tabs */}
            <div className="flex flex-wrap gap-2 w-full lg:w-auto justify-start lg:justify-end text-xs font-semibold">
              <button
                onClick={() => setSelectedRumpun('all')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                  selectedRumpun === 'all'
                    ? 'bg-[#FFB800] text-[#001A40] font-bold'
                    : 'bg-white/10 text-slate-200 hover:bg-white/20'
                }`}
              >
                Semua ({TRAINING_PROGRAMS.length})
              </button>
              <button
                onClick={() => setSelectedRumpun('umum')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                  selectedRumpun === 'umum'
                    ? 'bg-[#FFB800] text-[#001A40] font-bold'
                    : 'bg-white/10 text-slate-200 hover:bg-white/20'
                }`}
              >
                Umum
              </button>
              <button
                onClick={() => setSelectedRumpun('penataan-bangunan')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1 ${
                  selectedRumpun === 'penataan-bangunan'
                    ? 'bg-[#FFB800] text-[#001A40] font-bold'
                    : 'bg-white/10 text-slate-200 hover:bg-white/20'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" /> Penataan Bangunan
              </button>
              <button
                onClick={() => setSelectedRumpun('air-minum')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1 ${
                  selectedRumpun === 'air-minum'
                    ? 'bg-[#FFB800] text-[#001A40] font-bold'
                    : 'bg-white/10 text-slate-200 hover:bg-white/20'
                }`}
              >
                <Droplets className="w-3.5 h-3.5" /> Air Minum
              </button>
              <button
                onClick={() => setSelectedRumpun('sanitasi')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1 ${
                  selectedRumpun === 'sanitasi'
                    ? 'bg-[#FFB800] text-[#001A40] font-bold'
                    : 'bg-white/10 text-slate-200 hover:bg-white/20'
                }`}
              >
                <Recycle className="w-3.5 h-3.5" /> Sanitasi
              </button>
              <button
                onClick={() => setSelectedRumpun('prasarana-strategis')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1 ${
                  selectedRumpun === 'prasarana-strategis'
                    ? 'bg-[#FFB800] text-[#001A40] font-bold'
                    : 'bg-white/10 text-slate-200 hover:bg-white/20'
                }`}
              >
                <Landmark className="w-3.5 h-3.5" /> Sektor Prasarana Strategis
              </button>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        {filteredPrograms.length === 0 ? (
          <div className="text-center py-12 bg-white/5 border border-white/10 rounded-2xl">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3 opacity-60" />
            <h4 className="text-lg font-bold text-white mb-1">Tidak ada program pelatihan yang cocok</h4>
            <p className="text-xs text-slate-400">Coba ubah kata kunci pencarian atau reset filter kategori.</p>
            <button
              onClick={() => {
                setSelectedRumpun('all');
                setSelectedMethod('all');
                setSearchQuery('');
              }}
              className="mt-4 bg-[#FFB800] text-[#001A40] font-bold text-xs px-4 py-2 rounded-lg"
            >
              Reset Semua Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program) => (
              <div
                key={program.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm flex flex-col justify-between hover:bg-white/10 transition group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                    <span className="text-[11px] font-extrabold text-[#FFB800] bg-amber-400/20 px-2.5 py-1 rounded border border-amber-400/30">
                      {program.code}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {program.statusNote?.includes('Pemutakhiran') && (
                        <span className="text-[10px] text-cyan-200 bg-cyan-950/80 border border-cyan-500/40 px-2 py-0.5 rounded font-bold">
                          TA 2026
                        </span>
                      )}
                      {program.statusNote?.includes('Belum bisa') && (
                        <span className="text-[10px] text-rose-200 bg-rose-950/80 border border-rose-500/40 px-2 py-0.5 rounded font-bold">
                          Hold Review
                        </span>
                      )}
                      <span className="text-[10px] text-slate-300 bg-white/10 px-2 py-0.5 rounded font-medium">
                        {program.method}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-bold text-base text-white mb-2 line-clamp-2 group-hover:text-[#FFB800] transition">
                    {program.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {program.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-3 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" /> {program.durationJp} JP
                    </span>
                    <span className="bg-white/10 text-white px-2 py-0.5 rounded text-[10px] font-semibold">
                      {program.level}
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveModalProgram(program)}
                    className="w-full bg-[#FFB800] hover:bg-amber-400 text-[#001A40] font-bold text-xs py-2.5 px-4 rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                  >
                    Detail Modul & Silabus <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Legal Basis Footer Banner */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#FFB800]/20 rounded-xl text-[#FFB800] shrink-0">
              <Scale className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Dasar Hukum Penyelenggaraan Pelatihan</h4>
              <p className="text-xs text-slate-300 mt-1">{LEGAL_BASIS_INFO.permen}</p>
              <p className="text-xs text-slate-400 mt-0.5">{LEGAL_BASIS_INFO.seKepala}</p>
            </div>
          </div>
          <div className="shrink-0 text-center md:text-right">
            <span className="text-xs bg-[#FFB800] text-[#001A40] font-bold px-4 py-2 rounded-lg uppercase tracking-wider block">
              {LEGAL_BASIS_INFO.totalProgramsCount} Program Pelatihan CKPS
            </span>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <ProgramDetailModal
        program={activeModalProgram}
        onClose={() => setActiveModalProgram(null)}
      />
    </section>
  );
};
