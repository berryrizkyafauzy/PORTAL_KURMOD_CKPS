import { TrainingProgram } from '../../types';

export const SANITASI_PROGRAMS: TrainingProgram[] = [
  {
    id: 'sa-01',
    code: 'CKPS-SA-01',
    title: 'Pelatihan Penyelenggaraan Pengelolaan PLP',
    rumpun: 'sanitasi',
    rumpunLabel: 'Sanitasi',
    method: 'Blended Learning',
    allowedMethods: ['Klasikal', 'Distance Learning', 'Blended Learning'],
    durationJp: 86,
    level: 'Dasar',
    description: 'Pelatihan untuk memahami dan memberikan masukan teknis terkait penyelenggaraan bidang PLP / Sanitasi (persampahan, air limbah, drainase).',
    competencyStandard: 'Setelah mengikuti pelatihan ini peserta mampu memahami dan memberikan masukan teknis, terkait dengan penyelenggaraan bidang PLP / Sanitasi',
    participantRequirements: [
      'ASN Pusat dan Daerah',
      'Jabatan Fungsional Teknik (JFT) Penyehatan Lingkungan / Penata Kelola Penyehatan Lingkungan Ahli',
      'Diutamakan Staf Potensial PNS ≥ 5 tahun di bidang Cipta Karya',
      'Dengan Pendidikan minimal S1 Teknik atau Non Teknik yang telah bekerja di Lingkungan Ditjen Cipta Karya'
    ],
    targetAudience: 'ASN Pusat & Daerah (JF Penyehatan Lingkungan / Staf Potensial Cipta Karya)',
    keyModules: [
      'Perencanaan Persampahan, Air Limbah & Drainase',
      'Pelaksanaan Konstruksi Persampahan & Air Limbah',
      'Operasi & Pemeliharaan TPA, IPAL & IPLT',
      'Pengendalian, Kemitraan, Kelembagaan, Mitigasi Iklim & Kunjungan Lapangan'
    ],
    curriculumHistory: { developedYear: 2017 },
    detailedSyllabus: [
      { no: 1, subject: 'Budaya Anti-Korupsi', jp: 2 },
      { no: 2, subject: 'Core Values BerAkhlak, dan Manajemen Risiko Dasar', jp: 2 },
      { no: 3, subject: 'Kebijakan Pengembangan SDM', jp: 2 },
      { no: 4, subject: 'Pengantar Pembangunan Bidang PLP', jp: 4 },
      { no: 5, subject: 'Kebijakan dan Strategi Pengembangan PLP', jp: 2 },
      { no: 6, subject: 'Perencanaan Persampahan', jp: 5 },
      { no: 7, subject: 'Perencanaan Air Limbah', jp: 5 },
      { no: 8, subject: 'Perencanaan, Pelaksanaan, OP Drainase', jp: 5 },
      { no: 9, subject: 'Pelaksanaan Konstruksi Sektor Persampahan', jp: 4 },
      { no: 10, subject: 'Pelaksanaan Konstruksi Sektor Air Limbah', jp: 4 },
      { no: 11, subject: 'Operasi dan Pemeliharaan Tempat Pemrosesan Akhir (TPA)', jp: 3 },
      { no: 12, subject: 'Operasi dan Pemeliharaan Instalasi Pengolahan Air Limbah (IPAL) dan Instalasi Pengolahan Lumpur Tinja (IPLT)', jp: 3 },
      { no: 13, subject: 'Pengendalian Bidang PLP', jp: 4 },
      { no: 14, subject: 'Kemitraan dan Investasi Bidang PLP', jp: 3 },
      { no: 15, subject: 'Kelembagaan Bidang PLP', jp: 3 },
      { no: 16, subject: 'Pemberdayaan Masyarakat', jp: 3 },
      { no: 17, subject: 'Mitigasi dan Adaptasi Perubahan Iklim Bidang PLP', jp: 5 },
      { no: 18, subject: 'Penanggulangan Bencana', jp: 3 },
      { no: 19, subject: 'Kunjungan Lapangan dan Seminar', jp: 24 }
    ]
  },
  {
    id: 'sa-02',
    code: 'CKPS-SA-02',
    title: 'Pelatihan Pelaksanaan dan Pengawasan Konstruksi TPA dan IPLT',
    rumpun: 'sanitasi',
    rumpunLabel: 'Sanitasi',
    method: 'Blended Learning',
    allowedMethods: ['Klasikal', 'Distance Learning', 'Blended Learning'],
    durationJp: 66,
    level: 'Spesialisasi',
    description: 'Pelatihan pelaksanaan dan pengawasan konstruksi Tempat Pemrosesan Akhir (TPA) dan Instalasi Pengolahan Lumpur Tinja (IPLT).',
    competencyStandard: 'Setelah mengikuti pelatihan ini, peserta mampu menerapkan dan menganalisis rencana pelaksanaan pembangunan sarana dan prasarana di TPA dan IPLT',
    participantRequirements: [
      'ASN Pusat dan Daerah di bidang permukiman/cipta karya',
      'Jabatan diutamakan: a) Kasatker b) PPK c) Direksi Lapangan d) Penata Teknik e) Petugas Teknik f) JFT TPL / Penata Kelola Penyehatan Lingkungan Pertama',
      'Pendidikan Minimal D3/S1 bidang terkait di utamakan Jurusan Teknik Sipil dan atau Teknik Penyehatan dan Lingkungan',
      'Pengalaman Kerja : Memiliki pengalaman dalam pelaksanaan dan pengawasan konstruksi minimal 1 tahun untuk S1, dan 2 tahun untuk D3'
    ],
    targetAudience: 'ASN Kasatker / PPK / Direksi Lapangan / Petugas Teknik / JFT TPL',
    keyModules: [
      'Manajemen Konstruksi Pra-Konstruksi & Konstruksi TPA/IPLT',
      'Geoteknik, Stabilitas Tanah & SMKK TPA/IPLT',
      'Konstruksi Landfill, IPL/IPLT, Jalan, Drainase & ME',
      'Studi Kasus & Seminar Konstruksi TPA dan IPLT'
    ],
    curriculumHistory: { developedYear: 2022 },
    detailedSyllabus: [
      { no: 1, subject: 'Budaya Anti Korupsi', jp: 2 },
      { no: 2, subject: 'Core Values BerAkhlak, dan Manajemen Risiko Dasar', jp: 2 },
      { no: 3, subject: 'Konsep Dasar Perencanaan dan Manajemen TPA dan IPLT', jp: 4 },
      { no: 4, subject: 'Pengantar Pengawasan Pekerjaan Konstruksi', jp: 5 },
      { no: 5, subject: 'Pelaksanaan Sistem Manajemen Keselamatan Konstruksi', jp: 3 },
      { no: 6, subject: 'Manajemen Konstruksi Pembangunan TPA dan IPLT – Tahap Pra Konstruksi', jp: 7 },
      { no: 7, subject: 'Manajemen Konstruksi Pembangunan TPA dan IPLT – Tahap Konstruksi', jp: 7 },
      { no: 8, subject: 'Pekerjaan dan Permasalahan Stabilitas Tanah Pembangunan TPA dan IPLT (Aspek Geoteknik dan Stabilitas Tanah)', jp: 3 },
      { no: 9, subject: 'Pelaksanaan Pekerjaan Konstruksi Landfill', jp: 3 },
      { no: 10, subject: 'Pelaksanaan Pekerjaan Konstruksi IPL dan IPLT', jp: 3 },
      { no: 11, subject: 'Pelaksanaan Pekerjaan Konstruksi Jalan, Drainase dan Bangunan Penunjang', jp: 3 },
      { no: 12, subject: 'Pelaksanaan Pekerjaan Pemeriksaan Geologi dan Hidrogeologi', jp: 3 },
      { no: 13, subject: 'Pelaksanaan Pekerjaan Mekanikal dan Elektrikal', jp: 3 },
      { no: 14, subject: 'Penjelasan Studi Kasus', jp: 2 },
      { no: 15, subject: 'Studi Kasus', jp: 8 },
      { no: 16, subject: 'Seminar', jp: 8 }
    ]
  },
  {
    id: 'sa-03',
    code: 'CKPS-SA-03',
    title: 'Pelatihan Perencanaan Pengolahan Sampah dengan Konsep Waste to Energy',
    rumpun: 'sanitasi',
    rumpunLabel: 'Sanitasi',
    method: 'Blended Learning',
    allowedMethods: ['Klasikal', 'Distance Learning', 'Blended Learning'],
    durationJp: 53,
    level: 'Spesialisasi',
    description: 'Pelatihan perencanaan fasilitas WTE agar peserta mampu memilih dan menentukan teknologi pengolahan sampah menjadi energi (biologis, termal, gasifikasi, insinerasi).',
    competencyStandard: 'Setelah mengikuti Pelatihan Perencanaan Pengolahan Sampah dengan Konsep Waste To Energy, peserta mampu mengumpulkan dan memilah data berdasarkan prinip serta menentukan teknologi Waste To Energy dengan mempertimbangkan aspek teknis dan non teknis',
    participantRequirements: [
      'ASN di lingkungan PU',
      'Minimal Pelaksana atau jabatan fungsional TPL / Penata Kelola Penyehatan Lingkungan Ahli pertama',
      'Minimal Pendidikan S1 Teknik Sipil/Teknik Lingkungan',
      'Memiliki pengalaman dalam penyelenggaraan infrastruktur pengelolaan sampah minimal 3 (tiga) tahun, pernah mengikuti pelatihan terkait pengelolaan sampah'
    ],
    targetAudience: 'ASN PU (Minimal S1 Teknik, Pengalaman Minimal 3 Tahun Pengelolaan Sampah)',
    keyModules: [
      'Komposisi, Karakteristik & Bahan Baku WTE',
      'Teknologi Biologis Anaerobic Digester & Pirolisis',
      'Teknologi Gasifikasi & Insinerasi WTE Termal',
      'Monitoring Emisi, Penanganan Residu, Pola KPBU & Kunjungan Lapangan'
    ],
    curriculumHistory: { developedYear: 2018 },
    detailedSyllabus: [
      { no: 1, subject: 'Budaya Anti Korupsi', jp: 2 },
      { no: 2, subject: 'Core Values BerAkhlak, dan Manajemen Risiko Dasar', jp: 2 },
      { no: 3, subject: 'Kebijakan dan Strategi Pengembangan Waste to Energy', jp: 3 },
      { no: 4, subject: 'Pengantar Pengolahan Sampah Secara Umum', jp: 2 },
      { no: 5, subject: 'Komposisi, Karakteristik dan Penyiapan Bahan Baku untuk Fasilitas WTE', jp: 4 },
      { no: 6, subject: 'Best Practice', jp: 3 },
      { no: 7, subject: 'Teknologi WTE berbasis Proses Biologis Anaerobic Digester', jp: 3 },
      { no: 8, subject: 'Teknologi Termal WTE berbasis Proses Pirolisis', jp: 3 },
      { no: 9, subject: 'Teknologi Termal WTE berbasis Gasifikasi', jp: 3 },
      { no: 10, subject: 'Teknologi WTE berbasis Proses Pembakaran (Insinerasi)', jp: 3 },
      { no: 11, subject: 'Identifikasi dan Monitoring Emisi dari Fasilitas WTE Termal', jp: 3 },
      { no: 12, subject: 'Pengendalian Emisi Partikulat dan Gas dari Fasilitas WTE Termal', jp: 3 },
      { no: 13, subject: 'Penanganan Residu dari WTE', jp: 2 },
      { no: 14, subject: 'Penyelenggaraan Pengolahan Sampah menjadi Energi melalui pola KPBU', jp: 4 },
      { no: 15, subject: 'Persiapan Kunjungan Lapangan', jp: 1 },
      { no: 16, subject: 'Kunjungan Lapangan', jp: 8 },
      { no: 17, subject: 'Seminar', jp: 4 }
    ]
  },
  {
    id: 'sa-04',
    code: 'CKPS-SA-04',
    title: 'Pelatihan Penyusunan FS dan LARP SPALD Perkotaan',
    rumpun: 'sanitasi',
    rumpunLabel: 'Sanitasi',
    method: 'Blended Learning',
    allowedMethods: ['Klasikal', 'Distance Learning', 'Blended Learning'],
    durationJp: 39,
    level: 'Spesialisasi',
    description: 'Pelatihan pendampingan kajian studi kelayakan (FS) dan rencana pengadaan tanah (LARP) Sistem Pengelolaan Air Limbah Domestik (SPALD) Perkotaan.',
    competencyStandard: 'Setelah mengikuti pelatihan ini, para peserta latih diharapkan mampu menjelaskan pemahaman umum tentang penyusunan FS dan LARP, menerapkan pelaksanaan kajian FS, menerapkan pendampingan pengumpulan dan pengolahan data sekunder dan primer, melakukan pendampingan penyusunan outline FS, menjelaskan waktu, prinsip dan prosedur pengadaan tanah untuk umum dan mampu memberikan pendampingan penyusunan dokumen LARP SPALD Perkotaan',
    participantRequirements: [
      'ASN Pusat dan Daerah',
      'Diutamakan dari Direktorat pengelola kegiatan ESP di Ditjen Cipta Karya dan dari pemerintah daerah lokasi kegiatan SPALD Perkotaan',
      'Pendidikan D4/S1: Teknik (TL, Sipil, Planologi, Geologi atau setara sesuai dengan RPLnya dengan pengalaman minimal 5 tahun); non teknik (pengalaman minimal 3 tahun di bidang PLP)',
      'Diutamakan yang pernah ditugaskan sebagai tim teknis pendamping PPC SPALD Perkotaan atau Tim Teknis PMO.'
    ],
    targetAudience: 'ASN Tim Teknis Pendamping PPC SPALD Perkotaan / PMO ESP Ditjen Cipta Karya',
    keyModules: [
      'Kajian FS SPALD Perkotaan & Pengumpulan Data',
      'Outline Penyusunan FS SPALD Perkotaan',
      'Tata Waktu, Prinsip & Prosedur Pengadaan Tanah LARP',
      'Studi Kasus Penyusunan FS & LARP SPALD Perkotaan'
    ],
    curriculumHistory: { developedYear: 2019 },
    detailedSyllabus: [
      { no: 1, subject: 'Budaya Anti Korupsi', jp: 2 },
      { no: 2, subject: 'Core Values BerAkhlak, dan Manajemen Risiko Dasar', jp: 2 },
      { no: 3, subject: 'Pemahaman Umum dan Kebijakan Penyusunan FS dan LARP SPALD Perkotaan', jp: 2 },
      { no: 4, subject: 'Kajian FS SPALD Perkotaan', jp: 12 },
      { no: 5, subject: 'Pengumpulan Data dalam Penyusunan FS SPALD', jp: 3 },
      { no: 6, subject: 'Outline Penyusunan FS SPALD Perkotaan', jp: 2 },
      { no: 7, subject: 'Tata Waktu, Prinsip dan Prosedur Pengadaan Tanah', jp: 2 },
      { no: 8, subject: 'Penyusunan LARP SPALD Perkotaan', jp: 4 },
      { no: 9, subject: 'Studi Kasus Penyusunan FS dan LARP SPALD Perkotaan dan Lesson Learn', jp: 10 }
    ]
  },
  {
    id: 'sa-05',
    code: 'CKPS-SA-05',
    title: 'Pelatihan Pendampingan Penyusunan DED SPALD-T Skala Perkotaan',
    rumpun: 'sanitasi',
    rumpunLabel: 'Sanitasi',
    method: 'Blended Learning',
    allowedMethods: ['Klasikal', 'Distance Learning', 'Blended Learning'],
    durationJp: 58,
    level: 'Spesialisasi',
    description: 'Pelatihan pendampingan DED SPALD Terpusat Skala Perkotaan agar peserta mampu melakukan analisis terhadap dokumen perancangan terinci SPALD-T.',
    competencyStandard: 'Setelah mengikuti pelatihan ini, peserta mampu melakukan analisis terhadap dokumen DED SPALD-T Skala Perkotaan',
    participantRequirements: [
      'ASN Pusat dan Daerah di Bidang Permukiman / Cipta Karya',
      'Pendidikan minimal S1 (diutamakan Teknik)',
      'Memiliki Kompetensi dalam Bidang Sanitasi'
    ],
    targetAudience: 'ASN Pusat & Daerah Bidang Permukiman / Cipta Karya / Tim DED SPALD-T',
    keyModules: [
      'Penyiapan Dokumen & Verifikasi Validasi Data DED SPALD-T',
      'Survei Pengukuran Detail Subsistem SPALD-T',
      'Penyusunan DED, ME, SCADA & Analisis Harga Satuan/RAB',
      'Studi Kasus, Kunjungan Lapangan & Seminar DED SPALD-T'
    ],
    curriculumHistory: { developedYear: 2020 },
    detailedSyllabus: [
      { no: 1, subject: 'Budaya Anti-korupsi', jp: 2 },
      { no: 2, subject: 'Core Values Ber-akhlak Dan Manajemen Risiko Dasar', jp: 2 },
      { no: 3, subject: 'Pengantar Penyusunan DED SPALD-T Skala Perkotaan', jp: 3 },
      { no: 4, subject: 'Penyiapan Dokumen DED SPALD-T Skala Perkotaan', jp: 4 },
      { no: 5, subject: 'Verifikasi dan Validasi Data Perencanaan', jp: 4 },
      { no: 6, subject: 'Survei Pengukuran Detail Subsistem SPALD-T Skala Perkotaan', jp: 4 },
      { no: 7, subject: 'Penyusunan DED', jp: 12 },
      { no: 8, subject: 'Mekanikal Elektrikal dan SCADA', jp: 5 },
      { no: 9, subject: 'Penyusunan Analisis Harga Satuan dan RAB', jp: 4 },
      { no: 10, subject: 'Studi Kasus Tinjauan Dokumen DED SPALD-T', jp: 6 },
      { no: 11, subject: 'Kunjungan Lapangan dan Seminar', jp: 12 }
    ]
  },
  {
    id: 'sa-06',
    code: 'CKPS-SA-06',
    title: 'Pelatihan Rencana Teknis Terinci (DED) TPA',
    rumpun: 'sanitasi',
    rumpunLabel: 'Sanitasi',
    method: 'Blended Learning',
    allowedMethods: ['Klasikal', 'Distance Learning', 'Blended Learning'],
    durationJp: 62,
    level: 'Spesialisasi',
    description: 'Pelatihan penyusunan DED TPA dari survei, analisa data, konsep desain, nota desain, hingga gambar teknis & rencana operasional TPA.',
    competencyStandard: 'Setelah mengikuti pelatihan ini, peserta diharapkan mampu menganalisis proses penyusunan perencanaan teknis TPA',
    participantRequirements: [
      'ASN Pusat dan Daerah',
      'Latar belakang pendidikan S1 teknik (dengan pengalaman minimal 4 tahun)',
      'D3 teknik (dengan pengalaman minimal 5 tahun) di bidang PLP yang diutamakan sektor persampahan',
      'Min Jafung TPL / Penata Kelola Penyehatan Lingkungan Ahli Pertama'
    ],
    targetAudience: 'ASN S1/D3 Teknik / Jafung TPL / Penata Kelola Penyehatan Lingkungan',
    keyModules: [
      'Survey & Analisa Data Perencanaan TPA',
      'Konsep Desain, Nota Desain & Gambar Teknis TPA',
      'Spesifikasi Teknis, RAB & Rencana Operasional TPA',
      'Kunjungan Lapangan TPA & Seminar'
    ],
    curriculumHistory: { developedYear: 2019 },
    detailedSyllabus: [
      { no: 1, subject: 'Budaya Anti-korupsi', jp: 2 },
      { no: 2, subject: 'Core Values Ber-akhlak Dan Manajemen Risiko Dasar', jp: 2 },
      { no: 3, subject: 'Survey Perencanaan TPA', jp: 4 },
      { no: 4, subject: 'Analisa Data Perencanaan TPA', jp: 8 },
      { no: 5, subject: 'Konsep Desain TPA', jp: 4 },
      { no: 6, subject: 'Nota Desain TPA', jp: 10 },
      { no: 7, subject: 'Gambar Teknis TPA', jp: 6 },
      { no: 8, subject: 'Spesifikasi Teknis dan RAB', jp: 6 },
      { no: 9, subject: 'Rencana Operasional TPA', jp: 4 },
      { no: 10, subject: 'Kunjungan Lapangan', jp: 10 },
      { no: 11, subject: 'Seminar', jp: 6 }
    ]
  },
  {
    id: 'sa-07',
    code: 'CKPS-SA-07',
    title: 'Pelatihan Pengawasan Konstruksi SPALD',
    rumpun: 'sanitasi',
    rumpunLabel: 'Sanitasi',
    method: 'Blended Learning',
    allowedMethods: ['Klasikal', 'Distance Learning', 'Blended Learning'],
    durationJp: 69,
    level: 'Spesialisasi',
    description: 'Pelatihan pengawasan pelaksanaan konstruksi SPALD (IPALD, sewerage/perpipaan, ME & SCADA, unit pelayanan).',
    competencyStandard: 'Setelah mengikuti pelatihan ini peserta mampu melaksanakan pengawasan pelaksanaan Konstruksi SPALD.',
    participantRequirements: [
      'ASN pada Satuan Kerja Sistem Penyediaan Air Minum dan Staff potensial di Satuan Kerja Sanitasi yang telah mengikuti Pelatihan Dasar Air Limbah, Staf Pemda yang ditugaskan pada Dinas yang menangani sistem Air Limbah Domestik.',
      'Pendidikan D4/S1 bidang Teknik Lingkungan/ Teknik Sipil/ Teknik Mesin/ Teknik Penyehatan',
      'Dapat mengoperasikan Komputer dan program standar Microsoft Word, PowerPoint, Microsoft Excel.',
      'Ditugaskan dan/ atau akan ditugaskan di bidang Air Limbah Domestik'
    ],
    targetAudience: 'ASN Satker Air Minum / Sanitasi / Dinas Pemda Air Limbah Domestik',
    keyModules: [
      'Pengawasan Pelaksanaan IPALD & Perpipaan Sewerage',
      'Pengawasan Mekanikal Elektrikal SCADA & Unit Pelayanan',
      'SMKK Pengawasan Konstruksi & Pengakhiran Konstruksi SPALD',
      'Studi Lapangan / Studi Kasus & Seminar'
    ],
    curriculumHistory: { updatedYear: 2025 },
    detailedSyllabus: [
      { no: 1, subject: 'Budaya Anti-korupsi', jp: 2 },
      { no: 2, subject: 'Core Values Ber-akhlak Dan Manajemen Risiko Dasar', jp: 2 },
      { no: 3, subject: 'Kebijakan & Strategi Penyelenggaraan Sanitasi', jp: 3 },
      { no: 4, subject: 'Penyelenggaraan Pengawasan Pelaksanaan Konstruksi SPALD', jp: 6 },
      { no: 5, subject: 'Dokumen Teknis Pengawasan Pelaksanaan Konstruksi SPALD', jp: 6 },
      { no: 6, subject: 'Persiapan Pengawasan Pelaksanaan Konstruksi SPALD', jp: 4 },
      { no: 7, subject: 'Pengawasan Pelaksanaan Pekerjaan Unit IPALD', jp: 6 },
      { no: 8, subject: 'Pengawasan Pelaksanaan Pekerjaan Sistem Perpipaan (Sewerage)', jp: 6 },
      { no: 9, subject: 'Pengawasan Pelaksanaan Pekerjaan Mekanikal Elektrikal dan Sistem Kontrol (SCADA)', jp: 6 },
      { no: 10, subject: 'Pengawasan Pelaksanaan Unit Pelayanan SPALD', jp: 4 },
      { no: 11, subject: 'SMKK Pengawasan Pelaksanaan Konstruksi SPALD', jp: 4 },
      { no: 12, subject: 'Pengakhiran Pengawasan Pelaksanaan Konstruksi SPALD', jp: 4 },
      { no: 13, subject: 'Penjelasan Studi Lapangan/Studi Kasus', jp: 2 },
      { no: 14, subject: 'Studi Lapangan / Studi Kasus', jp: 8 },
      { no: 15, subject: 'Seminar', jp: 6 }
    ]
  }
];
