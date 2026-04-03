"use client"

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeScroll, FadeScrollStagger, fadeScrollItemVariants } from "@/components/fade-scroll"
import {
  Star,
  Trophy,
  Target,
  TrendingUp,
  ChevronRight,
  ChevronLeft,
  MapPin,
  GraduationCap,
  Ruler,
  Weight,
  ArrowLeft,
  Instagram,
  Twitter,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// ─── Animated counter ──────────────────────────────────────────────────────────
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: [0.25, 0.46, 0.45, 0.94] })
      return () => controls.stop()
    }
  }, [isInView, count, value])

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

// ─── Radial progress ring ──────────────────────────────────────────────────────
function RadialProgress({ value, label, size = 100 }: { value: number; label: string; size?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })
  const r = (size - 12) / 2
  const circumference = 2 * Math.PI * r
  const progress = useMotionValue(0)
  const dashOffset = useTransform(progress, (v) => circumference - (v / 100) * circumference)

  useEffect(() => {
    if (isInView) {
      const controls = animate(progress, value, { duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] })
      return () => controls.stop()
    }
  }, [isInView, progress, value])

  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="var(--border)"
            strokeWidth={6}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="var(--primary)"
            strokeWidth={6}
            strokeLinecap="round"
            strokeDasharray={circumference}
            style={{ strokeDashoffset: dashOffset }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-[family-name:var(--font-display)] text-lg text-foreground">
            <AnimatedCounter value={value} suffix="%" />
          </span>
        </div>
      </div>
      <span className="text-center text-xs uppercase tracking-wide text-muted-foreground">{label}</span>
    </div>
  )
}

