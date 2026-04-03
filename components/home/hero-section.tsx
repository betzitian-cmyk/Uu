import Image from "next/image";
import Link from "next/link";
import { Play, Calendar, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-football.jpg"
          alt="Thunder Hawks in action"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--background))] via-[hsl(var(--background)/.8)] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[hsl(var(--primary))]">
            2026 Season Champions
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-5xl leading-none tracking-tight text-[hsl(var(--foreground))] sm:text-7xl lg:text-8xl">
            THUNDER
            <br />
            <span className="text-[hsl(var(--primary))]">HAWKS</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
            Experience the power, passion, and pride of Thunder Hawks Football. 
            Where champions are made and legends are born.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/schedule"
              className="group flex items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-8 py-4 text-sm font-semibold text-[hsl(var(--primary-foreground))] transition-all hover:bg-[hsl(var(--primary)/.9)] hover:scale-105"
            >
              <Calendar className="h-5 w-5" />
              View Schedule
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/gallery"
              className="group flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--background)/.5)] px-8 py-4 text-sm font-semibold text-[hsl(var(--foreground))] backdrop-blur transition-all hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]"
            >
              <Play className="h-5 w-5" />
              Watch Highlights
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-[hsl(var(--border))] pt-8">
            <div>
              <p className="font-[family-name:var(--font-display)] text-4xl text-[hsl(var(--primary))]">12-2</p>
              <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">Season Record</p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-display)] text-4xl text-[hsl(var(--primary))]">#3</p>
              <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">League Ranking</p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-display)] text-4xl text-[hsl(var(--primary))]">38</p>
              <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Next Game Banner */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-[hsl(var(--border))] bg-[hsl(var(--card)/.9)] backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-4 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-[hsl(var(--primary))] px-3 py-1 text-xs font-semibold text-[hsl(var(--primary-foreground))]">
                NEXT GAME
              </span>
              <span className="text-sm text-[hsl(var(--foreground))]">
                Thunder Hawks vs. Iron Eagles
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-[hsl(var(--muted-foreground))]">
              <span>April 12, 2026</span>
              <span>7:00 PM ET</span>
              <Link
                href="/schedule"
                className="text-[hsl(var(--primary))] hover:underline"
              >
                Get Tickets
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
