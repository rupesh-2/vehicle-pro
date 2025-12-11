"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Car, Bell, Video, MapPin, Scale, FileText, ChevronRight } from "lucide-react"
import { useApp } from "@/lib/app-context"

const menuItems = [
  {
    icon: BookOpen,
    title: "Vehicle Basics",
    description: "Learn about vehicle systems",
    href: "/encyclopedia",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: Car,
    title: "My Vehicle",
    description: "Manage your vehicles",
    href: "/my-vehicle",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: Bell,
    title: "Service Reminders",
    description: "Track maintenance schedules",
    href: "/reminders",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Video,
    title: "Tutorials",
    description: "Step-by-step guides",
    href: "/tutorials",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    icon: MapPin,
    title: "Nepal Market",
    description: "Explore available vehicles",
    href: "/market",
    color: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
  },
  {
    icon: FileText,
    title: "Traffic Rules",
    description: "Nepal traffic regulations",
    href: "/traffic-rules",
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    icon: Scale,
    title: "Compare Vehicles",
    description: "Side-by-side comparison",
    href: "/compare",
    color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  },
]

export default function HomePage() {
  const { userName, isGuest } = useApp()

  return (
    <div className="px-4 pt-6">
      {/* Greeting Banner */}
      <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground mb-6 border-0">
        <CardContent className="p-5">
          <p className="text-primary-foreground/80 text-sm">Welcome back,</p>
          <h1 className="text-2xl font-bold mt-1">{isGuest ? "Guest" : userName}!</h1>
          <p className="text-primary-foreground/70 text-sm mt-2">What would you like to explore today?</p>
        </CardContent>
      </Card>

      {/* Menu Grid */}
      <div className="grid grid-cols-2 gap-3">
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <Card className="h-full hover:shadow-md transition-shadow border-border/50">
              <CardContent className="p-4">
                <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center mb-3`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                <p className="text-muted-foreground text-xs mt-0.5">{item.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="mt-6 border-border/50">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-foreground">Quick Service Check</h3>
              <p className="text-muted-foreground text-sm">View upcoming maintenance</p>
            </div>
            <Link href="/reminders" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <ChevronRight className="w-5 h-5 text-primary" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
