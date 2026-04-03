"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { Instagram, Twitter, ArrowRight } from "lucide-react"
import Link from "next/link"

const coaches = [
  {
    name: "Marcus Johnson",
    role: "Head Coach",
    bio: "Former NFL quarterback with 12 years of professional experience.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    socials: { instagram: "#", twitter: "#" },
  },
  {
    name: "Sarah Williams",
    role: "Offensive Coordinator",
    bio: "USA Football certified coach specializing in youth development.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    socials: { instagram: "#", twitter: "#" },
  },
  {
    name: "David Chen",
    role: "Defense Coach",
    bio: "Former college linebacker with expertise in defensive strategies.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    socials: { instagram: "#", twitter: "#" },
  },
  {
    name: "Alex Thompson",
    role: "Strength Coach",
    bio: "CSCS certified with 10+ years in athletic performance training.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    socials: { instagram: "#", twitter: "#" },
  },
]

export function CoachesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="coaches" ref={ref} className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.3em] text-primary"
          >
            Meet The Team
          </motion.span>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <h2 className="font-[family-name:var(--font-display)] text-5xl tracking-tight md:text-6xl lg:text-7xl">
              EXPERT COACHES
            </h2>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/about"
                className="group flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
              >
                View Full Roster
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Coaches Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coaches.map((coach, index) => (
            <motion.div
              key={coach.name}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-2xl bg-secondary">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Social Links */}
                <motion.div
                  className="absolute bottom-4 left-4 right-4 flex gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 20,
                  }}
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

                {/* Role Badge */}
                <div className="absolute right-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur-sm">
                  {coach.role}
                </div>
              </div>

              {/* Info */}
              <div>
                <h3 className="mb-1 font-[family-name:var(--font-display)] text-2xl tracking-wide">
                  {coach.name}
                </h3>
                <p className="text-sm text-muted-foreground">{coach.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
