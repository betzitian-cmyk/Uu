"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const slides = [
  {
    id: 1,
    title: "ELEVATE YOUR GAME",
    subtitle: "Elite Football Training",
    description: "Join the premier football academy and unlock your full potential on the field.",
    cta: "Register Now",
    ctaLink: "/register",
    image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=1920&q=80",
    overlay: "from-background/95 via-background/70 to-transparent",
  },
  {
    id: 2,
    title: "WINTER FLAG",
    subtitle: "Registration Now Open",
    description: "Sign up for our Winter FLAG football program. Limited spots available for all age groups.",
    cta: "Join Now",
    ctaLink: "/programs",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1920&q=80",
    overlay: "from-background/95 via-background/70 to-transparent",
  },
  {
    id: 3,
    title: "TRAIN LIKE A PRO",
    subtitle: "Professional Coaching",
    description: "Learn from experienced coaches who have trained at the highest levels of competition.",
    cta: "Meet Our Coaches",
    ctaLink: "/about",
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1920&q=80",
    overlay: "from-background/95 via-background/70 to-transparent",
  },
  {
    id: 4,
    title: "YOUTH ACADEMY",
    subtitle: "Ages 6-12",
    description: "Build a strong foundation with our youth program. Develop skills, teamwork, and a love for the game.",
    cta: "Explore Programs",
    ctaLink: "/programs",
    image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=1920&q=80",
    overlay: "from-background/95 via-background/70 to-transparent",
  },
  {
    id: 5,
    title: "SUMMER CAMPS",
    subtitle: "Coming Soon",
    description: "Intensive week-long training camps with professional instruction and competitive gameplay.",
    cta: "Get Notified",
    ctaLink: "/contact",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&q=80",
    overlay: "from-background/95 via-background/70 to-transparent",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  }

  const textVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: delay * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {/* Background Image with Ken Burns Effect */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 6, ease: "linear" }}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].overlay}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 flex h-full items-center">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
              <div className="max-w-3xl">
                <motion.p
                  custom={0}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                <motion.h1
                  custom={1}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="mb-6 font-[family-name:var(--font-display)] text-6xl leading-none tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p
                  custom={2}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="mb-8 max-w-xl text-lg text-muted-foreground md:text-xl"
                >
                  {slides[currentSlide].description}
                </motion.p>
                <motion.div
                  custom={3}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link href={slides[currentSlide].ctaLink}>
                    <Button
                      size="lg"
                      className="group relative overflow-hidden bg-primary px-8 py-6 text-lg font-semibold text-primary-foreground transition-all duration-300 hover:scale-105"
                    >
                      <span className="relative z-10">{slides[currentSlide].cta}</span>
                      <motion.div
                        className="absolute inset-0 bg-foreground"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute bottom-1/2 left-4 right-4 z-20 flex translate-y-1/2 items-center justify-between md:left-8 md:right-8">
        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 bg-background/20 backdrop-blur-sm transition-colors hover:border-primary hover:bg-primary/20"
        >
          <ChevronLeft className="h-6 w-6" />
        </motion.button>
        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 bg-background/20 backdrop-blur-sm transition-colors hover:border-primary hover:bg-primary/20"
        >
          <ChevronRight className="h-6 w-6" />
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1)
              setCurrentSlide(index)
            }}
            className="relative h-1 overflow-hidden rounded-full bg-foreground/30"
            initial={{ width: 32 }}
            animate={{ width: currentSlide === index ? 64 : 32 }}
            transition={{ duration: 0.3 }}
          >
            {currentSlide === index && (
              <motion.div
                className="absolute inset-y-0 left-0 bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 right-8 z-20 hidden flex-col items-center gap-2 md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
        <motion.div
          className="h-12 w-px bg-gradient-to-b from-primary to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}
