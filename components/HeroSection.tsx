import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-ksar-dark via-ksar-green to-ksar-dark text-white py-16 px-4 rounded-b-3xl shadow-2xl overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container mx-auto relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeIn">
          المقاطعة الإدارية لقصر البخاري
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-ksar-cream mb-2 animate-slideUp">
          مركز إقليمي استراتيجي في قلب الجزائر
        </p>
        <p className="text-sm md:text-base text-ksar-gold animate-slideUp">
          6 دوائر • 22 بلدية • مساحة إجمالية: 3,988 كم²
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-ksar-gold via-ksar-light to-ksar-gold"></div>
    </div>
  );
};

export default HeroSection;
