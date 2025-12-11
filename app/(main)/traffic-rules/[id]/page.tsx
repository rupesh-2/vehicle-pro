"use client"

import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle2 } from "lucide-react"

const ruleDetails: Record<
  string,
  {
    title: string
    icon: string
    intro: string
    points: string[]
  }
> = {
  license: {
    title: "License Process",
    icon: "🪪",
    intro: "Getting a driving license in Nepal involves several steps. Here's a complete guide to the process.",
    points: [
      "Visit your nearest Transport Office (Yatayat Karyalaya)",
      "Fill out the license application form",
      "Submit citizenship certificate copy and passport photos",
      "Pay the prescribed fee (varies by vehicle category)",
      "Appear for written test on traffic rules",
      "Pass the practical/trial driving test",
      "Biometric registration and photo capture",
      "License will be ready within 7-15 days",
      "Collect your smart license from the office",
    ],
  },
  "road-rules": {
    title: "Road Rules",
    icon: "🚦",
    intro: "Following these traffic rules ensures your safety and that of others on the road.",
    points: [
      "Always drive on the left side of the road",
      "Wear helmet (two-wheelers) and seatbelt (cars) at all times",
      "Follow speed limits: 40 km/h in city, 80 km/h on highways",
      "Do not use mobile phones while driving",
      "Give way to pedestrians at zebra crossings",
      "Follow traffic signals and signs strictly",
      "Do not drink and drive - zero tolerance policy",
      "Use indicators before turning or changing lanes",
      "Maintain safe following distance",
      "Do not overtake on curves or near pedestrian crossings",
    ],
  },
  fines: {
    title: "Traffic Fines",
    icon: "💸",
    intro: "Here are the common traffic violations and their penalties in Nepal.",
    points: [
      "No helmet: Rs. 500",
      "No seatbelt: Rs. 500",
      "Using mobile while driving: Rs. 1,000",
      "Drunk driving: Rs. 3,000 - Rs. 5,000 + license suspension",
      "Over speeding: Rs. 1,000 - Rs. 3,000",
      "Wrong side driving: Rs. 1,000",
      "Signal violation: Rs. 500 - Rs. 1,000",
      "No valid license: Rs. 1,500",
      "Expired vehicle documents: Rs. 500 - Rs. 2,000",
      "Parking violation: Rs. 500",
    ],
  },
  "tax-renewal": {
    title: "Vehicle Tax Renewal",
    icon: "📋",
    intro: "Annual road tax must be renewed to legally operate your vehicle in Nepal.",
    points: [
      "Tax renewal is done annually at Transport Office",
      "Required documents: Bluebook, citizenship copy, old tax receipt",
      "Tax amount varies by vehicle type and engine capacity",
      "Bikes: Rs. 1,500 - Rs. 4,000 per year",
      "Cars: Rs. 6,000 - Rs. 20,000+ per year",
      "Late renewal incurs 10% penalty per month",
      "Can be done online via nagarik app in some cities",
      "Tax sticker must be displayed on windshield",
      "Renewal deadline: Within Shrawan month each year",
    ],
  },
  bluebook: {
    title: "Bluebook Info",
    icon: "📘",
    intro: "The Bluebook is your vehicle's official registration document. Here's what you need to know.",
    points: [
      "Bluebook is the official vehicle registration document",
      "Contains owner details, vehicle specifications, tax records",
      "Must always be carried while driving",
      "Required for ownership transfer, loan, and insurance",
      "Renewal required every 5 years",
      "Lost bluebook can be replaced at Transport Office",
      "Replacement requires: FIR, citizenship, old tax receipts",
      "Bluebook transfer needed when selling/buying vehicle",
      "Keep photocopies for safety",
    ],
  },
}

export default function TrafficRuleDetailPage() {
  const params = useParams()
  const router = useRouter()
  const rule = ruleDetails[params.id as string]

  if (!rule) {
    return (
      <div className="px-4 pt-6">
        <p>Rule not found</p>
      </div>
    )
  }

  return (
    <div className="px-4 pt-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Button variant="ghost" size="icon" onClick={() => router.back()} className="rounded-xl">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-xl font-bold text-foreground">{rule.title}</h1>
          <p className="text-muted-foreground text-sm">Traffic Rules Nepal</p>
        </div>
      </div>

      {/* Icon Card */}
      <Card className="mb-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="p-6 flex items-center justify-center">
          <span className="text-6xl">{rule.icon}</span>
        </CardContent>
      </Card>

      {/* Introduction */}
      <p className="text-muted-foreground mb-6">{rule.intro}</p>

      {/* Points */}
      <Card className="border-border/50">
        <CardContent className="p-4">
          <ul className="space-y-3">
            {rule.points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-sm">{point}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
