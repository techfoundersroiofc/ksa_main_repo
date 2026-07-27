import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import { ArrowRight, Image as ImageIcon } from "lucide-react";

export default function GallerySection() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
      title: "Clinical Simulation Lab",
      category: "Nursing"
    },
    {
      url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=800",
      title: "Full-Mission Ship Simulator",
      category: "Maritime"
    },
    {
      url: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800",
      title: "Pharma Analytical HPLC Suite",
      category: "Pharmacy"
    },
    {
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
      title: "Annual Convocation Ceremony",
      category: "Graduation"
    },
    {
      url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800",
      title: "Central Digital Library",
      category: "Academics"
    },
    {
      url: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=800",
      title: "Residential Campus & Sports",
      category: "Campus Life"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Campus Life & Facilities"
          title="Vibrant Visual Campus"
          highlightTitle="Spotlight"
          description="Take a visual tour through our world-class laboratories, simulated sea bridges, digital libraries, and student life."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative h-64 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-200"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-[#0A192F]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-4 left-6 right-6 z-10">
                <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-wider block">
                  {img.category}
                </span>
                <h4 className="text-lg font-bold text-white font-heading">
                  {img.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0A192F] text-[#D4AF37] font-bold text-sm hover:bg-[#162C4E] transition-colors"
          >
            <ImageIcon className="w-4 h-4" />
            <span>View Complete Photo & Video Gallery</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
