"use client";

import { useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import QuickStatsSection from "@/components/home/QuickStatsSection";
import AboutSection from "@/components/home/AboutSection";
import ChairmanVision from "@/components/home/ChairmanVision";
import InstitutionsSection from "@/components/home/InstitutionsSection";
import AcademicExcellence from "@/components/home/AcademicExcellence";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import AdmissionJourney from "@/components/home/AdmissionJourney";
import WhyChooseKSA from "@/components/home/WhyChooseKSA";
import PlacementsSection from "@/components/home/PlacementsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import GallerySection from "@/components/home/GallerySection";
import NewsSection from "@/components/home/NewsSection";
import FAQSection from "@/components/home/FAQSection";
import AdmissionsCTA from "@/components/home/AdmissionsCTA";
import QuickApplyModal from "@/components/ui/QuickApplyModal";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <HeroSection onOpenApplyModal={handleOpenModal} />
      <QuickStatsSection />
      <AboutSection />
      <ChairmanVision />
      <InstitutionsSection onOpenApplyModal={handleOpenModal} />
      <AcademicExcellence onOpenApplyModal={handleOpenModal} />
      <FacilitiesSection />
      <AdmissionJourney onOpenApplyModal={handleOpenModal} />
      <WhyChooseKSA />
      <PlacementsSection />
      <TestimonialsSection />
      <GallerySection />
      <NewsSection />
      <FAQSection />
      <AdmissionsCTA onOpenApplyModal={handleOpenModal} />

      <QuickApplyModal isOpen={modalOpen} onClose={handleCloseModal} />
    </>
  );
}
