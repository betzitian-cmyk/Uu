import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Trophy, Users, Calendar } from "lucide-react";
import { players, getPlayerById } from "@/lib/data/players";

export async function generateStaticParams() {
  return players.map((player) => ({
    id: player.id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const player = getPlayerById(parseInt(id));
  if (!player) return { title: "Player Not Found" };
  return {
    title: `${player.name} | Thunder Hawks Football`,
    description: player.bio,
  };
}

export default async function PlayerPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const player = getPlayerById(parseInt(id));

  if (!player) {
    notFound();
  }

  return (
    <>
      {/* Back Link */}
      <div className="mx-auto max-w-7xl px-4 pt-8 lg:px-8">
        <Link
          href="/roster"
          className="inline-flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--primary))]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Roster
        </Link>
      </div>

      {/* Player Profile */}
      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                <Image
                  src={player.image}
                  alt={player.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background)/.5)] via-transparent to-transparent" />
              </div>
              {/* Number Overlay */}
              <div className="absolute -right-4 -top-4 font-[family-name:var(--font-display)] text-[200px] leading-none text-[hsl(var(--primary)/.1)] lg:-right-8 lg:text-[300px]">
                {player.number}
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="inline-block rounded-full bg-[hsl(var(--primary))] px-4 py-1 text-sm font-semibold text-[hsl(var(--primary-foreground))]">
                {player.position}
              </div>
              <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl tracking-tight text-[hsl(var(--foreground))] lg:text-6xl">
                {player.name}
              </h1>
              <p className="mt-2 font-[family-name:var(--font-display)] text-3xl text-[hsl(var(--primary))]">
                #{player.number}
              </p>

              <p className="mt-6 text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
                {player.bio}
              </p>

              {/* Details */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl bg-[hsl(var(--card))] p-4 text-center">
                  <p className="text-xs uppercase tracking-wider text-[hsl(var(--muted-foreground))]">Height</p>
                  <p className="mt-1 font-[family-name:var(--font-display)] text-xl text-[hsl(var(--foreground))]">{player.height}</p>
                </div>
                <div className="rounded-xl bg-[hsl(var(--card))] p-4 text-center">
                  <p className="text-xs uppercase tracking-wider text-[hsl(var(--muted-foreground))]">Weight</p>
                  <p className="mt-1 font-[family-name:var(--font-display)] text-xl text-[hsl(var(--foreground))]">{player.weight}</p>
                </div>
                <div className="rounded-xl bg-[hsl(var(--card))] p-4 text-center">
                  <p className="text-xs uppercase tracking-wider text-[hsl(var(--muted-foreground))]">Age</p>
                  <p className="mt-1 font-[family-name:var(--font-display)] text-xl text-[hsl(var(--foreground))]">{player.age}</p>
                </div>
                <div className="rounded-xl bg-[hsl(var(--card))] p-4 text-center">
                  <p className="text-xs uppercase tracking-wider text-[hsl(var(--muted-foreground))]">Experience</p>
                  <p className="mt-1 font-[family-name:var(--font-display)] text-xl text-[hsl(var(--foreground))]">{player.experience}</p>
                </div>
              </div>

              {/* College */}
              <div className="mt-6 flex items-center gap-3 rounded-xl bg-[hsl(var(--card))] p-4">
                <Trophy className="h-5 w-5 text-[hsl(var(--primary))]" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-[hsl(var(--muted-foreground))]">College</p>
                  <p className="font-medium text-[hsl(var(--foreground))]">{player.college}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-8">
                <h2 className="font-[family-name:var(--font-display)] text-2xl text-[hsl(var(--foreground))]">
                  2026 SEASON STATS
                </h2>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {Object.entries(player.stats).map(([key, value]) => (
                    <div
                      key={key}
                      className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-4"
                    >
                      <p className="text-xs uppercase tracking-wider text-[hsl(var(--muted-foreground))]">{key}</p>
                      <p className="mt-1 font-[family-name:var(--font-display)] text-3xl text-[hsl(var(--primary))]">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
