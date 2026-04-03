"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeScroll } from "@/components/fade-scroll"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["FlightSchool Training Complex", "123 Training Field Road", "City, State 12345"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["(555) 123-4567", "Mon-Fri: 9AM - 7PM", "Sat: 8AM - 2PM"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@flightschoolfootball.com", "registration@flightschoolfootball.com"],
  },
  {
    icon: Clock,
    title: "Training Hours",
    details: ["Monday - Friday: 4PM - 8PM", "Saturday: 8AM - 2PM", "Sunday: Closed"],
  },
]

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", phone: "", subject: "", message: "" })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

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
              Contact Us
            </motion.span>
            <h1 className="mb-6 font-[family-name:var(--font-display)] text-5xl tracking-tight md:text-6xl lg:text-8xl">
              GET IN TOUCH
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Have questions about our programs? Ready to register? We&apos;d love to hear from you. 
              Reach out and our team will get back to you within 24 hours.
            </p>
          </FadeScroll>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <FadeScroll key={info.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 font-[family-name:var(--font-display)] text-xl tracking-wide">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              </FadeScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <FadeScroll direction="left">
              <div className="rounded-3xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm md:p-10">
                <h2 className="mb-2 font-[family-name:var(--font-display)] text-3xl tracking-wide">
                  SEND US A MESSAGE
                </h2>
                <p className="mb-8 text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl bg-primary/10 p-8 text-center"
                  >
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Send className="h-8 w-8" />
                    </div>
                    <h3 className="mb-2 font-[family-name:var(--font-display)] text-2xl">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="h-12 border-border/50 bg-background/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          className="h-12 border-border/50 bg-background/50"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                          Phone (Optional)
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="(555) 123-4567"
                          className="h-12 border-border/50 bg-background/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          placeholder="How can we help?"
                          required
                          className="h-12 border-border/50 bg-background/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Tell us more about what you're looking for..."
                        required
                        rows={6}
                        className="border-border/50 bg-background/50"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="h-12 w-full bg-primary text-lg font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02]"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="h-5 w-5 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground"
                        />
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </FadeScroll>

            {/* Map & Social */}
            <FadeScroll direction="right" delay={0.2}>
              <div className="flex h-full flex-col gap-6">
                {/* Map Placeholder */}
                <div className="relative flex-1 overflow-hidden rounded-3xl border border-border/50 bg-secondary/50">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a47df06b185%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1629823461238!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "300px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                </div>

                {/* Social Links */}
                <div className="rounded-3xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
                  <h3 className="mb-4 font-[family-name:var(--font-display)] text-xl tracking-wide">
                    FOLLOW US
                  </h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeScroll>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
