import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const IMAGES = [
  { src: "/clinic.png",                  alt: "Clinic overview — glass-walled treatment rooms",  label: "Our Clinic"       },
  { src: "/clinic_entrance.png",         alt: "Reception and entrance area",                     label: "Reception"        },
  { src: "/artofdenstiry.jpg",           alt: "The Art of Dentistry — services board",           label: "Our Services"     },
  { src: "/equippment.png",              alt: "Modern dental treatment room",                    label: "Treatment Room"   },
  { src: "/operational_equippment.png",  alt: "Operational dental chair and equipment",          label: "Advanced Care"    },
];

export default function ClinicGallery() {
  return (
    <section id="gallery" className="bg-[#F4F6F8] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-[#00B4D8]" />
            Take A Look Inside
            <span className="w-8 h-px bg-[#00B4D8]" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#111827] mb-4 leading-tight">
            A World-Class Clinic,
            <br />
            <span className="text-[#0077B6]">Designed For You</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Step into a space built around comfort, hygiene, and cutting-edge dental technology.
            Every detail is designed to make your visit feel effortless.
          </p>
        </AnimatedSection>

        {/* ── Masonry grid (desktop) ───────────────────────────── */}
        <AnimatedSection>
          {/* Desktop: 3-col asymmetric grid */}
          <div className="hidden md:grid grid-cols-3 grid-rows-3 gap-4 h-[580px]">

            {/* [0] clinic.png — large featured, top-left, spans 2×2 */}
            <GalleryCell src={IMAGES[0].src} alt={IMAGES[0].alt} label={IMAGES[0].label}
              className="col-span-2 row-span-2" />

            {/* [1] clinic_entrance.png — top-right */}
            <GalleryCell src={IMAGES[1].src} alt={IMAGES[1].alt} label={IMAGES[1].label}
              className="col-span-1 row-span-1" />

            {/* [2] artofdenstiry.jpg — middle-right */}
            <GalleryCell src={IMAGES[2].src} alt={IMAGES[2].alt} label={IMAGES[2].label}
              className="col-span-1 row-span-1" />

            {/* [3] equippment.png — bottom-left */}
            <GalleryCell src={IMAGES[3].src} alt={IMAGES[3].alt} label={IMAGES[3].label}
              className="col-span-1 row-span-1" />

            {/* [4] operational_equippment.png — bottom-right, wide */}
            <GalleryCell src={IMAGES[4].src} alt={IMAGES[4].alt} label={IMAGES[4].label}
              className="col-span-2 row-span-1" />
          </div>

          {/* Mobile: 2-col stacked grid */}
          <div className="md:hidden grid grid-cols-2 gap-3">
            {IMAGES.map((img, i) => (
              <div
                key={img.src}
                className={`relative rounded-2xl overflow-hidden group ${i === 0 ? "col-span-2 h-52" : "h-40"}`}
              >
                <Image
                  src={img.src} alt={img.alt} fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <LabelBadge label={img.label} />
              </div>
            ))}
          </div>
        </AnimatedSection>


      </div>
    </section>
  );
}

function GalleryCell({
  src, alt, label, className,
}: {
  src: string; alt: string; label: string; className?: string;
}) {
  return (
    <div className={`relative rounded-2xl overflow-hidden group cursor-pointer ${className}`}>
      <Image
        src={src} alt={alt} fill
        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        sizes="(max-width: 1280px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-[#0077B6] opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
      <LabelBadge label={label} />
    </div>
  );
}

function LabelBadge({ label }: { label: string }) {
  return (
    <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {label}
    </div>
  );
}
