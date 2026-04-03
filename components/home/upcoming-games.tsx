import Link from "next/link";
import { ArrowRight, MapPin, Clock } from "lucide-react";

const games = [
  {
    id: 1,
    opponent: "Iron Eagles",
    date: "April 12, 2026",
    time: "7:00 PM",
    location: "Thunder Hawks Stadium",
    isHome: true,
  },
  {
    id: 2,
    opponent: "Steel Titans",
    date: "April 19, 2026",
    time: "4:00 PM",
    location: "Titan Arena",
    isHome: false,
  },
  {
    id: 3,
    opponent: "Blazing Phoenixes",
    date: "April 26, 2026",
    time: "8:00 PM",
    location: "Thunder Hawks Stadium",
    isHome: true,
  },
];

export function UpcomingGames() {
  return (
    <section className="border-y border-[hsl(var(--border))] bg-[hsl(var(--card))] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(var(--primary))]">
              Game Schedule
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-tight text-[hsl(var(--foreground))] lg:text-5xl">
              UPCOMING GAMES
            </h2>
          </div>
          <Link
            href="/schedule"
            className="group flex items-center gap-2 text-sm font-medium text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--primary))]"
          >
            Full Schedule
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Games List */}
        <div className="mt-12 space-y-4">
          {games.map((game) => (
            <div
              key={game.id}
              className="group flex flex-col gap-4 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-6 transition-all hover:border-[hsl(var(--primary)/.5)] sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-center">
                {/* Date */}
                <div className="flex h-16 w-16 flex-shrink-0 flex-col items-center justify-center rounded-xl bg-[hsl(var(--secondary))]">
                  <span className="text-xs font-semibold uppercase text-[hsl(var(--muted-foreground))]">
                    {game.date.split(" ")[0]}
                  </span>
                  <span className="font-[family-name:var(--font-display)] text-2xl text-[hsl(var(--foreground))]">
                    {game.date.split(" ")[1].replace(",", "")}
                  </span>
                </div>

                {/* Teams */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-[hsl(var(--primary)/.2)] px-2 py-0.5 text-xs font-semibold text-[hsl(var(--primary))]">
                      {game.isHome ? "HOME" : "AWAY"}
                    </span>
                  </div>
                  <p className="mt-1 font-[family-name:var(--font-display)] text-xl text-[hsl(var(--foreground))]">
                    Thunder Hawks vs. {game.opponent}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-[hsl(var(--muted-foreground))]">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[hsl(var(--primary))]" />
                  {game.time}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[hsl(var(--primary))]" />
                  {game.location}
                </div>
                <Link
                  href="/schedule"
                  className="rounded-full bg-[hsl(var(--primary))] px-6 py-2 text-sm font-semibold text-[hsl(var(--primary-foreground))] transition-all hover:bg-[hsl(var(--primary)/.9)]"
                >
                  Get Tickets
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
