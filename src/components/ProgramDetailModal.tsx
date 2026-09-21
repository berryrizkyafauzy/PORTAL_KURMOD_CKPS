import React from 'react';
import { TrainingProgram } from '../types';
import { X, Clock, Users, BookOpen, CheckCircle2, Award, GraduationCap, Target, FileText, CalendarCheck, AlertCircle } from 'lucide-react';

interface ProgramDetailModalProps {
  program: TrainingProgram | null;
  onClose: () => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({ program, onClose }) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-3xl w-full max-h-[92vh] overflow-y-auto custom-scrollbar relative flex flex-col">
        {/* Header */}
        <div className="bg-[#002B66] text-white p-6 sticky top-0 z-10 flex items-start justify-between border-b border-white/10 shadow-sm">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-[#FFB800] text-[#001A40] text-xs font-black px-2.5 py-0.5 rounded uppercase">
                {program.code}
              </span>
              <span className="bg-white/20 text-slate-200 text-xs font-semibold px-2.5 py-0.5 rounded">
                {program.rumpunLabel}
              </span>
              {program.curriculumHistory && (
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                  <CalendarCheck className="w-3 h-3" /> Pemutakhiran {program.curriculumHistory.updatedYear}
                </span>
              )}
            </div>
            <h3 className="text-xl font-extrabold leading-tight">{program.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-lg transition"
            aria-label="Tutup Detail"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 flex-1 text-slate-800">
          {/* Status Note / Catatan Status Pelaksanaan */}
          {program.statusNote && (
            <div className="bg-rose-50 border border-rose-200 text-rose-800 p-4 rounded-xl text-xs sm:text-sm font-medium flex items-start gap-3 shadow-sm">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block text-rose-900 mb-0.5">Catatan Status Pelaksanaan:</span>
                <p className="leading-relaxed">{program.statusNote}</p>
              </div>
            </div>
          )}

          {/* Quick Overview Meta */}
          <div className="grid grid-cols-3 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
            <div>
              <div className="text-xs text-slate-500 font-semibold uppercase flex items-center justify-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-600" /> Total Durasi
              </div>
              <div className="text-base font-black text-slate-900 mt-1">{program.durationJp} JP</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 font-semibold uppercase flex items-center justify-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-amber-600" /> Metode Utama
              </div>
              <div className="text-sm font-bold text-slate-900 mt-1">{program.method}</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 font-semibold uppercase flex items-center justify-center gap-1">
                <Award className="w-3.5 h-3.5 text-purple-600" /> Tingkat
              </div>
              <div className="text-sm font-bold text-slate-900 mt-1">{program.level}</div>
            </div>
          </div>

          {/* Allowed Methods Badges */}
          {program.allowedMethods && program.allowedMethods.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Opsi Metode Pelaksanaan
              </h4>
              <div className="flex flex-wrap gap-2">
                {program.allowedMethods.map((m, idx) => (
                  <span key={idx} className="bg-[#002B66] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Competency Standard (Standar Kompetensi Lulusan) */}
          {program.competencyStandard ? (
            <div>
              <h4 className="text-xs font-bold text-[#002B66] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Target className="w-4 h-4 text-amber-600" /> Standar Kompetensi Lulusan
              </h4>
              <div className="bg-amber-50/80 border border-amber-200/90 p-4 rounded-xl text-sm text-slate-800 leading-relaxed font-medium">
                {program.competencyStandard}
              </div>
            </div>
          ) : (
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                Deskripsi Program
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                {program.description}
              </p>
            </div>
          )}

          {/* Participant Requirements (Persyaratan Peserta) */}
          {program.participantRequirements && program.participantRequirements.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-slate-600" /> Persyaratan Peserta
              </h4>
              <ul className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-xs sm:text-sm">
                {program.participantRequirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Target Audience */}
          {!program.participantRequirements && (
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-slate-600" /> Sasaran Peserta
              </h4>
              <p className="text-sm font-medium text-slate-800 bg-amber-50/60 border border-amber-200/80 p-3.5 rounded-xl">
                {program.targetAudience}
              </p>
            </div>
          )}

          {/* Detailed Syllabus Table */}
          {program.detailedSyllabus && program.detailedSyllabus.length > 0 ? (
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-slate-600" /> Silabus & Mata Pelatihan ({program.detailedSyllabus.length} Mata Pelatihan)
                </h4>
                <span className="text-xs font-black text-[#002B66] bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-lg">
                  Total {program.durationJp} JP
                </span>
              </div>

              <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <div className="max-h-80 overflow-y-auto custom-scrollbar">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead className="bg-[#002B66] text-white sticky top-0">
                      <tr>
                        <th className="p-3 w-12 text-center font-bold">No</th>
                        <th className="p-3 font-bold">Mata Pelatihan</th>
                        <th className="p-3 w-20 text-center font-bold">JP</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {program.detailedSyllabus.map((item) => (
                        <tr key={item.no} className="hover:bg-slate-50/80 transition">
                          <td className="p-3 text-center font-semibold text-slate-500">{item.no}</td>
                          <td className="p-3 font-medium text-slate-800">{item.subject}</td>
                          <td className="p-3 text-center font-extrabold text-[#002B66] bg-slate-50">{item.jp}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="bg-slate-100 border-t-2 border-slate-300 font-extrabold text-slate-900">
                      <tr>
                        <td colSpan={2} className="p-3 text-right uppercase tracking-wider text-xs">Total Jam Pelajaran (JP):</td>
                        <td className="p-3 text-center text-sm text-[#002B66] bg-amber-100 border-l border-amber-200">{program.durationJp} JP</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            /* Key Modules List for other programs */
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-slate-600" /> Silabus & Modul Utama
              </h4>
              <ul className="space-y-2.5">
                {program.keyModules.map((mod, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg border border-slate-200/60 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium text-slate-800">{mod}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Curriculum Versioning Note */}
          {program.curriculumHistory && (
            <div className="bg-slate-100 p-3 rounded-xl border border-slate-200 text-center text-xs text-slate-600 font-medium flex items-center justify-center gap-3">
              <span>Penyusunan: <strong>Tahun {program.curriculumHistory.developedYear}</strong></span>
              <span className="text-slate-300">•</span>
              <span>Pemutakhiran: <strong>Tahun {program.curriculumHistory.updatedYear}</strong></span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#002B66] hover:bg-[#001A40] text-white font-bold text-xs uppercase px-6 py-2.5 rounded-lg transition cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

