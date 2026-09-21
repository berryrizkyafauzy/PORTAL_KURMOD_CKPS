import React, { useState, useMemo } from 'react';
import { BANGKOM_UNITS } from '../data/cmrcData';
import { BangkomUnit, KalenderTrainingItem, BangkomProgramItem } from '../types';
import { MapPin, Phone, Building, CheckCircle2, ChevronRight, Navigation, Globe, Calendar, Sparkles, Plus } from 'lucide-react';

interface SebaranBangkomSectionProps {
  selectedYear?: 2026 | 2027;
  onYearChange?: (year: 2026 | 2027) => void;
  items2027?: KalenderTrainingItem[];
  onNavigateToKalender?: () => void;
}

const getMethodBadge = (method: string) => {
  switch (method) {
    case 'Blended Learning':
      return {
        bg: 'bg-blue-50 text-blue-700 border-blue-200',
        label: 'Blended Learning',
      };
    case 'Distance Learning':
      return {
        bg: 'bg-purple-50 text-purple-700 border-purple-200',
        label: 'Distance Learning',
      };
    case 'Klasikal':
      return {
        bg: 'bg-amber-50 text-amber-800 border-amber-200',
        label: 'Klasikal',
      };
    case 'Webinar':
      return {
        bg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
        label: 'Webinar',
      };
    case 'E-Learning':
    case 'E-Learning Terbuka':
      return {
        bg: 'bg-teal-50 text-teal-800 border-teal-200',
        label: 'E-Learning',
      };
    default:
      return {
        bg: 'bg-slate-50 text-slate-700 border-slate-200',
        label: method,
      };
  }
};

