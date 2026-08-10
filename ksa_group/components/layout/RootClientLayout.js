"use client";

import { useState } from "react";
import AnnouncementBar from "./AnnouncementBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import QuickApplyModal from "@/components/ui/QuickApplyModal";

export default function RootClientLayout({ children }) {
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  const handleOpenApplyModal = () => setApplyModalOpen(true);
  const handleCloseApplyModal = () => setApplyModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-accent-gold selection:text-[#0A192F] antialiased">
      {/* Sticky Top Bar & Navbar Layer */}
      <div className="sticky top-0 z-50  shadow-md">
        <AnnouncementBar onOpenApplyModal={handleOpenApplyModal} />
        <Navbar onOpenApplyModal={handleOpenApplyModal} />
      </div>

      {/* Main Content Area with proper spacing and flex-grow layout */}
      <main className="grow w-full overflow-x-hidden">{children}</main>

      {/* Footer Section */}
      <Footer onOpenApplyModal={handleOpenApplyModal} />

      {/* Global Quick Apply Modal */}
      <QuickApplyModal
        isOpen={applyModalOpen}
        onClose={handleCloseApplyModal}
      />
    </div>
  );
}
