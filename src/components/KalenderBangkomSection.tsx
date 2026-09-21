import React, { useState, useMemo, useEffect } from 'react';
import {
  KALENDER_PELATIHAN_2026,
  DEFAULT_KALENDER_PELATIHAN_2027,
  getSavedKalender2027,
  saveKalender2027
} from '../data/kalenderData';
import {
  SKENARIO_CONFIGS,
  SkenarioId,
  getKalender2027ForScenario,
  DAFTAR_PELATIHAN_2027
} from '../data/skenario2027Data';
import { KalenderTrainingItem, ScheduleBreakdown } from '../types';
import {
  Calendar,
  Search,
  Filter,
  Users,
  Building2,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileText,
  Award,
  ChevronRight,
  X,
  GraduationCap,
  Layers,
  MapPin,
  Eye,
  RotateCcw,
  Sparkles,
  Plus,
  Pencil,
  Trash2,
  Copy,
  Download,
  Upload,
  Check,
  BarChart3,
  HelpCircle,
  Info,
  SlidersHorizontal,
  Table as TableIcon,
  CheckCheck
} from 'lucide-react';

interface KalenderBangkomSectionProps {
  selectedYear?: 2026 | 2027;
  onYearChange?: (year: 2026 | 2027) => void;
  onDataChange2027?: (items: KalenderTrainingItem[]) => void;
}

