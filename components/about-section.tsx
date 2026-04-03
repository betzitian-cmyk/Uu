"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const highlights = [
  "Professional-grade training facilities",
  "Personalized coaching programs",
  "Video analysis and performance tracking",
  "Proven track record of player development",
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="about" ref={containerRef} className="relative overflow-hidden py-24 md:py-32">
      {/* Background Elements */}
      <motion.div
        className="pointer-events-none absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl"
        style={{ y }}
      />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80"
                alt="Football training session"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 rounded-2xl border border-border/50 bg-card/90 p-6 backdrop-blur-sm md:-right-12"
            >
              <div className="mb-2 font-[family-name:var(--font-display)] text-5xl text-primary">15+</div>
              <div className="text-sm uppercase tracking-widest text-muted-foreground">
                Years of Excellence
              </div>
            </motion.div>

            {/* Decorative Frame */}
            <motion.div
              className="absolute -left-4 -top-4 -z-10 h-full w-full rounded-2xl border border-primary/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.3em] text-primary"
            >
              About FlightSchool
            </motion.span>
            <h2 className="mb-6 font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-5xl lg:text-6xl">
              WHERE CHAMPIONS ARE MADE
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              FlightSchool Football is more than just a training program—it&apos;s a community dedicated 
              to developing the next generation of football athletes. Our comprehensive approach 
              combines elite coaching, cutting-edge facilities, and a passion for the game.
            </p>
            <p className="mb-8 text-muted-foreground">
              Founded by former professional players, we understand what it takes to succeed at the 
              highest levels. We bring that experience and knowledge to every training session, 
              helping athletes of all ages reach their full potential.
            </p>

            {/* Highlights */}
            <ul className="mb-8 space-y-4">
              {highlights.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </motion.div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <Link href="/about">
              <Button
                variant="outline"
                className="group border-primary/50 px-6 font-semibold hover:bg-primary hover:text-primary-foreground"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
