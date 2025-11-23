import React from 'react';
import HeroSection from './components/HeroSection';
import AdminStructure from './components/AdminStructure';
import InvestmentSection from './components/InvestmentSection';
import GeminiChat from './components/GeminiChat';
import MapSection from './components/MapSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      <HeroSection />

      <main className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Column 1: Administrative Structure */}
          <div className="flex flex-col">
             <AdminStructure />
          </div>

          {/* Column 2: Investment */}
          <div className="flex flex-col">
            <InvestmentSection />
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-8">
          <MapSection />
        </div>
      </main>

      <footer className="mt-20 py-8 bg-white border-t border-stone-200">
        <div className="container mx-auto px-4 text-center">
            <p className="text-stone-500 text-sm mb-2">
                المصدر: الجريدة الرسمية العدد 76 - المرسوم الرئاسي المتضمن إحداث المقاطعات الإدارية.
            </p>
            <p className="text-stone-400 text-xs">
                © {new Date().getFullYear()} تصميم إنفوغرافيك تفاعلي
            </p>
        </div>
      </footer>

      <GeminiChat />
    </div>
  );
};

export default App;
