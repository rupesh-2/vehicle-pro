"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Car, Gauge } from "lucide-react"

export default function SplashScreen() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      router.push("/onboarding")
    }, 2500)
    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="mobile-container min-h-screen bg-gradient-to-br from-background via-background to-primary/10 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Logo */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-28 h-28 bg-primary rounded-3xl flex items-center justify-center shadow-xl shadow-primary/30">
            <Car className="w-14 h-14 text-primary-foreground" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-card rounded-xl flex items-center justify-center shadow-lg border border-border">
            <Gauge className="w-5 h-5 text-primary" />
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground tracking-tight">VehiclePro</h1>
          <p className="text-primary font-semibold text-lg">Nepal</p>
        </div>

        {/* Loading indicator */}
        {isLoading && (
          <div className="mt-8 flex gap-1.5">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        )}
      </div>

      {/* Footer text */}
      <p className="absolute bottom-8 text-sm text-muted-foreground">Your Complete Vehicle Companion</p>
    </div>
  )
}
