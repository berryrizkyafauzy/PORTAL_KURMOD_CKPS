export type RumpunType = 
  | 'all'
  | 'umum'
  | 'penataan-bangunan'
  | 'air-minum'
  | 'sanitasi'
  | 'prasarana-strategis';

export type MethodType = 'Klasikal' | 'Blended Learning' | 'Distance Learning' | 'Full E-Learning' | 'E-Learning';

export interface SyllabusItem {
  no: number;
  subject: string;
  jp: number;
}

export interface TrainingProgram {
  id: string;
  code: string;
  title: string;
  rumpun: 'umum' | 'penataan-bangunan' | 'air-minum' | 'sanitasi' | 'prasarana-strategis';
  rumpunLabel: string;
  method: MethodType;
  allowedMethods?: string[];
  durationJp: number;
  level: 'Dasar' | 'Lanjutan' | 'Spesialisasi' | 'Bimtek';
  description: string;
  targetAudience: string;
  keyModules: string[];
  competencyStandard?: string;
  participantRequirements?: string[];
  detailedSyllabus?: SyllabusItem[];
  curriculumHistory?: {
    developedYear?: number;
    updatedYear?: number;
  };
  statusNote?: string;
}

export interface BangkomProgramItem {
  code: string;
  name: string;
  method: MethodType;
  jp?: number | string;
  jpPengajar?: number | string;
  tanggal?: string;
  waktu?: string;
  targetPeserta?: number;
  status?: string;
  pic?: string;
}

export interface BangkomUnit {
  id: string;
  code: string;
  name: string;
  location: string;
  province: string;
  regionGroup: 'Sumatera' | 'Jawa' | 'Kalimantan' | 'Sulawesi' | 'Papua';
  address: string;
  phone?: string;
  coverageAreas: string[];
  plannedTrainings2026: number;
  plannedTrainings2027?: number;
  featuredPrograms: BangkomProgramItem[];
  featuredPrograms2027?: BangkomProgramItem[];
}

export type BapekomUnit = BangkomUnit;

export interface ScheduleBreakdown {
  selfLearning?: string;
  onlineClass?: string;
  offlineClass?: string;
  magang?: string;
  ujiKompetensi?: string;
}

export interface KalenderTrainingItem {
  id: string;
  year?: number; // 2026 | 2027
  no: number;
  bulan: string; // 'Februari' | 'Maret' | 'April' | 'Mei' | 'Juni' | 'Juli' | 'Agustus' | 'September' | 'Oktober' | 'November';
  triwulan: 'I' | 'II' | 'III' | 'IV';
  title: string;
  code?: string;
  rumpun: 'umum' | 'penataan-bangunan' | 'air-minum' | 'sanitasi' | 'prasarana-strategis';
  rumpunLabel: string;
  penyelenggara: string;
  penyelenggaraCode: string;
  metode: string;
  jpPelatihan: number | string;
  jpPengajar?: number | string;
  targetPeserta: number;
  angkatan?: string;
  waktu: string;
  tanggalPelaksanaan: string;
  persiapan?: string;
  pic?: string;
  status: 'Selesai' | 'Ongoing' | 'Terjadwal' | string;
  keteranganSertifikasi?: string;
  standarKompetensi?: string;
  persyaratanPeserta?: string[];
  scheduleBreakdown?: ScheduleBreakdown;
  mataPelatihanBreakdown?: Array<{
    nama: string;
    asyn?: number;
    sync?: number;
    tatapMuka?: number;
    jpPengajar?: number;
  }>;
}

export interface TrainingMethod {
  id: MethodType;
  title: string;
  iconName: string;
  description: string;
  badgeColor: string;
}
