import { KalenderTrainingItem } from '../types';

export type SkenarioId = 'skenario-1' | 'skenario-2' | 'skenario-3' | 'skenario-4';

export interface MethodAllocation {
  method: string;
  category: 'Reguler' | 'Non Reguler';
  subCategory: 'Klasikal' | 'Blended Learning' | 'Distance Learning' | 'e-learning Tertutup' | 'e-learning Terbuka' | 'Webinar';
  peserta: number;
  angkatan: number;
}

export interface Training2027Item {
  no: number;
  title: string;
  code: string;
  bapekomId: string;
  bapekomCode: string;
  bapekomShort: string; // e.g. "Bapekom I Medan"
  bapekomFullName: string;
  bapekomLocation: string;
  bapekomProvince: string;
  rumpun: 'umum' | 'penataan-bangunan' | 'air-minum' | 'sanitasi' | 'prasarana-strategis';
  rumpunLabel: string;
  triwulan: 'I' | 'II' | 'III' | 'IV';
  bulan: string;
  jpPelatihan: number | string;
  jpPengajar: number | string;
  pic: string;
  waktu: string;
  tanggalPelaksanaan: string;
  persiapan: string;
  keteranganSertifikasi: string;
  standarKompetensi: string;
  persyaratanPeserta: string[];
  allocations: Record<SkenarioId, MethodAllocation>;
}

export interface SkenarioMeta {
  id: SkenarioId;
  code: string;
  name: string;
  subtitle: string;
  description: string;
  color: string;
  borderBadge: string;
  bgBadge: string;
  totalPeserta: number;
  totalAngkatan: number;
  klasikal: { kelas: number; peserta: number };
  blended: { kelas: number; peserta: number };
  distance: { kelas: number; peserta: number };
  elearningTertutup: { kelas: number; peserta: number };
  elearningTerbuka: { kelas: number; peserta: number };
  webinar: { kelas: number; peserta: number };
}

export const SKENARIO_CONFIGS: Record<SkenarioId, SkenarioMeta> = {
  'skenario-1': {
    id: 'skenario-1',
    code: 'Skenario 1',
    name: 'Skenario 1 (Seluruh Usulan Pagu Disetujui)',
    subtitle: 'Seluruh usulan pagu disetujui 100%',
    description: 'Pagu anggaran bangkom disetujui penuh dengan komposisi ideal: 5 kelas Klasikal tatap muka langsung, 9 kelas Blended Learning interaktif, 5 Distance Learning, 6 e-Learning Tertutup, dan 2 Webinar Nasional.',
    color: 'emerald',
    borderBadge: 'border-emerald-300',
    bgBadge: 'bg-emerald-50 text-emerald-800',
    totalPeserta: 1670,
    totalAngkatan: 27,
    klasikal: { kelas: 5, peserta: 150 },
    blended: { kelas: 9, peserta: 270 },
    distance: { kelas: 5, peserta: 150 },
    elearningTertutup: { kelas: 6, peserta: 600 },
    elearningTerbuka: { kelas: 0, peserta: 0 },
    webinar: { kelas: 2, peserta: 500 }
  },
  'skenario-2': {
    id: 'skenario-2',
    code: 'Skenario 2',
    name: 'Skenario 2 (Pagu Anggaran Disetujui Relatif Sama dgn T.A. 2026)',
    subtitle: 'Pagu anggaran bangkom disetujui relatif sama dengan tahun 2026',
    description: 'Seluruh alokasi Klasikal dialihkan ke Blended Learning (12 kelas) dan Distance Learning (7 kelas), mempertahankan 6 e-Learning Tertutup dan 2 Webinar untuk menjaga total 1.670 peserta dengan efisiensi biaya operasional.',
    color: 'blue',
    borderBadge: 'border-blue-300',
    bgBadge: 'bg-blue-50 text-blue-800',
    totalPeserta: 1670,
    totalAngkatan: 27,
    klasikal: { kelas: 0, peserta: 0 },
    blended: { kelas: 12, peserta: 360 },
    distance: { kelas: 7, peserta: 210 },
    elearningTertutup: { kelas: 6, peserta: 600 },
    elearningTerbuka: { kelas: 0, peserta: 0 },
    webinar: { kelas: 2, peserta: 500 }
  },
  'skenario-3': {
    id: 'skenario-3',
    code: 'Skenario 3',
    name: 'Skenario 3 (Pagu Anggaran Disetujui Mendekati 50% dari T.A. 2026)',
    subtitle: 'Pagu anggaran bangkom yang disetujui mendekati 50% dari tahun 2026',
    description: 'Optimalisasi anggaran terbatas dengan memperbesar porsi Distance Learning daring menjadi 12 kelas, mempertahankan 7 Blended Learning untuk kompetensi inti bersertifikasi, 6 e-Learning Tertutup, dan 2 Webinar Nasional.',
    color: 'amber',
    borderBadge: 'border-amber-300',
    bgBadge: 'bg-amber-50 text-amber-800',
    totalPeserta: 1670,
    totalAngkatan: 27,
    klasikal: { kelas: 0, peserta: 0 },
    blended: { kelas: 7, peserta: 210 },
    distance: { kelas: 12, peserta: 360 },
    elearningTertutup: { kelas: 6, peserta: 600 },
    elearningTerbuka: { kelas: 0, peserta: 0 },
    webinar: { kelas: 2, peserta: 500 }
  },
  'skenario-4': {
    id: 'skenario-4',
    code: 'Skenario 4',
    name: 'Skenario 4 (Pagu Anggaran yang Diusulkan Tidak Disetujui)',
    subtitle: 'Pagu anggaran bangkom yang diusulkan tidak disetujui (100% Digital LMS)',
    description: 'Transformasi digital penuh tanpa biaya tatap muka: 25 pelatihan dialihkan ke e-Learning Tertutup berbasis LMS mandiri dengan kuota masif (100 peserta per kelas = 2.500 peserta) ditambah 2 Webinar (500 peserta), menghasilkan total 3.000 peserta terlatih.',
    color: 'purple',
    borderBadge: 'border-purple-300',
    bgBadge: 'bg-purple-50 text-purple-800',
    totalPeserta: 3000,
    totalAngkatan: 27,
    klasikal: { kelas: 0, peserta: 0 },
    blended: { kelas: 0, peserta: 0 },
    distance: { kelas: 0, peserta: 0 },
    elearningTertutup: { kelas: 25, peserta: 2500 },
    elearningTerbuka: { kelas: 0, peserta: 0 },
    webinar: { kelas: 2, peserta: 500 }
  }
};