export const SebaranBangkomSection: React.FC<SebaranBangkomSectionProps> = ({
  selectedYear: propSelectedYear,
  onYearChange,
  items2027 = [],
  onNavigateToKalender
}) => {
  const [internalYear, setInternalYear] = useState<2026 | 2027>(2026);
  const activeYear = propSelectedYear !== undefined ? propSelectedYear : internalYear;

  const handleYearToggle = (year: 2026 | 2027) => {
    setInternalYear(year);
    if (onYearChange) {
      onYearChange(year);
    }
  };

  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [activeBangkom, setActiveBangkom] = useState<BangkomUnit | null>(null);

  const regionOptions = ['all', 'Sumatera', 'Jawa', 'Kalimantan', 'Sulawesi', 'Papua'];

  // Map 2027 programs per balai code
  const balaiPrograms2027Map = useMemo(() => {
    const map = new Map<string, BangkomProgramItem[]>();
    items2027.forEach((item) => {
      const code = item.penyelenggaraCode;
      if (!map.has(code)) {
        map.set(code, []);
      }
      map.get(code)!.push({
        code: item.code || `CKPS-27-${item.no}`,
        name: item.title,
        method: item.metode as any,
        jp: item.jpPelatihan,
        jpPengajar: item.jpPengajar,
        tanggal: item.tanggalPelaksanaan,
        waktu: item.waktu,
        targetPeserta: item.targetPeserta,
        status: item.status,
        pic: item.pic
      });
    });
    return map;
  }, [items2027]);

  const filteredUnits = BANGKOM_UNITS.filter((unit) => {
    return selectedRegion === 'all' || unit.regionGroup === selectedRegion;
  });

  const getUnitPrograms = (unit: BangkomUnit) => {
    if (activeYear === 2026) {
      return unit.featuredPrograms;
    }
    return balaiPrograms2027Map.get(unit.code) || [];
  };

  const getUnitClassCount = (unit: BangkomUnit) => {
    if (activeYear === 2026) {
      return unit.plannedTrainings2026;
    }
    const count2027 = (balaiPrograms2027Map.get(unit.code) || []).length;
    return count2027;
  };

  return (
    <section id="sebaran" className="py-16 lg:py-24 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-[#002B66]/10 text-[#002B66] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Globe className="w-3.5 h-3.5" />
            Jaringan Pelaksanaan T.A. {activeYear}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#001A40]">
            Rencana Sebaran Balai Pengembangan Kompetensi (BANGKOM)
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Penyelenggaraan pelatihan kompetensi bidang Cipta Karya dan Prasarana Strategis pada 9 wilayah Balai Bangkom PU di seluruh Indonesia.
          </p>

          {/* Year Switcher */}
          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="bg-slate-200 p-1 rounded-xl flex items-center shadow-inner">
              <button
                onClick={() => handleYearToggle(2026)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg font-bold text-xs transition cursor-pointer ${
                  activeYear === 2026
                    ? 'bg-[#002B66] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>T.A. 2026</span>
              </button>
              <button
                onClick={() => handleYearToggle(2027)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg font-bold text-xs transition cursor-pointer ${
                  activeYear === 2027
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
                <span>T.A. 2027 (Perencanaan)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Region Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {regionOptions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                selectedRegion === region
                  ? 'bg-[#002B66] text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {region === 'all' ? 'Semua Wilayah' : `Wilayah ${region}`}
            </button>
          ))}
        </div>

        {/* Bangkom Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUnits.map((unit) => {
            const programs = getUnitPrograms(unit);
            const classCount = getUnitClassCount(unit);

            return (
              <div
                key={unit.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between group hover:border-[#002B66]"
              >
                <div>
                  {/* Badge Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-[#002B66] text-[#FFB800] rounded-xl flex items-center justify-center font-black text-sm shadow-inner">
                      {unit.code.replace(/^(BAPEKOM-|BANGKOM-)/, '')}
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border ${
                      activeYear === 2027
                        ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                        : 'bg-amber-50 text-amber-900 border-amber-200'
                    }`}>
                      {classCount} Kelas T.A. {activeYear}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-lg text-slate-900 mb-1 group-hover:text-[#002B66] transition">
                    {unit.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-[#002B66]" /> {unit.location}, {unit.province}
                  </div>

                  {/* Address */}
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                    {unit.address}
                  </p>

                  {/* Coverage Areas */}
                  <div className="mb-4">
                    <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block mb-1.5">
                      Wilayah Layanan ({unit.coverageAreas.length} Provinsi)
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {unit.coverageAreas.map((area, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium border border-slate-200/60"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pengembangan Kompetensi Preview */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-bold uppercase text-slate-500 tracking-wider block">
                        Pengembangan Kompetensi T.A {activeYear}
                      </span>
                      <span className="text-[10px] font-bold text-[#002B66]">
                        {programs.length} Pelatihan
                      </span>
                    </div>

                    {programs.length === 0 ? (
                      <div className="bg-slate-50 p-3 rounded-xl border border-dashed border-slate-200 text-center">
                        <p className="text-[11px] text-slate-500 mb-1">
                          Belum ada agenda pelatihan untuk T.A. {activeYear} di balai ini.
                        </p>
                        {onNavigateToKalender && (
                          <button
                            onClick={onNavigateToKalender}
                            className="text-[10px] font-bold text-emerald-700 hover:text-emerald-800 flex items-center justify-center gap-1 mx-auto mt-1 cursor-pointer"
                          >
                            <Plus className="w-3 h-3" /> Tambah di Kalender 2027
                          </button>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-1.5">
                        {programs.slice(0, 4).map((prog, idx) => {
                          const badge = getMethodBadge(prog.method);
                          return (
                            <div
                              key={idx}
                              className="flex items-center justify-between gap-1.5 bg-slate-50 p-2 rounded-lg border border-slate-200/70 text-[11px]"
                            >
                              <div className="flex items-center gap-1.5 min-w-0 pr-1">
                                <span className="font-mono text-[9px] font-bold text-[#002B66] bg-white px-1 py-0.5 rounded border border-slate-200 shrink-0">
                                  {prog.code}
                                </span>
                                <span className="font-semibold text-slate-800 truncate" title={prog.name}>
                                  {prog.name}
                                </span>
                              </div>
                              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border shrink-0 ${badge.bg}`}>
                                {badge.label}
                              </span>
                            </div>
                          );
                        })}
                        {programs.length > 4 && (
                          <p className="text-[10px] font-bold text-slate-500 text-center pt-1">
                            +{programs.length - 4} pelatihan lainnya
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => setActiveBangkom(unit)}
                  className="w-full bg-slate-100 hover:bg-[#002B66] hover:text-white text-[#002B66] font-bold text-xs py-2.5 rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer mt-2"
                >
                  Lihat Detail Layanan <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Detailed Modal view for selected Bangkom */}
        {activeBangkom && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-lg w-full p-6 relative max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4 sticky top-0 bg-white z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#002B66] text-[#FFB800] rounded-xl flex items-center justify-center font-black text-sm">
                    {activeBangkom.code.replace(/^(BAPEKOM-|BANGKOM-)/, '')}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-slate-900">{activeBangkom.name}</h3>
                    <p className="text-xs text-slate-500">{activeBangkom.location}, {activeBangkom.province}</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveBangkom(null)}
                  className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 text-sm font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs text-slate-700">
                <div>
                  <span className="font-bold text-slate-900 block mb-1">Alamat Kantor:</span>
                  <p className="bg-slate-50 p-3 rounded-xl border border-slate-200 leading-relaxed">
                    {activeBangkom.address}
                  </p>
                </div>

                {activeBangkom.phone && (
                  <div className="flex items-center gap-2 text-slate-800">
                    <Phone className="w-4 h-4 text-[#002B66]" />
                    <span className="font-semibold">{activeBangkom.phone}</span>
                  </div>
                )}

                <div>
                  <span className="font-bold text-slate-900 block mb-1">Cakupan Wilayah Layanan:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeBangkom.coverageAreas.map((area, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-900 border border-blue-200 px-2 py-1 rounded font-medium">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-slate-900 block">
                      Pengembangan Kompetensi T.A {activeYear}:
                    </span>
                    <span className="text-[11px] text-slate-500 font-semibold">
                      {getUnitPrograms(activeBangkom).length} Pelatihan Terjadwal
                    </span>
                  </div>

                  {getUnitPrograms(activeBangkom).length === 0 ? (
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
                      <p className="text-slate-500">Belum ada agenda pelatihan untuk T.A. {activeYear} di balai ini.</p>
                    </div>
                  ) : (
                    <ul className="space-y-2">
                      {getUnitPrograms(activeBangkom).map((prog, idx) => {
                        const badge = getMethodBadge(prog.method);
                        return (
                          <li key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                            <div className="flex items-start gap-2.5 min-w-0">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <div>
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <span className="font-mono text-[10px] font-bold text-[#002B66] bg-blue-100/70 text-blue-900 px-1.5 py-0.5 rounded border border-blue-200">
                                    {prog.code}
                                  </span>
                                  <span className="font-bold text-slate-800 text-xs">{prog.name}</span>
                                </div>
                                {prog.tanggal && (
                                  <p className="text-[10px] text-slate-500 mt-0.5">{prog.tanggal} • {prog.waktu}</p>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5 pl-6 sm:pl-0 shrink-0">
                              {prog.jp && (
                                <span className="text-[10px] font-semibold text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                                  {prog.jp} JP
                                </span>
                              )}
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${badge.bg}`}>
                                {badge.label}
                              </span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setActiveBangkom(null)}
                  className="bg-[#002B66] text-white font-bold text-xs px-5 py-2 rounded-lg cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export const SebaranBapekomSection = SebaranBangkomSection;
