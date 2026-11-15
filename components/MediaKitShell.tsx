'use client';

import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AudienceInsightsSection from '@/components/AudienceInsightsSection';
import AboutSection from '@/components/AboutSection';
import CampaignPortfolioSection from '@/components/CampaignPortfolioSection';
import BrandPartnershipsSection from '@/components/BrandPartnershipsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import {
  PARTNERSHIP_FORMATS,
  type PartnershipFormat,
} from '@/data/creator-data';

export default function MediaKitShell() {
  const [selectedFormatId, setSelectedFormatId] = useState<string>(
    PARTNERSHIP_FORMATS[0].id
  );

  const handleSelectFormat = (format: PartnershipFormat) => {
    setSelectedFormatId(format.id);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#FAF7F4] text-[#3A2821]">
        <Navbar />
        <main>
          <HeroSection />
          <AudienceInsightsSection />
          <AboutSection />
          <CampaignPortfolioSection />
          <BrandPartnershipsSection
            selectedFormatId={selectedFormatId}
            onSelectFormat={handleSelectFormat}
          />
          <ContactSection
            selectedFormatId={selectedFormatId}
            onChangeFormatId={setSelectedFormatId}
          />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
