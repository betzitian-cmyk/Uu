import Image from "next/image";

const stats = [
  { label: "Total Points", value: "486", change: "+12%" },
  { label: "Passing Yards", value: "4,521", change: "+8%" },
  { label: "Rushing Yards", value: "2,187", change: "+15%" },
  { label: "Defensive Stops", value: "89", change: "+22%" },
];

const teamStats = [
  { label: "Wins", value: "12" },
  { label: "Losses", value: "2" },
  { label: "Points For", value: "486" },
  { label: "Points Against", value: "298" },
];

export function StatsHighlight() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/stadium.jpg"
          alt="Thunder Hawks Stadium"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--background))] via-[hsl(var(--background)/.9)] to-[hsl(var(--background))]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(var(--primary))]">
            Season Statistics
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-tight text-[hsl(var(--foreground))] lg:text-5xl">
            BY THE NUMBERS
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card)/.8)] p-6 backdrop-blur transition-all hover:border-[hsl(var(--primary)/.5)]"
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[hsl(var(--primary)/.1)] blur-2xl transition-all group-hover:bg-[hsl(var(--primary)/.2)]" />
              <p className="relative font-[family-name:var(--font-display)] text-5xl text-[hsl(var(--foreground))] lg:text-6xl">
                {stat.value}
              </p>
              <p className="relative mt-2 text-sm text-[hsl(var(--muted-foreground))]">
                {stat.label}
              </p>
              <span className="relative mt-2 inline-block rounded-full bg-[hsl(142_76%_36%/.2)] px-2 py-0.5 text-xs font-semibold text-[hsl(142_76%_36%)]">
                {stat.change}
              </span>
            </div>
          ))}
        </div>

        {/* Team Record */}
        <div className="mt-16 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card)/.8)] p-8 backdrop-blur">
          <h3 className="text-center font-[family-name:var(--font-display)] text-2xl text-[hsl(var(--foreground))]">
            2026 SEASON RECORD
          </h3>
          <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {teamStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-[family-name:var(--font-display)] text-5xl text-[hsl(var(--primary))]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm uppercase tracking-wider text-[hsl(var(--muted-foreground))]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
