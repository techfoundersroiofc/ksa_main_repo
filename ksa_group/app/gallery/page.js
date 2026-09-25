import Image from "next/image";

export default function GalleryPage() {
  const images = [
    "/faclities/5.JPG",
    "/faclities/4.jpg",
    "/college/3.jpg",
    "/college/DJI_0542.webp",
    "/college/0M5A8639.JPG",
    "/faclities/7.JPG",
    "/college/0M5A7948.JPG",
    "/college/0M5A8793.JPG",
    "/faclities/6.JPG",
    "/college/0M5A8536.JPG",
    "/college/0M5A8628.JPG",
    "/college/0M5A8795.JPG",
    "/new/1.JPG",
    "/new/2.JPG",
    "/new/3.JPG",
    "/new/4.JPG",
    "/new/5.JPG",
    "/new/6.JPG",
    "/new/7.JPG",
    "/new/8.JPG",
    "/new/9.JPG",
    "/new/10.JPG",
    "/new/11.JPG",
    "/new/12.JPG",
    "/new/13.JPG",
    "/new/15.JPG",
    "/new/0M5A8536.JPG",
    "/college/new/1.JPG",
    "/college/new/2.JPG",
    "/college/new/3.jpeg",
    "/college/new/4.jpeg",
    "/college/new/5.jpeg",
    "/college/new/6.jpeg",
    "/college/new/7.jpeg",
    "/college/new/8.jpeg",
    "/college/new/9.jpeg",
    "/college/new/10.JPG",
    "/college/new/11.JPG",
    "/college/new/12.JPG",
    "/college/new/13.JPG",
    "/college/new/14.JPG",
    "/college/new/15.JPG",
  ];

  return (
    <div className="bg-surface-alt min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-primary-navy text-white py-16 sm:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase font-bold text-accent-gold tracking-wider block mb-2">
            Visual Media & Campus Life
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white mb-4">
            KSA Campus <span className="text-gradient-gold">Gallery</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            High-resolution visual archives of constituent college laboratories,
            graduation ceremonies, ship simulators, and campus life.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((url, idx) => (
            <div
              key={idx}
              className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-sm border border-slate-200 group bg-slate-100"
            >
              <Image
                src={url}
                alt={`KSA Campus Gallery ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
