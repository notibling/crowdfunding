import React, { useState, lazy, Suspense } from 'react';

// Dynamic imports
const HeroSection = lazy(() => import('./components/HeroSection').then(m => ({ default: m.HeroSection })));
const StorySection = lazy(() => import('./components/StorySection').then(m => ({ default: m.StorySection })));
const WhatIsBlingSection = lazy(() => import('./components/WhatIsBlingSection').then(m => ({ default: m.WhatIsBlingSection })));
const ScreenshotsSection = lazy(() => import('./components/ScreenshotsSection').then(m => ({ default: m.ScreenshotsSection })));
const CollaboratorsSection = lazy(() => import('./components/CollaboratorsSection').then(m => ({ default: m.CollaboratorsSection })));
const PartnersSection = lazy(() => import('./components/PartnersSection').then(m => ({ default: m.PartnersSection })));
const WhyCrowdfundingSection = lazy(() => import('./components/WhyCrowdfundingSection').then(m => ({ default: m.WhyCrowdfundingSection })));
const MissionImpactSection = lazy(() => import('./components/MissionImpactSection').then(m => ({ default: m.MissionImpactSection })));
const CTASection = lazy(() => import('./components/CTASection').then(m => ({ default: m.CTASection })));
const CrowdfundingTiersSection = lazy(() => import('./components/CrowdfundingTiersSection').then(m => ({ default: m.CrowdfundingTiersSection })));
const RoadmapSection = lazy(() => import('./components/RoadmapSection').then(m => ({ default: m.RoadmapSection })));
const FAQSection = lazy(() => import('./components/FAQSection').then(m => ({ default: m.FAQSection })));
const TransparencySection = lazy(() => import('./components/TransparencySection').then(m => ({ default: m.TransparencySection })));
const ClosingSection = lazy(() => import('./components/ClosingSection').then(m => ({ default: m.ClosingSection })));
const PaymentModal = lazy(() => import('./components/PaymentModal').then(m => ({ default: m.PaymentModal })));
const ScrollToTop = lazy(() => import('./components/ScrollToTop').then(m => ({ default: m.ScrollToTop })));
const FloatingDonateBar = lazy(() => import('./components/FloatingDonateBar').then(m => ({ default: m.FloatingDonateBar })));
const ThemeToggle = lazy(() => import('./components/ThemeToggle').then(m => ({ default: m.ThemeToggle })));
import { ErrorBoundary } from './components/ErrorBoundary';

// Loading component
const SectionLoader = () => (
  <div className="w-full h-64 flex items-center justify-center bg-slate-50 dark:bg-slate-900">
    <div className="w-8 h-8 border-2 border-[#FFCC00]/20 border-t-[#FFCC00] rounded-full animate-spin" />
  </div>
);

export default function App() {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  return (
    <ErrorBoundary>
      <main className="font-montserrat bg-gradient-to-t from-white dark:from-slate-950 via-slate-50 dark:via-slate-900 to-white dark:to-slate-950">
        <Suspense fallback={<SectionLoader />}>
          <ThemeToggle />
          <HeroSection />
          <StorySection />
          <WhatIsBlingSection />
          <ScreenshotsSection />
          <MissionImpactSection />
          <RoadmapSection />
          <WhyCrowdfundingSection />
          <CrowdfundingTiersSection onOpenPayment={() => setIsPaymentOpen(true)} />
          <CollaboratorsSection />
          <PartnersSection />
          <TransparencySection />
          <FAQSection />
          <CTASection onOpenPayment={() => setIsPaymentOpen(true)} />
          <ClosingSection />
          <PaymentModal isOpen={isPaymentOpen} onClose={() => setIsPaymentOpen(false)} />
          <ScrollToTop />
          <FloatingDonateBar onOpenPayment={() => setIsPaymentOpen(true)} />
        </Suspense>
      </main>
    </ErrorBoundary>
  );
}
