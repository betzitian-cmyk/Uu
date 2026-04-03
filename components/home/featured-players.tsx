import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const players = [
  {
    id: 1,
    name: "Marcus Johnson",
    position: "Quarterback",
    number: "12",
    image: "/images/players/player-1.jpg",
    stats: { passing: "3,842 YDS", touchdowns: "32 TD", rating: "108.4" },
  },
  {
    id: 2,
    name: "DeAndre Williams",
    position: "Wide Receiver",
    number: "84",
    image: "/images/players/player-2.jpg",
    stats: { receiving: "1,456 YDS", touchdowns: "14 TD", receptions: "98 REC" },
  },
  {
    id: 3,
    name: "Tyrone Jackson",
    position: "Running Back",
    number: "28",
    image: "/images/players/player-3.jpg",
    stats: { rushing: "1,287 YDS", touchdowns: "12 TD", average: "5.2 AVG" },
  },
  {
    id: 4,
    name: "Mike Thompson",
    position: "Linebacker",
    number: "55",
    image: "/images/players/player-4.jpg",
    stats: { tackles: "124 TKL", sacks: "8.5 SCK", interceptions: "3 INT" },
  },
];

export function FeaturedPlayers() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(var(--primary))]">
              Star Players
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-tight text-[hsl(var(--foreground))] lg:text-5xl">
              MEET THE TEAM
            </h2>
          </div>
          <Link
            href="/roster"
            className="group flex items-center gap-2 text-sm font-medium text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--primary))]"
          >
            View Full Roster
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Players Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {players.map((player) => (
            <Link
              key={player.id}
              href={`/roster/${player.id}`}
              className="group relative overflow-hidden rounded-2xl bg-[hsl(var(--card))] transition-all hover:scale-[1.02] hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={player.image}
                  alt={player.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-transparent to-transparent" />
                
                {/* Number */}
                <div className="absolute right-4 top-4 font-[family-name:var(--font-display)] text-6xl text-[hsl(var(--foreground)/.2)]">
                  {player.number}
                </div>
                
                {/* Position Badge */}
                <div className="absolute left-4 top-4 rounded-full bg-[hsl(var(--primary))] px-3 py-1 text-xs font-semibold text-[hsl(var(--primary-foreground))]">
                  {player.position}
                </div>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-[hsl(var(--foreground))]">
                  {player.name}
                </h3>
                <div className="mt-3 flex gap-4">
                  {Object.entries(player.stats).slice(0, 2).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <p className="text-sm font-semibold text-[hsl(var(--primary))]">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
