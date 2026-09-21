import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { KurikulumSection } from './components/KurikulumSection';
import { SebaranBapekomSection } from './components/SebaranBapekomSection';
import { KalenderBangkomSection } from './components/KalenderBangkomSection';
import { Footer } from './components/Footer';
import { getSavedKalender2027 } from './data/kalenderData';
import { KalenderTrainingItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedYear, setSelectedYear] = useState<2026 | 2027>(2026);
  const [items2027, setItems2027] = useState<KalenderTrainingItem[]>(() => getSavedKalender2027());

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-[#FFB800] selection:text-[#001A40]">
      {/* Top Header */}
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
        selectedYear={selectedYear}
        onYearChange={setSelectedYear}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection
          onNavigate={scrollToSection}
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
        />

        {/* Kurikulum & Modul CKPS */}
        <KurikulumSection />

        {/* Rencana Sebaran Bangkom */}
        <SebaranBapekomSection
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
          items2027={items2027}
          onNavigateToKalender={() => scrollToSection('kalender-bangkom')}
        />

        {/* Kalender Pengembangan Kompetensi (2026 & 2027) */}
        <KalenderBangkomSection
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
          onDataChange2027={setItems2027}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
