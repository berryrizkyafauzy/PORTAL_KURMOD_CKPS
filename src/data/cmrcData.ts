import { TrainingProgram, BangkomUnit, BapekomUnit, TrainingMethod } from '../types';
import { UMUM_PROGRAMS } from './programs/umumPrograms';
import { PENATAAN_BANGUNAN_PROGRAMS } from './programs/penataanBangunanPrograms';
import { AIR_MINUM_PROGRAMS } from './programs/airMinumPrograms';
import { SANITASI_PROGRAMS } from './programs/sanitasiPrograms';
import { KAWASAN_PRASARANA_PROGRAMS } from './programs/kawasanPrasaranaPrograms';

export const TRAINING_METHODS: TrainingMethod[] = [
  {
    id: 'Klasikal',
    title: 'Klasikal',
    iconName: 'Users',
    description: 'Pembelajaran tatap muka langsung di ruang kelas Balai Pengembangan Kompetensi (Bangkom) dengan interaksi penuh.',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
  },
  {
    id: 'Blended Learning',
    title: 'Blended Learning',
    iconName: 'Layers',
    description: 'Kombinasi pembelajaran mandiri via e-learning, virtual classroom, dan praktikum/tatap muka di Bangkom.',
    badgeColor: 'bg-blue-100 text-blue-900 border-blue-300',
  },
  {
    id: 'Distance Learning',
    title: 'Distance Learning',
    iconName: 'Laptop',
    description: 'Pembelajaran jarak jauh terstruktur menggunakan platform video conference dan media digital interaktif.',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
  },
  {
    id: 'E-Learning',
    title: 'E-Learning',
    iconName: 'GraduationCap',
    description: 'Pembelajaran mandiri secara daring yang dapat diakses kapan saja melalui Portal BPSDM Kementerian PU.',
    badgeColor: 'bg-purple-100 text-purple-900 border-purple-300',
  },
  {
    id: 'Full E-Learning',
    title: 'Full E-Learning',
    iconName: 'GraduationCap',
    description: 'Pembelajaran full daring mandiri & terstruktur tanpa tatap muka fisik.',
    badgeColor: 'bg-indigo-100 text-indigo-900 border-indigo-300',
  },
];

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  ...UMUM_PROGRAMS,
  ...PENATAAN_BANGUNAN_PROGRAMS,
  ...AIR_MINUM_PROGRAMS,
  ...SANITASI_PROGRAMS,
  ...KAWASAN_PRASARANA_PROGRAMS,
];

