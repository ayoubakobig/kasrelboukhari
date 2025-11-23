import React from 'react';
import { Building2 } from 'lucide-react';
import { DAIRA_DATA } from '../constants';
import { formatPopulation, formatArea } from '../utils';

const AdminStructure: React.FC = () => {
  const totalMunicipalities = DAIRA_DATA.reduce((sum, daira) => sum + daira.municipalities.length, 0);
  const totalPopulation = DAIRA_DATA.reduce((sum, daira) => 
    sum + daira.municipalities.reduce((mSum, m) => mSum + m.population, 0), 0
  );
  const totalArea = DAIRA_DATA.reduce((sum, daira) => 
    sum + daira.municipalities.reduce((mSum, m) => mSum + m.area, 0), 0
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 animate-slideUp h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-ksar-green/10 rounded-xl">
          <Building2 className="w-6 h-6 text-ksar-green" />
        </div>
        <h2 className="text-2xl font-bold text-ksar-dark">الهيكلة الإدارية</h2>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-4 bg-ksar-cream/30 rounded-xl">
          <div className="text-3xl font-bold text-ksar-green">{DAIRA_DATA.length}</div>
          <div className="text-sm text-stone-600 mt-1">دائرة</div>
        </div>
        <div className="text-center p-4 bg-ksar-cream/30 rounded-xl">
          <div className="text-3xl font-bold text-ksar-green">{totalMunicipalities}</div>
          <div className="text-sm text-stone-600 mt-1">بلدية</div>
        </div>
        <div className="text-center p-4 bg-ksar-cream/30 rounded-xl">
          <div className="text-3xl font-bold text-ksar-green">{(totalPopulation / 1000).toFixed(0)}k</div>
          <div className="text-sm text-stone-600 mt-1">نسمة</div>
        </div>
      </div>

      <div className="space-y-4">
        {DAIRA_DATA.map((daira, index) => (
          <div key={index} className="border border-stone-200 rounded-xl p-4 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-ksar-dark mb-3">{daira.name}</h3>
            <div className="space-y-2">
              {daira.municipalities.map((municipality, mIndex) => (
                <div key={mIndex} className="flex justify-between items-center text-sm py-2 border-b border-stone-100 last:border-0">
                  <span className="text-stone-700 font-medium">{municipality.name}</span>
                  <div className="flex gap-4 text-stone-500">
                    <span>{formatArea(municipality.area)}</span>
                    <span>{formatPopulation(municipality.population)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminStructure;
