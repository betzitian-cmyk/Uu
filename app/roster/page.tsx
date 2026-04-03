import Image from "next/image";
import Link from "next/link";
import { players } from "@/lib/data/players";

export const metadata = {
  title: "Team Roster | Thunder Hawks Football",
  description: "Meet the Thunder Hawks roster - our talented players who give their all on the field every game.",
};

export default function RosterPage() {
  const offense = players.filter((p) => p.positionGroup === "offense");
  const defense = players.filter((p) => p.positionGroup === "defense");
  const special = players.filter((p) => p.positionGroup === "special");

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/team-huddle.jpg"
            alt="Thunder Hawks Team"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(var(--background)/.8)] to-[hsl(var(--background))]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(var(--primary))]">
            2026 Season
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl tracking-tight text-[hsl(var(--foreground))] lg:text-7xl">
            TEAM ROSTER
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[hsl(var(--muted-foreground))]">
            Meet the athletes who represent the Thunder Hawks with pride, passion, and excellence.
          </p>
        </div>
      </section>

      {/* Offense */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-8 flex items-center gap-4">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[hsl(var(--foreground))]">
              OFFENSE
            </h2>
            <div className="h-px flex-1 bg-[hsl(var(--border))]" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {offense.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>
      </section>

      {/* Defense */}
      <section className="border-y border-[hsl(var(--border))] bg-[hsl(var(--card))] py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-8 flex items-center gap-4">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[hsl(var(--foreground))]">
              DEFENSE
            </h2>
            <div className="h-px flex-1 bg-[hsl(var(--border))]" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {defense.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Teams */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-8 flex items-center gap-4">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[hsl(var(--foreground))]">
              SPECIAL TEAMS
            </h2>
            <div className="h-px flex-1 bg-[hsl(var(--border))]" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {special.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function PlayerCard({ player }: { player: typeof players[0] }) {
  return (
    <Link
      href={`/roster/${player.id}`}
      className="group relative overflow-hidden rounded-2xl bg-[hsl(var(--card))] transition-all hover:scale-[1.02] hover:shadow-2xl"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={player.image}
          alt={player.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-transparent to-transparent" />
        
        {/* Number */}
        <div className="absolute right-4 top-4 font-[family-name:var(--font-display)] text-6xl text-[hsl(var(--foreground)/.15)]">
          {player.number}
        </div>
        
        {/* Position Badge */}
        <div className="absolute left-4 top-4 rounded-full bg-[hsl(var(--primary))] px-3 py-1 text-xs font-semibold text-[hsl(var(--primary-foreground))]">
          {player.position}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="text-sm text-[hsl(var(--primary))]">#{player.number}</p>
        <h3 className="font-[family-name:var(--font-display)] text-2xl text-[hsl(var(--foreground))]">
          {player.name}
        </h3>
        <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">
          {player.height} | {player.weight}
        </p>
      </div>
    </Link>
  );
}
