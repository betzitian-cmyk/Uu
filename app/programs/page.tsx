"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Flag, Users, Trophy, Calendar, Clock, MapPin, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeScroll } from "@/components/fade-scroll"
import Link from "next/link"

const programs = [
  {
    icon: Flag,
    title: "Winter FLAG Football",
    description: "Our flagship competitive flag football program featuring weekly games and intensive skill development sessions. Perfect for players looking to compete while honing their fundamentals.",
    status: "Registration Open",
    ages: "Ages 6-18",
    schedule: "Saturdays 9AM-12PM",
    location: "FlightSchool Training Complex",
    features: [
      "8-week competitive season",
      "Professional referees",
      "End of season playoffs",
      "Team jerseys included",
      "Weekly skill clinics",
    ],
    color: "from-primary/20 to-primary/5",
    featured: true,
  },
  {
    icon: Users,
    title: "Youth Academy",
    description: "Foundational training program designed specifically for young athletes ages 6-12. Focus on building fundamental skills, teamwork, and a genuine love for the game.",
    status: "Enrolling Now",
    ages: "Ages 6-12",
    schedule: "Tuesdays & Thursdays 4PM-6PM",
    location: "FlightSchool Training Complex",
    features: [
      "Age-appropriate training",
      "Small group instruction",
      "Fundamental skill building",
      "Character development",
      "Fun, supportive environment",
    ],
    color: "from-chart-2/20 to-chart-2/5",
    featured: false,
  },
  {
    icon: Trophy,
    title: "Elite Training Program",
    description: "Advanced program for competitive players ready to take their game to the next level. Invitation-only based on skill assessment and commitment level.",
    status: "By Invitation",
    ages: "Ages 13-18",
    schedule: "Mon/Wed/Fri 5PM-7PM",
    location: "FlightSchool Training Complex",
    features: [
      "Advanced technique training",
      "Position-specific coaching",
      "Film study sessions",
      "Strength & conditioning",
      "College recruitment guidance",
    ],
    color: "from-chart-3/20 to-chart-3/5",
    featured: false,
  },
  {
    icon: Calendar,
    title: "Summer Training Camps",
    description: "Intensive week-long camps during summer break featuring professional-level coaching, competitive scrimmages, and immersive football education.",
    status: "Coming June 2024",
    ages: "Ages 8-16",
    schedule: "Full Week 8AM-4PM",
    location: "FlightSchool Training Complex",
    features: [
      "Full-day programming",
      "Guest professional coaches",
      "Daily competitions",
      "Camp t-shirt & gear",
      "End-of-camp showcase",
    ],
    color: "from-chart-4/20 to-chart-4/5",
    featured: false,
  },
]

function ProgramCard({ program, index }: { program: typeof programs[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className={`group relative rounded-3xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 ${
        program.featured ? "md:col-span-2 lg:col-span-2" : ""
      }`}
    >
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${program.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

      <div className="relative z-10">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <motion.div
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
            whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
          >
            <program.icon className="h-8 w-8" />
          </motion.div>
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            {program.status}
          </span>
        </div>

        <h3 className="mb-3 font-[family-name:var(--font-display)] text-3xl tracking-wide">
          {program.title}
        </h3>

        <p className="mb-6 text-muted-foreground">
          {program.description}
        </p>

        <div className="mb-6 grid gap-3 sm:grid-cols-3">
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-primary" />
            <span>{program.ages}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-primary" />
            <span>{program.schedule}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{program.location}</span>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Program Features
          </h4>
          <ul className="grid gap-2 sm:grid-cols-2">
            {program.features.map((feature, i) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="flex items-center gap-2 text-sm"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>

        <Link href="/register">
          <Button className="w-full bg-primary font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02]">
            Register Now
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}

export default function ProgramsPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeScroll className="text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.3em] text-primary"
            >
              Our Programs
            </motion.span>
            <h1 className="mb-6 font-[family-name:var(--font-display)] text-5xl tracking-tight md:text-6xl lg:text-8xl">
              CHOOSE YOUR PATH
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              From beginners to elite athletes, we have a program designed to help you reach your goals. 
              Explore our offerings and find the perfect fit for your journey.
            </p>
          </FadeScroll>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {programs.map((program, index) => (
              <ProgramCard key={program.title} program={program} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-primary/5 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <FadeScroll>
            <h2 className="mb-6 font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-5xl">
              NOT SURE WHICH PROGRAM IS RIGHT FOR YOU?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              Contact us for a free consultation. Our team will help you find the perfect program based on your goals, 
              skill level, and schedule.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary px-8 py-6 text-lg font-semibold text-primary-foreground">
                Get Free Consultation
              </Button>
            </Link>
          </FadeScroll>
        </div>
      </section>

      <Footer />
    </main>
  )
}
