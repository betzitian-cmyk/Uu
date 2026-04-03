import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const news = [
  {
    id: 1,
    title: "Thunder Hawks Clinch Playoff Spot with Dominant Win",
    excerpt: "The team secured their place in the playoffs with a commanding 35-14 victory over the Steel Titans.",
    image: "/images/news/news-1.jpg",
    date: "April 5, 2026",
    category: "Game Recap",
  },
  {
    id: 2,
    title: "Community Day: Players Connect with Local Youth",
    excerpt: "Our players spent the day at local schools, inspiring the next generation of athletes and giving back to the community.",
    image: "/images/news/news-2.jpg",
    date: "April 3, 2026",
    category: "Community",
  },
  {
    id: 3,
    title: "Injury Update: Key Players Expected Back for Playoffs",
    excerpt: "Head coach announces positive recovery progress for injured starters ahead of the crucial playoff push.",
    image: "/images/player-action.jpg",
    date: "April 1, 2026",
    category: "Team News",
  },
];

export function LatestNews() {
  return (
    <section className="border-y border-[hsl(var(--border))] bg-[hsl(var(--card))] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(var(--primary))]">
              Latest Updates
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-tight text-[hsl(var(--foreground))] lg:text-5xl">
              TEAM NEWS
            </h2>
          </div>
          <Link
            href="/news"
            className="group flex items-center gap-2 text-sm font-medium text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--primary))]"
          >
            All News
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {news.map((article, index) => (
            <Link
              key={article.id}
              href={`/news/${article.id}`}
              className={`group ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
            >
              <article className="relative h-full overflow-hidden rounded-2xl bg-[hsl(var(--background))] transition-all hover:shadow-2xl">
                <div className={`relative ${index === 0 ? "aspect-[16/9] lg:aspect-[16/10]" : "aspect-video"} overflow-hidden`}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full bg-[hsl(var(--primary))] px-3 py-1 text-xs font-semibold text-[hsl(var(--primary-foreground))]">
                    {article.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))]">
                    <Calendar className="h-4 w-4" />
                    {article.date}
                  </div>
                  <h3 className={`mt-3 font-[family-name:var(--font-display)] ${index === 0 ? "text-2xl lg:text-3xl" : "text-xl"} text-[hsl(var(--foreground))] transition-colors group-hover:text-[hsl(var(--primary))]`}>
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))] line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
