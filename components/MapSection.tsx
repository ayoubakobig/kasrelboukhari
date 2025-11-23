import React from 'react';
import { MapPin } from 'lucide-react';
import { DAIRA_DATA } from '../constants';

const MapSection: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 animate-slideUp">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-ksar-green/10 rounded-xl">
          <MapPin className="w-6 h-6 text-ksar-green" />
        </div>
        <h2 className="text-2xl font-bold text-ksar-dark">الخريطة الجغرافية</h2>
      </div>

      <div className="bg-gradient-to-br from-ksar-cream to-stone-100 rounded-xl p-8 min-h-[400px] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-24 h-24 bg-ksar-green/20 rounded-full flex items-center justify-center mx-auto">
            <MapPin className="w-12 h-12 text-ksar-green" />
          </div>
          <div className="space-y-2">
            <p className="text-lg font-semibold text-ksar-dark">
              موقع استراتيجي في قلب الجزائر
            </p>
            <p className="text-sm text-stone-600">
              تربط بين الشمال والجنوب عبر الطريق الوطني رقم 01
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-6">
            {DAIRA_DATA.map((daira, index) => (
              <div key={index} className="bg-white rounded-lg p-3 shadow-sm">
                <p className="text-sm font-medium text-ksar-dark">{daira.name}</p>
                <p className="text-xs text-stone-500 mt-1">
                  {daira.municipalities.length} بلدية
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-ksar-cream/30 rounded-xl">
        <p className="text-sm text-stone-600 text-center">
          <span className="font-semibold text-ksar-dark">إحداثيات المركز:</span> 35.8881°N, 2.7491°E
        </p>
      </div>
    </div>
  );
};

export default MapSection;
