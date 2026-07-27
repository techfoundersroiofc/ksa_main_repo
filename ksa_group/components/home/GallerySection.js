import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Image as ImageIcon } from "lucide-react";

export default function GallerySection() {
  const images = [
    {
      url: "/faclities/5.JPG",
      title: "Clinical Simulation Lab",
      category: "Nursing",
    },
    {
      url: "/faclities/4.jpg",
      title: "Full-Mission Ship Simulator",
      category: "Maritime",
    },
    {
      url: "/college/Building-the-Future-of-Nursing-with-Integrity-and-Purpose.webp",
      title: "Pharma",
      category: "Pharmacy",
    },
    {
      url: "/college/0M5A8803.JPG",
      title: "Inagural Cermony",
      category: "Graduation",
    },
    {
      url: "/college/k-con-about-us.webp",
      title: "Central Digital Library",
      category: "Academics",
    },
    {
      url: "/faclities/7.JPG",
      title: "Residential Campus & Sports",
      category: "Campus Life",
    },
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
              <Image
                src={img.url}
                alt={img.title}
                width={600}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary-navy/90 via-primary-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-4 left-6 right-6 z-10">
                <span className="text-[10px] uppercase font-bold text-accent-gold tracking-wider block">
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
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary-navy text-accent-gold font-bold text-sm hover:bg-primary-navy-light transition-colors"
          >
            <ImageIcon className="w-4 h-4" />
            <span>View Complete Photo & Video Gallery</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