export const BANGKOM_UNITS: BangkomUnit[] = [
  {
    id: 'bangkom-1',
    code: 'BANGKOM-I',
    name: 'BANGKOM PU Wilayah I Medan',
    location: 'Medan',
    province: 'Sumatera Utara',
    regionGroup: 'Sumatera',
    address: 'Jl. Sakti Lubis No. 7, Medan, Sumatera Utara',
    phone: '(061) 786-4532',
    coverageAreas: ['Aceh', 'Sumatera Utara', 'Sumatera Barat', 'Riau', 'Kepulauan Riau'],
    plannedTrainings2026: 4,
    featuredPrograms: [
      { code: 'CKPS-UM-WEB', name: 'Webinar: "Membangun Ketangguhan Nusantara: Pembelajaran dan Solusi Bencana Aceh, Sumut dan Sumbar"', method: 'Klasikal', jp: '4 OJ', tanggal: '4 Maret 2026', waktu: '1 Hari', targetPeserta: 250, status: 'Selesai', pic: 'Mutia' },
      { code: 'CKPS-UM-01', name: 'Pejabat Inti Satuan Kerja (PISK) Bidang Cipta Karya', method: 'Distance Learning', jp: 85, tanggal: '20 April s.d 12 Mei 2026', waktu: '16 Hari', targetPeserta: 30, status: 'Selesai', pic: 'Mutia' },
      { code: 'CKPS-AM-03', name: 'Inovasi Teknologi dan Manajemen Bidang SPAM', method: 'Distance Learning', jp: 53, tanggal: '6 s.d 16 Juli 2026', waktu: '9 Hari', targetPeserta: 30, status: 'Selesai', pic: 'Eka + Erry' },
      { code: 'CKPS-PB-02', name: 'Pengelolaan Teknis Pembangunan Bangunan Gedung Negara Kerja Sama BPBPK Sumbar/Sumut (Sertifikasi)', method: 'Blended Learning', jp: 87, tanggal: '7 Sept - 26 Okt & 19 Okt - 7 Des 2026', waktu: '36 Hari', targetPeserta: 0, status: 'Ongoing', pic: 'Zidan' },
    ]
  },
  {
    id: 'bangkom-2',
    code: 'BANGKOM-II',
    name: 'BANGKOM PU Wilayah II Pelambang',
    location: 'Palembang',
    province: 'Sumatera Selatan',
    regionGroup: 'Sumatera',
    address: 'Jl. Soekarno-Hatta No. 12, Palembang, Sumatera Selatan',
    phone: '(0711) 412-890',
    coverageAreas: ['Jambi', 'Sumatera Selatan', 'Bengkulu', 'Bangka Belitung', 'Lampung'],
    plannedTrainings2026: 3,
    featuredPrograms: [
      { code: 'CKPS-PB-10', name: 'Bangunan Gedung Hijau', method: 'E-Learning', jp: 49, tanggal: '9 Februari s.d 6 Maret 2026', waktu: '24 Hari', targetPeserta: 200, status: 'Selesai', pic: 'Ismira' },
      { code: 'CKPS-PS-01', name: 'Penyelenggaraan Prasarana Strategis', method: 'Distance Learning', jp: 52, tanggal: '7 s.d 16 April 2026', waktu: '8 Hari', targetPeserta: 30, status: 'Selesai', pic: 'Zidan' },
      { code: 'CKPS-PB-11', name: 'Penilikan Bangunan Gedung', method: 'Blended Learning', jp: 100, tanggal: '4 s.d. 22 September 2026', waktu: '13 Hari', targetPeserta: 30, status: 'Ongoing', pic: 'Deri + Firman' },
    ]
  },
  {
    id: 'bangkom-3',
    code: 'BANGKOM-III',
    name: 'BANGKOM PU Wilayah III Jakarta',
    location: 'Jakarta',
    province: 'DKI Jakarta',
    regionGroup: 'Jawa',
    address: 'Jl. Pasar Jumat, Poins Square Area, Kebayoran Lama, Jakarta Selatan',
    phone: '(021) 759-0021',
    coverageAreas: ['DKI Jakarta', 'Jawa Barat (Sebagian)', 'Banten'],
    plannedTrainings2026: 4,
    featuredPrograms: [
      { code: 'CKPS-SA-07', name: 'Pengawasan Konstruksi SPALD', method: 'Blended Learning', jp: 78, tanggal: '17 April s.d 5 Mei 2026', waktu: '12 Hari', targetPeserta: 30, status: 'Selesai', pic: 'Deri' },
      { code: 'CKPS-PB-11', name: 'Penilikan Bangunan Gedung', method: 'Blended Learning', jp: 100, tanggal: '5 s.d 27 Agustus 2026', waktu: '15 Hari', targetPeserta: 30, status: 'Selesai', pic: 'Heppy + Firman' },
      { code: 'CKPS-AM-05', name: 'Komisioning IPA', method: 'Blended Learning', jp: 78, tanggal: '10 s.d 25 September 2026', waktu: '12 Hari', targetPeserta: 30, status: 'Ongoing', pic: 'Eka' },
      { code: 'CKPS-PS-01', name: 'Penyelenggaraan Prasarana Strategis', method: 'Distance Learning', jp: 53, tanggal: '14 s.d 23 September 2026', waktu: '8 Hari', targetPeserta: 30, status: 'Ongoing', pic: 'Garin + Firman' },
    ]
  },
  {
    id: 'bangkom-4',
    code: 'BANGKOM-IV',
    name: 'BANGKOM PU Wilayah IV Bandung',
    location: 'Bandung',
    province: 'Jawa Barat',
    regionGroup: 'Jawa',
    address: 'Jl. Abdul Hamid, Cicaheum, Bandung, Jawa Barat 40195',
    phone: '(022) 720-3341',
    coverageAreas: ['Jawa Barat', 'Jawa Tengah (Sebagian)', 'Pusat Kampus Pusbangkom ACP'],
    plannedTrainings2026: 4,
    featuredPrograms: [
      { code: 'CKPS-AM-01', name: 'Penyelenggaraan SPAM', method: 'Distance Learning', jp: 75, tanggal: '18 Februari s.d 5 Maret 2026', waktu: '12 Hari', targetPeserta: 30, status: 'Selesai', pic: 'Deri' },
      { code: 'CKPS-PS-KS', name: 'Penyelenggaraan Pengembangan Kawasan Strategis', method: 'Distance Learning', jp: 61, tanggal: '7 s.d 16 September 2026', waktu: '5 Hari', targetPeserta: 30, status: 'Ongoing', pic: 'Garin + Yadis' },
      { code: 'CKPS-PS-02', name: 'Pemeriksaan Kerusakan Bangunan Gedung', method: 'Blended Learning', jp: 55, tanggal: '21 s.d. 30 September 2026', waktu: '8 Hari', targetPeserta: 30, status: 'Terjadwal', pic: 'Ismira + Erry' },
      { code: 'CKPS-PB-BPOM', name: 'Pengawasan Pekerjaan Konstruksi Bangunan Gedung Kerja Sama BPOM', method: 'Klasikal', jp: 32, tanggal: '5 s.d 9 Oktober 2026', waktu: '5 Hari', targetPeserta: 0, status: 'Terjadwal', pic: 'Heppy' },
    ]
  },
  {
    id: 'bangkom-5',
    code: 'BANGKOM-V',
    name: 'BANGKOM PU Wilayah V Yogyakarta',
    location: 'Yogyakarta',
    province: 'D.I. Yogyakarta',
    regionGroup: 'Jawa',
    address: 'Jl. Solo Km. 11.5, Kalasan, Sleman, D.I. Yogyakarta',
    phone: '(0274) 496-112',
    coverageAreas: ['D.I. Yogyakarta', 'Jawa Tengah'],
    plannedTrainings2026: 3,
    featuredPrograms: [
      { code: 'CKPS-AM-01', name: 'Penyelenggaraan SPAM', method: 'Distance Learning', jp: 75, tanggal: '4 s.d 21 Mei 2026', waktu: '12 Hari', targetPeserta: 30, status: 'Selesai', pic: 'Eka' },
      { code: 'CKPS-PS-02', name: 'Pemeriksaan Kerusakan Bangunan Gedung', method: 'Distance Learning', jp: 55, tanggal: '10 s.d. 21 Juli 2026', waktu: '8 Hari', targetPeserta: 30, status: 'Selesai', pic: 'Deri + Yadis' },
      { code: 'CKPS-SA-03', name: 'Inovasi Teknologi dan Manajemen Persampahan', method: 'Distance Learning', jp: 34, tanggal: '24 s.d 31 Agustus 2026', waktu: '5 Hari', targetPeserta: 30, status: 'Selesai', pic: 'Mutia + Nanda' },
    ]
  },
  {
    id: 'bangkom-6',
    code: 'BANGKOM-VI',
    name: 'BANGKOM PU Wilayah VI Surabaya',
    location: 'Surabaya',
    province: 'Jawa Timur',
    regionGroup: 'Jawa',
    address: 'Jl. Gayung Kebonsari No. 50, Surabaya, Jawa Timur',
    phone: '(031) 829-1140',
    coverageAreas: ['Jawa Timur', 'Bali', 'Nusa Tenggara Barat', 'Nusa Tenggara Timur'],
    plannedTrainings2026: 3,
    featuredPrograms: [
      { code: 'CKPS-AM-03', name: 'Inovasi Teknologi dan Manajemen Bidang SPAM', method: 'Blended Learning', jp: 55, tanggal: '10 s.d 24 Februari 2026', waktu: '9 Hari', targetPeserta: 30, status: 'Selesai', pic: 'Zidan' },
      { code: 'CKPS-PB-10', name: 'Bangunan Gedung Hijau', method: 'E-Learning', jp: 49, tanggal: '1 s.d 24 April 2026', waktu: '24 Hari', targetPeserta: 100, status: 'Selesai', pic: 'Eka' },
      { code: 'CKPS-PB-02', name: 'Pengelolaan Teknis Pembangunan Bangunan Gedung Negara (Sertifikasi)', method: 'Blended Learning', jp: 87, tanggal: '28 September s.d 16 November 2026', waktu: '36 Hari', targetPeserta: 30, status: 'Terjadwal', pic: 'Ismira + Nanda' },
    ]
  },
  {
    id: 'bangkom-7',
    code: 'BANGKOM-VII',
    name: 'BANGKOM PU Wilayah VII Banjarmasin',
    location: 'Banjarmasin',
    province: 'Kalimantan Selatan',
    regionGroup: 'Kalimantan',
    address: 'Jl. Trans Kalimantan Km. 12, Handil Bakti, Banjarmasin',
    phone: '(0511) 330-8821',
    coverageAreas: ['Kalimantan Selatan', 'Kalimantan Tengah', 'Kalimantan Timur', 'Kalimantan Barat', 'Kalimantan Utara'],
    plannedTrainings2026: 3,
    featuredPrograms: [
      { code: 'CKPS-AM-03', name: 'Inovasi Teknologi dan Manajemen Bidang SPAM', method: 'Distance Learning', jp: 53, tanggal: '6 s.d 16 April 2026', waktu: '9 Hari', targetPeserta: 30, status: 'Selesai', pic: 'Garin' },
      { code: 'CKPS-PB-10', name: 'Bangunan Gedung Hijau Kerja Sama Otorita IKN', method: 'Distance Learning', jp: 90, tanggal: '18 Mei s.d 10 Juni 2026', waktu: '15 Hari', targetPeserta: 0, status: 'Selesai', pic: 'Heppy' },
      { code: 'CKPS-PB-10', name: 'Bangunan Gedung Hijau', method: 'E-Learning', jp: 49, tanggal: '1 s.d 28 Oktober 2026', waktu: '24 Hari', targetPeserta: 100, status: 'Terjadwal', pic: 'Eka + Firman' },
    ]
  },
  {
    id: 'bangkom-8',
    code: 'BANGKOM-VIII',
    name: 'BANGKOM PU Wilayah VIII Makassar',
    location: 'Makassar',
    province: 'Sulawesi Selatan',
    regionGroup: 'Sulawesi',
    address: 'Jl. Tamangapa Raya No. 34, Makassar, Sulawesi Selatan',
    phone: '(0411) 492-210',
    coverageAreas: ['Sulawesi Selatan', 'Sulawesi Utara', 'Sulawesi Tengah', 'Sulawesi Tenggara', 'Gorontalo', 'Sulawesi Barat', 'Maluku', 'Maluku Utara'],
    plannedTrainings2026: 2,
    featuredPrograms: [
      { code: 'CKPS-UM-01', name: 'Pejabat Inti Satuan Kerja (PISK) Bidang Cipta Karya', method: 'Distance Learning', jp: 87, tanggal: '7 s.d 31 Juli 2026', waktu: '19 Hari', targetPeserta: 30, status: 'Selesai', pic: 'Mutia + Nanda' },
      { code: 'CKPS-PS-02', name: 'Pemeriksaan Kerusakan Bangunan Gedung', method: 'Blended Learning', jp: 55, tanggal: '16 s.d. 27 Oktober 2026', waktu: '8 Hari', targetPeserta: 30, status: 'Terjadwal', pic: 'Derry + Yadis' },
    ]
  },
  {
    id: 'bangkom-9',
    code: 'BANGKOM-IX',
    name: 'BANGKOM PU Wilayah IX Jayapura',
    location: 'Jayapura',
    province: 'Papua',
    regionGroup: 'Papua',
    address: 'Jl. Abepura - Sentani Km. 17, Padang Bulan, Jayapura',
    phone: '(0967) 581-229',
    coverageAreas: ['Papua', 'Papua Barat', 'Papua Selatan', 'Papua Tengah', 'Papua Pegunungan', 'Papua Barat Daya'],
    plannedTrainings2026: 3,
    featuredPrograms: [
      { code: 'CKPS-PB-11', name: 'Penilikan Bangunan Gedung', method: 'Blended Learning', jp: 100, tanggal: '18 Juni s.d 7 Juli 2026', waktu: '14 Hari', targetPeserta: 30, status: 'Selesai', pic: 'Heppy + Yadis' },
      { code: 'CKPS-PS-01', name: 'Penyelenggaraan Prasarana Strategis', method: 'Distance Learning', jp: 53, tanggal: '1 s.d 10 Juli 2026', waktu: '8 Hari', targetPeserta: 30, status: 'Selesai', pic: 'Ismira + Yadis' },
      { code: 'CKPS-AM-WEB', name: 'Webinar: "Implementasi Rencana Pengamanan Air Minum (RPAM): Dari Kebijakan hingga Best Practice"', method: 'Klasikal', jp: '4 OJ', tanggal: '20 Agustus 2026', waktu: '1 Hari', targetPeserta: 250, status: 'Selesai', pic: 'Zidan + Erry' },
    ]
  }
];

export const BAPEKOM_UNITS = BANGKOM_UNITS;

export const LEGAL_BASIS_INFO = {
  permen: 'Peraturan Menteri PUPR Nomor 13 Tahun 2024 tentang Organisasi dan Tata Kerja Kementerian Pekerjaan Umum',
  seKepala: 'Surat Edaran Kepala BPSDM Nomor 04/SE/KM/2023 tentang Pedoman Penyelenggaraan Pengembangan Kompetensi',
  totalProgramsCount: 33,
  targetYear: 2026,
  centerName: 'Pusat Pengembangan Kompetensi Sumber Daya Air, Cipta Karya dan Prasarana Strategis (Pusbangkom ACP)',
  ministry: 'Kementerian Pekerjaan Umum'
};
