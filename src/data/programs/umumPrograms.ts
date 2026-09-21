import { TrainingProgram } from '../../types';

export const UMUM_PROGRAMS: TrainingProgram[] = [
  {
    id: 'um-01',
    code: 'CKPS-UM-01',
    title: 'Pelatihan PISK Bidang Cipta Karya',
    rumpun: 'umum',
    rumpunLabel: 'Umum',
    method: 'Blended Learning',
    allowedMethods: ['Klasikal', 'Distance Learning', 'Blended Learning'],
    durationJp: 75,
    level: 'Spesialisasi',
    description: 'Pelatihan Pejabat Inti Satuan Kerja (PISK) Bidang Cipta Karya agar peserta mampu menganalisis tugas dan fungsinya sebagai Pejabat Inti Satuan Kerja pada Unit Pelaksana Teknis DJCK.',
    competencyStandard: 'Setelah mengikuti Pelatihan Pejabat Inti Satuan Kerja (PISK) Bidang Cipta Karya, peserta mampu menganalisis tugas dan fungsinya sebagai Pejabat Inti Satuan Kerja pada Unit Pelaksana Teknis DJCK',
    participantRequirements: [
      'PNS Pusat Kementerian PU',
      'PISK yang telah menduduki jabatan sebagai KPA/KaSatker dan PPK pada unit kerja dan/atau UPT; Pegawai yang bekerja membidangi urusan kesatkeran untuk dipersiapkan menjadi KPA atau PPK; dan Diutamakan telah mengikuti Pelatihan PISK Tipe A (Pelatihan PISK Manajemen); atau Diutamakan pegawai yang telah memiliki Sertifikat PBJP, PNT, dan PADI.',
      'Pendidikan S1',
      'Memiliki pengalaman minimal 2 tahun sebagai Kasatker/PPK.'
    ],
    targetAudience: 'PNS Pusat Kementerian PU (KPA/KaSatker, PPK, Calon PISK UPT DJCK)',
    keyModules: [
      'Kebijakan, Proses Bisnis & Keterpaduan Bidang Cipta Karya',
      'Tata Kelola Data, Keandalan & Inovasi Infrastruktur Cipta Karya',
      'Penyelenggaraan Bangunan Gedung, Air Minum & Pengelolaan Sanitasi',
      'Pengendalian Kontrak Konstruksi, Manajemen Risiko & IBM / Penanganan Kemiskinan Ekstrem',
      'Sharing Session (Advokasi Hukum, BMN, IKN), Penanggulangan Bencana & Seminar Studi Kasus'
    ],
    curriculumHistory: {
      developedYear: 2021,
      updatedYear: 2025
    },
    detailedSyllabus: [
      { no: 1, subject: 'Budaya Anti-Korupsi', jp: 2 },
      { no: 2, subject: 'Core Values BerAkhlak, dan Manajemen Risiko Dasar', jp: 2 },
      { no: 3, subject: 'Kebijakan dan Strategi Penyelenggaraan Bidang Cipta Karya', jp: 3 },
      { no: 4, subject: 'Proses Bisnis Bidang Cipta Karya', jp: 3 },
      { no: 5, subject: 'Keterpaduan Penyelenggaraan Bidang Cipta Karya Dalam Pengembangan Kawasan Strategis', jp: 3 },
      { no: 6, subject: 'Tata Kelola Data, Sistem Informasi Dan Manajemen Pengetahuan Bidang Cipta Karya', jp: 3 },
      { no: 7, subject: 'Keandalan dan Inovasi dalam Penyelenggaraan Infrastruktur Bidang Cipta Karya', jp: 3 },
      { no: 8, subject: 'Penyelenggaraan Bangunan Gedung Dan Rumah Negara', jp: 3 },
      { no: 9, subject: 'Penyelenggaraan Sistem Penyediaan Air Minum', jp: 3 },
      { no: 10, subject: 'Penyelenggaraan Pengelolaan Sanitasi', jp: 6 },
      { no: 11, subject: 'Peningkatan Pengendalian Kontrak Konstruksi dan Manajemen Risiko', jp: 3 },
      { no: 12, subject: 'Kegiatan Infrastruktur Berbasis Masyarakat dan Penanganan Kemiskinan Ekstrem', jp: 8 },
      { no: 13, subject: 'Penanggulangan Bencana Bidang Cipta Karya', jp: 3 },
      { no: 14, subject: 'Sharing Session: Advokasi Hukum', jp: 3 },
      { no: 15, subject: 'Sharing Session: Pengelolaan Barang Milik Negara', jp: 3 },
      { no: 16, subject: 'Sharing Session: Pembelajaran Pembangunan IKN', jp: 4 },
      { no: 17, subject: 'Seminar Studi Kasus Kelompok: Tema 1 Manajemen Risiko', jp: 4 },
      { no: 18, subject: 'Seminar Studi Kasus Kelompok: Tema 2 Pengendalian Kontrak Konstruksi', jp: 4 },
      { no: 19, subject: 'Penjelasan Studi Kasus Tugas Perorangan', jp: 2 },
      { no: 20, subject: 'Pembimbingan Studi Kasus Tugas Perorangan', jp: 2 },
      { no: 21, subject: 'Seminar Studi Kasus Tugas Perorangan', jp: 8 }
    ]
  },
  {
    id: 'um-03',
    code: 'CKPS-UM-03',
    title: 'Pelatihan Jafung Penata Kelola Bangunan Gedung dan Kawasan Permukiman Jenjang Ahli Pertama',
    rumpun: 'umum',
    rumpunLabel: 'Umum',
    method: 'Full E-Learning',
    allowedMethods: ['Klasikal', 'Distance Learning', 'Blended Learning', 'Full E-Learning'],
    durationJp: 40,
    level: 'Dasar',
    description: 'Pelatihan Jafung Penata Kelola Bangunan Gedung dan Kawasan Permukiman Jenjang Ahli Pertama agar peserta mampu melaksanakan tugas dan fungsi sesuai standar kompetensi lulusan.',
    competencyStandard: 'Setelah mengikuti pelatihan ini, peserta mampu melaksanakan tugas dan fungsi Pejabat Fungsional Penata Kelola Bangunan Gedung dan Kawasan Permukiman Jenjang Ahli Pertama',
    participantRequirements: [
      'PNS Pusat Kementerian PU, dan PNS Daerah, yang bidang tugasnya terkait dengan Bangunan Gedung dan Kawasan Permukiman',
      'Jabatan Fungsional TBP/ Penata Kelola Bangunan Gedung dan Kawasan Permukiman',
      'Berijazah paling rendah Sarjana (S1) atau diploma empat (D4) bidang terkait diutamakan Jurusan Teknik Arsitektur/Teknik Sipil atau yang sejenisnya.'
    ],
    targetAudience: 'PNS Pusat & Daerah (JF TBP / Penata Kelola Bangunan Gedung & Permukiman Ahli Pertama)',
    keyModules: [
      'Budaya Anti-Korupsi & Core Values BerAkhlak',
      'Kebijakan Penyelenggaraan JF Penata Kelola Bangunan Gedung',
      'Sistem Informasi Si-Jack & Building Information Modelling (BIM)',
      'Pengembangan Profesi Berkelanjutan & Penilaian Kinerja / Angka Kredit',
      'Penyelenggaraan Kegiatan Penata Kelola Bangunan Gedung dan Kawasan Permukiman'
    ],
    statusNote: 'Belum bisa dilaksanakan, dikarenakan Materi Pelatihan perlu ditinjau kembali oleh Direktorat Bina Teknik Bangunan Gedung dan Penyehatan Lingkungan, Ditjen Cipta Karya',
    curriculumHistory: {
      developedYear: 2023
    },
    detailedSyllabus: [
      { no: 1, subject: 'Budaya Anti-Korupsi', jp: 2 },
      { no: 2, subject: 'Core Values BerAkhlak dan Manajemen Risiko Dasar', jp: 2 },
      { no: 3, subject: 'Kebijakan Penyelenggaraan Jabatan Fungsional Penata Kelola Bangunan Gedung dan Kawasan Permukiman', jp: 3 },
      { no: 4, subject: 'Pengantar Sistem Informasi (Pengantar Sistem Informasi Jafung Cipta Karya (Si-Jack), Pengantar Sistem Teknologi Building Information Modelling (BIM))', jp: 6 },
      { no: 5, subject: 'Pengembangan Profesi Berkelanjutan', jp: 4 },
      { no: 6, subject: 'Penilaian Kinerja dan Konversi Predikat Kinerja ke Angka Kredit', jp: 14 },
      { no: 7, subject: 'Penyelenggaraan Kegiatan Penata Kelola Bangunan Gedung dan Kawasan Permukiman', jp: 9 }
    ]
  },
  {
    id: 'um-04',
    code: 'CKPS-UM-04',
    title: 'Pelatihan Jafung Penata Kelola Penyehatan Lingkungan Jenjang Ahli Pertama',
    rumpun: 'umum',
    rumpunLabel: 'Umum',
    method: 'Blended Learning',
    allowedMethods: ['Klasikal', 'Distance Learning', 'Blended Learning', 'Full E-Learning'],
    durationJp: 40,
    level: 'Dasar',
    description: 'Pelatihan Jabatan Fungsional Penata Kelola Penyehatan Lingkungan Jenjang Ahli Pertama agar peserta mampu melaksanakan tugas dan fungsi sesuai standar kompetensi lulusan.',
    competencyStandard: 'Setelah Mengikuti Pelatihan Ini, Peserta mampu melaksanakan Tugas dan Fungsi Pejabat Fungsional Penata Kelola Penyehatan Lingkungan Jenjang Ahli Pertama',
    participantRequirements: [
      'ASN Kementerian PU, dan ASN Daerah, yang bidang tugasnya terkait dengan Penyelenggaraan Penyehatan Lingkungan',
      'Jabatan Fungsional TPL / Penata Kelola Penyehatan Lingkungan Ahli Pertama.',
      'Berijazah paling rendah Sarjana (S1) atau diploma empat (D4) bidang terkait diutamakan Jurusan Teknik Penyehatan Lingkungan/Teknik Sipil atau yang sejenisnya.'
    ],
    targetAudience: 'ASN Pusat & Daerah (JF TPL / Penata Kelola Penyehatan Lingkungan Ahli Pertama)',
    keyModules: [
      'Budaya Anti-korupsi & Core Values BerAkhlak',
      'Kebijakan Penyelenggaraan JF Penata Kelola Penyehatan Lingkungan',
      'Sistem Informasi Si-Jack, BIM & Epanet',
      'Pengembangan Profesi Berkelanjutan & Penilaian Angka Kredit',
      'Penyelenggaraan Kegiatan Penata Kelola Penyehatan Lingkungan'
    ],
    statusNote: 'Belum bisa dilaksanakan, dikarenakan Materi Pelatihan perlu ditinjau kembali oleh Direktorat Bina Teknik Bangunan Gedung dan Penyehatan Lingkungan, Ditjen Cipta Karya',
    curriculumHistory: {
      developedYear: 2023
    },
    detailedSyllabus: [
      { no: 1, subject: 'Budaya Anti-korupsi', jp: 2 },
      { no: 2, subject: 'Core Values BerAkhlak Dan Manajemen Risiko Dasar', jp: 2 },
      { no: 3, subject: 'Kebijakan Penyelenggaraan Jabatan Fungsional Penata Kelola Penyehatan Lingkungan', jp: 3 },
      { no: 4, subject: 'Pengantar Sistem Informasi (Pengantar Sistem Informasi Jafung Cipta Karya (Si-Jack), Pengantar Sistem Teknologi Building Information Modelling (BIM), Pengantar Aplikasi Epanet)', jp: 6 },
      { no: 5, subject: 'Pengembangan Profesi Berkelanjutan', jp: 4 },
      { no: 6, subject: 'Penilaian Kinerja dan Konversi Predikat Kinerja ke Angka Kredit', jp: 14 },
      { no: 7, subject: 'Penyelenggaraan Kegiatan Penata Kelola Penyehatan Lingkungan', jp: 9 }
    ]
  },
  {
    id: 'um-05',
    code: 'CKPS-UM-05',
    title: 'Pelatihan Penerapan Teknologi RISHA dalam Penyediaan Perumahan',
    rumpun: 'umum',
    rumpunLabel: 'Umum',
    method: 'Full E-Learning',
    allowedMethods: ['Full E-Learning'],
    durationJp: 40,
    level: 'Spesialisasi',
    description: 'Pelatihan penerapan teknologi RISHA (Rumah Instan Sederhana Sehat) agar peserta mampu menerapkan prinsip-prinsip perencanaan dan perakitan bangunan RISHA dalam pembangunan perumahan sesuai pedoman.',
    competencyStandard: 'Setelah mengikuti Pelatihan, peserta diharapkan mampu menerapkan prinsip – prinsip perencanaan dan perakitan bangunan RISHA dalam pembangunan perumahan sesuai dengan pedoman dan ketentuan yang berlaku',
    participantRequirements: [
      'ASN Pusat Pejabat Fungsional Ahli Pertama Bidang Pekerjaan Umum, Perumahan dan Kawasan Permukiman',
      'ASN Daerah Bidang Perencanaan, Penanganan Bencana, Perumahan dan Kawasan Permukiman',
      'Pendidikan minimal S1 Teknik Sipil/ Arsitektur/Teknik Geodesi dan Geologi Teknik/ Teknik Lingkungan/ Teknik Planologi',
      'Masa Kerja minimal 1 tahun.'
    ],
    targetAudience: 'ASN Pusat & Daerah (Bidang Perumahan, Permukiman & Penanganan Bencana)',
    keyModules: [
      'Prinsip Perencanaan Bangunan RISHA',
      'Komponen Komponen Modular RISHA',
      'Teknik Perakitan & Pengawasan Kualitas RISHA',
      'Penerapan Teknologi RISHA Pada Penyediaan Perumahan Pasca Bencana'
    ],
    curriculumHistory: {
      developedYear: 2024
    },
    detailedSyllabus: [
      { no: 1, subject: 'Budaya Anti-korupsi', jp: 2 },
      { no: 2, subject: 'Core Values BerAkhlak Dan Manajemen Risiko Dasar', jp: 2 },
      { no: 3, subject: 'Kebijakan Penyediaan Perumahan Berbasis Teknologi Modular', jp: 3 },
      { no: 4, subject: 'Prinsip Dasar dan Komponen Struktur Teknologi RISHA', jp: 6 },
      { no: 5, subject: 'Perencanaan Teknis dan Desain Tata Ruang Rumah RISHA', jp: 8 },
      { no: 6, subject: 'Praktik Perakitan dan Pengawasan Mutu Konstruksi RISHA', jp: 12 },
      { no: 7, subject: 'Evaluasi dan Studi Kasus Penerapan RISHA Pasca Bencana', jp: 7 }
    ]
  }
];
