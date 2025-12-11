"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { BookOpen, Bell, MapPin, ChevronRight, ChevronLeft } from "lucide-react"

const slides = [
  {
    icon: BookOpen,
    title: "Learn Your Vehicle",
    description: "Understand every part of your vehicle with detailed guides on engines, brakes, suspension and more.",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: Bell,
    title: "Track Servicing Easily",
    description: "Never miss an oil change, bluebook renewal, or tax payment with smart service reminders.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: MapPin,
    title: "Explore Nepal Market",
    description: "Browse the latest bikes, scooters, and cars available in Nepal with prices and dealer info.",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
]

export default function OnboardingPage() {
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      router.push("/login")
    }
  }

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const handleSkip = () => {
    router.push("/login")
  }

  const slide = slides[currentSlide]
  const Icon = slide.icon

  return (
    <div className="mobile-container min-h-screen bg-background flex flex-col">
      {/* Skip button */}
      <div className="flex justify-end p-4">
        <Button variant="ghost" onClick={handleSkip} className="text-muted-foreground">
          Skip
        </Button>
      </div>

      {/* Slide content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 pb-12">
        <div className={`w-32 h-32 rounded-3xl ${slide.color} flex items-center justify-center mb-8`}>
          <Icon className="w-16 h-16" />
        </div>

        <h2 className="text-2xl font-bold text-foreground text-center mb-4">{slide.title}</h2>
        <p className="text-muted-foreground text-center text-base leading-relaxed max-w-xs">{slide.description}</p>
      </div>

      {/* Navigation */}
      <div className="px-6 pb-8">
        {/* Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {currentSlide > 0 && (
            <Button variant="outline" size="lg" onClick={handlePrev} className="flex-1 bg-transparent">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back
            </Button>
          )}
          <Button size="lg" onClick={handleNext} className="flex-1">
            {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
            {currentSlide < slides.length - 1 && <ChevronRight className="w-4 h-4 ml-1" />}
          </Button>
        </div>
      </div>
    </div>
  )
}