const BALAI_OPTIONS = [
  { code: 'BANGKOM-I', name: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah I Medan', label: 'Wilayah I Medan' },
  { code: 'BANGKOM-II', name: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah II Palembang', label: 'Wilayah II Palembang' },
  { code: 'BANGKOM-III', name: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah III Jakarta', label: 'Wilayah III Jakarta' },
  { code: 'BANGKOM-IV', name: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah IV Bandung', label: 'Wilayah IV Bandung' },
  { code: 'BANGKOM-V', name: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah V Yogyakarta', label: 'Wilayah V Yogyakarta' },
  { code: 'BANGKOM-VI', name: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah VI Surabaya', label: 'Wilayah VI Surabaya' },
  { code: 'BANGKOM-VII', name: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah VII Banjarmasin', label: 'Wilayah VII Banjarmasin' },
  { code: 'BANGKOM-VIII', name: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah VIII Makassar', label: 'Wilayah VIII Makassar' },
  { code: 'BANGKOM-IX', name: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah IX Jayapura', label: 'Wilayah IX Jayapura' },
  { code: 'PUSBANGKOM', name: 'Pusat Pengembangan Kompetensi SDA, Cipta Karya dan Prasarana Strategis (Pusbangkom Pusat)', label: 'Pusbangkom Pusat' },
];

const RUMPUN_OPTIONS = [
  { id: 'umum', label: 'Umum & Manajemen' },
  { id: 'penataan-bangunan', label: 'Penataan Bangunan' },
  { id: 'air-minum', label: 'Air Minum' },
  { id: 'sanitasi', label: 'Sanitasi & PLP' },
  { id: 'prasarana-strategis', label: 'Prasarana Strategis' },
];

const METODE_OPTIONS = [
  'Blended Learning',
  'Distance Learning',
  'E-Learning',
  'Webinar',
  'Klasikal',
  'E-Learning Terbuka'
];

const BULAN_OPTIONS = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

export const KalenderBangkomSection: React.FC<KalenderBangkomSectionProps> = ({
  selectedYear: propSelectedYear,
  onYearChange,
  onDataChange2027
}) => {
  // Year state
  const [internalYear, setInternalYear] = useState<2026 | 2027>(2026);
  const activeYear = propSelectedYear !== undefined ? propSelectedYear : internalYear;

  const handleYearToggle = (year: 2026 | 2027) => {
    setInternalYear(year);
    if (onYearChange) {
      onYearChange(year);
    }
  };

  // 2027 Dataset (stored in localStorage)
  const [items2027, setItems2027] = useState<KalenderTrainingItem[]>(() => getSavedKalender2027());

  // 2027 Scenario state
  const [selectedScenario, setSelectedScenario] = useState<SkenarioId>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cmrc_active_scenario_2027');
      if (saved && (saved === 'skenario-1' || saved === 'skenario-2' || saved === 'skenario-3' || saved === 'skenario-4')) {
        return saved as SkenarioId;
      }
    }
    return 'skenario-1';
  });
  const [isScenarioMatrixOpen, setIsScenarioMatrixOpen] = useState(false);

  const handleSelectScenario = (scenId: SkenarioId) => {
    setSelectedScenario(scenId);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cmrc_active_scenario_2027', scenId);
    }
    const newItems = getKalender2027ForScenario(scenId);
    setItems2027(newItems);
    saveKalender2027(newItems);
    const cfg = SKENARIO_CONFIGS[scenId];
    showToast(`Beralih ke ${cfg.code}: ${cfg.subtitle} (${cfg.totalPeserta} Peserta, 27 Angkatan).`);
  };

  // Find 2027 training item allocation in master data
  const get2027ItemAllocations = (item: KalenderTrainingItem) => {
    return DAFTAR_PELATIHAN_2027.find(
      d => d.code === item.code || d.title.toLowerCase().trim() === item.title.toLowerCase().trim() || d.no === item.no
    );
  };

  useEffect(() => {
    if (onDataChange2027) {
      onDataChange2027(items2027);
    }
  }, [items2027, onDataChange2027]);

  // Current year items
  const currentDataset = useMemo(() => {
    return activeYear === 2026 ? KALENDER_PELATIHAN_2026 : items2027;
  }, [activeYear, items2027]);

  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTriwulan, setSelectedTriwulan] = useState<string>('all');
  const [selectedBalai, setSelectedBalai] = useState<string>('all');
  const [selectedMetode, setSelectedMetode] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'table' | 'timeline'>('table');

  // Modals
  const [activeItem, setActiveItem] = useState<KalenderTrainingItem | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<KalenderTrainingItem | null>(null);
  const [isClonePickerOpen, setIsClonePickerOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [importJsonText, setImportJsonText] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Form State for Adding / Editing 2027 item
  const initialFormData: Partial<KalenderTrainingItem> = {
    title: '',
    code: '',
    rumpun: 'penataan-bangunan',
    rumpunLabel: 'Penataan Bangunan',
    penyelenggaraCode: 'BANGKOM-I',
    penyelenggara: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah I Medan',
    triwulan: 'I',
    bulan: 'Februari',
    metode: 'Blended Learning',
    tanggalPelaksanaan: '',
    waktu: '10 Hari',
    jpPelatihan: 48,
    jpPengajar: 52,
    targetPeserta: 30,
    angkatan: 'I',
    pic: '',
    persiapan: '',
    status: 'Terjadwal',
    keteranganSertifikasi: 'Non Sertifikasi',
    standarKompetensi: '',
    persyaratanPeserta: []
  };

  const [formData, setFormData] = useState<Partial<KalenderTrainingItem>>(initialFormData);
  const [persyaratanText, setPersyaratanText] = useState('');
  const [selfLearningText, setSelfLearningText] = useState('');
  const [onlineClassText, setOnlineClassText] = useState('');
  const [offlineClassText, setOfflineClassText] = useState('');
  const [magangText, setMagangText] = useState('');
  const [ujiKompetensiText, setUjiKompetensiText] = useState('');

  // Open Form to Add
  const handleOpenAddForm = () => {
    setEditingItem(null);
    setFormData(initialFormData);
    setPersyaratanText('');
    setSelfLearningText('');
    setOnlineClassText('');
    setOfflineClassText('');
    setMagangText('');
    setUjiKompetensiText('');
    setIsFormOpen(true);
  };

  // Open Form to Edit
  const handleOpenEditForm = (item: KalenderTrainingItem) => {
    setEditingItem(item);
    setFormData({ ...item });
    setPersyaratanText(item.persyaratanPeserta ? item.persyaratanPeserta.join('\n') : '');
    setSelfLearningText(item.scheduleBreakdown?.selfLearning || '');
    setOnlineClassText(item.scheduleBreakdown?.onlineClass || '');
    setOfflineClassText(item.scheduleBreakdown?.offlineClass || '');
    setMagangText(item.scheduleBreakdown?.magang || '');
    setUjiKompetensiText(item.scheduleBreakdown?.ujiKompetensi || '');
    setIsFormOpen(true);
  };

  // Save Add/Edit
  const handleSaveForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title?.trim()) {
      alert('Nama pelatihan wajib diisi!');
      return;
    }

    const selectedBalaiObj = BALAI_OPTIONS.find(b => b.code === formData.penyelenggaraCode) || BALAI_OPTIONS[0];
    const selectedRumpunObj = RUMPUN_OPTIONS.find(r => r.id === formData.rumpun) || RUMPUN_OPTIONS[0];

    const reqArray = persyaratanText
      .split('\n')
      .map(s => s.trim())
      .filter(s => s.length > 0);

    const scheduleObj: ScheduleBreakdown = {
      ...(selfLearningText ? { selfLearning: selfLearningText } : {}),
      ...(onlineClassText ? { onlineClass: onlineClassText } : {}),
      ...(offlineClassText ? { offlineClass: offlineClassText } : {}),
      ...(magangText ? { magang: magangText } : {}),
      ...(ujiKompetensiText ? { ujiKompetensi: ujiKompetensiText } : {}),
    };

    if (editingItem) {
      // Update existing item
      const updated = items2027.map(it => {
        if (it.id === editingItem.id) {
          return {
            ...it,
            ...formData,
            penyelenggara: selectedBalaiObj.name,
            penyelenggaraCode: selectedBalaiObj.code,
            rumpunLabel: selectedRumpunObj.label,
            persyaratanPeserta: reqArray,
            scheduleBreakdown: Object.keys(scheduleObj).length > 0 ? scheduleObj : undefined,
            year: 2027
          } as KalenderTrainingItem;
        }
        return it;
      });
      setItems2027(updated);
      saveKalender2027(updated);
      showToast(`Pelatihan "${formData.title}" berhasil diperbarui.`);
    } else {
      // Create new item
      const newItem: KalenderTrainingItem = {
        id: `kal-2027-${Date.now()}`,
        year: 2027,
        no: items2027.length + 1,
        title: formData.title || 'Pelatihan Baru 2027',
        code: formData.code || `CKPS-27-${items2027.length + 1}`,
        rumpun: (formData.rumpun as any) || 'umum',
        rumpunLabel: selectedRumpunObj.label,
        penyelenggara: selectedBalaiObj.name,
        penyelenggaraCode: selectedBalaiObj.code,
        triwulan: formData.triwulan as any || 'I',
        bulan: formData.bulan || 'Februari',
        metode: formData.metode || 'Blended Learning',
        tanggalPelaksanaan: formData.tanggalPelaksanaan || 'TBA 2027',
        waktu: formData.waktu || '10 Hari',
        jpPelatihan: formData.jpPelatihan || 48,
        jpPengajar: formData.jpPengajar || 52,
        targetPeserta: Number(formData.targetPeserta) || 30,
        angkatan: formData.angkatan || 'I',
        pic: formData.pic || '-',
        persiapan: formData.persiapan || '-',
        status: formData.status || 'Terjadwal',
        keteranganSertifikasi: formData.keteranganSertifikasi || 'Non Sertifikasi',
        standarKompetensi: formData.standarKompetensi || '',
        persyaratanPeserta: reqArray,
        scheduleBreakdown: Object.keys(scheduleObj).length > 0 ? scheduleObj : undefined
      };
      const updated = [...items2027, newItem];
      setItems2027(updated);
      saveKalender2027(updated);
      showToast(`Pelatihan 2027 "${newItem.title}" berhasil ditambahkan.`);
    }

    setIsFormOpen(false);
  };

  // Delete an item from 2027
  const handleDeleteItem = (id: string, title: string) => {
    if (window.confirm(`Yakin ingin menghapus agenda pelatihan "${title}" dari T.A. 2027?`)) {
      const updated = items2027
        .filter(it => it.id !== id)
        .map((it, idx) => ({ ...it, no: idx + 1 }));
      setItems2027(updated);
      saveKalender2027(updated);
      showToast(`Pelatihan "${title}" telah dihapus.`);
    }
  };

  // Clone from 2026 into 2027
  const handleCloneFrom2026 = (item2026: KalenderTrainingItem) => {
    const newItem: KalenderTrainingItem = {
      ...item2026,
      id: `kal-2027-${Date.now()}`,
      year: 2027,
      no: items2027.length + 1,
      title: `${item2026.title} (T.A. 2027)`,
      code: item2026.code ? `${item2026.code}-27` : `CKPS-27-${items2027.length + 1}`,
      tanggalPelaksanaan: item2026.tanggalPelaksanaan.replace('2026', '2027'),
      persiapan: item2026.persiapan ? item2026.persiapan.replace('-26', '-27') : '-',
      status: 'Terjadwal',
    };
    const updated = [...items2027, newItem];
    setItems2027(updated);
    saveKalender2027(updated);
    setIsClonePickerOpen(false);
    showToast(`Berhasil menyalin "${item2026.title}" ke Kalender T.A. 2027.`);
  };

  // Reset 2027 to active scenario template
  const handleReset2027 = () => {
    const cfg = SKENARIO_CONFIGS[selectedScenario];
    if (window.confirm(`Apakah Anda yakin ingin mereset seluruh data T.A. 2027 kembali ke template master "${cfg.name}"? Semua perubahan yang belum diekspor akan hilang.`)) {
      const resetItems = getKalender2027ForScenario(selectedScenario);
      setItems2027(resetItems);
      saveKalender2027(resetItems);
      showToast(`Data T.A. 2027 telah direset ke template ${cfg.code}.`);
    }
  };

  // Export 2027 to JSON file
  const handleExportJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(items2027, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `kalender_bangkom_2027_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('File JSON Kalender 2027 berhasil diunduh.');
  };

  // Import 2027 from JSON
  const handleImportJson = () => {
    try {
      const parsed = JSON.parse(importJsonText);
      if (!Array.isArray(parsed)) {
        alert('Format JSON harus berupa Array daftar pelatihan.');
        return;
      }
      const renumbered = parsed.map((item, idx) => ({
        ...item,
        id: item.id || `kal-2027-${Date.now()}-${idx}`,
        no: idx + 1,
        year: 2027
      }));
      setItems2027(renumbered);
      saveKalender2027(renumbered);
      setIsImportModalOpen(false);
      setImportJsonText('');
      showToast(`Berhasil mengimpor ${renumbered.length} agenda pelatihan untuk T.A. 2027.`);
    } catch (e: any) {
      alert('Gagal membaca JSON: ' + (e.message || 'Format tidak valid.'));
    }
  };

  // Filtered dataset calculation
  const filteredItems = useMemo(() => {
    return currentDataset.filter((item) => {
      const matchSearch =
        searchQuery === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.code && item.code.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.penyelenggara.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.pic && item.pic.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.bulan.toLowerCase().includes(searchQuery.toLowerCase());

      const matchTriwulan =
        selectedTriwulan === 'all' || item.triwulan === selectedTriwulan;

      const matchBalai =
        selectedBalai === 'all' || item.penyelenggaraCode === selectedBalai;

      const matchMetode =
        selectedMetode === 'all' || item.metode === selectedMetode;

      const matchStatus =
        selectedStatus === 'all' || item.status === selectedStatus;

      return matchSearch && matchTriwulan && matchBalai && matchMetode && matchStatus;
    });
  }, [currentDataset, searchQuery, selectedTriwulan, selectedBalai, selectedMetode, selectedStatus]);

  // Dynamic KPI Stats
  const dynamicStats = useMemo(() => {
    const totalKegiatan = currentDataset.length;
    const totalPesertaTarget = currentDataset.reduce((sum, it) => sum + (Number(it.targetPeserta) || 0), 0);
    const uniqueBalai = new Set(currentDataset.map(it => it.penyelenggaraCode)).size;
    const completedCount = currentDataset.filter(it => it.status === 'Selesai').length;
    const ongoingCount = currentDataset.filter(it => it.status === 'Ongoing').length;
    const scheduledCount = currentDataset.filter(it => it.status === 'Terjadwal').length;

    return {
      totalKegiatan,
      totalPesertaTarget,
      uniqueBalai,
      completedCount,
      ongoingCount,
      scheduledCount
    };
  }, [currentDataset]);

  // Method badge styling
  const getMethodBadge = (metode: string) => {
    switch (metode) {
      case 'Blended Learning':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Distance Learning':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'E-Learning':
      case 'E-Learning Terbuka':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Webinar':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'Klasikal':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  // Status badge styling
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Selesai':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Ongoing':
        return 'bg-amber-100 text-amber-800 border-amber-200 animate-pulse';
      case 'Terjadwal':
        return 'bg-sky-100 text-sky-800 border-sky-200';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  // Rumpun color bar
  const getRumpunColor = (rumpun: string) => {
    switch (rumpun) {
      case 'air-minum':
        return 'bg-[#002B66] text-white';
      case 'sanitasi':
        return 'bg-emerald-600 text-white';
      case 'penataan-bangunan':
        return 'bg-[#FFB800] text-slate-900';
      case 'prasarana-strategis':
        return 'bg-indigo-600 text-white';
      default:
        return 'bg-slate-700 text-white';
    }
  };

  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedTriwulan('all');
    setSelectedBalai('all');
    setSelectedMetode('all');
    setSelectedStatus('all');
  };

  return (
    <section id="kalender-bangkom" className="py-20 bg-slate-100/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#002B66] text-white text-xs font-bold px-4 py-3 rounded-xl shadow-xl border border-blue-400/30 flex items-center gap-2.5 animate-bounce">
            <CheckCircle2 className="w-4 h-4 text-[#FFB800]" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Section Header with Primary Year Switcher */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#002B66]/10 text-[#002B66] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-4 h-4 text-[#002B66]" />
            Kalender Bangkom Terpadu Kementerian PU
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Kalender Pengembangan Kompetensi T.A. {activeYear}
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
            {activeYear === 2026 ? (
              <>Jadwal resmi pelatihan, webinar nasional, sertifikasi LSP BPSDM, dan e-learning bidang Cipta Karya dan Prasarana Strategis pada 9 Balai Bangkom PU Wilayah dan Kampus Pusat sesuai <strong>Dokumen Resmi BPSDM T.A. 2026</strong>.</>
            ) : (
              <>Perencanaan dan penginputan agenda pelatihan, sertifikasi, serta pengembangan modul untuk <strong>Tahun Anggaran 2027</strong>. Anda dapat menambah, mengedit, mengimpor, atau menyalin agenda dari 2026.</>
            )}
          </p>

          {/* YEAR SELECTOR TABS (2026 vs 2027) */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <div className="bg-slate-200/80 p-1.5 rounded-2xl flex items-center shadow-inner border border-slate-300/80">
              <button
                onClick={() => handleYearToggle(2026)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all cursor-pointer ${
                  activeYear === 2026
                    ? 'bg-[#002B66] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Tahun Anggaran 2026</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  activeYear === 2026 ? 'bg-amber-400 text-slate-900' : 'bg-slate-300 text-slate-700'
                }`}>
                  30 Agenda Resmi
                </span>
              </button>

              <button
                onClick={() => handleYearToggle(2027)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all cursor-pointer ${
                  activeYear === 2027
                    ? 'bg-emerald-700 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Sparkles className="w-4 h-4 text-[#FFB800]" />
                <span>Tahun Anggaran 2027</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  activeYear === 2027 ? 'bg-amber-400 text-slate-900' : 'bg-slate-300 text-slate-700'
                }`}>
                  {items2027.length} Kegiatan (Input Aktif)
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 2027 SCENARIO SWITCHER & ANALYSIS PANEL (When 2027 is active) */}
        {activeYear === 2027 && (
          <div className="mb-6 space-y-4">
            {/* Header & Matrix Modal Trigger */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-extrabold mb-1.5">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Perencanaan Pagu Anggaran & Alokasi Metode T.A. 2027</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900">
                    Pilihan 4 Skenario Pelatihan Cipta Karya & Prasarana Strategis 2027
                  </h3>
                  <p className="text-xs text-slate-600 max-w-3xl mt-0.5">
                    Berdasarkan estimasi persetujuan pagu anggaran Kementerian PU. Memilih skenario akan secara instan memperbarui alokasi metode (Klasikal, Blended, Distance, e-Learning, Webinar) dan target peserta 27 agenda pelatihan secara detail.
                  </p>
                </div>
                <button
                  onClick={() => setIsScenarioMatrixOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#002B66] hover:bg-[#001D47] text-white text-xs font-bold shadow-sm transition shrink-0 cursor-pointer"
                >
                  <BarChart3 className="w-4 h-4 text-[#FFB800]" />
                  <span>Matriks Perbandingan 4 Skenario</span>
                </button>
              </div>

              {/* 4 Interactive Scenario Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-4">
                {(['skenario-1', 'skenario-2', 'skenario-3', 'skenario-4'] as SkenarioId[]).map((scenId) => {
                  const scen = SKENARIO_CONFIGS[scenId];
                  const isActive = selectedScenario === scenId;
                  return (
                    <div
                      key={scenId}
                      onClick={() => handleSelectScenario(scenId)}
                      className={`relative rounded-xl p-4 transition-all cursor-pointer text-left flex flex-col justify-between ${
                        isActive
                          ? 'bg-gradient-to-b from-white to-emerald-50/50 border-2 border-emerald-600 shadow-md ring-2 ring-emerald-600/10'
                          : 'bg-slate-50/80 hover:bg-slate-100/80 border border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div>
                        {/* Top Code Badge & Status */}
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${
                            isActive ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
                          }`}>
                            {scen.code}
                          </span>
                          {isActive ? (
                            <span className="text-[10px] font-extrabold text-emerald-700 flex items-center gap-1">
                              <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                              Aktif
                            </span>
                          ) : (
                            <span className="text-[10px] text-slate-400 font-semibold hover:text-slate-700">
                              Klik Terapkan
                            </span>
                          )}
                        </div>

                        {/* Title & Subtitle */}
                        <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 leading-snug mb-1">
                          {scen.name}
                        </h4>
                        <p className="text-[11px] text-slate-500 line-clamp-2 mb-3 leading-relaxed">
                          {scen.subtitle}
                        </p>

                        {/* Method Breakdown Pills */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {scen.klasikal.kelas > 0 && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200">
                              {scen.klasikal.kelas} Klasikal ({scen.klasikal.peserta})
                            </span>
                          )}
                          {scen.blended.kelas > 0 && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                              {scen.blended.kelas} Blended ({scen.blended.peserta})
                            </span>
                          )}
                          {scen.distance.kelas > 0 && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200">
                              {scen.distance.kelas} Distance ({scen.distance.peserta})
                            </span>
                          )}
                          {scen.elearningTertutup.kelas > 0 && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-teal-50 text-teal-700 border border-teal-200">
                              {scen.elearningTertutup.kelas} e-Learning ({scen.elearningTertutup.peserta})
                            </span>
                          )}
                          {scen.webinar.kelas > 0 && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                              {scen.webinar.kelas} Webinar ({scen.webinar.peserta})
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Footer Total */}
                      <div className="pt-2.5 border-t border-slate-200/80 flex items-center justify-between text-xs">
                        <span className="text-[11px] text-slate-500 font-medium">Target Peserta:</span>
                        <span className="font-black text-slate-900">
                          {scen.totalPeserta.toLocaleString('id-ID')} Orang
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Active Scenario Overview Ribbon */}
              <div className="mt-4 p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">
                      {SKENARIO_CONFIGS[selectedScenario].name} — {SKENARIO_CONFIGS[selectedScenario].totalPeserta.toLocaleString('id-ID')} Peserta ({SKENARIO_CONFIGS[selectedScenario].totalAngkatan} Angkatan Pelatihan)
                    </span>
                    <span className="text-slate-600 text-[11px] leading-relaxed">
                      {SKENARIO_CONFIGS[selectedScenario].description}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start md:self-center shrink-0">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Status Pagu:</span>
                  <span className="px-2 py-0.5 rounded-md font-extrabold text-[10px] bg-white border border-emerald-300 text-emerald-800 shadow-2xs">
                    {selectedScenario === 'skenario-1' && 'Pagu Disetujui 100%'}
                    {selectedScenario === 'skenario-2' && 'Pagu Relatif Sama 2026'}
                    {selectedScenario === 'skenario-3' && 'Pagu Disetujui ~50%'}
                    {selectedScenario === 'skenario-4' && 'Pagu Ditolak (100% Digital LMS)'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2027 ACTION TOOLBAR (When 2027 is active) */}
        {activeYear === 2027 && (
          <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 border border-emerald-200 rounded-2xl p-4 sm:p-5 mb-8 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Sparkles className="w-5 h-5 text-[#FFB800]" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm sm:text-base text-slate-900">
                  Mode Penginputan & Perencanaan T.A. 2027
                </h4>
                <p className="text-xs text-slate-600">
                  Data yang Anda tambahkan atau ubah tersimpan otomatis di peramban Anda. Anda juga dapat mengekspor atau mengimpor file JSON.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleOpenAddForm}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                Tambah Pelatihan 2027
              </button>

              <button
                onClick={() => setIsClonePickerOpen(true)}
                className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-bold text-xs px-3 py-2.5 rounded-xl shadow-sm transition flex items-center gap-1.5 cursor-pointer"
                title="Salin salah satu pelatihan dari 2026 sebagai template 2027"
              >
                <Copy className="w-3.5 h-3.5 text-blue-600" />
                Salin dari 2026
              </button>

              <button
                onClick={handleExportJson}
                className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-bold text-xs px-3 py-2.5 rounded-xl shadow-sm transition flex items-center gap-1.5 cursor-pointer"
                title="Download data 2027 sebagai file JSON"
              >
                <Download className="w-3.5 h-3.5 text-slate-600" />
                Ekspor JSON
              </button>

              <button
                onClick={() => setIsImportModalOpen(true)}
                className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-bold text-xs px-3 py-2.5 rounded-xl shadow-sm transition flex items-center gap-1.5 cursor-pointer"
                title="Impor kumpulan agenda 2027 dari teks JSON"
              >
                <Upload className="w-3.5 h-3.5 text-slate-600" />
                Impor JSON
              </button>

              <button
                onClick={handleReset2027}
                className="bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-xs px-3 py-2.5 rounded-xl transition flex items-center gap-1 cursor-pointer"
                title="Kembalikan ke template awal 2027"
              >
                <RotateCcw className="w-3.5 h-3.5 text-rose-600" />
                Reset
              </button>
            </div>
          </div>
        )}

        {/* Dynamic KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
              activeYear === 2027 ? 'bg-emerald-50 text-emerald-700' : 'bg-blue-50 text-[#002B66]'
            }`}>
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-black text-slate-900">{dynamicStats.totalKegiatan}</span>
              <p className="text-xs font-semibold text-slate-500">Agenda T.A. {activeYear}</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-black text-slate-900">{dynamicStats.totalPesertaTarget.toLocaleString('id-ID')}</span>
              <p className="text-xs font-semibold text-slate-500">Target Peserta {activeYear}</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-black text-slate-900">{dynamicStats.uniqueBalai} Balai</span>
              <p className="text-xs font-semibold text-slate-500">Unit Penyelenggara</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-black text-slate-900">{dynamicStats.scheduledCount}</span>
              <p className="text-xs font-semibold text-slate-500">Agenda Terjadwal</p>
            </div>
          </div>
        </div>

        {/* Filters and Controls Card */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Cari pelatihan T.A. ${activeYear}, kode, balai penyelenggara, atau PIC...`}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#002B66]"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl self-start md:self-auto">
              <button
                onClick={() => setViewMode('table')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'table'
                    ? 'bg-[#002B66] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                Daftar Tabel
              </button>
              <button
                onClick={() => setViewMode('timeline')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'timeline'
                    ? 'bg-[#002B66] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                Matriks Waktu
              </button>
            </div>
          </div>

          {/* Filter Dropdowns */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 pt-2 border-t border-slate-100">
            {/* Triwulan */}
            <div>
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Triwulan
              </label>
              <select
                value={selectedTriwulan}
                onChange={(e) => setSelectedTriwulan(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-lg px-2.5 py-2 focus:outline-none focus:ring-2 focus:ring-[#002B66]"
              >
                <option value="all">Semua Triwulan</option>
                <option value="I">Triwulan I</option>
                <option value="II">Triwulan II</option>
                <option value="III">Triwulan III</option>
                <option value="IV">Triwulan IV</option>
              </select>
            </div>

            {/* Balai Penyelenggara */}
            <div>
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Balai Bangkom
              </label>
              <select
                value={selectedBalai}
                onChange={(e) => setSelectedBalai(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-lg px-2.5 py-2 focus:outline-none focus:ring-2 focus:ring-[#002B66]"
              >
                <option value="all">Semua Penyelenggara</option>
                {BALAI_OPTIONS.map((b) => (
                  <option key={b.code} value={b.code}>{b.label}</option>
                ))}
              </select>
            </div>

            {/* Metode */}
            <div>
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Metode Pelatihan
              </label>
              <select
                value={selectedMetode}
                onChange={(e) => setSelectedMetode(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-lg px-2.5 py-2 focus:outline-none focus:ring-2 focus:ring-[#002B66]"
              >
                <option value="all">Semua Metode</option>
                {METODE_OPTIONS.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-lg px-2.5 py-2 focus:outline-none focus:ring-2 focus:ring-[#002B66]"
              >
                <option value="all">Semua Status</option>
                <option value="Selesai">Selesai</option>
                <option value="Ongoing">Ongoing (Berjalan)</option>
                <option value="Terjadwal">Terjadwal</option>
              </select>
            </div>

            {/* Reset */}
            <div className="flex items-end">
              <button
                onClick={resetFilters}
                className="w-full py-2 px-3 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center gap-1.5 transition cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset Filter
              </button>
            </div>
          </div>
        </div>

        {/* Counter and Results Info */}
        <div className="flex items-center justify-between mb-4 px-1">
          <p className="text-xs font-bold text-slate-600">
            Menampilkan <span className="text-[#002B66] font-black">{filteredItems.length}</span> agenda pelatihan T.A. {activeYear}
          </p>
          <div className="flex items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1 text-slate-500">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Selesai
            </span>
            <span className="inline-flex items-center gap-1 text-slate-500">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Ongoing
            </span>
            <span className="inline-flex items-center gap-1 text-slate-500">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span> Terjadwal
            </span>
          </div>
        </div>

        {/* TABLE VIEW */}
        {viewMode === 'table' ? (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#002B66] text-white font-bold uppercase text-[11px] tracking-wider border-b border-blue-900">
                  <tr>
                    <th className="py-3.5 px-4 w-12 text-center">No</th>
                    <th className="py-3.5 px-4">Nama Pelatihan</th>
                    <th className="py-3.5 px-4">Penyelenggara</th>
                    <th className="py-3.5 px-3">Metode</th>
                    <th className="py-3.5 px-4">Tanggal & Waktu</th>
                    <th className="py-3.5 px-3 text-center">JP / Target</th>
                    <th className="py-3.5 px-3">PIC</th>
                    <th className="py-3.5 px-3 text-center">Status</th>
                    <th className="py-3.5 px-3 text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredItems.length === 0 ? (
                    <tr>
                      <td colSpan={9} className="py-12 text-center text-slate-500">
                        <Calendar className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                        <p className="font-bold text-slate-700">Tidak ada pelatihan yang sesuai filter untuk T.A. {activeYear}</p>
                        <p className="text-xs text-slate-400 mt-1">Coba sesuaikan kata kunci atau tambah pelatihan baru di T.A. 2027.</p>
                        {activeYear === 2027 && (
                          <button
                            onClick={handleOpenAddForm}
                            className="mt-4 inline-flex items-center gap-1.5 bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl text-xs hover:bg-emerald-500 transition cursor-pointer"
                          >
                            <Plus className="w-4 h-4" /> Tambah Pelatihan 2027 Sekarang
                          </button>
                        )}
                      </td>
                    </tr>
                  ) : (
                    filteredItems.map((item) => (
                      <tr
                        key={item.id}
                        className="hover:bg-blue-50/40 transition group cursor-pointer"
                        onClick={() => setActiveItem(item)}
                      >
                        {/* No */}
                        <td className="py-3.5 px-4 text-center font-bold text-slate-400 group-hover:text-[#002B66]">
                          {item.no}
                        </td>

                        {/* Title & Code */}
                        <td className="py-3.5 px-4 max-w-xs">
                          <div className="flex items-center gap-1.5 mb-1">
                            {item.code && (
                              <span className="font-mono text-[9px] font-bold text-[#002B66] bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                                {item.code}
                              </span>
                            )}
                            <span className="text-[10px] font-semibold text-slate-500">
                              TW {item.triwulan} ({item.bulan})
                            </span>
                          </div>
                          <p className="font-bold text-slate-900 group-hover:text-[#002B66] transition line-clamp-2">
                            {item.title}
                          </p>
                        </td>

                        {/* Balai Penyelenggara */}
                        <td className="py-3.5 px-4 max-w-[200px]">
                          <span className="font-bold text-[#002B66] block text-[11px]">
                            {item.penyelenggaraCode}
                          </span>
                          <span className="text-[11px] text-slate-600 line-clamp-2">
                            {item.penyelenggara}
                          </span>
                        </td>

                        {/* Metode */}
                        <td className="py-3.5 px-3 whitespace-nowrap">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getMethodBadge(item.metode)}`}>
                            {item.metode}
                          </span>
                        </td>

                        {/* Tanggal & Waktu */}
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <span className="font-semibold text-slate-800 block text-[11px]">
                            {item.tanggalPelaksanaan}
                          </span>
                          <span className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5">
                            <Clock className="w-3 h-3 text-slate-400" />
                            {item.waktu}
                          </span>
                        </td>

                        {/* JP & Target */}
                        <td className="py-3.5 px-3 text-center whitespace-nowrap">
                          <div className="font-bold text-slate-900">
                            {typeof item.jpPelatihan === 'number' ? `${item.jpPelatihan} JP` : item.jpPelatihan}
                          </div>
                          <div className="text-[10px] text-slate-500 font-medium">
                            {item.targetPeserta > 0 ? `${item.targetPeserta} Peserta` : 'Khusus'}
                          </div>
                        </td>

                        {/* PIC */}
                        <td className="py-3.5 px-3 whitespace-nowrap">
                          <span className="font-semibold text-slate-700 block">
                            {item.pic || '-'}
                          </span>
                          {item.persiapan && (
                            <span className="text-[9px] text-slate-400 block">
                              Prp: {item.persiapan}
                            </span>
                          )}
                        </td>

                        {/* Status */}
                        <td className="py-3.5 px-3 text-center whitespace-nowrap">
                          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${getStatusBadge(item.status)}`}>
                            {item.status}
                          </span>
                        </td>

                        {/* Action buttons */}
                        <td className="py-3.5 px-3 text-center whitespace-nowrap">
                          <div className="flex items-center justify-center gap-1">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveItem(item);
                              }}
                              className="bg-slate-100 hover:bg-[#002B66] hover:text-white text-[#002B66] p-1.5 rounded-lg transition cursor-pointer"
                              title="Lihat Detail Program & Persyaratan"
                            >
                              <Eye className="w-3.5 h-3.5" />
                            </button>

                            {/* Edit & Delete if year 2027 */}
                            {activeYear === 2027 && (
                              <>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleOpenEditForm(item);
                                  }}
                                  className="bg-amber-50 hover:bg-amber-500 hover:text-white text-amber-700 p-1.5 rounded-lg transition border border-amber-200 cursor-pointer"
                                  title="Edit Agenda Pelatihan 2027"
                                >
                                  <Pencil className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDeleteItem(item.id, item.title);
                                  }}
                                  className="bg-rose-50 hover:bg-rose-600 hover:text-white text-rose-700 p-1.5 rounded-lg transition border border-rose-200 cursor-pointer"
                                  title="Hapus Agenda 2027"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* TIMELINE / GANTT VIEW */
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 overflow-x-auto">
            <div className="min-w-[850px]">
              {/* Month Header Matrix */}
              <div className="grid grid-cols-12 gap-1 border-b border-slate-200 pb-3 mb-4 text-center font-bold text-xs text-slate-700">
                <div className="col-span-4 text-left pl-2">Pelatihan & Balai Penyelenggara (T.A. {activeYear})</div>
                <div className="col-span-8 grid grid-cols-12 gap-1 text-[10px] font-bold uppercase text-slate-500">
                  {months.map((m, idx) => (
                    <div key={idx} className="bg-slate-50 py-1 rounded border border-slate-200">
                      {m.substring(0, 3)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Items List as Timeline Bars */}
              <div className="space-y-2.5">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveItem(item)}
                    className="grid grid-cols-12 gap-1 items-center p-2 rounded-xl hover:bg-slate-50 transition cursor-pointer border border-transparent hover:border-slate-200"
                  >
                    <div className="col-span-4 pr-2">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="font-mono text-[9px] font-bold text-[#002B66] bg-blue-50 px-1 py-0.2 rounded border border-blue-200">
                          {item.penyelenggaraCode}
                        </span>
                        <span className="text-[10px] text-slate-500 truncate">
                          {item.tanggalPelaksanaan}
                        </span>
                      </div>
                      <p className="font-bold text-xs text-slate-800 truncate" title={item.title}>
                        {item.title}
                      </p>
                    </div>

                    <div className="col-span-8 grid grid-cols-12 gap-1 relative h-8 items-center bg-slate-50/60 rounded-lg p-1 border border-slate-100">
                      {months.map((m, idx) => {
                        const isMatch = item.bulan.toLowerCase().includes(m.toLowerCase()) ||
                          item.tanggalPelaksanaan.toLowerCase().includes(m.toLowerCase());
                        return (
                          <div
                            key={idx}
                            className={`h-6 rounded flex items-center justify-center text-[9px] font-bold transition ${
                              isMatch
                                ? `${getRumpunColor(item.rumpun)} shadow-xs`
                                : 'bg-transparent text-slate-300'
                            }`}
                          >
                            {isMatch ? (
                              <span className="truncate px-1 text-[8px]">{item.metode.split(' ')[0]}</span>
                            ) : null}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* MODAL: DETAIL PELATIHAN */}
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-2xl w-full p-6 relative max-h-[92vh] overflow-y-auto">
              <div className="flex items-start justify-between pb-4 border-b border-slate-200 mb-5 sticky top-0 bg-white z-10">
                <div className="pr-4">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-[10px] font-black bg-blue-900 text-white px-2 py-0.5 rounded">
                      T.A. {activeItem.year || activeYear}
                    </span>
                    {activeItem.code && (
                      <span className="font-mono text-xs font-bold text-[#002B66] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        {activeItem.code}
                      </span>
                    )}
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${getMethodBadge(activeItem.metode)}`}>
                      {activeItem.metode}
                    </span>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${getStatusBadge(activeItem.status)}`}>
                      {activeItem.status}
                    </span>
                    {activeItem.keteranganSertifikasi && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                        {activeItem.keteranganSertifikasi}
                      </span>
                    )}
                  </div>
                  <h3 className="font-black text-lg text-slate-900 leading-snug">
                    {activeItem.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#002B66]" />
                    <span className="font-bold text-[#002B66]">{activeItem.penyelenggaraCode}</span> — {activeItem.penyelenggara}
                  </p>
                </div>
                <button
                  onClick={() => setActiveItem(null)}
                  className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 text-sm font-bold cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Highlights */}
              <div className="space-y-5 text-xs text-slate-700">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Tanggal</span>
                    <span className="font-bold text-slate-900 text-xs">{activeItem.tanggalPelaksanaan}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Durasi</span>
                    <span className="font-bold text-slate-900 text-xs">{activeItem.waktu}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Jam Pelajaran</span>
                    <span className="font-bold text-slate-900 text-xs">
                      {typeof activeItem.jpPelatihan === 'number' ? `${activeItem.jpPelatihan} JP` : activeItem.jpPelatihan}
                      {activeItem.jpPengajar && ` (${activeItem.jpPengajar} Pengajar)`}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Target Peserta</span>
                    <span className="font-bold text-slate-900 text-xs">
                      {activeItem.targetPeserta > 0 ? `${activeItem.targetPeserta} Orang` : 'Peserta Khusus'}
                    </span>
                  </div>
                </div>

                {activeItem.standarKompetensi && (
                  <div>
                    <h4 className="font-bold text-slate-900 flex items-center gap-1.5 mb-1.5 text-xs">
                      <GraduationCap className="w-4 h-4 text-[#002B66]" />
                      Standar Kompetensi Lulusan (SKL):
                    </h4>
                    <p className="bg-blue-50/50 p-3 rounded-xl border border-blue-100 leading-relaxed text-slate-800">
                      {activeItem.standarKompetensi}
                    </p>
                  </div>
                )}

                {activeItem.scheduleBreakdown && (
                  <div>
                    <h4 className="font-bold text-slate-900 flex items-center gap-1.5 mb-1.5 text-xs">
                      <Clock className="w-4 h-4 text-[#002B66]" />
                      Rincian Tahapan Pelaksanaan:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeItem.scheduleBreakdown.selfLearning && (
                        <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                          <span className="font-bold text-slate-800 block text-[11px]">Self Study / Learning:</span>
                          <span className="text-slate-600">{activeItem.scheduleBreakdown.selfLearning}</span>
                        </div>
                      )}
                      {activeItem.scheduleBreakdown.onlineClass && (
                        <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                          <span className="font-bold text-slate-800 block text-[11px]">Online Class (Daring):</span>
                          <span className="text-slate-600">{activeItem.scheduleBreakdown.onlineClass}</span>
                        </div>
                      )}
                      {activeItem.scheduleBreakdown.magang && (
                        <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                          <span className="font-bold text-slate-800 block text-[11px]">Magang / OJT:</span>
                          <span className="text-slate-600">{activeItem.scheduleBreakdown.magang}</span>
                        </div>
                      )}
                      {activeItem.scheduleBreakdown.offlineClass && (
                        <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                          <span className="font-bold text-slate-800 block text-[11px]">Offline Class (Tatap Muka):</span>
                          <span className="text-slate-600">{activeItem.scheduleBreakdown.offlineClass}</span>
                        </div>
                      )}
                      {activeItem.scheduleBreakdown.ujiKompetensi && (
                        <div className="p-2.5 bg-emerald-50 rounded-lg border border-emerald-200 sm:col-span-2">
                          <span className="font-bold text-emerald-900 block text-[11px]">Uji Kompetensi / Sertifikasi:</span>
                          <span className="text-emerald-800">{activeItem.scheduleBreakdown.ujiKompetensi}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {activeItem.persyaratanPeserta && activeItem.persyaratanPeserta.length > 0 && (
                  <div>
                    <h4 className="font-bold text-slate-900 flex items-center gap-1.5 mb-1.5 text-xs">
                      <FileText className="w-4 h-4 text-[#002B66]" />
                      Persyaratan Peserta:
                    </h4>
                    <ul className="space-y-1.5">
                      {activeItem.persyaratanPeserta.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="text-slate-700 leading-relaxed">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 2027 Scenario Allocation Matrix for this specific training */}
                {activeYear === 2027 && (
                  (() => {
                    const allocMaster = get2027ItemAllocations(activeItem);
                    if (!allocMaster) return null;
                    return (
                      <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-blue-50/40 border border-slate-200">
                        <div className="flex items-center justify-between mb-2.5">
                          <h4 className="font-extrabold text-slate-900 flex items-center gap-1.5 text-xs">
                            <SlidersHorizontal className="w-4 h-4 text-[#002B66]" />
                            Perbandingan Alokasi 4 Skenario untuk Pelatihan Ini:
                          </h4>
                          <span className="text-[10px] text-slate-500 font-medium">Berdasarkan Usulan Pagu 2027</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
                          {(['skenario-1', 'skenario-2', 'skenario-3', 'skenario-4'] as SkenarioId[]).map(scenKey => {
                            const alloc = allocMaster.allocations[scenKey];
                            const cfg = SKENARIO_CONFIGS[scenKey];
                            const isActive = selectedScenario === scenKey;
                            return (
                              <div
                                key={scenKey}
                                className={`p-3 rounded-xl border transition-all ${
                                  isActive
                                    ? 'bg-white border-[#002B66] shadow-sm ring-1 ring-[#002B66]/20'
                                    : 'bg-white/80 border-slate-200'
                                }`}
                              >
                                <div className="flex items-center justify-between gap-1 mb-1.5">
                                  <span className={`text-[10px] font-black px-1.5 py-0.5 rounded ${
                                    isActive ? 'bg-[#002B66] text-white' : 'bg-slate-100 text-slate-700'
                                  }`}>
                                    {cfg.code}
                                  </span>
                                  {isActive && (
                                    <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200 flex items-center gap-0.5">
                                      <Check className="w-2.5 h-2.5" /> Aktif
                                    </span>
                                  )}
                                </div>
                                <div className="mb-2">
                                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border inline-block ${getMethodBadge(alloc.method)}`}>
                                    {alloc.method}
                                  </span>
                                </div>
                                <div className="text-[11px] text-slate-600 space-y-0.5">
                                  <div className="flex justify-between">
                                    <span>Target:</span>
                                    <strong className="text-slate-900">{alloc.peserta} Peserta</strong>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Angkatan:</span>
                                    <strong className="text-slate-900">{alloc.angkatan} Kelas</strong>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Kategori:</span>
                                    <span className="text-slate-500 font-medium">{alloc.category}</span>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })()
                )}

                <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center justify-between text-slate-500 gap-2">
                  <div>
                    <span className="font-semibold text-slate-700">PIC:</span>{' '}
                    <span className="font-bold text-[#002B66]">{activeItem.pic || '-'}</span>
                    {activeItem.persiapan && (
                      <span className="ml-2 text-slate-400 font-mono text-[10px]">(Mulai: {activeItem.persiapan})</span>
                    )}
                  </div>
                  <div>
                    <span className="text-[11px]">Angkatan: <strong>{activeItem.angkatan || 'I'}</strong></span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex justify-between items-center">
                {activeYear === 2027 && (
                  <button
                    onClick={() => {
                      const itemToEdit = activeItem;
                      setActiveItem(null);
                      handleOpenEditForm(itemToEdit);
                    }}
                    className="text-amber-700 bg-amber-50 hover:bg-amber-100 font-bold text-xs px-4 py-2.5 rounded-xl border border-amber-200 flex items-center gap-1.5 cursor-pointer"
                  >
                    <Pencil className="w-3.5 h-3.5" /> Edit Agenda Ini
                  </button>
                )}
                <button
                  onClick={() => setActiveItem(null)}
                  className="bg-[#002B66] text-white font-bold text-xs px-6 py-2.5 rounded-xl hover:bg-blue-900 transition ml-auto cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MODAL: TAMBAH / EDIT PELATIHAN T.A. 2027 */}
        {isFormOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-3xl w-full p-6 relative max-h-[92vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5 sticky top-0 bg-white z-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
                    <Plus className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-black text-base sm:text-lg text-slate-900">
                      {editingItem ? 'Edit Pelatihan T.A. 2027' : 'Tambah Agenda Pelatihan T.A. 2027'}
                    </h3>
                    <p className="text-xs text-slate-500">
                      Silakan isi informasi detail agenda pengembangan kompetensi tahun anggaran 2027.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveForm} className="space-y-4 text-xs text-slate-700">
                {/* Judul & Kode */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <label className="font-bold text-slate-800 block mb-1">
                      Nama / Judul Pelatihan <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.title || ''}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="Contoh: Bangunan Gedung Hijau Lanjutan atau Penyelenggaraan SPAM"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Kode Pelatihan</label>
                    <input
                      type="text"
                      value={formData.code || ''}
                      onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                      placeholder="Contoh: CKPS-PB-10-27"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 text-xs font-mono focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Balai & Rumpun */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Balai Penyelenggara</label>
                    <select
                      value={formData.penyelenggaraCode || 'BANGKOM-I'}
                      onChange={(e) => setFormData({ ...formData, penyelenggaraCode: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    >
                      {BALAI_OPTIONS.map((b) => (
                        <option key={b.code} value={b.code}>{b.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Rumpun Bidang</label>
                    <select
                      value={formData.rumpun || 'penataan-bangunan'}
                      onChange={(e) => setFormData({ ...formData, rumpun: e.target.value as any })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    >
                      {RUMPUN_OPTIONS.map((r) => (
                        <option key={r.id} value={r.id}>{r.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Triwulan, Bulan & Metode */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Triwulan Pelaksanaan</label>
                    <select
                      value={formData.triwulan || 'I'}
                      onChange={(e) => setFormData({ ...formData, triwulan: e.target.value as any })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    >
                      <option value="I">Triwulan I</option>
                      <option value="II">Triwulan II</option>
                      <option value="III">Triwulan III</option>
                      <option value="IV">Triwulan IV</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Bulan</label>
                    <select
                      value={formData.bulan || 'Februari'}
                      onChange={(e) => setFormData({ ...formData, bulan: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    >
                      {BULAN_OPTIONS.map((bln) => (
                        <option key={bln} value={bln}>{bln}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Metode Pelaksanaan</label>
                    <select
                      value={formData.metode || 'Blended Learning'}
                      onChange={(e) => setFormData({ ...formData, metode: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    >
                      {METODE_OPTIONS.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Tanggal, Durasi & Angkatan */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Tanggal Pelaksanaan</label>
                    <input
                      type="text"
                      value={formData.tanggalPelaksanaan || ''}
                      onChange={(e) => setFormData({ ...formData, tanggalPelaksanaan: e.target.value })}
                      placeholder="Contoh: 15 s.d 26 Maret 2027"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Durasi / Waktu</label>
                    <input
                      type="text"
                      value={formData.waktu || ''}
                      onChange={(e) => setFormData({ ...formData, waktu: e.target.value })}
                      placeholder="Contoh: 10 Hari / 1 Bulan"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Angkatan</label>
                    <input
                      type="text"
                      value={formData.angkatan || ''}
                      onChange={(e) => setFormData({ ...formData, angkatan: e.target.value })}
                      placeholder="Contoh: I / II / Terbuka"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    />
                  </div>
                </div>

                {/* JP Pelatihan, JP Pengajar & Target Peserta */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Jam Pelajaran (JP Pelatihan)</label>
                    <input
                      type="text"
                      value={formData.jpPelatihan ?? ''}
                      onChange={(e) => setFormData({ ...formData, jpPelatihan: e.target.value })}
                      placeholder="Contoh: 48 atau 4 OJ"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">JP Pengajar</label>
                    <input
                      type="text"
                      value={formData.jpPengajar ?? ''}
                      onChange={(e) => setFormData({ ...formData, jpPengajar: e.target.value })}
                      placeholder="Contoh: 52"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Target Peserta (Orang)</label>
                    <input
                      type="number"
                      value={formData.targetPeserta ?? 30}
                      onChange={(e) => setFormData({ ...formData, targetPeserta: Number(e.target.value) })}
                      placeholder="30"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    />
                  </div>
                </div>

                {/* PIC, Persiapan & Status */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Person In Charge (PIC)</label>
                    <input
                      type="text"
                      value={formData.pic || ''}
                      onChange={(e) => setFormData({ ...formData, pic: e.target.value })}
                      placeholder="Nama PIC (contoh: Zidan / Eka)"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Jadwal Mulai Persiapan</label>
                    <input
                      type="text"
                      value={formData.persiapan || ''}
                      onChange={(e) => setFormData({ ...formData, persiapan: e.target.value })}
                      placeholder="Contoh: 15-Jan-27"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Status Kegiatan</label>
                    <select
                      value={formData.status || 'Terjadwal'}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    >
                      <option value="Terjadwal">Terjadwal</option>
                      <option value="Ongoing">Ongoing (Berjalan)</option>
                      <option value="Selesai">Selesai</option>
                    </select>
                  </div>
                </div>

                {/* Sertifikasi */}
                <div>
                  <label className="font-bold text-slate-800 block mb-1">Keterangan Sertifikasi</label>
                  <input
                    type="text"
                    value={formData.keteranganSertifikasi || ''}
                    onChange={(e) => setFormData({ ...formData, keteranganSertifikasi: e.target.value })}
                    placeholder="Contoh: Sertifikasi LSP BPSDM / Non Sertifikasi / Sertifikat Pusbangkom"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  />
                </div>

                {/* SKL */}
                <div>
                  <label className="font-bold text-slate-800 block mb-1">Standar Kompetensi Lulusan (SKL)</label>
                  <textarea
                    rows={2}
                    value={formData.standarKompetensi || ''}
                    onChange={(e) => setFormData({ ...formData, standarKompetensi: e.target.value })}
                    placeholder="Tuliskan kemampuan atau tolok ukur kompetensi yang diharapkan..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  />
                </div>

                {/* Persyaratan Peserta */}
                <div>
                  <label className="font-bold text-slate-800 block mb-1">
                    Persyaratan Peserta (Pisahkan tiap poin dengan baris baru / Enter)
                  </label>
                  <textarea
                    rows={3}
                    value={persyaratanText}
                    onChange={(e) => setPersyaratanText(e.target.value)}
                    placeholder="Contoh:&#10;ASN Kementerian PU dan OPD PUPR Daerah&#10;Pendidikan minimal D3/S1 Teknik Sipil/Arsitektur&#10;Memiliki pengalaman minimal 2 tahun di bidang terkait"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  />
                </div>

                {/* Tahapan Rincian Waktu */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-800 block mb-2 text-[11px] uppercase tracking-wider">
                    Rincian Tahapan Pelaksanaan (Opsional):
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] font-semibold text-slate-600 block">Self Learning</label>
                      <input
                        type="text"
                        value={selfLearningText}
                        onChange={(e) => setSelfLearningText(e.target.value)}
                        placeholder="Contoh: 15 s.d 18 Maret 2027"
                        className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-semibold text-slate-600 block">Online Class</label>
                      <input
                        type="text"
                        value={onlineClassText}
                        onChange={(e) => setOnlineClassText(e.target.value)}
                        placeholder="Contoh: 19 s.d 26 Maret 2027"
                        className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-semibold text-slate-600 block">Tatap Muka / Offline Class</label>
                      <input
                        type="text"
                        value={offlineClassText}
                        onChange={(e) => setOfflineClassText(e.target.value)}
                        placeholder="Contoh: 5 s.d 10 April 2027"
                        className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-semibold text-slate-600 block">Uji Kompetensi / Sertifikasi</label>
                      <input
                        type="text"
                        value={ujiKompetensiText}
                        onChange={(e) => setUjiKompetensiText(e.target.value)}
                        placeholder="Contoh: 11 s.d 12 April 2027"
                        className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-800"
                      />
                    </div>
                  </div>
                </div>

                {/* Form Buttons */}
                <div className="pt-3 border-t border-slate-200 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 font-bold hover:bg-slate-100 transition cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black shadow-md transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <Check className="w-4 h-4" />
                    Simpan Pelatihan 2027
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL: SALIN DARI PELATIHAN 2026 */}
        {isClonePickerOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-2xl w-full p-6 relative max-h-[85vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4 sticky top-0 bg-white z-10">
                <div>
                  <h3 className="font-black text-base text-slate-900 flex items-center gap-2">
                    <Copy className="w-4 h-4 text-blue-600" />
                    Salin Agenda dari Pelatihan 2026 ke 2027
                  </h3>
                  <p className="text-xs text-slate-500">
                    Pilih salah satu dari 30 agenda resmi 2026 untuk dijadikan draf pelatihan T.A. 2027.
                  </p>
                </div>
                <button
                  onClick={() => setIsClonePickerOpen(false)}
                  className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
                {KALENDER_PELATIHAN_2026.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 transition flex items-center justify-between gap-3 text-xs"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-mono text-[9px] font-bold text-[#002B66] bg-blue-100 px-1.5 py-0.5 rounded">
                          {item.penyelenggaraCode}
                        </span>
                        <span className="text-[10px] text-slate-500">TW {item.triwulan} ({item.bulan})</span>
                        <span className="text-[10px] font-semibold text-slate-600">{item.metode}</span>
                      </div>
                      <p className="font-bold text-slate-900">{item.title}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{item.tanggalPelaksanaan}</p>
                    </div>

                    <button
                      onClick={() => handleCloneFrom2026(item)}
                      className="bg-[#002B66] hover:bg-blue-800 text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow-sm shrink-0 flex items-center gap-1 cursor-pointer"
                    >
                      <Copy className="w-3 h-3" />
                      Salin ke 2027
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setIsClonePickerOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 font-bold hover:bg-slate-100 text-xs cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MODAL: IMPOR DATA DARI JSON */}
        {isImportModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-xl w-full p-6 relative">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                <div className="flex items-center gap-2">
                  <Upload className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-black text-base text-slate-900">
                    Impor Data Kalender 2027 dari JSON
                  </h3>
                </div>
                <button
                  onClick={() => setIsImportModalOpen(false)}
                  className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs text-slate-600 mb-3">
                Tempelkan teks JSON daftar agenda pelatihan untuk T.A. 2027. Format harus berupa Array objek yang memiliki properti minimal <code className="bg-slate-100 px-1 py-0.5 rounded font-mono">title</code>, <code className="bg-slate-100 px-1 py-0.5 rounded font-mono">penyelenggaraCode</code>, dan <code className="bg-slate-100 px-1 py-0.5 rounded font-mono">metode</code>.
              </p>

              <textarea
                rows={10}
                value={importJsonText}
                onChange={(e) => setImportJsonText(e.target.value)}
                placeholder='[&#10;  {&#10;    "title": "Pelatihan Bangunan Gedung Cerdas 2027",&#10;    "code": "CKPS-PB-27-01",&#10;    "penyelenggaraCode": "BANGKOM-III",&#10;    "penyelenggara": "Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah III Jakarta",&#10;    "triwulan": "I",&#10;    "bulan": "Maret",&#10;    "metode": "Blended Learning",&#10;    "tanggalPelaksanaan": "15 s.d 26 Maret 2027",&#10;    "waktu": "10 Hari",&#10;    "jpPelatihan": 48,&#10;    "targetPeserta": 30,&#10;    "status": "Terjadwal"&#10;  }&#10;]'
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 font-mono text-[11px] text-slate-900 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
              />

              <div className="mt-4 pt-3 border-t border-slate-200 flex justify-end gap-2 text-xs font-bold">
                <button
                  onClick={() => setIsImportModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  Batal
                </button>
                <button
                  onClick={handleImportJson}
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-md flex items-center gap-1.5 cursor-pointer"
                >
                  <Upload className="w-4 h-4" />
                  Impor Sekarang
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 4 SCENARIOS COMPARISON MATRIX MODAL */}
        {isScenarioMatrixOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-5xl w-full max-h-[92vh] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
              {/* Modal Header */}
              <div className="p-5 sm:p-6 border-b border-slate-200 flex items-center justify-between bg-gradient-to-r from-slate-50 via-blue-50/40 to-emerald-50/40">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#002B66] text-white flex items-center justify-center shadow-md shrink-0">
                    <BarChart3 className="w-5 h-5 text-[#FFB800]" />
                  </div>
                  <div>
                    <h3 className="font-black text-base sm:text-lg text-slate-900">
                      Matriks Analisis 4 Skenario Pelatihan T.A. 2027
                    </h3>
                    <p className="text-xs text-slate-500">
                      Pusat Pengembangan Kompetensi SDA, Cipta Karya dan Prasarana Strategis (BPSDM Kementerian PU)
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsScenarioMatrixOpen(false)}
                  className="text-slate-400 hover:text-slate-600 p-2 rounded-xl hover:bg-slate-100 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body - Comparison Table */}
              <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-slate-800 font-extrabold border-b border-slate-200">
                        <th className="py-3 px-4 w-1/5 min-w-[160px] text-slate-700 uppercase tracking-wider text-[11px]">
                          Indikator / Parameter
                        </th>
                        {(['skenario-1', 'skenario-2', 'skenario-3', 'skenario-4'] as SkenarioId[]).map((scenId) => {
                          const s = SKENARIO_CONFIGS[scenId];
                          const isActive = selectedScenario === scenId;
                          return (
                            <th
                              key={scenId}
                              className={`py-3 px-4 min-w-[180px] text-center transition-all ${
                                isActive ? 'bg-emerald-50 text-emerald-900 border-x-2 border-t-2 border-emerald-600' : 'bg-slate-50 text-slate-800'
                              }`}
                            >
                              <div className="flex flex-col items-center gap-1">
                                <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                                  isActive ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
                                }`}>
                                  {s.code}
                                </span>
                                <span className="text-xs font-black">{s.subtitle}</span>
                                {isActive && (
                                  <span className="text-[9px] font-bold text-emerald-700 bg-white px-2 py-0.5 rounded-full border border-emerald-300 mt-0.5">
                                    ✓ Skenario Aktif
                                  </span>
                                )}
                              </div>
                            </th>
                          );
                        })}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="py-2.5 px-4 font-bold bg-slate-50 text-slate-900">Kondisi Usulan Pagu</td>
                        <td className="py-2.5 px-4 text-center font-semibold text-emerald-700 bg-emerald-50/20">Disetujui 100% Penuh</td>
                        <td className="py-2.5 px-4 text-center font-semibold text-blue-700 bg-blue-50/20">Relatif Sama dgn T.A. 2026</td>
                        <td className="py-2.5 px-4 text-center font-semibold text-amber-700 bg-amber-50/20">Mendekati 50% dari T.A. 2026</td>
                        <td className="py-2.5 px-4 text-center font-semibold text-purple-700 bg-purple-50/20">Pagu Ditolak (LMS Mandiri)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-2.5 px-4 font-bold bg-slate-50 text-slate-900">Total Target Peserta</td>
                        <td className="py-2.5 px-4 text-center font-black text-slate-900">1.670 Orang</td>
                        <td className="py-2.5 px-4 text-center font-black text-slate-900">1.670 Orang</td>
                        <td className="py-2.5 px-4 text-center font-black text-slate-900">1.670 Orang</td>
                        <td className="py-2.5 px-4 text-center font-black text-purple-900 bg-purple-50/30">3.000 Orang (Masif)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-2.5 px-4 font-bold bg-slate-50 text-slate-900">Total Angkatan / Kelas</td>
                        <td className="py-2.5 px-4 text-center font-bold">27 Angkatan</td>
                        <td className="py-2.5 px-4 text-center font-bold">27 Angkatan</td>
                        <td className="py-2.5 px-4 text-center font-bold">27 Angkatan</td>
                        <td className="py-2.5 px-4 text-center font-bold">27 Angkatan</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-2.5 px-4 font-bold bg-slate-50 text-slate-900">
                          <span className="inline-block w-2.5 h-2.5 rounded-full bg-rose-500 mr-1.5"></span>
                          Klasikal (Tatap Muka)
                        </td>
                        <td className="py-2.5 px-4 text-center font-bold text-rose-700 bg-rose-50/30">5 Kelas (150 Org)</td>
                        <td className="py-2.5 px-4 text-center text-slate-400">0 Kelas (Ditiadakan)</td>
                        <td className="py-2.5 px-4 text-center text-slate-400">0 Kelas (Ditiadakan)</td>
                        <td className="py-2.5 px-4 text-center text-slate-400">0 Kelas (Ditiadakan)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-2.5 px-4 font-bold bg-slate-50 text-slate-900">
                          <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-500 mr-1.5"></span>
                          Blended Learning
                        </td>
                        <td className="py-2.5 px-4 text-center font-bold text-blue-700 bg-blue-50/30">9 Kelas (270 Org)</td>
                        <td className="py-2.5 px-4 text-center font-bold text-blue-700 bg-blue-50/40">12 Kelas (360 Org)</td>
                        <td className="py-2.5 px-4 text-center font-bold text-blue-700 bg-blue-50/30">7 Kelas (210 Org)</td>
                        <td className="py-2.5 px-4 text-center text-slate-400">0 Kelas (Ditiadakan)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-2.5 px-4 font-bold bg-slate-50 text-slate-900">
                          <span className="inline-block w-2.5 h-2.5 rounded-full bg-purple-500 mr-1.5"></span>
                          Distance Learning
                        </td>
                        <td className="py-2.5 px-4 text-center font-bold text-purple-700 bg-purple-50/30">5 Kelas (150 Org)</td>
                        <td className="py-2.5 px-4 text-center font-bold text-purple-700 bg-purple-50/30">7 Kelas (210 Org)</td>
                        <td className="py-2.5 px-4 text-center font-bold text-purple-700 bg-purple-50/40">12 Kelas (360 Org)</td>
                        <td className="py-2.5 px-4 text-center text-slate-400">0 Kelas (Ditiadakan)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-2.5 px-4 font-bold bg-slate-50 text-slate-900">
                          <span className="inline-block w-2.5 h-2.5 rounded-full bg-teal-500 mr-1.5"></span>
                          e-Learning Tertutup
                        </td>
                        <td className="py-2.5 px-4 text-center font-bold text-teal-700 bg-teal-50/30">6 Kelas (600 Org)</td>
                        <td className="py-2.5 px-4 text-center font-bold text-teal-700 bg-teal-50/30">6 Kelas (600 Org)</td>
                        <td className="py-2.5 px-4 text-center font-bold text-teal-700 bg-teal-50/30">6 Kelas (600 Org)</td>
                        <td className="py-2.5 px-4 text-center font-black text-teal-800 bg-teal-50/60">25 Kelas (2.500 Org)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-2.5 px-4 font-bold bg-slate-50 text-slate-900">
                          <span className="inline-block w-2.5 h-2.5 rounded-full bg-amber-500 mr-1.5"></span>
                          Webinar Nasional
                        </td>
                        <td className="py-2.5 px-4 text-center font-bold text-amber-800 bg-amber-50/30">2 Sesi (500 Org)</td>
                        <td className="py-2.5 px-4 text-center font-bold text-amber-800 bg-amber-50/30">2 Sesi (500 Org)</td>
                        <td className="py-2.5 px-4 text-center font-bold text-amber-800 bg-amber-50/30">2 Sesi (500 Org)</td>
                        <td className="py-2.5 px-4 text-center font-bold text-amber-800 bg-amber-50/30">2 Sesi (500 Org)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-2.5 px-4 font-bold bg-slate-50 text-slate-900">Efisiensi Biaya Operasional</td>
                        <td className="py-2.5 px-4 text-center text-slate-600">Standar Pagu Usulan</td>
                        <td className="py-2.5 px-4 text-center text-blue-700 font-semibold">Hemat ~20% (Tanpa Klasikal)</td>
                        <td className="py-2.5 px-4 text-center text-amber-700 font-semibold">Hemat ~50% (Dominan Daring)</td>
                        <td className="py-2.5 px-4 text-center text-purple-700 font-bold">Hemat &gt;85% (Fokus Server/LMS)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-2.5 px-4 font-bold bg-slate-50 text-slate-900">Kelebihan & Karakteristik</td>
                        <td className="py-2.5 px-4 text-slate-600 leading-relaxed">Praktek langsung optimal, cocok untuk kompetensi lapangan berat.</td>
                        <td className="py-2.5 px-4 text-slate-600 leading-relaxed">Keseimbangan praktek dan teori daring dengan biaya proporsional.</td>
                        <td className="py-2.5 px-4 text-slate-600 leading-relaxed">Jangkauan luas seluruh Indonesia dengan biaya dinas minimal.</td>
                        <td className="py-2.5 px-4 text-slate-600 leading-relaxed">Skalabilitas tertinggi, dapat diakses ribuan ASN secara fleksibel.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold bg-slate-50 text-slate-900">Aksi Penerapan</td>
                        {(['skenario-1', 'skenario-2', 'skenario-3', 'skenario-4'] as SkenarioId[]).map((scenId) => {
                          const isActive = selectedScenario === scenId;
                          return (
                            <td key={scenId} className="py-3 px-4 text-center">
                              {isActive ? (
                                <button
                                  disabled
                                  className="w-full py-2 px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs opacity-90 cursor-default flex items-center justify-center gap-1"
                                >
                                  <Check className="w-3.5 h-3.5" /> Sedang Aktif
                                </button>
                              ) : (
                                <button
                                  onClick={() => {
                                    handleSelectScenario(scenId);
                                    setIsScenarioMatrixOpen(false);
                                  }}
                                  className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-[#002B66] text-white font-bold text-xs transition cursor-pointer"
                                >
                                  Terapkan {SKENARIO_CONFIGS[scenId].code}
                                </button>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Information Footnote */}
                <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-xs text-slate-700 flex items-start gap-3">
                  <Info className="w-4 h-4 text-[#002B66] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-slate-900 mb-0.5">Catatan Teknis Penyelenggaraan Pusbangkom SDA, Cipta Karya & Prasarana Strategis:</h5>
                    <p className="text-slate-600 leading-relaxed">
                      Setiap skenario menjaga integritas kurikulum 27 pelatihan CKPS dengan menyesuaikan proporsi jam pembelajaran (JP), media simulasi, dan platform LMS (KemenPU e-Learning). Sertifikasi kompetensi LSP BPSDM tetap diakomodasi melalui uji kompetensi terjadwal.
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  Skenario yang dipilih saat ini: <strong>{SKENARIO_CONFIGS[selectedScenario].name}</strong>
                </span>
                <button
                  onClick={() => setIsScenarioMatrixOpen(false)}
                  className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition cursor-pointer"
                >
                  Tutup Matriks
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
