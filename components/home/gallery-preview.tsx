import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const galleryImages = [
  { id: 1, src: "/images/gallery/gallery-1.jpg", alt: "Touchdown celebration" },
  { id: 2, src: "/images/gallery/gallery-2.jpg", alt: "Training session" },
  { id: 3, src: "/images/gallery/gallery-3.jpg", alt: "Team entrance" },
  { id: 4, src: "/images/gallery/gallery-4.jpg", alt: "Football equipment" },
  { id: 5, src: "/images/team-huddle.jpg", alt: "Team huddle" },
  { id: 6, src: "/images/defense.jpg", alt: "Defensive play" },
];

export function GalleryPreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(var(--primary))]">
              Photo Gallery
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-tight text-[hsl(var(--foreground))] lg:text-5xl">
              GAME DAY MOMENTS
            </h2>
          </div>
          <Link
            href="/gallery"
            className="group flex items-center gap-2 text-sm font-medium text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--primary))]"
          >
            View All Photos
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
          {galleryImages.map((image, index) => (
            <Link
              key={image.id}
              href="/gallery"
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[hsl(var(--background)/.3)] opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <span className="rounded-full bg-[hsl(var(--primary))] px-4 py-2 text-sm font-semibold text-[hsl(var(--primary-foreground))]">
                  View
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