// ─── Data ───────────────────────────────────────────────────────────────────────
const players = [
  {
    id: "marcus-williams",
    name: "Marcus Williams",
    number: "7",
    position: "Quarterback",
    positionShort: "QB",
    age: 16,
    height: "6'1\"",
    weight: "185 lbs",
    hometown: "Atlanta, GA",
    school: "North Atlanta High School",
    class: "Junior",
    image: "/images/player-1.jpg",
    tagline: "Precision under pressure. Leadership on every snap.",
    bio: "Marcus joined FlightSchool at age 12 and has since grown into one of the top QB prospects in the Southeast. Known for his quick release, football IQ, and ability to read defenses before the snap, Marcus leads every session with intensity and purpose. His dedication to film study sets him apart from his peers.",
    stats: [
      { label: "Touchdowns", value: 34, suffix: "" },
      { label: "Pass Yards", value: 2840, suffix: "" },
      { label: "Completions", value: 198, suffix: "" },
      { label: "Games Played", value: 22, suffix: "" },
    ],
    ratings: [
      { label: "Accuracy", value: 91 },
      { label: "Speed", value: 74 },
      { label: "Football IQ", value: 96 },
      { label: "Leadership", value: 98 },
    ],
    achievements: [
      "2024 Regional MVP",
      "FlightSchool All-Star",
      "3x Tournament Champion",
      "D1 Scholarship Offer – University of Georgia",
    ],
    social: { twitter: "@marcuswqb7", instagram: "@mwilliams_qb7" },
  },
  {
    id: "jaylen-brooks",
    name: "Jaylen Brooks",
    number: "1",
    position: "Wide Receiver",
    positionShort: "WR",
    age: 15,
    height: "5'11\"",
    weight: "165 lbs",
    hometown: "Decatur, GA",
    school: "Decatur High School",
    class: "Sophomore",
    image: "/images/player-2.jpg",
    tagline: "Explosive routes. Unstoppable hands.",
    bio: "Jaylen is the most electrifying receiver to come through the FlightSchool program. His route running precision and explosive speed after the catch have drawn attention from scouts across the country. Jaylen brings relentless work ethic to every practice rep.",
    stats: [
      { label: "Touchdowns", value: 28, suffix: "" },
      { label: "Receiving Yards", value: 1920, suffix: "" },
      { label: "Receptions", value: 87, suffix: "" },
      { label: "Games Played", value: 20, suffix: "" },
    ],
    ratings: [
      { label: "Route Running", value: 94 },
      { label: "Speed", value: 97 },
      { label: "Hands", value: 92 },
      { label: "Separation", value: 89 },
    ],
    achievements: [
      "2024 Best WR Award",
      "FlightSchool All-Star",
      "2x Showcase MVP",
      "D1 Interest – Clemson, FSU",
    ],
    social: { twitter: "@jaylenz1", instagram: "@jaylenbrooks_wr" },
  },
  {
    id: "devon-carter",
    name: "Devon Carter",
    number: "23",
    position: "Running Back",
    positionShort: "RB",
    age: 16,
    height: "5'9\"",
    weight: "190 lbs",
    hometown: "Marietta, GA",
    school: "Marietta High School",
    class: "Junior",
    image: "/images/player-3.jpg",
    tagline: "Power, speed, instinct. Every carry counts.",
    bio: "Devon brings an elite combination of power and burst that coaches rarely see at the high school level. His vision through the running lane and ability to break tackles make him a nightmare for defenders. Devon has been with FlightSchool for 3 years and continues to raise his ceiling every season.",
    stats: [
      { label: "Touchdowns", value: 22, suffix: "" },
      { label: "Rush Yards", value: 1540, suffix: "" },
      { label: "Carries", value: 134, suffix: "" },
      { label: "Games Played", value: 20, suffix: "" },
    ],
    ratings: [
      { label: "Power", value: 88 },
      { label: "Speed", value: 91 },
      { label: "Vision", value: 86 },
      { label: "Blocking", value: 79 },
    ],
    achievements: [
      "2024 Top RB – Southeast Region",
      "FlightSchool All-Star",
      "Summer Tournament Top Scorer",
      "Multiple D2 Scholarship Offers",
    ],
    social: { twitter: "@devoncarter23", instagram: "@dc23_rb" },
  },
  {
    id: "isaiah-thompson",
    name: "Isaiah Thompson",
    number: "12",
    position: "Quarterback",
    positionShort: "QB",
    age: 14,
    height: "6'0\"",
    weight: "175 lbs",
    hometown: "Stone Mountain, GA",
    school: "Stone Mountain High School",
    class: "Freshman",
    image: "/images/player-4.jpg",
    tagline: "The next generation starts now.",
    bio: "At just 14, Isaiah is already turning heads as one of the most polished freshman QBs the FlightSchool program has seen. His calm under pressure and natural arm talent are well beyond his years. Coaches project him as a top-tier prospect by his junior season.",
    stats: [
      { label: "Touchdowns", value: 19, suffix: "" },
      { label: "Pass Yards", value: 1680, suffix: "" },
      { label: "Completions", value: 142, suffix: "" },
      { label: "Games Played", value: 18, suffix: "" },
    ],
    ratings: [
      { label: "Accuracy", value: 83 },
      { label: "Arm Strength", value: 86 },
      { label: "Football IQ", value: 90 },
      { label: "Athleticism", value: 88 },
    ],
    achievements: [
      "2024 Freshman of the Year",
      "FlightSchool Rising Star",
      "FLAG Division Champion",
      "Regional All-Star Selection",
    ],
    social: { twitter: "@isaiah_qb12", instagram: "@ithompson_qb" },
  },
]

// ─── Player Card ───────────────────────────────────────────────────────────────
function PlayerCard({ player, index }: { player: typeof players[0]; index: number }) {
  return (
    <FadeScroll delay={index * 0.1} direction="up">
      <Link href={`/players/${player.id}`}>
        <motion.div
          className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm"
          whileHover={{ y: -6, borderColor: "var(--primary)" }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.25 }}
        >
          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            <Image
              src={player.image}
              alt={player.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
            {/* Number badge */}
            <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-background/80 backdrop-blur-sm">
              <span className="font-[family-name:var(--font-display)] text-lg text-primary">
                #{player.number}
              </span>
            </div>
            {/* Position badge */}
            <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
              {player.positionShort}
            </div>
          </div>

          {/* Info */}
          <div className="p-5">
            <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-foreground">
              {player.name}
            </h3>
            <p className="mt-0.5 text-sm text-muted-foreground">{player.position} &bull; {player.class}</p>
            <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
              {player.tagline}
            </p>
            {/* Quick stats */}
            <div className="mt-4 grid grid-cols-2 gap-2 border-t border-border/40 pt-4">
              <div>
                <div className="font-[family-name:var(--font-display)] text-xl text-primary">
                  {player.stats[0].value}
                </div>
                <div className="text-xs text-muted-foreground">{player.stats[0].label}</div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-display)] text-xl text-primary">
                  {player.stats[1].value.toLocaleString()}
                </div>
                <div className="text-xs text-muted-foreground">{player.stats[1].label}</div>
              </div>
            </div>
          </div>

          {/* Hover CTA */}
          <div className="absolute inset-x-0 bottom-0 translate-y-full bg-primary py-3 text-center text-sm font-semibold text-primary-foreground transition-transform duration-300 group-hover:translate-y-0">
            View Full Profile
            <ChevronRight className="ml-1 inline h-4 w-4" />
          </div>
        </motion.div>
      </Link>
    </FadeScroll>
  )
}

