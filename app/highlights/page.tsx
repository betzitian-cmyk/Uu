"use client"

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeScroll, FadeScrollStagger, fadeScrollItemVariants } from "@/components/fade-scroll"
import {
  Trophy,
  TrendingUp,
  Star,
  Target,
  Zap,
  Award,
  Users,
  BarChart3,
  Play,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// ─── Animated Counter ──────────────────────────────────────────────────────────
function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2.2, ease: [0.25, 0.46, 0.45, 0.94] })
      return () => controls.stop()
    }
  }, [isInView, count, value])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

// ─── Data ───────────────────────────────────────────────────────────────────────
const seasonStats = [
  { icon: Trophy, label: "Tournaments Won", value: 12, suffix: "", color: "text-primary" },
  { icon: Users, label: "Active Players", value: 500, suffix: "+", color: "text-primary" },
  { icon: Star, label: "All-Stars Produced", value: 87, suffix: "", color: "text-primary" },
  { icon: TrendingUp, label: "Win Rate", value: 78, suffix: "%", color: "text-primary" },
  { icon: Award, label: "Scholarships Earned", value: 34, suffix: "", color: "text-primary" },
  { icon: Target, label: "Completion Rate", value: 91, suffix: "%", color: "text-primary" },
]

const positionStats = [
  { position: "QB", metric: "Completion %", value: 68, max: 100, color: "#E6A817" },
  { position: "WR", metric: "Catch Rate", value: 74, max: 100, color: "#E6A817" },
  { position: "RB", metric: "Break Tackle %", value: 55, max: 100, color: "#E6A817" },
  { position: "OL", metric: "Block Efficiency", value: 82, max: 100, color: "#E6A817" },
  { position: "DB", metric: "Coverage %", value: 71, max: 100, color: "#E6A817" },
  { position: "LB", metric: "Tackle Efficiency", value: 79, max: 100, color: "#E6A817" },
]

const highlights = [
  {
    title: "Championship Game 2024",
    description: "FlightSchool 7v7 team dominates the regional championship with 42 points scored in the final.",
    tag: "Championship",
    image: "/images/highlight-hero.jpg",
    stats: ["42 pts scored", "0 turnovers", "MVP Award"],
  },
  {
    title: "Fall Showcase — Top Performers",
    description: "Over 80 college scouts attended as our athletes put on a dominant showcase performance.",
    tag: "Showcase",
    image: "/images/player-1.jpg",
    stats: ["80+ scouts", "15 offers given", "4 D1 commits"],
  },
  {
    title: "Summer Tournament Sweep",
    description: "5 consecutive tournament wins across the tri-state area in a single summer season.",
    tag: "Tournament",
    image: "/images/player-2.jpg",
    stats: ["5-0 record", "156 total pts", "3 shutouts"],
  },
  {
    title: "FLAG Season Undefeated Run",
    description: "Our youth FLAG division went undefeated through an 18-game regular season and playoffs.",
    tag: "FLAG",
    image: "/images/player-3.jpg",
    stats: ["18-0 season", "U10 champions", "+112 pt diff"],
  },
]

const leaderboard = [
  { rank: 1, name: "Marcus Williams", position: "QB", touchdowns: 34, yards: 2840, rating: 99 },
  { rank: 2, name: "Jaylen Brooks", position: "WR", touchdowns: 28, yards: 1920, rating: 97 },
  { rank: 3, name: "Devon Carter", position: "RB", touchdowns: 22, yards: 1540, rating: 95 },
  { rank: 4, name: "Isaiah Thompson", position: "QB", touchdowns: 19, yards: 1680, rating: 93 },
  { rank: 5, name: "Caleb Foster", position: "WR", touchdowns: 17, yards: 1310, rating: 91 },
]

