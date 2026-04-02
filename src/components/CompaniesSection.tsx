import React from 'react';
import { partnerCompanies } from '../constants';

export function CompaniesSection() {
  if (partnerCompanies.length === 0) return null;

  return (
    <section className="bg-[#111318] py-20 overflow-hidden border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 mb-10 text-center">
        <p className="text-[#FFCC00] text-xs font-semibold tracking-[0.3em] uppercase">
          Empresas Aliadas
        </p>
      </div>
      
      <div className="relative flex overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 px-6">
          {[...partnerCompanies, ...partnerCompanies, ...partnerCompanies].map((company, i) => (
            <a
              key={i}
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img src={company.logo} alt={company.name} className="h-10 md:h-12 w-auto object-contain" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
