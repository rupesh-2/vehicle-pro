"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Droplet, Thermometer, CircleDot, Battery, Wrench } from "lucide-react"

const tutorials = [
  {
    id: "engine-oil",
    icon: Droplet,
    title: "How to Change Engine Oil",
    description: "Complete step-by-step guide for oil change",
    duration: "15 min",
    difficulty: "Easy",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    id: "coolant",
    icon: Thermometer,
    title: "How to Check Coolant",
    description: "Monitor your cooling system effectively",
    duration: "5 min",
    difficulty: "Easy",
    color: "bg-cyan-500/10 text-cyan-600",
  },
  {
    id: "tire-maintenance",
    icon: CircleDot,
    title: "Tire Maintenance",
    description: "Keep your tires in optimal condition",
    duration: "10 min",
    difficulty: "Medium",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    id: "battery-care",
    icon: Battery,
    title: "Battery Care",
    description: "Extend your battery life with proper care",
    duration: "8 min",
    difficulty: "Easy",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    id: "basic-maintenance",
    icon: Wrench,
    title: "Basic Vehicle Maintenance",
    description: "Essential checks every owner should know",
    duration: "20 min",
    difficulty: "Medium",
    color: "bg-blue-500/10 text-blue-600",
  },
]

export default function TutorialsPage() {
  return (
    <div className="px-4 pt-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Tutorials</h1>
        <p className="text-muted-foreground mt-1">Learn vehicle maintenance step by step</p>
      </div>

      <div className="space-y-3">
        {tutorials.map((tutorial) => (
          <Link key={tutorial.id} href={`/tutorials/${tutorial.id}`}>
            <Card className="hover:shadow-md transition-shadow border-border/50">
              <CardContent className="p-4 flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-2xl ${tutorial.color} flex items-center justify-center flex-shrink-0`}
                >
                  <tutorial.icon className="w-7 h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground">{tutorial.title}</h3>
                  <p className="text-muted-foreground text-sm">{tutorial.description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      {tutorial.duration}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className={`text-xs ${
                        tutorial.difficulty === "Easy"
                          ? "bg-emerald-500/10 text-emerald-600"
                          : "bg-amber-500/10 text-amber-600"
                      }`}
                    >
                      {tutorial.difficulty}
                    </Badge>
                  </div>
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