// ─── Bar Chart Row ──────────────────────────────────────────────────────────────
function BarRow({ item, index }: { item: typeof positionStats[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group"
    >
      <div className="mb-1 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-8 rounded bg-primary/10 px-1 py-0.5 text-center text-xs font-bold text-primary">
            {item.position}
          </span>
          <span className="text-sm text-muted-foreground">{item.metric}</span>
        </div>
        <span className="text-sm font-bold text-foreground">{item.value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-border/40">
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${(item.value / item.max) * 100}%` } : {}}
          transition={{ delay: index * 0.08 + 0.2, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </motion.div>
  )
}

// ─── Page ───────────────────────────────────────────────────────────────────────
export default function HighlightsPage() {
  const [activeHighlight, setActiveHighlight] = useState(0)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/highlight-hero.jpg"
            alt="FlightSchool highlights"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        </div>

        {/* Animated scan lines */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, var(--foreground), var(--foreground) 1px, transparent 1px, transparent 4px)",
          }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Season Highlights
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-6xl leading-none tracking-wide text-foreground md:text-8xl">
              STATS &<br />
              <span className="text-primary">HIGHLIGHTS</span>
            </h1>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Track every touchdown, every milestone, and every breakthrough. See how FlightSchool athletes dominate on and off the field.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Season Stats Grid ── */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeScroll className="mb-12">
            <div className="flex items-center gap-4">
              <BarChart3 className="h-6 w-6 text-primary" />
              <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-wide text-foreground md:text-5xl">
                SEASON OVERVIEW
              </h2>
            </div>
          </FadeScroll>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {seasonStats.map((stat, i) => (
              <FadeScroll key={stat.label} delay={i * 0.07} direction="up">
                <motion.div
                  whileHover={{ scale: 1.03, borderColor: "var(--primary)" }}
                  className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/40 p-6 backdrop-blur-sm transition-colors"
                >
                  {/* glow accent */}
                  <motion.div
                    className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10"
                    whileHover={{ scale: 1.8, opacity: 0.2 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="relative flex items-start justify-between">
                    <div>
                      <stat.icon className={`mb-3 h-6 w-6 ${stat.color}`} />
                      <div className={`font-[family-name:var(--font-display)] text-5xl leading-none ${stat.color}`}>
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                    <motion.div
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                      whileHover={{ x: 4 }}
                    >
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </motion.div>
                  </div>
                </motion.div>
              </FadeScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Highlights Reel ── */}
      <section className="relative overflow-hidden border-y border-border/50 bg-card/20 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeScroll className="mb-12">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Play className="h-6 w-6 text-primary" />
                <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-wide text-foreground md:text-5xl">
                  TOP HIGHLIGHTS
                </h2>
              </div>
            </div>
          </FadeScroll>

          <div className="grid gap-6 md:grid-cols-2">
            {highlights.map((h, i) => (
              <FadeScroll key={h.title} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                <motion.div
                  className={`group relative cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 ${
                    activeHighlight === i
                      ? "border-primary/60 shadow-lg shadow-primary/10"
                      : "border-border/50 hover:border-primary/30"
                  }`}
                  onClick={() => setActiveHighlight(i)}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={h.image}
                      alt={h.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase text-primary-foreground">
                      {h.tag}
                    </span>
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 backdrop-blur-sm">
                        <Play className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </motion.div>
                  </div>
                  <div className="bg-card/80 p-5 backdrop-blur-sm">
                    <h3 className="mb-1 font-[family-name:var(--font-display)] text-xl tracking-wide text-foreground">
                      {h.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{h.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {h.stats.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </FadeScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Position Performance ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            {/* Bar chart */}
            <div>
              <FadeScroll className="mb-8">
                <div className="flex items-center gap-4">
                  <Zap className="h-6 w-6 text-primary" />
                  <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-wide md:text-5xl">
                    BY POSITION
                  </h2>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Key performance metrics across all positions trained at FlightSchool.
                </p>
              </FadeScroll>
              <div className="flex flex-col gap-5">
                {positionStats.map((item, i) => (
                  <BarRow key={item.position} item={item} index={i} />
                ))}
              </div>
            </div>

            {/* Leaderboard */}
            <div>
              <FadeScroll className="mb-8" delay={0.1}>
                <div className="flex items-center gap-4">
                  <Trophy className="h-6 w-6 text-primary" />
                  <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-wide md:text-5xl">
                    LEADERBOARD
                  </h2>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Top performers across all FlightSchool programs this season.
                </p>
              </FadeScroll>

              <FadeScrollStagger className="flex flex-col gap-3">
                {leaderboard.map((player, i) => (
                  <motion.div key={player.name} variants={fadeScrollItemVariants}>
                    <Link href={`/players/${player.name.toLowerCase().replace(/\s+/g, "-")}`}>
                      <motion.div
                        className="group flex items-center gap-4 rounded-xl border border-border/50 bg-card/40 p-4 transition-colors hover:border-primary/40 hover:bg-card/60"
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Rank */}
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-[family-name:var(--font-display)] text-lg ${
                            i === 0
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          {player.rank}
                        </div>
                        {/* Info */}
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="truncate font-semibold text-foreground">{player.name}</span>
                            <span className="shrink-0 rounded bg-primary/10 px-1.5 py-0.5 text-xs font-bold text-primary">
                              {player.position}
                            </span>
                          </div>
                          <div className="mt-0.5 flex gap-3 text-xs text-muted-foreground">
                            <span>{player.touchdowns} TDs</span>
                            <span>{player.yards.toLocaleString()} yds</span>
                          </div>
                        </div>
                        {/* Rating */}
                        <div className="flex items-center gap-1 text-right">
                          <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                          <span className="font-bold text-foreground">{player.rating}</span>
                        </div>
                        <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </FadeScrollStagger>

              <FadeScroll delay={0.4} className="mt-6">
                <Link href="/players">
                  <Button
                    variant="outline"
                    className="w-full border-primary/30 text-primary hover:bg-primary/10"
                  >
                    View All Player Bios
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </FadeScroll>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
