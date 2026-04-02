import React, { useState, lazy, Suspense } from 'react';

// Dynamic imports
const HeroSection = lazy(() => import('./components/HeroSection').then(m => ({ default: m.HeroSection })));
const StorySection = lazy(() => import('./components/StorySection').then(m => ({ default: m.StorySection })));
const WhatIsBlingSection = lazy(() => import('./components/WhatIsBlingSection').then(m => ({ default: m.WhatIsBlingSection })));
const ScreenshotsSection = lazy(() => import('./components/ScreenshotsSection').then(m => ({ default: m.ScreenshotsSection })));
const CollaboratorsSection = lazy(() => import('./components/CollaboratorsSection').then(m => ({ default: m.CollaboratorsSection })));
const CompaniesSection = lazy(() => import('./components/CompaniesSection').then(m => ({ default: m.CompaniesSection })));
const WhyCrowdfundingSection = lazy(() => import('./components/WhyCrowdfundingSection').then(m => ({ default: m.WhyCrowdfundingSection })));
const CTASection = lazy(() => import('./components/CTASection').then(m => ({ default: m.CTASection })));
const TransparencySection = lazy(() => import('./components/TransparencySection').then(m => ({ default: m.TransparencySection })));
const ClosingSection = lazy(() => import('./components/ClosingSection').then(m => ({ default: m.ClosingSection })));
const PaymentModal = lazy(() => import('./components/PaymentModal').then(m => ({ default: m.PaymentModal })));
const ScrollToTop = lazy(() => import('./components/ScrollToTop').then(m => ({ default: m.ScrollToTop })));

// Loading component
const SectionLoader = () => (
  <div className="w-full h-64 flex items-center justify-center bg-[#0D0F14]">
    <div className="w-8 h-8 border-2 border-[#FFCC00]/20 border-t-[#FFCC00] rounded-full animate-spin" />
  </div>
);

export default function App() {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  return (
    <main className="font-montserrat bg-linear-to-t from-[#08090d] via-[#0D0F14] to-[#08090d]">
      <Suspense fallback={<SectionLoader />}>
        <HeroSection />
        <StorySection />
        <WhatIsBlingSection />
        <ScreenshotsSection />
        <CollaboratorsSection />
        <CompaniesSection />
        <WhyCrowdfundingSection />
        <CTASection onOpenPayment={() => setIsPaymentOpen(true)} />
        <TransparencySection />
        <ClosingSection />
        <PaymentModal isOpen={isPaymentOpen} onClose={() => setIsPaymentOpen(false)} />
        <ScrollToTop />
      </Suspense>
    </main>
  );
}
