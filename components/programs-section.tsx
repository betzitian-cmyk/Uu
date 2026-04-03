"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Flag, Users, Trophy, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const programs = [
  {
    icon: Flag,
    title: "Winter FLAG",
    description: "Competitive flag football program with weekly games and skill development sessions.",
    status: "Registration Open",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Users,
    title: "Youth Academy",
    description: "Foundational training for young athletes ages 6-12, focusing on fundamentals and teamwork.",
    status: "Ages 6-12",
    color: "from-chart-2/20 to-chart-2/5",
  },
  {
    icon: Trophy,
    title: "Elite Training",
    description: "Advanced program for competitive players looking to take their game to the next level.",
    status: "By Invitation",
    color: "from-chart-3/20 to-chart-3/5",
  },
  {
    icon: Calendar,
    title: "Summer Camps",
    description: "Intensive week-long camps during summer break with professional-level coaching.",
    status: "Coming Soon",
    color: "from-chart-4/20 to-chart-4/5",
  },
]

export function ProgramsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="programs" ref={ref} className="relative overflow-hidden py-24 md:py-32">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-1/4 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.3em] text-primary"
          >
            Our Programs
          </motion.span>
          <h2 className="mb-6 font-[family-name:var(--font-display)] text-5xl tracking-tight md:text-6xl lg:text-7xl">
            TRAIN WITH THE BEST
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Choose from our range of programs designed to develop players at every skill level.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${program.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="relative flex h-full flex-col rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-colors duration-300 group-hover:border-primary/30">
                {/* Icon */}
                <motion.div
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                  whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                >
                  <program.icon className="h-7 w-7" />
                </motion.div>

                {/* Status Badge */}
                <span className="mb-3 inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {program.status}
                </span>

                {/* Title */}
                <h3 className="mb-2 font-[family-name:var(--font-display)] text-2xl tracking-wide">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="mb-6 flex-1 text-sm text-muted-foreground">
                  {program.description}
                </p>

                {/* CTA */}
                <Link href="/programs">
                  <Button
                    variant="ghost"
                    className="group/btn w-full justify-start p-0 text-foreground hover:text-primary"
                  >
                    <span className="relative">
                      Learn More
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover/btn:w-full" />
                    </span>
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Programs Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Link href="/programs">
            <Button
              size="lg"
              variant="outline"
              className="group border-primary/50 px-8 py-6 text-lg font-semibold hover:bg-primary hover:text-primary-foreground"
            >
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
