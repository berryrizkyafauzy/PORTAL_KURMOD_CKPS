import { TrainingProgram } from '../../types';

export const AIR_MINUM_PROGRAMS: TrainingProgram[] = [
  {
    id: 'am-01',
    code: 'CKPS-AM-01',
    title: 'Pelatihan Penyelenggaraan Sistem Penyediaan Air Minum',
    rumpun: 'air-minum',
    rumpunLabel: 'Air Minum',
    method: 'Blended Learning',
    allowedMethods: ['Klasikal', 'Distance Learning', 'Blended Learning', 'Full E-Learning'],
    durationJp: 83,
    level: 'Dasar',
    description: 'Pelatihan untuk memahami dan menerapkan proses penyelenggaraan Sistem Penyediaan Air Minum (SPAM) dalam rangka pengaturan, pembinaan, dan pengawasan.',
    competencyStandard: 'Peserta diharapkan mampu memahami dan menerapkan proses penyelenggaraan Sistem Penyediaan Air Minum (SPAM) dalam rangka pengaturan, pembinaan, dan pengawasan',
    participantRequirements: [
      'ASN Kementerian PU dan Daerah',
      'Staf Potensial PNS > 4 (empat) tahun di Bidang Cipta Karya',
      'S1 Teknik atau Non Teknik yang telah bekerja di Lingkungan Ditjen Cipta Karya/D3 Teknik dengan pengalaman bekerja di Bidang Cipta Karya minimal 3 (tiga) tahun'
    ],
    targetAudience: 'ASN Kementerian PU & Daerah (Staf Potensial Masa Kerja > 4 Tahun Bidang Cipta Karya)',
    keyModules: [
      'Penyusunan NSPK & Rencana Infrastruktur SPAM',
      'Pelaksanaan Pembangunan, Operasi & Pemeliharaan SPAM',
      'Pengendalian Penyelenggaraan Infrastruktur PUPR Bidang SPAM',
      'Pengembangan Kelembagaan, Pemberdayaan Masyarakat & Kemitraan'
    ],
    curriculumHistory: { developedYear: 2017 },
    detailedSyllabus: [
      { no: 1, subject: 'Budaya Anti Korupsi', jp: 2 },
      { no: 2, subject: 'Core Values BerAkhlak, dan Manajemen Risiko Dasar', jp: 2 },
      { no: 3, subject: 'Kebijakan Pengembangan SDM', jp: 2 },
      { no: 4, subject: 'Kebijakan dan Strategi Bidang SPAM', jp: 2 },
      { no: 5, subject: 'Penyusunan Norma, Standar, Prosedur, dan Kriteria Bid. SPAM', jp: 4 },
      { no: 6, subject: 'Penyusunan Rencana Infrastruktur Bidang SPAM', jp: 4 },
      { no: 7, subject: 'Pelaksanaan Pembangunan Infrastruktur Bid. SPAM', jp: 6 },
      { no: 8, subject: 'Operasi dan Pemeliharaan Bidang SPAM', jp: 4 },
      { no: 9, subject: 'Pengendalian Penyelenggaraan Infrastruktur PUPR Bidang SPAM', jp: 6 },
      { no: 10, subject: 'Penyelenggaraan Pengembangan Kelembagaan Bidang SPAM', jp: 5 },
      { no: 11, subject: 'Pemberdayaan Masyarakat', jp: 4 },
      { no: 12, subject: 'Pola Investasi, Program Pembiayaan Infrastruktur, dan Pengembangan Kemitraan Bidang SPAM', jp: 4 },
      { no: 13, subject: 'Adaptasi Perubahan Iklim Bidang SPAM', jp: 4 },
      { no: 14, subject: 'Penganggulangan Bencana', jp: 2 },
      { no: 15, subject: 'Studi Kasus/Simulasi Penyelenggaraan SPAM', jp: 8 },
      { no: 16, subject: 'Kunjungan Lapangan dan Seminar', jp: 24 }
    ]
  },
  {
    id: 'am-02',
    code: 'CKPS-AM-02',
    title: 'Pelatihan Perencanaan Teknis Terinci (DED) SPAM',
    rumpun: 'air-minum',
    rumpunLabel: 'Air Minum',
    method: 'Blended Learning',
    allowedMethods: ['Klasikal', 'Distance Learning', 'Blended Learning'],
    durationJp: 78,
    level: 'Spesialisasi',
    description: 'Pelatihan penyusunan DED SPAM agar peserta mampu mengumpulkan, memilah data, serta menyajikan informasi DED SPAM sesuai kriteria desain.',
    competencyStandard: 'Peserta diharapkan mampu mengumpulkan dan memilah data serta menyajikan informasi terkait Perencanaan Teknis Terinci (DED) SPAM dengan membandingkan kesesuaian DED eksisting dengan kriteria desain',
    participantRequirements: [
      'ASN Pusat dan Daerah di Bidang Perumahan dan Permukiman dengan jabatan kerja sebagai PPK, Pelaksana atau Jafung Pertama dengan pengalaman kerja minimal 2 (dua) tahun di Bidang Air Minum',
      'Pendidikan minimal D3 Bidang Teknik Sipil, Lingkungan, Mesin, Elektro, dan Kimia'
    ],
    targetAudience: 'ASN PPK / Pelaksana / Jafung Pertama (Pengalaman Minimal 2 Tahun Bidang Air Minum)',
    keyModules: [
      'DED Unit Air Baku, Unit Produksi, Transmisi & Distribusi',
      'DED Mechanical Electrical & Unit Pelayanan SPAM',
      'SMK3, Schedule Proyek, Analisis Harga Satuan & RAB',
      'Studi Kasus SPAM Regional, Kunjungan Lapangan & Review DED'
    ],
    curriculumHistory: { developedYear: 2018 },
    detailedSyllabus: [
      { no: 1, subject: 'Budaya Anti Korupsi', jp: 2 },
      { no: 2, subject: 'Core Values BerAkhlak, dan Manajemen Risiko Dasar', jp: 2 },
      { no: 3, subject: 'Kebijakan Penyelenggaraan SPAM', jp: 2 },
      { no: 4, subject: 'Prinsip Dasar Perencanaan dalam Proses Penyelenggaraan SPAM', jp: 3 },
      { no: 5, subject: 'Pengantar Perencanaan SPAM', jp: 2 },
      { no: 6, subject: 'Proses Penyusunan DED', jp: 3 },
      { no: 7, subject: 'SMK3 Dalam Penyusunan DED', jp: 3 },
      { no: 8, subject: 'DED Unit Air Baku', jp: 4 },
      { no: 9, subject: 'DED Unit Produksi', jp: 6 },
      { no: 10, subject: 'DED Transmisi dan Unit Distribusi', jp: 5 },
      { no: 11, subject: 'DED Mechanical Electrical SPAM', jp: 6 },
      { no: 12, subject: 'DED Unit Pelayanan', jp: 2 },
      { no: 13, subject: 'Penyusunan Jadwal Pelaksanaan Proyek', jp: 3 },
      { no: 14, subject: 'Analisis Harga Satuan dan RAB', jp: 3 },
      { no: 15, subject: 'Studi Kasus Pembangunan SPAM Regional', jp: 8 },
      { no: 16, subject: 'Kunjungan Lapangan', jp: 8 },
      { no: 17, subject: 'Penugasan Khusus Review DED', jp: 8 },
      { no: 18, subject: 'Presentasi Studi Kasus (Individu)', jp: 8 }
    ]
  },
  {
    id: 'am-03',
    code: 'CKPS-AM-03',
    title: 'Pelatihan Inovasi Teknologi dan Manajemen Bidang SPAM',
    rumpun: 'air-minum',
    rumpunLabel: 'Air Minum',
    method: 'Blended Learning',
    allowedMethods: ['Klasikal', 'Distance Learning', 'Blended Learning'],
    durationJp: 57,
    level: 'Spesialisasi',
    description: 'Pelatihan penerapan penyelenggaraan SPAM yang inovatif, efisien energi, pengurangan NRW, dan otomasi SCADA.',
    competencyStandard: 'Setelah mengikuti pelatihan ini peserta mampu menerapkan penyelenggaraan SPAM yang inovatif, efisien dan efektif serta mampu melaksanakan Bantuan Teknis Implementasi Inovasi Efisiensi Energi, NRW dan Otomasi Supervisory Control And Data Acquisition (SCADA) pada Pengelola SPAM',
    participantRequirements: [
      'ASN Pusat dan Daerah Bidang Permukiman (terdiri dari Kepala Satker, PPK, Direksi Lapangan, Penata Teknik, Petugas Teknik, Jafung Penata Kelola Penyehatan Lingkungan Jenjang Ahli)',
      'Pendidikan minimal D3 Bidang Terkait diutamakan Jurusan Teknik Sipil, Teknik Lingkungan, Teknik Mesin, Teknik Elektro, dan Arsitektur',
      'Memiliki pengalaman kerja minimal 2 tahun di Bidang Air Minum'
    ],
    targetAudience: 'ASN Kasatker / PPK / Direksi Lapangan / Petugas Teknik Air Minum',
    keyModules: [
      'Inovasi Teknologi & Efisiensi Energi SPAM',
      'Pengurangan Air Tak Berekening / Non Revenue Water (NRW)',
      'Otomasi & Supervisory Control And Data Acquisition (SCADA)',
      'Studi Lapangan & Seminar Hasil Studi Lapangan'
    ],
    curriculumHistory: { updatedYear: 2024 },
    detailedSyllabus: [
      { no: 1, subject: 'Budaya Anti Korupsi', jp: 2 },
      { no: 2, subject: 'Core Values BerAkhlak, dan Manajemen Risiko Dasar', jp: 2 },
      { no: 3, subject: 'Kebijakan dan Strategi Pengembangan SPAM', jp: 2 },
      { no: 4, subject: 'Penyelenggaraan SPAM', jp: 4 },
      { no: 5, subject: 'Inovasi Teknologi dan Manajemen Bidang SPAM', jp: 8 },
      { no: 6, subject: 'Efisiensi Energi', jp: 7 },
      { no: 7, subject: 'Air Tak Berekening/ Non Revenue Water (NRW)', jp: 7 },
      { no: 8, subject: 'Otomasi dan Supervisory Control And Data Acquisition (SCADA)', jp: 7 },
      { no: 9, subject: 'Penjelasan Studi Lapangan', jp: 2 },
      { no: 10, subject: 'Studi Lapangan', jp: 8 },
      { no: 11, subject: 'Seminar Hasil Studi Lapangan', jp: 8 }
    ]
  },
  {
    id: 'am-04',
    code: 'CKPS-AM-04',
    title: 'Pelatihan Pengawasan Konstruksi SPAM',
    rumpun: 'air-minum',
    rumpunLabel: 'Air Minum',
    method: 'Blended Learning',
    allowedMethods: ['Klasikal', 'Distance Learning', 'Blended Learning'],
    durationJp: 85,
    level: 'Spesialisasi',
    description: 'Pelatihan pengawasan konstruksi SPAM agar peserta mampu menganalisis pelaksanaan konstruksi SPAM dari air baku, IPA, perpipaan, hingga SCADA.',
    competencyStandard: 'Setelah mengikuti pelatihan ini, peserta diharapkan mampu menganalisis pelaksanaan konstruksi SPAM',
    participantRequirements: [
      'ASN Pusat dan Daerah (terdiri dari Kasatker, PPK, Direksi Lapangan, Penata Teknik, Petugas Teknik dan JFT TPL Pertama)',
      'Pendidikan minimal D3 bidang terkait diutamakan Jurusan Teknik Sipil, Teknik Lingkungan, Teknik Mesin, Teknik Elektro, dan Arsitektur',
      'Memiliki pengalaman dalam pelaksanaan dan pengawasan konstruksi minimal 2 tahun di Bidang Air Minum'
    ],
    targetAudience: 'ASN Kasatker / PPK / Direksi Lapangan / Pengawas Konstruksi SPAM',
    keyModules: [
      'Pengawasan Pelaksanaan Air Baku, IPA Paket Baja & Beton',
      'Pelaksanaan Perpipaan & Mekanikal Elektrikal SCADA',
      'Pengawasan Unit Pelayanan, SMKK & Pengakhiran Konstruksi',
      'Studi Lapangan & Seminar Hasil Studi Lapangan'
    ],
    curriculumHistory: { updatedYear: 2022 },
    detailedSyllabus: [
      { no: 1, subject: 'Budaya Anti Korupsi', jp: 2 },
      { no: 2, subject: 'Core Values BerAkhlak, dan Manajemen Risiko Dasar', jp: 2 },
      { no: 3, subject: 'Dokumen Teknis Pelaksanaan Pengawasan Konstruksi SPAM', jp: 9 },
      { no: 4, subject: 'Persiapan Pengawasan Pelaksanaan Konstruksi SPAM', jp: 7 },
      { no: 5, subject: 'Pelaksanaan Pekerjaan Unit Air Baku SPAM', jp: 7 },
      { no: 6, subject: 'Pelaksanaan Pekerjaan IPA Paket Baja dan Beton', jp: 7 },
      { no: 7, subject: 'Pelaksanaan Pekerjaan Perpipaan Pembangunan SPAM', jp: 7 },
      { no: 8, subject: 'Pelaksanaan Pekerjaan Mekanikal Elektrikal dan Sistem Kontrol (SCADA) Pembangunan SPAM', jp: 9 },
      { no: 9, subject: 'Pengawasan Pelaksanaan Unit Pelayanan SPAM', jp: 7 },
      { no: 10, subject: 'SMKK Pengawasan Pelaksanaan Konstruksi SPAM', jp: 7 },
      { no: 11, subject: 'Pengakhiran Konstruksi SPAM', jp: 7 },
      { no: 12, subject: 'Studi Lapangan', jp: 8 },
      { no: 13, subject: 'Seminar Hasil Studi Lapangan', jp: 6 }
    ]
  },
  {
    id: 'am-05',
    code: 'CKPS-AM-05',
    title: 'Pelatihan Komisioning Instalasi Pengolahan Air (IPA)',
    rumpun: 'air-minum',
    rumpunLabel: 'Air Minum',
    method: 'Blended Learning',
    allowedMethods: ['Klasikal', 'Distance Learning', 'Blended Learning'],
    durationJp: 103,
    level: 'Spesialisasi',
    description: 'Pelatihan komisioning IPA untuk menilai keandalan kinerja IPA yang baru dibangun pada setiap proses, unit operasi, dan ME sesuai spesifikasi teknis.',
    competencyStandard: 'Setelah mengikuti pelatihan ini, peserta diharapkan mampu melakukan penilaian keandalan kinerja IPA yang baru dibangun pada setiap proses, unit operasi, dan mekanikal elektrikal sesuai dengan spesifikasi teknis perencanaan, serta memberikan rekomendasi perbaikan yang diperlukan.',
    participantRequirements: [
      'ASN Pusat dan Daerah yang tugas dan fungsinya dalam bidang penyelenggaraan air minum',
      'ASN prioritas petugas yang akan ditunjuk sebagai tim komisioning.',
      'Pendidikan Minimal (D3) : Jurusan Teknik Penyehatan, Teknik Lingkungan, Teknik Sipil, Teknik Mesin, Teknik Elektro, Teknik Kimia atau (S1) : Jurusan Teknik Penyehatan, Teknik Lingkungan, Teknik Sipil, Teknik Mesin, Teknik Elektro, Teknik Kimia',
      'Pengalaman Kerja : D3 minimal 4 tahun di bidang permukiman, S1 minimal 2 tahun di bidang permukiman'
    ],
    targetAudience: 'ASN Tim Komisioning IPA Pusat & Daerah / Pengelola Air Minum',
    keyModules: [
      'Prinsip Dasar Komisioning IPA, SOP & Aspek Safety/K3',
      'Praktik Pengujian Mesin, Listrik, SCADA & Jar Test Kimia',
      'Praktik Pengujian Laboratorium & Operasional IPA (Koagulasi-Filtrasi)',
      'Evaluasi Operasional, Studi Lapangan, Seminar & Sertifikasi'
    ],
    curriculumHistory: { updatedYear: 2021 },
    detailedSyllabus: [
      { no: 1, subject: 'Budaya Anti-Korupsi', jp: 2 },
      { no: 2, subject: 'Core Values BerAkhlak, dan Manajemen Risiko Dasar', jp: 2 },
      { no: 3, subject: 'Kebijakan dan Strategi Pengembangan SPAM', jp: 2 },
      { no: 4, subject: 'Prinsip Dasar Perencanaan dan Pelaksanaan Pengembangan SPAM (Prinsip 3K)', jp: 3 },
      { no: 5, subject: 'Prinsip Dasar Komisioning IPA', jp: 3 },
      { no: 6, subject: 'SOP dan Tata Cara Komisioning IPA', jp: 3 },
      { no: 7, subject: 'Komisioning IPA yang Aman dan Ramah Lingkungan', jp: 3 },
      { no: 8, subject: 'Peralatan Mesin, Listrik dan SCADA', jp: 5 },
      { no: 9, subject: 'Pengukuran Debit dan Kecepatan aliran Air', jp: 3 },
      { no: 10, subject: 'Pengambilan Contoh Uji Air dan Pengujian Air di Laboratorium', jp: 3 },
      { no: 11, subject: 'Pelaksanaan Jar test dan Penentuan Dosis bahan Kimia', jp: 3 },
      { no: 12, subject: 'Penyusunan Laporan Komisioning IPA', jp: 3 },
      { no: 13, subject: 'Pengelolaan BMN', jp: 3 },
      { no: 14, subject: 'Praktik Pengujian Peralatan Mesin, Listrik dan SCADA', jp: 10 },
      { no: 15, subject: 'Persiapan Uji Coba Laboratorium', jp: 4 },
      { no: 16, subject: 'Praktik Pengujian di Laboratorium Menentukan dosis optimum koagulan, pH, disinfektan, alkali, dll)', jp: 16 },
      { no: 17, subject: 'Pengujian Operasional IPA (Koagulasi, Flokulasi, Sedimentasi, Filtrasi, Resevoir, dan Pembubuhan Bahan Kimia)', jp: 12 },
      { no: 18, subject: 'Praktik Pengukuran Debit, Kecepatan Air & Pengambilan Contoh Uji Air', jp: 6 },
      { no: 19, subject: 'Evaluasi Hasil Operasional IPA', jp: 2 },
      { no: 20, subject: 'Penjelasan Studi Lapangan', jp: 2 },
      { no: 21, subject: 'Studi Lapangan', jp: 6 },
      { no: 22, subject: 'Seminar', jp: 6 },
      { no: 23, subject: 'Penjelasan Proses Sertifikasi', jp: 1 }
    ]
  },
  {
    id: 'am-06',
    code: 'CKPS-AM-06',
    title: 'Pelatihan Pendampingan Penyusunan Feasibility Study (FS) dan Land Acquisition and Resettlement Plan (LARP) SPAM Regional',
    rumpun: 'air-minum',
    rumpunLabel: 'Air Minum',
    method: 'Blended Learning',
    allowedMethods: ['Klasikal', 'Distance Learning', 'Blended Learning'],
    durationJp: 50,
    level: 'Spesialisasi',
    description: 'Pelatihan pendampingan penyusunan studi kelayakan (FS) dan rencana pengadaan tanah/pemukiman kembali (LARP) SPAM Regional.',
    competencyStandard: 'Setelah mengikuti pelatihan ini, peserta diharapkan mampu melakukan penyusunan FS dan LARP SPAM Regional',
    participantRequirements: [
      'ASN di Lingkungan Kementerian PU dan Daerah',
      'Pendidikan D4/S1: Teknik Lingkungan, Teknik Sipil, Teknik Kimia, Teknik Planologi, Geologi dengan pengalaman minimal 2 tahun di bidang air minum, atau setara sesuai dengan pengalaman RPLnya minimal 3 tahun di bidang air minum, dan/atau ditugaskan sebagai tim teknis pendamping PPC SPAM Regional atau Tim Teknis PMO ESP Ditjen Cipta Karya'
    ],
    targetAudience: 'ASN Tim Teknis Pendamping PPC SPAM Regional / Tim PMO ESP Ditjen Cipta Karya',
    keyModules: [
      'Perencanaan & Pengumpulan Data FS SPAM Regional',
      'Kebijakan & Praktek Penyusunan Dokumen FS SPAM Regional',
      'Tata Cara & Praktek Penyusunan Dokumen LARP SPAM Regional',
      'Studi Kasus Tinjauan Dokumen FS dan LARP SPAM Regional'
    ],
    curriculumHistory: { developedYear: 2019 },
    detailedSyllabus: [
      { no: 1, subject: 'Budaya Anti-Korupsi', jp: 2 },
      { no: 2, subject: 'Core Values BerAkhlak, dan Manajemen Risiko Dasar', jp: 2 },
      { no: 3, subject: 'Pengantar SPAM', jp: 2 },
      { no: 4, subject: 'Perencanaan FS dan LARP SPAM Regional', jp: 4 },
      { no: 5, subject: 'Pembangunan Budaya Integritas', jp: 4 },
      { no: 6, subject: 'Pengumpulan dan Pengolahan Data FS SPAM Regional', jp: 3 },
      { no: 7, subject: 'Kebijakan Penyusunan FS SPAM Regional', jp: 18 },
      { no: 8, subject: 'Praktek Penyusunan Dokumen FS SPAM Regional', jp: 6 },
      { no: 9, subject: 'Tata Cara Penyusunan Dokumen LARP SPAM Regional', jp: 2 },
      { no: 10, subject: 'Praktek Penyusunan Dokumen LARP SPAM Regional', jp: 3 },
      { no: 11, subject: 'Studi Kasus Tinjauan Dokumen FS dan LARP SPAM Regional', jp: 4 }
    ]
  },
  {
    id: 'am-07',
    code: 'CKPS-AM-07',
    title: 'Pelatihan Pendampingan Penyusunan Dokumen Lingkungan Hidup (Dasar-dasar AMDAL) SPAM Regional',
    rumpun: 'air-minum',
    rumpunLabel: 'Air Minum',
    method: 'Blended Learning',
    allowedMethods: ['Klasikal', 'Distance Learning', 'Blended Learning'],
    durationJp: 72,
    level: 'Spesialisasi',
    description: 'Pelatihan pendampingan penyusunan dokumen lingkungan hidup (AMDAL) SPAM Regional agar peserta memahami proses, penilaian, dan izin lingkungan.',
    competencyStandard: 'Setelah mengikuti pelatihan ini, peserta pelatihan diharapkan mampu memahami dasar-dasar penyusunan dokumen lingkungan hidup (AMDAL) SPAM Regional',
    participantRequirements: [
      'ASN di lingkungan Kementerian PU dan Daerah',
      'Pendidikan D3 Semua jurusan dengan pengalaman minimal 2 (dua) tahun di Bidang Air Minum',
      'Diutamakan ditugaskan sebagai Tim Teknis Pendamping PPC SPAM Regional atau Tim Teknis PMO ESP Ditjen Cipta Karya',
      'Peserta dari Provinsi dan Kabupaten/Kota mewakili unsur teknis, lingkungan, dan sosial'
    ],
    targetAudience: 'ASN Tim Teknis AMDAL SPAM Regional / Tim PMO ESP Ditjen Cipta Karya',
    keyModules: [
      'Kebijakan PPLH & PSDA Terkait AMDAL SPAM Regional',
      'Identifikasi, Prakiraan Evaluasi & Mitigasi Dampak Lingkungan',
      'Proses Penyusunan, Penilaian AMDAL & Penerbitan Izin Lingkungan',
      'SI AMDAL, Evaluasi & Diskusi Kelompok Seminar AMDAL'
    ],
    curriculumHistory: { developedYear: 2020 },
    detailedSyllabus: [
      { no: 1, subject: 'Budaya Anti-Korupsi', jp: 2 },
      { no: 2, subject: 'Core Values BerAkhlak, dan Manajemen Risiko Dasar', jp: 2 },
      { no: 3, subject: 'Kebutuhan AMDAL dalam Pembangunan SPAM Regional', jp: 4 },
      { no: 4, subject: 'Pengertian, Proses, dan Manfaat AMDAL', jp: 5 },
      { no: 5, subject: 'Orientasi Proyek SPAM Regional', jp: 3 },
      { no: 6, subject: 'Kebijakan PPLH dan PSDA Terkait dengan AMDAL', jp: 8 },
      { no: 7, subject: 'Identifikasi, Prakiraan Evaluasi, dan Mitigasi Dampak Lingkungan', jp: 11 },
      { no: 8, subject: 'Proses Penyusunan dan Penilaian AMDAL, serta Penerbitan Izin Lingkungan', jp: 11 },
      { no: 9, subject: 'Pengawasan dan Penegakan Hukum (terkait dengan AMDAL)', jp: 3 },
      { no: 10, subject: 'Etika Penyusun dan Penilai AMDAL', jp: 3 },
      { no: 11, subject: 'Pengantar Sistem Informasi AMDAL', jp: 3 },
      { no: 12, subject: 'Evaluasi', jp: 8 },
      { no: 13, subject: 'Lesson Learned/Best Practice dengan Praktisi AMDAL', jp: 3 },
      { no: 14, subject: 'Diskusi Kelompok dan Seminar Dasar-dasar AMDAL', jp: 6 }
    ]
  },
  {
    id: 'am-08',
    code: 'CKPS-AM-08',
    title: 'Bimbingan Teknis Penilaian Kinerja BUMD Air Minum',
    rumpun: 'air-minum',
    rumpunLabel: 'Air Minum',
    method: 'Blended Learning',
    allowedMethods: ['Klasikal', 'Distance Learning', 'Blended Learning'],
    durationJp: 34,
    level: 'Bimtek',
    description: 'Bimbingan teknis penilaian kinerja BUMD Air Minum dari aspek operasional, pelayanan, keuangan, hingga SDM.',
    competencyStandard: 'Setelah melakukan bimbingan teknis ini, peserta diharapkan mampu menganalisis permasalahan kinerja BUMD Air Minum dan melakukan penilaian kinerja BUMD Air Minum',
    participantRequirements: [
      'ASN di Lingkungan Direktorat Jenderal Cipta Karya atau ASN Pemerintah Provinsi, Kota/Kabupaten yang mempunyai tugas dan fungsi dalam Bidang Air Minum',
      'Pendidikan minimal D3 (diutamakan teknik terkait sipil dan lingkungan) dan (non-teknik akuntansi, SDM dan manajemen)',
      'Memiliki pengalaman 5 tahun di bidang air minum',
      'Prioritas petugas yang akan ditunjuk sebagai sebagai tim penilaian kinerja BUMD air minum'
    ],
    targetAudience: 'ASN Tim Penilai Kinerja BUMD Air Minum Pusat / Pemprov / Pemkab / Pemkot',
    keyModules: [
      'Evaluasi Kinerja BUMD Air Minum',
      'Aspek Operasional, Pelayanan, Keuangan & SDM',
      'Analisis & Strategi Peningkatan Kinerja BUMD Air Minum',
      'Studi Kasus & Seminar Penilaian Kinerja BUMD Air Minum'
    ],
    curriculumHistory: { developedYear: 2022 },
    detailedSyllabus: [
      { no: 1, subject: 'Budaya Anti-Korupsi', jp: 2 },
      { no: 2, subject: 'Core Values BerAkhlak, dan Manajemen Risiko Dasar', jp: 2 },
      { no: 3, subject: 'Pengantar Penilaian Kinerja BUMD Air Minum', jp: 2 },
      { no: 4, subject: 'Evaluasi Kinerja BUMD Air Minum', jp: 3 },
      { no: 5, subject: 'Aspek Operasional dan Aspek Pelayanan', jp: 3 },
      { no: 6, subject: 'Aspek Keuangan dan Aspek SDM', jp: 3 },
      { no: 7, subject: 'Tata Cara Penyusunan dan Penyajian Penilaian Kinerja BUMD Air Minum', jp: 2 },
      { no: 8, subject: 'Analisis dan Strategi Peningkatan Kinerja BUMD Air Minum', jp: 3 },
      { no: 9, subject: 'Studi Kasus', jp: 6 },
      { no: 10, subject: 'Seminar Studi Kasus', jp: 8 }
    ]
  },
  {
    id: 'am-09',
    code: 'CKPS-AM-09',
    title: 'Pelatihan Pendampingan Penyusunan DED SPAM Regional',
    rumpun: 'air-minum',
    rumpunLabel: 'Air Minum',
    method: 'Blended Learning',
    allowedMethods: ['Klasikal', 'Distance Learning', 'Blended Learning'],
    durationJp: 78,
    level: 'Spesialisasi',
    description: 'Pelatihan pendampingan penyusunan DED SPAM Regional agar peserta mampu menganalisis dokumen DED SPAM Regional.',
    competencyStandard: 'Setelah mengikuti pelatihan ini, peserta diharapkan mampu menganalisis dokumen DED SPAM Regional',
    participantRequirements: [
      'ASN Pusat dan Daerah',
      'Diutamakan dari Direktorat pengelola kegiatan ESP di Ditjen Cipta Karya dan atau dari pemerintah daerah lokasi kegiatan SPAM Regional',
      'Berpengalaman di bidang air minum / cipta karya'
    ],
    targetAudience: 'ASN Tim Teknis Pengelola ESP Ditjen Cipta Karya & Pemda SPAM Regional',
    keyModules: [
      'Proses Penyusunan DED SPAM Regional',
      'DED Unit Air Baku, Unit Produksi, Transmisi & Distribusi Regional',
      'DED Mekanikal, Elektrikal, SCADA & Unit Pelayanan',
      'Analisis Harga Satuan, RAB & Manajemen Penyusunan DED'
    ],
    curriculumHistory: { developedYear: 2022 },
    detailedSyllabus: [
      { no: 1, subject: 'Budaya Anti-Korupsi', jp: 2 },
      { no: 2, subject: 'Core Values BerAkhlak, dan Manajemen Risiko Dasar', jp: 2 },
      { no: 3, subject: 'Pengantar Kebijakan Penyelenggaraan SPAM', jp: 3 },
      { no: 4, subject: 'Pengantar Perencanaan SPAM Regional', jp: 5 },
      { no: 5, subject: 'Proses Penyusunan DED SPAM Regional', jp: 7 },
      { no: 6, subject: 'Penyusunan DED Unit Air Baku SPAM Regional', jp: 6 },
      { no: 7, subject: 'Penyusunan DED Unit Produksi SPAM Regional', jp: 7 },
      { no: 8, subject: 'Penyusunan DED Transmisi dan Unit Distribusi', jp: 7 },
      { no: 9, subject: 'Penyusunan DED Mekanikal, Elektrikal dan SCADA', jp: 8 },
      { no: 10, subject: 'Penyusunan DED Unit Pelayanan', jp: 5 },
      { no: 11, subject: 'Penyusunan Analisis Harga Satuan dan Rencana Anggaran Biaya', jp: 5 },
      { no: 12, subject: 'Manajemen Penyusunan DED SPAM Regional', jp: 6 },
      { no: 13, subject: 'Studi Kasus dan Seminar', jp: 15 }
    ]
  }
];
