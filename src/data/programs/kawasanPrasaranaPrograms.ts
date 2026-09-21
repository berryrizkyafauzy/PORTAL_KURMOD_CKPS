import { TrainingProgram } from '../../types';

export const KAWASAN_PRASARANA_PROGRAMS: TrainingProgram[] = [
  {
    id: 'ps-01',
    code: 'CKPS-PS-01',
    title: 'Pelatihan Penyelenggaraan Prasarana Strategis',
    rumpun: 'prasarana-strategis',
    rumpunLabel: 'Sektor Prasarana Strategis',
    method: 'Blended Learning',
    allowedMethods: ['Klasikal', 'Distance Learning', 'Blended Learning'],
    durationJp: 47,
    level: 'Spesialisasi',
    description: 'Pelatihan untuk memberikan pemahaman mengenai tugas pokok dan fungsi Penyelenggaraan Prasarana Strategis bagi ASN Direktorat Jenderal Prasarana Strategis Kementerian PU.',
    competencyStandard: 'Setelah mengikuti pelatihan ini, peserta diharapkan mampu memahami tugas pokok dan fungsi Penyelenggaraan Prasarana Strategis.',
    participantRequirements: [
      'Aparatur Sipil Negara (ASN) yang bertugas di lingkungan Direktorat Jenderal Prasarana Strategis, Kementerian Pekerjaan Umum',
      'Pendidikan D3',
      'Diutamakan Jabatan Fungsional Teknis Jenjang Ahli Pertama',
      'Dapat mengoperasikan komputer dan program standar Microsoft Word, PowerPoint, dan Microsoft Excel'
    ],
    targetAudience: 'ASN Ditjen Prasarana Strategis Kementerian PU (Jabatan Fungsional Teknis Ahli Pertama)',
    keyModules: [
      'Kebijakan, Strategi & NSPK Prasarana Strategis',
      'Pengantar Penyelenggaraan Prasarana Strategis & Bangunan Gedung',
      'Pengantar Tata Kelola Proyek & SIMONP (Sistem Informasi Monitoring)',
      'Lesson Learned, Studi Lapangan / Studi Kasus & Seminar'
    ],
    curriculumHistory: { developedYear: 2025 },
    detailedSyllabus: [
      { no: 1, subject: 'Budaya Anti-korupsi', jp: 2 },
      { no: 2, subject: 'Core Values Ber-akhlak Dan Manajemen Risiko Dasar', jp: 2 },
      { no: 3, subject: 'Kebijakan dan Strategi Prasarana Strategis', jp: 3 },
      { no: 4, subject: 'Norma, Standar, Prosedur, dan Kriteria Prasarana Strategis', jp: 4 },
      { no: 5, subject: 'Pengantar Penyelenggaraan Prasarana Strategis', jp: 6 },
      { no: 6, subject: 'Pengantar Penyelenggaraan Bangunan Gedung', jp: 4 },
      { no: 7, subject: 'Pengantar Tata Kelola Proyek Prasarana Strategis', jp: 4 },
      { no: 8, subject: 'Sistem Informasi Monitoring Penyelenggaraan Prasarana Strategis', jp: 4 },
      { no: 9, subject: 'Lesson Learned Penyelenggaraan Prasarana Strategis', jp: 2 },
      { no: 10, subject: 'Penjelasan Studi Lapangan/Studi Kasus', jp: 2 },
      { no: 11, subject: 'Studi Lapangan / Studi Kasus', jp: 8 },
      { no: 12, subject: 'Seminar', jp: 6 }
    ]
  },
  {
    id: 'ps-02',
    code: 'CKPS-PS-02',
    title: 'Pelatihan Pemeriksaan Kerusakan Bangunan Gedung',
    rumpun: 'prasarana-strategis',
    rumpunLabel: 'Sektor Prasarana Strategis',
    method: 'Blended Learning',
    allowedMethods: ['Klasikal', 'Distance Learning', 'Blended Learning'],
    durationJp: 51,
    level: 'Spesialisasi',
    description: 'Pelatihan tata cara pemeriksaan kerusakan bangunan gedung bagi ASN Direktorat Jenderal Prasarana Strategis dan Ditjen Cipta Karya.',
    competencyStandard: 'Setelah mengikuti pelatihan ini, peserta diharapkan mampu melaksanakan pemeriksaan kerusakan bangunan gedung.',
    participantRequirements: [
      'ASN yang bertugas di Lingkungan Direktorat Jenderal Prasarana Strategis dan Direktorat Jenderal Cipta Karya, Kementerian Pekerjaan Umum/ ASN Pemerintah Daerah yang ditugaskan untuk melaksanakan kegiatan pemeriksaan kerusakan bangunan gedung.',
      'Diutamakan Jabatan Fungsional Penata Kelola Bangunan Gedung dan Kawasan Permukiman, namun terbuka bagi jabatan fungsional lain yang relevan di lingkungan Direktorat Jenderal Prasarana Strategis dan Direktorat Jenderal Cipta Karya.',
      'Pendidikan D3/S1, diutamakan dari Jurusan Teknik Sipil, Teknik Arsitektur, Teknik Bangunan, atau bidang teknik lain yang relevan.',
      'Memiliki pengalaman kerja minimal 1 (satu) tahun dalam melaksanakan tugas yang relevan di bidang bangunan gedung.'
    ],
    targetAudience: 'ASN Ditjen Prasarana Strategis & Ditjen Cipta Karya / Pemda (Tim Pemeriksa Kerusakan BG)',
    keyModules: [
      'Kebijakan Dukungan Infrastruktur BG Bidang Prasarana Strategis',
      'Audit Teknis Bangunan Gedung & Penilaian Tingkat Kerusakan',
      'Perhitungan Kebutuhan Biaya Penanganan Kerusakan BG & Penyusunan Laporan',
      'Studi Lapangan / Studi Kasus & Seminar'
    ],
    curriculumHistory: { developedYear: 2025 },
    detailedSyllabus: [
      { no: 1, subject: 'Budaya Anti-korupsi', jp: 2 },
      { no: 2, subject: 'Core Values Ber-akhlak Dan Manajemen Risiko Dasar', jp: 2 },
      { no: 3, subject: 'Kebijakan Pelaksanaan Dukungan Infrastruktur Bangunan Gedung Bidang Prasarana Strategis', jp: 2 },
      { no: 4, subject: 'Lesson Learned Pemeriksaan Kerusakan Bangunan Gedung', jp: 2 },
      { no: 5, subject: 'Pengantar Pemeriksaan Kerusakan Bangunan Gedung', jp: 3 },
      { no: 6, subject: 'Audit Teknis Bangunan Gedung', jp: 6 },
      { no: 7, subject: 'Penilaian dan Penetapan Tingkat Kerusakan Bangunan Gedung', jp: 8 },
      { no: 8, subject: 'Perhitungan Kebutuhan Biaya Penanganan Kerusakan Bangunan Gedung', jp: 6 },
      { no: 9, subject: 'Penyusunan Laporan Pemeriksaan Kerusakan Bangunan Gedung', jp: 4 },
      { no: 10, subject: 'Penjelasan Studi Lapangan/Studi Kasus', jp: 2 },
      { no: 11, subject: 'Studi Lapangan / Studi Kasus', jp: 8 },
      { no: 12, subject: 'Seminar', jp: 6 }
    ]
  }
];


