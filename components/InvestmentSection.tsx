import React from 'react';
import { Truck, Factory, Wheat, Percent, Train, TrendingUp } from 'lucide-react';
import { INVESTMENT_DATA } from '../constants';

const iconMap = {
  Truck,
  Factory,
  Wheat,
  Percent,
  Train,
};

const InvestmentSection: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 animate-slideUp h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-ksar-light/20 rounded-xl">
          <TrendingUp className="w-6 h-6 text-ksar-light" />
        </div>
        <h2 className="text-2xl font-bold text-ksar-dark">فرص الاستثمار</h2>
      </div>

      <div className="space-y-4">
        {INVESTMENT_DATA.map((investment, index) => {
          const Icon = iconMap[investment.iconName];
          return (
            <div 
              key={index} 
              className="border border-stone-200 rounded-xl p-5 hover:shadow-md hover:border-ksar-gold transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-ksar-gold/10 rounded-lg flex-shrink-0">
                  <Icon className="w-6 h-6 text-ksar-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-ksar-dark mb-2">{investment.title}</h3>
                  <ul className="space-y-1">
                    {investment.description.map((desc, dIndex) => (
                      <li key={dIndex} className="text-sm text-stone-600 flex items-start gap-2">
                        <span className="text-ksar-green mt-1">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InvestmentSection;
