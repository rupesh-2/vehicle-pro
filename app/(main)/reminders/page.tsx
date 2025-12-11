"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Bell, Droplet, FileText, Battery, Shield, Car } from "lucide-react"
import { useApp } from "@/lib/app-context"

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "oil-change": Droplet,
  "bluebook-renewal": FileText,
  "tire-replacement": Car,
  "battery-service": Battery,
  "tax-renewal": FileText,
  "insurance-renewal": Shield,
}

const serviceColors: Record<string, string> = {
  "oil-change": "bg-amber-500/10 text-amber-600",
  "bluebook-renewal": "bg-blue-500/10 text-blue-600",
  "tire-replacement": "bg-emerald-500/10 text-emerald-600",
  "battery-service": "bg-purple-500/10 text-purple-600",
  "tax-renewal": "bg-rose-500/10 text-rose-600",
  "insurance-renewal": "bg-cyan-500/10 text-cyan-600",
}

export default function RemindersPage() {
  const { reminders, vehicles } = useApp()

  const getVehicleName = (vehicleId: string) => {
    const vehicle = vehicles.find((v) => v.id === vehicleId)
    return vehicle ? `${vehicle.brand} ${vehicle.model}` : "Unknown Vehicle"
  }

  return (
    <div className="px-4 pt-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Service Reminders</h1>
          <p className="text-muted-foreground mt-1">Never miss a service date</p>
        </div>
        <Link href="/reminders/add">
          <Button size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            Add
          </Button>
        </Link>
      </div>

      {/* Service Categories */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {[
          { id: "oil-change", label: "Oil" },
          { id: "bluebook-renewal", label: "Bluebook" },
          { id: "tax-renewal", label: "Tax" },
          { id: "battery-service", label: "Battery" },
          { id: "tire-replacement", label: "Tires" },
          { id: "insurance-renewal", label: "Insurance" },
        ].map((service) => {
          const Icon = serviceIcons[service.id] || Bell
          return (
            <Card key={service.id} className="border-border/50 hover:shadow-sm transition-shadow cursor-pointer">
              <CardContent className="p-3 flex flex-col items-center text-center">
                <div
                  className={`w-10 h-10 rounded-xl ${serviceColors[service.id]} flex items-center justify-center mb-2`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium text-foreground">{service.label}</span>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Reminders List */}
      {reminders.length === 0 ? (
        <Card className="border-dashed border-2 border-border">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-4">
              <Bell className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">No reminders yet</h3>
            <p className="text-muted-foreground text-sm mb-4">Create reminders to track your vehicle maintenance</p>
            <Link href="/reminders/add">
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Add Reminder
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {reminders.map((reminder) => {
            const Icon = serviceIcons[reminder.serviceType] || Bell
            return (
              <Card key={reminder.id} className="border-border/50">
                <CardContent className="p-4 flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${serviceColors[reminder.serviceType]} flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground capitalize">
                      {reminder.serviceType.replace(/-/g, " ")}
                    </h3>
                    <p className="text-muted-foreground text-sm">{getVehicleName(reminder.vehicleId)}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {new Date(reminder.date).toLocaleDateString()}
                      </Badge>
                      {reminder.repeat && (
                        <Badge variant="secondary" className="text-xs">
                          {reminder.repeat}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}
