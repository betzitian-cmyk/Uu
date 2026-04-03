"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { CheckCircle2, Instagram, Twitter, Award, Target, Heart, Users } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeScroll } from "@/components/fade-scroll"

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do, pushing ourselves and our athletes to reach their full potential.",
  },
  {
    icon: Target,
    title: "Discipline",
    description: "Success comes through dedication and consistent effort. We instill discipline that translates beyond the field.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Our love for the game drives us to create an inspiring environment where athletes can thrive.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We build more than skills - we build a family. Our community supports each other on and off the field.",
  },
]

const coaches = [
  {
    name: "Marcus Johnson",
    role: "Head Coach & Founder",
    bio: "Former NFL quarterback with 12 years of professional experience. Marcus founded FlightSchool with a vision to develop the next generation of football athletes through personalized coaching and character development.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    credentials: ["12 Years NFL Experience", "USA Football Certified", "Youth Development Specialist"],
    socials: { instagram: "#", twitter: "#" },
  },
  {
    name: "Sarah Williams",
    role: "Offensive Coordinator",
    bio: "USA Football certified coach with a passion for youth development. Sarah brings 8 years of collegiate coaching experience and specializes in quarterback development and offensive strategy.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
    credentials: ["8 Years Collegiate Coaching", "Quarterback Specialist", "Sports Psychology Certified"],
    socials: { instagram: "#", twitter: "#" },
  },
  {
    name: "David Chen",
    role: "Defensive Coordinator",
    bio: "Former college linebacker with expertise in defensive schemes and player positioning. David's analytical approach to the game helps athletes understand the mental aspects of football.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
    credentials: ["D1 College Athlete", "Defensive Strategy Expert", "Film Analysis Specialist"],
    socials: { instagram: "#", twitter: "#" },
  },
  {
    name: "Alex Thompson",
    role: "Strength & Conditioning Coach",
    bio: "CSCS certified with over 10 years in athletic performance training. Alex designs programs that build strength, speed, and agility while prioritizing injury prevention.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
    credentials: ["CSCS Certified", "10+ Years Experience", "Sports Nutrition Expert"],
    socials: { instagram: "#", twitter: "#" },
  },
]

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "2,500+", label: "Athletes Trained" },
  { value: "98%", label: "Parent Satisfaction" },
  { value: "150+", label: "College Scholarships" },
]

function CoachCard({ coach, index }: { coach: typeof coaches[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <div className="relative mb-6 aspect-[3/4] overflow-hidden rounded-2xl bg-secondary">
        <Image
          src={coach.image}
          alt={coach.name}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="absolute bottom-4 left-4 right-4 flex gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a
            href={coach.socials.instagram}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Instagram className="h-5 w-5" />
          </motion.a>
          <motion.a
            href={coach.socials.twitter}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Twitter className="h-5 w-5" />
          </motion.a>
        </motion.div>

        <div className="absolute right-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur-sm">
          {coach.role}
        </div>
      </div>

      <h3 className="mb-2 font-[family-name:var(--font-display)] text-2xl tracking-wide">
        {coach.name}
      </h3>
      <p className="mb-4 text-sm text-muted-foreground">
        {coach.bio}
      </p>
      <div className="flex flex-wrap gap-2">
        {coach.credentials.map((cred) => (
          <span
            key={cred}
            className="rounded-full bg-secondary px-3 py-1 text-xs font-medium"
          >
            {cred}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function AboutPage() {
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true })

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
              About FlightSchool
            </motion.span>
            <h1 className="mb-6 font-[family-name:var(--font-display)] text-5xl tracking-tight md:text-6xl lg:text-8xl">
              WHERE CHAMPIONS<br />ARE MADE
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              FlightSchool Football is more than just a training program - it&apos;s a community dedicated 
              to developing the next generation of football athletes through elite coaching, character development, 
              and unwavering support.
            </p>
          </FadeScroll>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="relative overflow-hidden bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="mb-2 font-[family-name:var(--font-display)] text-4xl text-primary md:text-5xl">
                  {stat.value}
                </div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeScroll direction="left">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80"
                  alt="FlightSchool training session"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </FadeScroll>

            <FadeScroll direction="right" delay={0.2}>
              <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.3em] text-primary">
                Our Story
              </span>
              <h2 className="mb-6 font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-5xl">
                BUILT ON PASSION, DRIVEN BY EXCELLENCE
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Founded in 2009 by former NFL quarterback Marcus Johnson, FlightSchool Football was born 
                from a simple belief: every athlete deserves access to professional-quality coaching and 
                a supportive community that nurtures both their skills and character.
              </p>
              <p className="mb-8 text-muted-foreground">
                What started as weekend training sessions with a handful of young athletes has grown into 
                one of the region&apos;s premier football academies, with over 2,500 athletes trained and 
                counting. Our alumni have gone on to earn college scholarships, play professionally, 
                and most importantly, become leaders in their communities.
              </p>
              <ul className="space-y-4">
                {["Professional-grade training facilities", "Personalized coaching programs", "Video analysis and performance tracking", "Proven track record of player development"].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </FadeScroll>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative overflow-hidden bg-secondary/30 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeScroll className="mb-16 text-center">
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Our Values
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-5xl lg:text-6xl">
              WHAT WE STAND FOR
            </h2>
          </FadeScroll>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <FadeScroll key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm"
                >
                  <motion.div
                    className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                  >
                    <value.icon className="h-7 w-7" />
                  </motion.div>
                  <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl tracking-wide">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              </FadeScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeScroll className="mb-16">
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Meet The Team
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-5xl lg:text-6xl">
              EXPERT COACHES
            </h2>
          </FadeScroll>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {coaches.map((coach, index) => (
              <CoachCard key={coach.name} coach={coach} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
