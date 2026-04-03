import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Trophy, Heart } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/running-back.jpg"
          alt="Join Thunder Hawks"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--background))] via-[hsl(var(--background)/.9)] to-[hsl(var(--background))]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(var(--primary))]">
              Join Our Family
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl tracking-tight text-[hsl(var(--foreground))] lg:text-5xl">
              BECOME A<br />
              <span className="text-[hsl(var(--primary))]">THUNDER HAWK</span>
            </h2>
            <p className="mt-6 text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
              Whether you want to try out for the team, join our youth program, 
              or become part of our dedicated fan community, there&apos;s a place 
              for you in the Thunder Hawks family.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-8 py-4 text-sm font-semibold text-[hsl(var(--primary-foreground))] transition-all hover:bg-[hsl(var(--primary)/.9)] hover:scale-105"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[hsl(var(--border))] px-8 py-4 text-sm font-semibold text-[hsl(var(--foreground))] transition-all hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card)/.8)] p-6 backdrop-blur transition-all hover:border-[hsl(var(--primary)/.5)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--primary)/.2)]">
                <Trophy className="h-6 w-6 text-[hsl(var(--primary))]" />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl text-[hsl(var(--foreground))]">
                TRYOUTS
              </h3>
              <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
                Show us what you&apos;ve got. Open tryouts held every spring and fall.
              </p>
            </div>

            <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card)/.8)] p-6 backdrop-blur transition-all hover:border-[hsl(var(--primary)/.5)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--primary)/.2)]">
                <Users className="h-6 w-6 text-[hsl(var(--primary))]" />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl text-[hsl(var(--foreground))]">
                YOUTH PROGRAM
              </h3>
              <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
                Training programs for ages 8-18 with professional coaching staff.
              </p>
            </div>

            <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card)/.8)] p-6 backdrop-blur transition-all hover:border-[hsl(var(--primary)/.5)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--primary)/.2)]">
                <Heart className="h-6 w-6 text-[hsl(var(--primary))]" />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl text-[hsl(var(--foreground))]">
                FAN CLUB
              </h3>
              <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
                Exclusive access, merchandise discounts, and behind-the-scenes content.
              </p>
            </div>

            <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--primary))] p-6 text-[hsl(var(--primary-foreground))] transition-all hover:scale-[1.02]">
              <p className="font-[family-name:var(--font-display)] text-5xl">38</p>
              <p className="mt-2 text-sm opacity-90">
                Years of building champions and creating memories
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
