"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, FileText, AlertTriangle, CreditCard, BookOpen } from "lucide-react"

const ruleCategories = [
  {
    id: "license",
    icon: FileText,
    title: "License Process",
    description: "How to get your driving license in Nepal",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    id: "road-rules",
    icon: AlertTriangle,
    title: "Road Rules",
    description: "Essential traffic rules and regulations",
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    id: "fines",
    icon: CreditCard,
    title: "Traffic Fines",
    description: "Penalties for traffic violations",
    color: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
  },
  {
    id: "tax-renewal",
    icon: CreditCard,
    title: "Vehicle Tax Renewal",
    description: "Annual road tax renewal process",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    id: "bluebook",
    icon: BookOpen,
    title: "Bluebook Info",
    description: "Vehicle registration document guide",
    color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  },
]

export default function TrafficRulesPage() {
  return (
    <div className="px-4 pt-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Traffic Rules Nepal</h1>
        <p className="text-muted-foreground mt-1">Know the rules of the road</p>
      </div>

      <div className="space-y-3">
        {ruleCategories.map((category) => (
          <Link key={category.id} href={`/traffic-rules/${category.id}`}>
            <Card className="hover:shadow-md transition-shadow border-border/50">
              <CardContent className="p-4 flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-2xl ${category.color} flex items-center justify-center flex-shrink-0`}
                >
                  <category.icon className="w-7 h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
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