export const DAFTAR_PELATIHAN_2027: Training2027Item[] = [
  // ================= BAPEKOM I MEDAN =================
  {
    no: 1,
    title: 'Pengawasan Konstruksi SPAM',
    code: 'CKPS-AM-04',
    bapekomId: 'bangkom-1',
    bapekomCode: 'BANGKOM-I',
    bapekomShort: 'Bapekom I Medan',
    bapekomFullName: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah I Medan',
    bapekomLocation: 'Medan',
    bapekomProvince: 'Sumatera Utara',
    rumpun: 'air-minum',
    rumpunLabel: 'Air Minum',
    triwulan: 'I',
    bulan: 'Maret',
    jpPelatihan: 65,
    jpPengajar: 60,
    pic: 'Mutia + Eka',
    waktu: '10 Hari',
    tanggalPelaksanaan: '8 s.d 19 Maret 2027',
    persiapan: '15-Feb-27',
    keteranganSertifikasi: 'Non Sertifikasi',
    standarKompetensi: 'Mampu melakukan pengawasan mutu, volume, dan kepatuhan spesifikasi teknis pekerjaan konstruksi SPAM jaringan perpipaan dan IPA.',
    persyaratanPeserta: [
      'ASN Kementerian PU dan Pemda di bidang Air Minum (Direksi Lapangan, Pengawas Lapangan, Konsultan Pengawas)',
      'Pendidikan minimal D-III Teknik Lingkungan/Sipil'
    ],
    allocations: {
      'skenario-1': { method: 'Blended Learning', category: 'Reguler', subCategory: 'Blended Learning', peserta: 30, angkatan: 1 },
      'skenario-2': { method: 'Blended Learning', category: 'Reguler', subCategory: 'Blended Learning', peserta: 30, angkatan: 1 },
      'skenario-3': { method: 'Distance Learning', category: 'Non Reguler', subCategory: 'Distance Learning', peserta: 30, angkatan: 1 },
      'skenario-4': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 }
    }
  },
  {
    no: 2,
    title: 'Penyelenggaraan Prasarana Strategis',
    code: 'CKPS-PS-01',
    bapekomId: 'bangkom-1',
    bapekomCode: 'BANGKOM-I',
    bapekomShort: 'Bapekom I Medan',
    bapekomFullName: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah I Medan',
    bapekomLocation: 'Medan',
    bapekomProvince: 'Sumatera Utara',
    rumpun: 'prasarana-strategis',
    rumpunLabel: 'Prasarana Strategis',
    triwulan: 'II',
    bulan: 'April',
    jpPelatihan: 52,
    jpPengajar: 48,
    pic: 'Zidan + Deri',
    waktu: '8 Hari',
    tanggalPelaksanaan: '12 s.d 21 April 2027',
    persiapan: '20-Mar-27',
    keteranganSertifikasi: 'Non Sertifikasi',
    standarKompetensi: 'Mampu menyusun tata kelola perencanaan, penganggaran, pelaksanaan, dan penyerahan aset infrastruktur prasarana strategis (pasar, sekolah, sarana olahraga).',
    persyaratanPeserta: [
      'ASN Kementerian PU, BPPW, dan Dinas PUPR penanggung jawab program Prasarana Strategis'
    ],
    allocations: {
      'skenario-1': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 },
      'skenario-2': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 },
      'skenario-3': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 },
      'skenario-4': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 }
    }
  },
  {
    no: 3,
    title: 'Pengelolaan Teknis Pembangunan Bangunan Gedung Negara (Sertifikasi)',
    code: 'CKPS-PB-02',
    bapekomId: 'bangkom-1',
    bapekomCode: 'BANGKOM-I',
    bapekomShort: 'Bapekom I Medan',
    bapekomFullName: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah I Medan',
    bapekomLocation: 'Medan',
    bapekomProvince: 'Sumatera Utara',
    rumpun: 'penataan-bangunan',
    rumpunLabel: 'Penataan Bangunan',
    triwulan: 'III',
    bulan: 'Juli',
    jpPelatihan: 87,
    jpPengajar: 82,
    pic: 'Zidan',
    waktu: '14 Hari',
    tanggalPelaksanaan: '12 s.d 28 Juli 2027',
    persiapan: '15-Jun-27',
    keteranganSertifikasi: 'Sertifikasi BNSP / Kompetensi PU',
    standarKompetensi: 'Mampu bertindak sebagai Pengelola Teknis BGN tersertifikasi yang mengawal tahap perencanaan, pelaksanaan konstruksi, penyerahan pertama, dan pemeliharaan BGN.',
    persyaratanPeserta: [
      'ASN yang diusulkan oleh Unit Organisasi / Pemda sebagai Pengelola Teknis BGN',
      'Pendidikan S1/D4 Teknik Sipil/Arsitektur'
    ],
    allocations: {
      'skenario-1': { method: 'Blended Learning', category: 'Reguler', subCategory: 'Blended Learning', peserta: 30, angkatan: 1 },
      'skenario-2': { method: 'Blended Learning', category: 'Reguler', subCategory: 'Blended Learning', peserta: 30, angkatan: 1 },
      'skenario-3': { method: 'Blended Learning', category: 'Reguler', subCategory: 'Blended Learning', peserta: 30, angkatan: 1 },
      'skenario-4': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 }
    }
  },

  // ================= BAPEKOM II PALEMBANG =================
  {
    no: 4,
    title: 'Pengawasan Konstruksi SPALD',
    code: 'CKPS-SA-07',
    bapekomId: 'bangkom-2',
    bapekomCode: 'BANGKOM-II',
    bapekomShort: 'Bapekom II Palembang',
    bapekomFullName: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah II Palembang',
    bapekomLocation: 'Palembang',
    bapekomProvince: 'Sumatera Selatan',
    rumpun: 'sanitasi',
    rumpunLabel: 'Sanitasi & PLP',
    triwulan: 'I',
    bulan: 'Februari',
    jpPelatihan: 78,
    jpPengajar: 72,
    pic: 'Deri',
    waktu: '12 Hari',
    tanggalPelaksanaan: '15 s.d 28 Februari 2027',
    persiapan: '20-Jan-27',
    keteranganSertifikasi: 'Non Sertifikasi',
    standarKompetensi: 'Mampu mengawasi pelaksanaan fisik instalasi pengolahan air limbah domestik (IPALD) terpusat dan setempat, jaringan perpipaan serta komisioning sarana sanitasi.',
    persyaratanPeserta: [
      'ASN Satker Sanitasi / BPPW dan Dinas PUPR teknisi sanitasi lingkungan'
    ],
    allocations: {
      'skenario-1': { method: 'Klasikal', category: 'Reguler', subCategory: 'Klasikal', peserta: 30, angkatan: 1 },
      'skenario-2': { method: 'Blended Learning', category: 'Reguler', subCategory: 'Blended Learning', peserta: 30, angkatan: 1 },
      'skenario-3': { method: 'Blended Learning', category: 'Reguler', subCategory: 'Blended Learning', peserta: 30, angkatan: 1 },
      'skenario-4': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 }
    }
  },
  {
    no: 5,
    title: 'Webinar Bidang PS',
    code: 'CKPS-PS-WEB',
    bapekomId: 'bangkom-2',
    bapekomCode: 'BANGKOM-II',
    bapekomShort: 'Bapekom II Palembang',
    bapekomFullName: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah II Palembang',
    bapekomLocation: 'Palembang',
    bapekomProvince: 'Sumatera Selatan',
    rumpun: 'prasarana-strategis',
    rumpunLabel: 'Prasarana Strategis',
    triwulan: 'II',
    bulan: 'Mei',
    jpPelatihan: '4 OJ',
    jpPengajar: 4,
    pic: 'Garin + Zidan',
    waktu: '1 Hari',
    tanggalPelaksanaan: '18 Mei 2027',
    persiapan: '20-Apr-27',
    keteranganSertifikasi: 'Non Sertifikasi (E-Sertifikat)',
    standarKompetensi: 'Memahami kebijakan strategis percepatan infrastruktur prasarana strategis, mitigasi risiko kegagalan bangunan, dan standar keandalan bangunan publik.',
    persyaratanPeserta: [
      'ASN Kementerian PU, OPD Provinsi/Kabupaten/Kota, BUMN Karya, dan Akademisi'
    ],
    allocations: {
      'skenario-1': { method: 'Webinar', category: 'Non Reguler', subCategory: 'Webinar', peserta: 250, angkatan: 1 },
      'skenario-2': { method: 'Webinar', category: 'Non Reguler', subCategory: 'Webinar', peserta: 250, angkatan: 1 },
      'skenario-3': { method: 'Webinar', category: 'Non Reguler', subCategory: 'Webinar', peserta: 250, angkatan: 1 },
      'skenario-4': { method: 'Webinar', category: 'Non Reguler', subCategory: 'Webinar', peserta: 250, angkatan: 1 }
    }
  },
  {
    no: 6,
    title: 'Penyelenggaraan Prasarana Strategis',
    code: 'CKPS-PS-01',
    bapekomId: 'bangkom-2',
    bapekomCode: 'BANGKOM-II',
    bapekomShort: 'Bapekom II Palembang',
    bapekomFullName: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah II Palembang',
    bapekomLocation: 'Palembang',
    bapekomProvince: 'Sumatera Selatan',
    rumpun: 'prasarana-strategis',
    rumpunLabel: 'Prasarana Strategis',
    triwulan: 'III',
    bulan: 'Agustus',
    jpPelatihan: 52,
    jpPengajar: 48,
    pic: 'Ismira + Firman',
    waktu: '8 Hari',
    tanggalPelaksanaan: '9 s.d 18 Agustus 2027',
    persiapan: '15-Jul-27',
    keteranganSertifikasi: 'Non Sertifikasi',
    standarKompetensi: 'Mampu mengimplementasikan tata kelola pembangunan prasarana strategis dengan tertib administrasi dan teknis operasional.',
    persyaratanPeserta: [
      'ASN Bidang Prasarana Strategis dan Tata Bangunan'
    ],
    allocations: {
      'skenario-1': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 },
      'skenario-2': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 },
      'skenario-3': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 },
      'skenario-4': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 }
    }
  },

  // ================= BAPEKOM III JAKARTA =================
  {
    no: 7,
    title: 'PISK Bidang Prasarana Strategis',
    code: 'CKPS-PS-PISK',
    bapekomId: 'bangkom-3',
    bapekomCode: 'BANGKOM-III',
    bapekomShort: 'Bapekom III Jakarta',
    bapekomFullName: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah III Jakarta',
    bapekomLocation: 'Jakarta',
    bapekomProvince: 'DKI Jakarta',
    rumpun: 'prasarana-strategis',
    rumpunLabel: 'Prasarana Strategis',
    triwulan: 'I',
    bulan: 'Maret',
    jpPelatihan: 80,
    jpPengajar: 86,
    pic: 'Mutia + Garin',
    waktu: '15 Hari',
    tanggalPelaksanaan: '8 s.d 26 Maret 2027',
    persiapan: '10-Feb-27',
    keteranganSertifikasi: 'Non Sertifikasi',
    standarKompetensi: 'Mampu mengemban tugas sebagai Pejabat Inti Satuan Kerja (Kasatker/PPK) bidang Prasarana Strategis, menguasai manajemen kontrak dan mitigasi keterlambatan proyek.',
    persyaratanPeserta: [
      'Calon/Pejabat Pembuat Komitmen (PPK), Kepala Satker, Asisten PPK di Satker BPPW/Prasarana Strategis'
    ],
    allocations: {
      'skenario-1': { method: 'Blended Learning', category: 'Reguler', subCategory: 'Blended Learning', peserta: 30, angkatan: 1 },
      'skenario-2': { method: 'Blended Learning', category: 'Reguler', subCategory: 'Blended Learning', peserta: 30, angkatan: 1 },
      'skenario-3': { method: 'Blended Learning', category: 'Reguler', subCategory: 'Blended Learning', peserta: 30, angkatan: 1 },
      'skenario-4': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 }
    }
  },
  {
    no: 8,
    title: 'Bangunan Gedung Cerdas',
    code: 'CKPS-PB-BGC',
    bapekomId: 'bangkom-3',
    bapekomCode: 'BANGKOM-III',
    bapekomShort: 'Bapekom III Jakarta',
    bapekomFullName: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah III Jakarta',
    bapekomLocation: 'Jakarta',
    bapekomProvince: 'DKI Jakarta',
    rumpun: 'penataan-bangunan',
    rumpunLabel: 'Penataan Bangunan',
    triwulan: 'II',
    bulan: 'Mei',
    jpPelatihan: 60,
    jpPengajar: 66,
    pic: 'Heppy + Firman',
    waktu: '8 Hari',
    tanggalPelaksanaan: '10 s.d 19 Mei 2027',
    persiapan: '15-Apr-27',
    keteranganSertifikasi: 'Non Sertifikasi',
    standarKompetensi: 'Mampu merancang dan mengawasi implementasi otomasi Building Management System (BMS), integrasi IoT, efisiensi energi, dan keamanan siber pada bangunan gedung.',
    persyaratanPeserta: [
      'ASN Bidang Tata Bangunan, Arsitektur, Mekanikal Elektrikal'
    ],
    allocations: {
      'skenario-1': { method: 'Klasikal', category: 'Reguler', subCategory: 'Klasikal', peserta: 30, angkatan: 1 },
      'skenario-2': { method: 'Blended Learning', category: 'Reguler', subCategory: 'Blended Learning', peserta: 30, angkatan: 1 },
      'skenario-3': { method: 'Distance Learning', category: 'Non Reguler', subCategory: 'Distance Learning', peserta: 30, angkatan: 1 },
      'skenario-4': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 }
    }
  },
  {
    no: 9,
    title: 'Penyusunan RPAM',
    code: 'CKPS-AM-RPAM',
    bapekomId: 'bangkom-3',
    bapekomCode: 'BANGKOM-III',
    bapekomShort: 'Bapekom III Jakarta',
    bapekomFullName: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah III Jakarta',
    bapekomLocation: 'Jakarta',
    bapekomProvince: 'DKI Jakarta',
    rumpun: 'air-minum',
    rumpunLabel: 'Air Minum',
    triwulan: 'III',
    bulan: 'Juli',
    jpPelatihan: 45,
    jpPengajar: 40,
    pic: 'Eka + Erry',
    waktu: '7 Hari',
    tanggalPelaksanaan: '19 s.d 27 Juli 2027',
    persiapan: '20-Jun-27',
    keteranganSertifikasi: 'Non Sertifikasi',
    standarKompetensi: 'Mampu menyusun Rencana Pengamanan Air Minum (RPAM) dari hulu ke hilir berdasarkan analisis bahaya dan titik kendali kritis (HACCP/Water Safety Plan).',
    persyaratanPeserta: [
      'ASN Bidang Air Minum dan Penanggung Jawab Teknis PDAM/BUMD Air Minum'
    ],
    allocations: {
      'skenario-1': { method: 'Blended Learning', category: 'Reguler', subCategory: 'Blended Learning', peserta: 30, angkatan: 1 },
      'skenario-2': { method: 'Blended Learning', category: 'Reguler', subCategory: 'Blended Learning', peserta: 30, angkatan: 1 },
      'skenario-3': { method: 'Distance Learning', category: 'Non Reguler', subCategory: 'Distance Learning', peserta: 30, angkatan: 1 },
      'skenario-4': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 }
    }
  },

  // ================= BAPEKOM IV BANDUNG =================
  {
    no: 10,
    title: 'Bangunan Gedung Hijau',
    code: 'CKPS-PB-10',
    bapekomId: 'bangkom-4',
    bapekomCode: 'BANGKOM-IV',
    bapekomShort: 'Bapekom IV Bandung',
    bapekomFullName: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah IV Bandung',
    bapekomLocation: 'Bandung',
    bapekomProvince: 'Jawa Barat',
    rumpun: 'penataan-bangunan',
    rumpunLabel: 'Penataan Bangunan',
    triwulan: 'I',
    bulan: 'Februari',
    jpPelatihan: 49,
    jpPengajar: 52,
    pic: 'Ismira',
    waktu: '10 Hari',
    tanggalPelaksanaan: '8 s.d 19 Februari 2027',
    persiapan: '15-Jan-27',
    keteranganSertifikasi: 'Non Sertifikasi',
    standarKompetensi: 'Mampu menilai dan mengawal penerapan parameter teknis Bangunan Gedung Hijau (BGH) sesuai Permen PUPR No. 21/PRT/M/2021.',
    persyaratanPeserta: [
      'ASN Bidang Tata Bangunan, Jafung Penata Kelola Bangunan Gedung, Tim Ahli BGH'
    ],
    allocations: {
      'skenario-1': { method: 'Blended Learning', category: 'Reguler', subCategory: 'Blended Learning', peserta: 30, angkatan: 1 },
      'skenario-2': { method: 'Blended Learning', category: 'Reguler', subCategory: 'Blended Learning', peserta: 30, angkatan: 1 },
      'skenario-3': { method: 'Blended Learning', category: 'Reguler', subCategory: 'Blended Learning', peserta: 30, angkatan: 1 },
      'skenario-4': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 }
    }
  },
  {
    no: 11,
    title: 'PISK Bidang Cipta Karya',
    code: 'CKPS-UM-01',
    bapekomId: 'bangkom-4',
    bapekomCode: 'BANGKOM-IV',
    bapekomShort: 'Bapekom IV Bandung',
    bapekomFullName: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah IV Bandung',
    bapekomLocation: 'Bandung',
    bapekomProvince: 'Jawa Barat',
    rumpun: 'umum',
    rumpunLabel: 'Umum & Manajemen',
    triwulan: 'II',
    bulan: 'April',
    jpPelatihan: 85,
    jpPengajar: 90,
    pic: 'Mutia',
    waktu: '16 Hari',
    tanggalPelaksanaan: '12 s.d 30 April 2027',
    persiapan: '15-Mar-27',
    keteranganSertifikasi: 'Non Sertifikasi',
    standarKompetensi: 'Mampu menjalankan kepemimpinan teknis dan operasional Satker Ditjen Cipta Karya, kepatuhan PBJ, dan mitigasi temuan audit.',
    persyaratanPeserta: [
      'Calon/Pejabat PPK dan Kasatker di lingkungan Ditjen Cipta Karya'
    ],
    allocations: {
      'skenario-1': { method: 'Blended Learning', category: 'Reguler', subCategory: 'Blended Learning', peserta: 30, angkatan: 1 },
      'skenario-2': { method: 'Blended Learning', category: 'Reguler', subCategory: 'Blended Learning', peserta: 30, angkatan: 1 },
      'skenario-3': { method: 'Distance Learning', category: 'Non Reguler', subCategory: 'Distance Learning', peserta: 30, angkatan: 1 },
      'skenario-4': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 }
    }
  },
  {
    no: 12,
    title: 'Inovasi Teknologi dan Manajemen Persampahan',
    code: 'CKPS-SA-03',
    bapekomId: 'bangkom-4',
    bapekomCode: 'BANGKOM-IV',
    bapekomShort: 'Bapekom IV Bandung',
    bapekomFullName: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah IV Bandung',
    bapekomLocation: 'Bandung',
    bapekomProvince: 'Jawa Barat',
    rumpun: 'sanitasi',
    rumpunLabel: 'Sanitasi & PLP',
    triwulan: 'III',
    bulan: 'Agustus',
    jpPelatihan: 45,
    jpPengajar: 42,
    pic: 'Mutia + Nanda',
    waktu: '6 Hari',
    tanggalPelaksanaan: '9 s.d 16 Agustus 2027',
    persiapan: '10-Jul-27',
    keteranganSertifikasi: 'Non Sertifikasi',
    standarKompetensi: 'Mampu merencanakan dan mengelola teknologi pengelolaan sampah terpadu (TPS3R, TPST RDF, sanitary landfill, serta reduksi emisi gas rumah kaca).',
    persyaratanPeserta: [
      'ASN Bidang Persampahan, Pengelola TPST/TPA Daerah, Tenaga Teknis BPPW'
    ],
    allocations: {
      'skenario-1': { method: 'Distance Learning', category: 'Non Reguler', subCategory: 'Distance Learning', peserta: 30, angkatan: 1 },
      'skenario-2': { method: 'Distance Learning', category: 'Non Reguler', subCategory: 'Distance Learning', peserta: 30, angkatan: 1 },
      'skenario-3': { method: 'Distance Learning', category: 'Non Reguler', subCategory: 'Distance Learning', peserta: 30, angkatan: 1 },
      'skenario-4': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 }
    }
  },

  // ================= BAPEKOM V YOGYAKARTA =================
  {
    no: 13,
    title: 'Penyelenggaaraan Pengembangan Kawasan Strategis',
    code: 'CKPS-PS-KS',
    bapekomId: 'bangkom-5',
    bapekomCode: 'BANGKOM-V',
    bapekomShort: 'Bapekom V Yogyakarta',
    bapekomFullName: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah V Yogyakarta',
    bapekomLocation: 'Yogyakarta',
    bapekomProvince: 'D.I. Yogyakarta',
    rumpun: 'prasarana-strategis',
    rumpunLabel: 'Prasarana Strategis',
    triwulan: 'I',
    bulan: 'Maret',
    jpPelatihan: 61,
    jpPengajar: 58,
    pic: 'Garin + Yadis',
    waktu: '8 Hari',
    tanggalPelaksanaan: '8 s.d 17 Maret 2027',
    persiapan: '10-Feb-27',
    keteranganSertifikasi: 'Non Sertifikasi',
    standarKompetensi: 'Mampu menyusun integrasi perencanaan infrastruktur PUPR pada Kawasan Strategis Pariwisata Nasional (KSPN), Kawasan Industri Terpadu (KIT), dan Kawasan Perbatasan.',
    persyaratanPeserta: [
      'ASN BPIW, Ditjen Cipta Karya, dan Bappeda pengampu pengembangan wilayah strategis'
    ],
    allocations: {
      'skenario-1': { method: 'Blended Learning', category: 'Reguler', subCategory: 'Blended Learning', peserta: 30, angkatan: 1 },
      'skenario-2': { method: 'Distance Learning', category: 'Non Reguler', subCategory: 'Distance Learning', peserta: 30, angkatan: 1 },
      'skenario-3': { method: 'Distance Learning', category: 'Non Reguler', subCategory: 'Distance Learning', peserta: 30, angkatan: 1 },
      'skenario-4': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 }
    }
  },
  {
    no: 14,
    title: 'Penyelenggaraan Sanitasi',
    code: 'CKPS-SA-01',
    bapekomId: 'bangkom-5',
    bapekomCode: 'BANGKOM-V',
    bapekomShort: 'Bapekom V Yogyakarta',
    bapekomFullName: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah V Yogyakarta',
    bapekomLocation: 'Yogyakarta',
    bapekomProvince: 'D.I. Yogyakarta',
    rumpun: 'sanitasi',
    rumpunLabel: 'Sanitasi & PLP',
    triwulan: 'II',
    bulan: 'Mei',
    jpPelatihan: 68,
    jpPengajar: 62,
    pic: 'Deri',
    waktu: '9 Hari',
    tanggalPelaksanaan: '17 s.d 28 Mei 2027',
    persiapan: '20-Apr-27',
    keteranganSertifikasi: 'Non Sertifikasi',
    standarKompetensi: 'Mampu merencanakan dan mengawasi implementasi program air limbah domestik dan persampahan skala kawasan dan kota.',
    persyaratanPeserta: [
      'ASN Satker BPPW dan Dinas PUPR/Perkim bidang Penyehatan Lingkungan Permukiman'
    ],
    allocations: {
      'skenario-1': { method: 'Distance Learning', category: 'Non Reguler', subCategory: 'Distance Learning', peserta: 30, angkatan: 1 },
      'skenario-2': { method: 'Distance Learning', category: 'Non Reguler', subCategory: 'Distance Learning', peserta: 30, angkatan: 1 },
      'skenario-3': { method: 'Distance Learning', category: 'Non Reguler', subCategory: 'Distance Learning', peserta: 30, angkatan: 1 },
      'skenario-4': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 }
    }
  },
  {
    no: 15,
    title: 'Inovasi Teknologi dan Manajemen Bidang SPAM',
    code: 'CKPS-AM-03',
    bapekomId: 'bangkom-5',
    bapekomCode: 'BANGKOM-V',
    bapekomShort: 'Bapekom V Yogyakarta',
    bapekomFullName: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah V Yogyakarta',
    bapekomLocation: 'Yogyakarta',
    bapekomProvince: 'D.I. Yogyakarta',
    rumpun: 'air-minum',
    rumpunLabel: 'Air Minum',
    triwulan: 'III',
    bulan: 'Juli',
    jpPelatihan: 53,
    jpPengajar: 56,
    pic: 'Eka + Erry',
    waktu: '8 Hari',
    tanggalPelaksanaan: '12 s.d 21 Juli 2027',
    persiapan: '15-Jun-27',
    keteranganSertifikasi: 'Non Sertifikasi',
    standarKompetensi: 'Mampu menerapkan inovasi efisiensi energi, penurunan kebocoran air (NRW), serta otomatisasi SCADA pada instalasi SPAM.',
    persyaratanPeserta: [
      'ASN Bidang Air Minum dan Direksi Teknis BUMD Air Minum'
    ],
    allocations: {
      'skenario-1': { method: 'Blended Learning', category: 'Reguler', subCategory: 'Blended Learning', peserta: 30, angkatan: 1 },
      'skenario-2': { method: 'Blended Learning', category: 'Reguler', subCategory: 'Blended Learning', peserta: 30, angkatan: 1 },
      'skenario-3': { method: 'Blended Learning', category: 'Reguler', subCategory: 'Blended Learning', peserta: 30, angkatan: 1 },
      'skenario-4': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 }
    }
  },

  // ================= BAPEKOM VI SURABAYA =================
  {
    no: 16,
    title: 'Penyelenggaraan Prasarana Strategis',
    code: 'CKPS-PS-01',
    bapekomId: 'bangkom-6',
    bapekomCode: 'BANGKOM-VI',
    bapekomShort: 'Bapekom VI Surabaya',
    bapekomFullName: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah VI Surabaya',
    bapekomLocation: 'Surabaya',
    bapekomProvince: 'Jawa Timur',
    rumpun: 'prasarana-strategis',
    rumpunLabel: 'Prasarana Strategis',
    triwulan: 'I',
    bulan: 'Februari',
    jpPelatihan: 52,
    jpPengajar: 48,
    pic: 'Garin + Firman',
    waktu: '8 Hari',
    tanggalPelaksanaan: '15 s.d 24 Februari 2027',
    persiapan: '20-Jan-27',
    keteranganSertifikasi: 'Non Sertifikasi',
    standarKompetensi: 'Mampu menyusun dokumen perencanaan dan pemantauan proyek prasarana strategis pemerintah daerah dan pusat.',
    persyaratanPeserta: [
      'ASN Penyelenggara Prasarana Strategis'
    ],
    allocations: {
      'skenario-1': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 },
      'skenario-2': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 },
      'skenario-3': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 },
      'skenario-4': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 }
    }
  },
  {
    no: 17,
    title: 'PISK Bidang Cipta Karya',
    code: 'CKPS-UM-01',
    bapekomId: 'bangkom-6',
    bapekomCode: 'BANGKOM-VI',
    bapekomShort: 'Bapekom VI Surabaya',
    bapekomFullName: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah VI Surabaya',
    bapekomLocation: 'Surabaya',
    bapekomProvince: 'Jawa Timur',
    rumpun: 'umum',
    rumpunLabel: 'Umum & Manajemen',
    triwulan: 'II',
    bulan: 'Mei',
    jpPelatihan: 85,
    jpPengajar: 90,
    pic: 'Mutia',
    waktu: '16 Hari',
    tanggalPelaksanaan: '17 Mei s.d 4 Juni 2027',
    persiapan: '18-Apr-27',
    keteranganSertifikasi: 'Non Sertifikasi',
    standarKompetensi: 'Mampu menjalankan tugas PPK/Kasatker Cipta Karya dengan akuntabilitas hukum dan keuangan yang tinggi.',
    persyaratanPeserta: [
      'ASN Satker BPPW Jawa Timur, Bali, NTB, NTT'
    ],
    allocations: {
      'skenario-1': { method: 'Blended Learning', category: 'Reguler', subCategory: 'Blended Learning', peserta: 30, angkatan: 1 },
      'skenario-2': { method: 'Blended Learning', category: 'Reguler', subCategory: 'Blended Learning', peserta: 30, angkatan: 1 },
      'skenario-3': { method: 'Distance Learning', category: 'Non Reguler', subCategory: 'Distance Learning', peserta: 30, angkatan: 1 },
      'skenario-4': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 }
    }
  },
  {
    no: 18,
    title: 'Bangunan Gedung Cerdas',
    code: 'CKPS-PB-BGC',
    bapekomId: 'bangkom-6',
    bapekomCode: 'BANGKOM-VI',
    bapekomShort: 'Bapekom VI Surabaya',
    bapekomFullName: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah VI Surabaya',
    bapekomLocation: 'Surabaya',
    bapekomProvince: 'Jawa Timur',
    rumpun: 'penataan-bangunan',
    rumpunLabel: 'Penataan Bangunan',
    triwulan: 'III',
    bulan: 'September',
    jpPelatihan: 60,
    jpPengajar: 66,
    pic: 'Heppy',
    waktu: '8 Hari',
    tanggalPelaksanaan: '13 s.d 22 September 2027',
    persiapan: '15-Agu-27',
    keteranganSertifikasi: 'Non Sertifikasi',
    standarKompetensi: 'Mampu mengintegrasikan sistem cerdas pada gedung perkantoran, rumah sakit, dan pasar rakyat.',
    persyaratanPeserta: [
      'ASN Pengelola Bangunan Gedung Negara'
    ],
    allocations: {
      'skenario-1': { method: 'Klasikal', category: 'Reguler', subCategory: 'Klasikal', peserta: 30, angkatan: 1 },
      'skenario-2': { method: 'Distance Learning', category: 'Non Reguler', subCategory: 'Distance Learning', peserta: 30, angkatan: 1 },
      'skenario-3': { method: 'Distance Learning', category: 'Non Reguler', subCategory: 'Distance Learning', peserta: 30, angkatan: 1 },
      'skenario-4': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 }
    }
  },

  // ================= BAPEKOM VII BANJARMASIN =================
  {
    no: 19,
    title: 'Penyelenggaraan Prasarana Strategis',
    code: 'CKPS-PS-01',
    bapekomId: 'bangkom-7',
    bapekomCode: 'BANGKOM-VII',
    bapekomShort: 'Bapekom VII Banjarmasin',
    bapekomFullName: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah VII Banjarmasin',
    bapekomLocation: 'Banjarmasin',
    bapekomProvince: 'Kalimantan Selatan',
    rumpun: 'prasarana-strategis',
    rumpunLabel: 'Prasarana Strategis',
    triwulan: 'I',
    bulan: 'Februari',
    jpPelatihan: 52,
    jpPengajar: 48,
    pic: 'Zidan + Yadis',
    waktu: '8 Hari',
    tanggalPelaksanaan: '22 Februari s.d 3 Maret 2027',
    persiapan: '25-Jan-27',
    keteranganSertifikasi: 'Non Sertifikasi',
    standarKompetensi: 'Mampu menyusun tata kelola dan pengawasan prasarana strategis di wilayah Kalimantan.',
    persyaratanPeserta: [
      'ASN BPPW Kalimantan Selatan, Timur, Barat, Tengah, Utara'
    ],
    allocations: {
      'skenario-1': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 },
      'skenario-2': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 },
      'skenario-3': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 },
      'skenario-4': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 }
    }
  },
  {
    no: 20,
    title: 'Penilikan Bangunan Gedung',
    code: 'CKPS-PB-11',
    bapekomId: 'bangkom-7',
    bapekomCode: 'BANGKOM-VII',
    bapekomShort: 'Bapekom VII Banjarmasin',
    bapekomFullName: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah VII Banjarmasin',
    bapekomLocation: 'Banjarmasin',
    bapekomProvince: 'Kalimantan Selatan',
    rumpun: 'penataan-bangunan',
    rumpunLabel: 'Penataan Bangunan',
    triwulan: 'II',
    bulan: 'Juni',
    jpPelatihan: 100,
    jpPengajar: 110,
    pic: 'Heppy + Firman',
    waktu: '15 Hari',
    tanggalPelaksanaan: '7 s.d 25 Juni 2027',
    persiapan: '10-Mei-27',
    keteranganSertifikasi: 'Non Sertifikasi',
    standarKompetensi: 'Mampu melaksanakan pemeriksaan lapangan, verifikasi kepatuhan PBG & SLF, serta menyusun rekomendasi teknis kelaikan fungsi bangunan gedung.',
    persyaratanPeserta: [
      'ASN Pejabat Penilik Bangunan Gedung dan Pengawas Teknis Pemda'
    ],
    allocations: {
      'skenario-1': { method: 'Klasikal', category: 'Reguler', subCategory: 'Klasikal', peserta: 30, angkatan: 1 },
      'skenario-2': { method: 'Blended Learning', category: 'Reguler', subCategory: 'Blended Learning', peserta: 30, angkatan: 1 },
      'skenario-3': { method: 'Blended Learning', category: 'Reguler', subCategory: 'Blended Learning', peserta: 30, angkatan: 1 },
      'skenario-4': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 }
    }
  },
  {
    no: 21,
    title: 'Penyelenggaraan Sanitasi',
    code: 'CKPS-SA-01',
    bapekomId: 'bangkom-7',
    bapekomCode: 'BANGKOM-VII',
    bapekomShort: 'Bapekom VII Banjarmasin',
    bapekomFullName: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah VII Banjarmasin',
    bapekomLocation: 'Banjarmasin',
    bapekomProvince: 'Kalimantan Selatan',
    rumpun: 'sanitasi',
    rumpunLabel: 'Sanitasi & PLP',
    triwulan: 'IV',
    bulan: 'Oktober',
    jpPelatihan: 68,
    jpPengajar: 62,
    pic: 'Deri + Nanda',
    waktu: '9 Hari',
    tanggalPelaksanaan: '11 s.d 21 Oktober 2027',
    persiapan: '15-Sep-27',
    keteranganSertifikasi: 'Non Sertifikasi',
    standarKompetensi: 'Mampu menyelenggarakan sarana sanitasi aman perkotaan dan perdesaan.',
    persyaratanPeserta: [
      'ASN Bidang Sanitasi dan Pengelola Sarana Air Limbah'
    ],
    allocations: {
      'skenario-1': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 },
      'skenario-2': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 },
      'skenario-3': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 },
      'skenario-4': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 }
    }
  },

  // ================= BAPEKOM VIII MAKASSAR =================
  {
    no: 22,
    title: 'Penyelenggaraan SPAM',
    code: 'CKPS-AM-01',
    bapekomId: 'bangkom-8',
    bapekomCode: 'BANGKOM-VIII',
    bapekomShort: 'Bapekom VIII Makassar',
    bapekomFullName: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah VIII Makassar',
    bapekomLocation: 'Makassar',
    bapekomProvince: 'Sulawesi Selatan',
    rumpun: 'air-minum',
    rumpunLabel: 'Air Minum',
    triwulan: 'I',
    bulan: 'Maret',
    jpPelatihan: 75,
    jpPengajar: 70,
    pic: 'Eka',
    waktu: '12 Hari',
    tanggalPelaksanaan: '15 s.d 29 Maret 2027',
    persiapan: '15-Feb-27',
    keteranganSertifikasi: 'Non Sertifikasi',
    standarKompetensi: 'Mampu menguasai perencanaan teknis sistem penyediaan air minum perpipaan, manajemen aset, dan keberlanjutan pasokan.',
    persyaratanPeserta: [
      'ASN Bidang Air Minum Sulawesi dan Kawasan Timur Indonesia'
    ],
    allocations: {
      'skenario-1': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 },
      'skenario-2': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 },
      'skenario-3': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 },
      'skenario-4': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 }
    }
  },
  {
    no: 23,
    title: 'Penyelenggaraan Pengembangan Kawasan Strategis',
    code: 'CKPS-PS-KS',
    bapekomId: 'bangkom-8',
    bapekomCode: 'BANGKOM-VIII',
    bapekomShort: 'Bapekom VIII Makassar',
    bapekomFullName: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah VIII Makassar',
    bapekomLocation: 'Makassar',
    bapekomProvince: 'Sulawesi Selatan',
    rumpun: 'prasarana-strategis',
    rumpunLabel: 'Prasarana Strategis',
    triwulan: 'III',
    bulan: 'Juli',
    jpPelatihan: 61,
    jpPengajar: 58,
    pic: 'Garin',
    waktu: '8 Hari',
    tanggalPelaksanaan: '12 s.d 21 Juli 2027',
    persiapan: '15-Jun-27',
    keteranganSertifikasi: 'Non Sertifikasi',
    standarKompetensi: 'Mampu menyelaraskan penyediaan prasarana strategis pendukung kawasan industri dan logistik terpadu di Indonesia Timur.',
    persyaratanPeserta: [
      'ASN Perencana dan Pengelola Kawasan Strategis'
    ],
    allocations: {
      'skenario-1': { method: 'Distance Learning', category: 'Non Reguler', subCategory: 'Distance Learning', peserta: 30, angkatan: 1 },
      'skenario-2': { method: 'Distance Learning', category: 'Non Reguler', subCategory: 'Distance Learning', peserta: 30, angkatan: 1 },
      'skenario-3': { method: 'Distance Learning', category: 'Non Reguler', subCategory: 'Distance Learning', peserta: 30, angkatan: 1 },
      'skenario-4': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 }
    }
  },
  {
    no: 24,
    title: 'Pengawasan Mutu Bangunan Gedung',
    code: 'CKPS-PB-PMBG',
    bapekomId: 'bangkom-8',
    bapekomCode: 'BANGKOM-VIII',
    bapekomShort: 'Bapekom VIII Makassar',
    bapekomFullName: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah VIII Makassar',
    bapekomLocation: 'Makassar',
    bapekomProvince: 'Sulawesi Selatan',
    rumpun: 'penataan-bangunan',
    rumpunLabel: 'Penataan Bangunan',
    triwulan: 'III',
    bulan: 'September',
    jpPelatihan: 58,
    jpPengajar: 54,
    pic: 'Ismira + Erry',
    waktu: '8 Hari',
    tanggalPelaksanaan: '6 s.d 15 September 2027',
    persiapan: '10-Agu-27',
    keteranganSertifikasi: 'Non Sertifikasi',
    standarKompetensi: 'Mampu melakukan pengendalian mutu material, metode kerja beton/baja bertulang, dan pengujian struktur bangunan gedung.',
    persyaratanPeserta: [
      'ASN Pengawas Lapangan dan Pengendali Mutu Pekerjaan Bangunan Gedung'
    ],
    allocations: {
      'skenario-1': { method: 'Distance Learning', category: 'Non Reguler', subCategory: 'Distance Learning', peserta: 30, angkatan: 1 },
      'skenario-2': { method: 'Distance Learning', category: 'Non Reguler', subCategory: 'Distance Learning', peserta: 30, angkatan: 1 },
      'skenario-3': { method: 'Distance Learning', category: 'Non Reguler', subCategory: 'Distance Learning', peserta: 30, angkatan: 1 },
      'skenario-4': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 }
    }
  },

  // ================= BAPEKOM IX JAYAPURA =================
  {
    no: 25,
    title: 'Webinar Bidang CK (Sektor Bangunan Gedung)',
    code: 'CKPS-CK-WEB',
    bapekomId: 'bangkom-9',
    bapekomCode: 'BANGKOM-IX',
    bapekomShort: 'Bapekom IX Jayapura',
    bapekomFullName: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah IX Jayapura',
    bapekomLocation: 'Jayapura',
    bapekomProvince: 'Papua',
    rumpun: 'penataan-bangunan',
    rumpunLabel: 'Penataan Bangunan',
    triwulan: 'II',
    bulan: 'Juni',
    jpPelatihan: '4 OJ',
    jpPengajar: 4,
    pic: 'Mutia + Heppy',
    waktu: '1 Hari',
    tanggalPelaksanaan: '10 Juni 2027',
    persiapan: '10-Mei-27',
    keteranganSertifikasi: 'Non Sertifikasi (E-Sertifikat)',
    standarKompetensi: 'Memahami kebijakan pembangunan gedung tangguh bencana, arsitektur kontekstual nusantara, dan kemudahan PBG di wilayah 3T/Papua.',
    persyaratanPeserta: [
      'ASN Kementerian PU, Pemda se-Tanah Papua dan Maluku, Praktisi Arsitektur'
    ],
    allocations: {
      'skenario-1': { method: 'Webinar', category: 'Non Reguler', subCategory: 'Webinar', peserta: 250, angkatan: 1 },
      'skenario-2': { method: 'Webinar', category: 'Non Reguler', subCategory: 'Webinar', peserta: 250, angkatan: 1 },
      'skenario-3': { method: 'Webinar', category: 'Non Reguler', subCategory: 'Webinar', peserta: 250, angkatan: 1 },
      'skenario-4': { method: 'Webinar', category: 'Non Reguler', subCategory: 'Webinar', peserta: 250, angkatan: 1 }
    }
  },
  {
    no: 26,
    title: 'Perencanaan TPST',
    code: 'CKPS-SA-TPST',
    bapekomId: 'bangkom-9',
    bapekomCode: 'BANGKOM-IX',
    bapekomShort: 'Bapekom IX Jayapura',
    bapekomFullName: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah IX Jayapura',
    bapekomLocation: 'Jayapura',
    bapekomProvince: 'Papua',
    rumpun: 'sanitasi',
    rumpunLabel: 'Sanitasi & PLP',
    triwulan: 'III',
    bulan: 'Agustus',
    jpPelatihan: 48,
    jpPengajar: 44,
    pic: 'Deri + Nanda',
    waktu: '7 Hari',
    tanggalPelaksanaan: '16 s.d 24 Agustus 2027',
    persiapan: '20-Jul-27',
    keteranganSertifikasi: 'Non Sertifikasi',
    standarKompetensi: 'Mampu menyusun dokumen Detail Engineering Design (DED) dan rencana operasional Tempat Pengolahan Sampah Terpadu (TPST).',
    persyaratanPeserta: [
      'ASN Dinas Lingkungan Hidup dan BPPW Papua'
    ],
    allocations: {
      'skenario-1': { method: 'Distance Learning', category: 'Non Reguler', subCategory: 'Distance Learning', peserta: 30, angkatan: 1 },
      'skenario-2': { method: 'Distance Learning', category: 'Non Reguler', subCategory: 'Distance Learning', peserta: 30, angkatan: 1 },
      'skenario-3': { method: 'Distance Learning', category: 'Non Reguler', subCategory: 'Distance Learning', peserta: 30, angkatan: 1 },
      'skenario-4': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 }
    }
  },
  {
    no: 27,
    title: 'Pemeriksaan Kerusakan Bangunan Gedung',
    code: 'CKPS-PS-02',
    bapekomId: 'bangkom-9',
    bapekomCode: 'BANGKOM-IX',
    bapekomShort: 'Bapekom IX Jayapura',
    bapekomFullName: 'Balai Pengembangan Kompetensi Pekerjaan Umum Wilayah IX Jayapura',
    bapekomLocation: 'Jayapura',
    bapekomProvince: 'Papua',
    rumpun: 'penataan-bangunan',
    rumpunLabel: 'Penataan Bangunan',
    triwulan: 'IV',
    bulan: 'Oktober',
    jpPelatihan: 55,
    jpPengajar: 50,
    pic: 'Ismira + Yadis',
    waktu: '8 Hari',
    tanggalPelaksanaan: '18 s.d 27 Oktober 2027',
    persiapan: '20-Sep-27',
    keteranganSertifikasi: 'Non Sertifikasi',
    standarKompetensi: 'Mampu melakukan penilaian tingkat kerusakan fisik bangunan pasca bencana (gempa/banjir/kerusuhan) untuk perhitungan biaya rehabilitasi dan rekonstruksi.',
    persyaratanPeserta: [
      'ASN Tim Reaksi Cepat BPBD/PUPR, Penilik Gedung, Tim Penilai Kerusakan Bangunan'
    ],
    allocations: {
      'skenario-1': { method: 'Klasikal', category: 'Reguler', subCategory: 'Klasikal', peserta: 30, angkatan: 1 },
      'skenario-2': { method: 'Blended Learning', category: 'Reguler', subCategory: 'Blended Learning', peserta: 30, angkatan: 1 },
      'skenario-3': { method: 'Blended Learning', category: 'Reguler', subCategory: 'Blended Learning', peserta: 30, angkatan: 1 },
      'skenario-4': { method: 'e-learning Tertutup', category: 'Non Reguler', subCategory: 'e-learning Tertutup', peserta: 100, angkatan: 1 }
    }
  }
];

// Helper to convert 2027 items into standard KalenderTrainingItem for a given scenario
export function getKalender2027ForScenario(scenId: SkenarioId = 'skenario-1'): KalenderTrainingItem[] {
  return DAFTAR_PELATIHAN_2027.map((item) => {
    const alloc = item.allocations[scenId];
    return {
      id: `kal-2027-${item.no}`,
      year: 2027,
      no: item.no,
      bulan: item.bulan,
      triwulan: item.triwulan,
      title: item.title,
      code: item.code,
      rumpun: item.rumpun,
      rumpunLabel: item.rumpunLabel,
      penyelenggara: item.bapekomFullName,
      penyelenggaraCode: item.bapekomCode,
      metode: alloc.method,
      jpPelatihan: item.jpPelatihan,
      jpPengajar: item.jpPengajar,
      targetPeserta: alloc.peserta,
      angkatan: 'I',
      waktu: item.waktu,
      tanggalPelaksanaan: item.tanggalPelaksanaan,
      persiapan: item.persiapan,
      pic: item.pic,
      status: 'Terjadwal',
      keteranganSertifikasi: item.keteranganSertifikasi,
      standarKompetensi: item.standarKompetensi,
      persyaratanPeserta: item.persyaratanPeserta
    };
  });
}
