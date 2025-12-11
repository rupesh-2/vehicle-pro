"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Cog, Gauge, Disc, Thermometer, Zap, Radio } from "lucide-react"

const systems = [
  {
    id: "engine",
    icon: Cog,
    title: "Engine",
    description: "The heart of your vehicle",
    color: "bg-red-500/10 text-red-600 dark:text-red-400",
  },
  {
    id: "transmission",
    icon: Gauge,
    title: "Transmission",
    description: "Power delivery system",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    id: "suspension",
    icon: Radio,
    title: "Suspension",
    description: "Ride comfort & handling",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    id: "brakes",
    icon: Disc,
    title: "Brakes",
    description: "Stopping power & safety",
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    id: "cooling",
    icon: Thermometer,
    title: "Cooling System",
    description: "Temperature regulation",
    color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  },
  {
    id: "electrical",
    icon: Zap,
    title: "Electrical System",
    description: "Wiring & electronics",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
]

export default function EncyclopediaPage() {
  return (
    <div className="px-4 pt-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Vehicle Encyclopedia</h1>
        <p className="text-muted-foreground mt-1">Learn about different vehicle systems</p>
      </div>

      <div className="space-y-3">
        {systems.map((system) => (
          <Link key={system.id} href={`/encyclopedia/${system.id}`}>
            <Card className="hover:shadow-md transition-shadow border-border/50">
              <CardContent className="p-4 flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl ${system.color} flex items-center justify-center flex-shrink-0`}>
                  <system.icon className="w-7 h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground">{system.title}</h3>
                  <p className="text-muted-foreground text-sm">{system.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