// ─── Individual Bio View ───────────────────────────────────────────────────────
function PlayerBioDetail({ player, onBack }: { player: typeof players[0]; onBack: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Back btn */}
      <div className="mx-auto max-w-7xl px-6 pb-6 pt-28 lg:px-8">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <motion.div whileHover={{ x: -4 }} transition={{ type: "spring", stiffness: 400 }}>
            <ArrowLeft className="h-4 w-4" />
          </motion.div>
          Back to All Players
        </button>
      </div>

      {/* Hero strip */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 h-80">
          <Image src={player.image} alt={player.name} fill className="object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-8 px-6 pt-16 lg:grid-cols-3 lg:px-8">
          {/* Player photo card */}
          <FadeScroll direction="left">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl border border-border/50 shadow-2xl">
              <Image src={player.image} alt={player.name} fill className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-[family-name:var(--font-display)] text-4xl text-primary">
                      #{player.number}
                    </div>
                    <div className="text-xs text-muted-foreground">{player.position}</div>
                  </div>
                  <div className="flex gap-2">
                    {player.social.twitter && (
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground">
                        <Twitter className="h-3.5 w-3.5" />
                      </span>
                    )}
                    {player.social.instagram && (
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground">
                        <Instagram className="h-3.5 w-3.5" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </FadeScroll>

          {/* Main info */}
          <div className="pt-8 lg:col-span-2">
            <FadeScroll delay={0.1}>
              <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                {player.class} &bull; Age {player.age}
              </span>
              <h1 className="font-[family-name:var(--font-display)] text-5xl leading-none tracking-wide text-foreground md:text-7xl">
                {player.name.split(" ")[0]}
                <br />
                <span className="text-primary">{player.name.split(" ").slice(1).join(" ")}</span>
              </h1>
              <p className="mt-4 text-lg italic text-muted-foreground">&ldquo;{player.tagline}&rdquo;</p>
            </FadeScroll>

            {/* Attributes row */}
            <FadeScroll delay={0.2} className="mt-6">
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: Ruler, label: player.height },
                  { icon: Weight, label: player.weight },
                  { icon: MapPin, label: player.hometown },
                  { icon: GraduationCap, label: player.school },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Icon className="h-4 w-4 text-primary" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </FadeScroll>

            {/* Bio text */}
            <FadeScroll delay={0.25} className="mt-6">
              <p className="leading-relaxed text-muted-foreground">{player.bio}</p>
            </FadeScroll>

            {/* Achievements */}
            <FadeScroll delay={0.3} className="mt-6">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Achievements
              </h3>
              <FadeScrollStagger className="flex flex-wrap gap-2">
                {player.achievements.map((a) => (
                  <motion.span
                    key={a}
                    variants={fadeScrollItemVariants}
                    className="flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary"
                  >
                    <Trophy className="h-3 w-3" />
                    {a}
                  </motion.span>
                ))}
              </FadeScrollStagger>
            </FadeScroll>
          </div>
        </div>
      </div>

      {/* Stats & Ratings */}
      <div className="mx-auto mt-16 max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Season numbers */}
          <FadeScroll direction="left">
            <h2 className="mb-6 font-[family-name:var(--font-display)] text-3xl tracking-wide text-foreground">
              SEASON STATS
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {player.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="rounded-xl border border-border/50 bg-card/40 p-5 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  whileHover={{ borderColor: "var(--primary)", scale: 1.03 }}
                >
                  <div className="font-[family-name:var(--font-display)] text-4xl text-primary">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeScroll>

          {/* Radial ratings */}
          <FadeScroll direction="right" delay={0.1}>
            <h2 className="mb-6 font-[family-name:var(--font-display)] text-3xl tracking-wide text-foreground">
              SKILL RATINGS
            </h2>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {player.ratings.map((r) => (
                <RadialProgress key={r.label} value={r.value} label={r.label} size={100} />
              ))}
            </div>
          </FadeScroll>
        </div>

        {/* CTA */}
        <FadeScroll className="mt-16 text-center" delay={0.2}>
          <div className="inline-block rounded-2xl border border-primary/20 bg-card/40 px-10 py-8">
            <p className="mb-4 text-muted-foreground">Interested in training alongside our athletes?</p>
            <Link href="/register">
              <Button className="bg-primary px-8 font-semibold text-primary-foreground">
                Register for FlightSchool
              </Button>
            </Link>
          </div>
        </FadeScroll>
      </div>
    </motion.div>
  )
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function PlayersPage() {
  const [selectedPlayer, setSelectedPlayer] = useState<typeof players[0] | null>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const playersPerPage = 4
  const totalPages = Math.ceil(players.length / playersPerPage)
  const visible = players.slice(currentPage * playersPerPage, (currentPage + 1) * playersPerPage)

  if (selectedPlayer) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <PlayerBioDetail player={selectedPlayer} onBack={() => setSelectedPlayer(null)} />
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[55vh] items-end overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/player-bio-hero.jpg"
            alt="FlightSchool players"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
        </div>

        {/* diagonal accent stripe */}
        <motion.div
          className="pointer-events-none absolute -right-20 top-0 h-full w-64 -skew-x-12 bg-primary/5"
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Our Athletes
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-6xl leading-none tracking-wide text-foreground md:text-8xl">
              PLAYER<br />
              <span className="text-primary">BIOS</span>
            </h1>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Meet the next generation of elite athletes developed at FlightSchool Football. Every rep, every route, every rep matters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Player grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeScroll className="mb-4 flex items-center justify-between">
            <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-wide text-foreground md:text-5xl">
              ALL ATHLETES
            </h2>
            <span className="text-sm text-muted-foreground">{players.length} players</span>
          </FadeScroll>

          {/* Position filter */}
          <FadeScroll className="mb-10" delay={0.05}>
            <div className="flex flex-wrap gap-2">
              {["All", "QB", "WR", "RB", "DB", "LB"].map((pos) => (
                <motion.button
                  key={pos}
                  className="rounded-full border border-border/50 bg-card/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {pos}
                </motion.button>
              ))}
            </div>
          </FadeScroll>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visible.map((player, i) => (
              <div key={player.id} onClick={() => setSelectedPlayer(player)} className="cursor-pointer">
                <PlayerCard player={player} index={i} />
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <FadeScroll className="mt-10 flex items-center justify-center gap-4" delay={0.2}>
              <motion.button
                onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
                disabled={currentPage === 0}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary disabled:opacity-30"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="h-4 w-4" />
              </motion.button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`flex h-2.5 w-2.5 rounded-full transition-all ${
                    i === currentPage ? "w-6 bg-primary" : "bg-border/50 hover:bg-primary/50"
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
              <motion.button
                onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={currentPage === totalPages - 1}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary disabled:opacity-30"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="h-4 w-4" />
              </motion.button>
            </FadeScroll>
          )}
        </div>
      </section>

      {/* Highlights link banner */}
      <FadeScroll>
        <section className="border-y border-border/50 bg-card/20 py-12">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center lg:flex-row lg:justify-between lg:text-left lg:px-8">
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-3xl tracking-wide text-foreground">
                See How They Perform
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Check season highlights, tournament wins, and performance stats.
              </p>
            </div>
            <Link href="/highlights">
              <Button className="shrink-0 bg-primary px-8 font-semibold text-primary-foreground">
                View Highlights &amp; Stats
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </FadeScroll>

      <Footer />
    </main>
  )
}
