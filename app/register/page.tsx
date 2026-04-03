"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { CheckCircle2, ChevronRight, User, Users, CreditCard, Flag, Trophy, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeScroll } from "@/components/fade-scroll"

const programs = [
  {
    id: "winter-flag",
    icon: Flag,
    title: "Winter FLAG Football",
    description: "8-week competitive season with weekly games",
    price: "$299",
    status: "Registration Open",
  },
  {
    id: "youth-academy",
    icon: Users,
    title: "Youth Academy",
    description: "Foundational training for ages 6-12",
    price: "$199/month",
    status: "Enrolling Now",
  },
  {
    id: "elite-training",
    icon: Trophy,
    title: "Elite Training",
    description: "Advanced program for competitive players",
    price: "$349/month",
    status: "By Invitation",
  },
  {
    id: "summer-camps",
    icon: Calendar,
    title: "Summer Camps",
    description: "Week-long intensive training camps",
    price: "$449/week",
    status: "Coming Soon",
  },
]

const steps = [
  { id: 1, title: "Select Program", icon: Flag },
  { id: 2, title: "Athlete Info", icon: User },
  { id: 3, title: "Parent/Guardian", icon: Users },
  { id: 4, title: "Review & Pay", icon: CreditCard },
]

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    athleteFirstName: "",
    athleteLastName: "",
    athleteDOB: "",
    athleteAge: "",
    parentFirstName: "",
    parentLastName: "",
    parentEmail: "",
    parentPhone: "",
    emergencyContact: "",
    emergencyPhone: "",
    medicalNotes: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(prev => prev + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1)
  }

  const handleSubmit = async () => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    alert("Registration submitted! In a real app, this would process payment and create the registration.")
  }

  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pb-8 pt-32 md:pb-12 md:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeScroll className="text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.3em] text-primary"
            >
              Join FlightSchool
            </motion.span>
            <h1 className="mb-6 font-[family-name:var(--font-display)] text-5xl tracking-tight md:text-6xl lg:text-7xl">
              REGISTER NOW
            </h1>
          </FadeScroll>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="relative pb-8">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <motion.div
                  className={`flex flex-col items-center ${index < steps.length - 1 ? "flex-1" : ""}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      currentStep > step.id
                        ? "border-primary bg-primary text-primary-foreground"
                        : currentStep === step.id
                        ? "border-primary text-primary"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <CheckCircle2 className="h-6 w-6" />
                    ) : (
                      <step.icon className="h-5 w-5" />
                    )}
                  </div>
                  <span className="mt-2 hidden text-xs font-medium sm:block">
                    {step.title}
                  </span>
                </motion.div>
                {index < steps.length - 1 && (
                  <div
                    className={`mx-2 h-0.5 flex-1 transition-colors duration-300 ${
                      currentStep > step.id ? "bg-primary" : "bg-border"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm md:p-10"
          >
            {/* Step 1: Select Program */}
            {currentStep === 1 && (
              <div>
                <h2 className="mb-2 font-[family-name:var(--font-display)] text-3xl tracking-wide">
                  SELECT A PROGRAM
                </h2>
                <p className="mb-8 text-muted-foreground">
                  Choose the program that best fits your athlete&apos;s goals and skill level.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  {programs.map((program) => (
                    <motion.button
                      key={program.id}
                      onClick={() => setSelectedProgram(program.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative rounded-xl border p-6 text-left transition-all duration-300 ${
                        selectedProgram === program.id
                          ? "border-primary bg-primary/10"
                          : "border-border/50 hover:border-primary/50"
                      }`}
                      disabled={program.status === "Coming Soon" || program.status === "By Invitation"}
                    >
                      {(program.status === "Coming Soon" || program.status === "By Invitation") && (
                        <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-background/80 backdrop-blur-sm">
                          <span className="text-sm font-medium text-muted-foreground">
                            {program.status}
                          </span>
                        </div>
                      )}
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <program.icon className="h-6 w-6" />
                        </div>
                        {selectedProgram === program.id && (
                          <CheckCircle2 className="h-6 w-6 text-primary" />
                        )}
                      </div>
                      <h3 className="mb-1 font-[family-name:var(--font-display)] text-xl tracking-wide">
                        {program.title}
                      </h3>
                      <p className="mb-3 text-sm text-muted-foreground">
                        {program.description}
                      </p>
                      <p className="font-[family-name:var(--font-display)] text-2xl text-primary">
                        {program.price}
                      </p>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Athlete Info */}
            {currentStep === 2 && (
              <div>
                <h2 className="mb-2 font-[family-name:var(--font-display)] text-3xl tracking-wide">
                  ATHLETE INFORMATION
                </h2>
                <p className="mb-8 text-muted-foreground">
                  Enter the details of the athlete who will be participating.
                </p>

                <div className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium">First Name</label>
                      <Input
                        name="athleteFirstName"
                        value={formData.athleteFirstName}
                        onChange={handleInputChange}
                        placeholder="First name"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Last Name</label>
                      <Input
                        name="athleteLastName"
                        value={formData.athleteLastName}
                        onChange={handleInputChange}
                        placeholder="Last name"
                        className="h-12"
                      />
                    </div>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium">Date of Birth</label>
                      <Input
                        name="athleteDOB"
                        type="date"
                        value={formData.athleteDOB}
                        onChange={handleInputChange}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Age</label>
                      <Input
                        name="athleteAge"
                        type="number"
                        value={formData.athleteAge}
                        onChange={handleInputChange}
                        placeholder="Age"
                        className="h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Medical Notes (Optional)</label>
                    <Input
                      name="medicalNotes"
                      value={formData.medicalNotes}
                      onChange={handleInputChange}
                      placeholder="Any allergies, conditions, or information coaches should know"
                      className="h-12"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Parent/Guardian */}
            {currentStep === 3 && (
              <div>
                <h2 className="mb-2 font-[family-name:var(--font-display)] text-3xl tracking-wide">
                  PARENT/GUARDIAN INFO
                </h2>
                <p className="mb-8 text-muted-foreground">
                  Enter the contact information for the parent or guardian.
                </p>

                <div className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium">First Name</label>
                      <Input
                        name="parentFirstName"
                        value={formData.parentFirstName}
                        onChange={handleInputChange}
                        placeholder="First name"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Last Name</label>
                      <Input
                        name="parentLastName"
                        value={formData.parentLastName}
                        onChange={handleInputChange}
                        placeholder="Last name"
                        className="h-12"
                      />
                    </div>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium">Email</label>
                      <Input
                        name="parentEmail"
                        type="email"
                        value={formData.parentEmail}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Phone</label>
                      <Input
                        name="parentPhone"
                        type="tel"
                        value={formData.parentPhone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                        className="h-12"
                      />
                    </div>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium">Emergency Contact Name</label>
                      <Input
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleInputChange}
                        placeholder="Emergency contact name"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Emergency Phone</label>
                      <Input
                        name="emergencyPhone"
                        type="tel"
                        value={formData.emergencyPhone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                        className="h-12"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Review & Pay */}
            {currentStep === 4 && (
              <div>
                <h2 className="mb-2 font-[family-name:var(--font-display)] text-3xl tracking-wide">
                  REVIEW & CONFIRM
                </h2>
                <p className="mb-8 text-muted-foreground">
                  Please review your information before completing registration.
                </p>

                <div className="space-y-6">
                  <div className="rounded-xl border border-border/50 bg-background/50 p-6">
                    <h3 className="mb-4 font-semibold">Selected Program</h3>
                    <div className="flex items-center justify-between">
                      <span>{programs.find(p => p.id === selectedProgram)?.title}</span>
                      <span className="font-[family-name:var(--font-display)] text-xl text-primary">
                        {programs.find(p => p.id === selectedProgram)?.price}
                      </span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-border/50 bg-background/50 p-6">
                    <h3 className="mb-4 font-semibold">Athlete Information</h3>
                    <div className="grid gap-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Name</span>
                        <span>{formData.athleteFirstName} {formData.athleteLastName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date of Birth</span>
                        <span>{formData.athleteDOB}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Age</span>
                        <span>{formData.athleteAge}</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-border/50 bg-background/50 p-6">
                    <h3 className="mb-4 font-semibold">Parent/Guardian Information</h3>
                    <div className="grid gap-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Name</span>
                        <span>{formData.parentFirstName} {formData.parentLastName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Email</span>
                        <span>{formData.parentEmail}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Phone</span>
                        <span>{formData.parentPhone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              {currentStep > 1 ? (
                <Button
                  variant="outline"
                  onClick={prevStep}
                  className="h-12 px-6"
                >
                  Back
                </Button>
              ) : (
                <div />
              )}

              {currentStep < 4 ? (
                <Button
                  onClick={nextStep}
                  disabled={currentStep === 1 && !selectedProgram}
                  className="h-12 bg-primary px-8 font-semibold text-primary-foreground"
                >
                  Continue
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="h-12 bg-primary px-8 font-semibold text-primary-foreground"
                >
                  Complete Registration
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
