"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Bell } from "lucide-react"
import { useApp } from "@/lib/app-context"

const serviceTypes = [
  { value: "oil-change", label: "Oil Change" },
  { value: "bluebook-renewal", label: "Bluebook Renewal" },
  { value: "tire-replacement", label: "Tire Replacement" },
  { value: "battery-service", label: "Battery Service" },
  { value: "tax-renewal", label: "Tax Renewal" },
  { value: "insurance-renewal", label: "Insurance Renewal" },
]

const repeatIntervals = [
  { value: "none", label: "No repeat" },
  { value: "monthly", label: "Monthly" },
  { value: "quarterly", label: "Every 3 months" },
  { value: "biannually", label: "Every 6 months" },
  { value: "annually", label: "Yearly" },
]

export default function AddReminderPage() {
  const router = useRouter()
  const { vehicles, addReminder } = useApp()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    vehicleId: "",
    serviceType: "",
    date: "",
    repeat: "none",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((r) => setTimeout(r, 500))
    addReminder(formData)
    router.push("/reminders")
  }

  return (
    <div className="px-4 pt-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Button variant="ghost" size="icon" onClick={() => router.back()} className="rounded-xl">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Add Reminder</h1>
          <p className="text-muted-foreground text-sm">Schedule a service reminder</p>
        </div>
      </div>

      {/* Icon */}
      <Card className="mb-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="p-6 flex items-center justify-center">
          <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center">
            <Bell className="w-10 h-10 text-primary-foreground" />
          </div>
        </CardContent>
      </Card>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="vehicle">Select Vehicle</Label>
          <Select
            value={formData.vehicleId}
            onValueChange={(value) => setFormData((prev) => ({ ...prev, vehicleId: value }))}
          >
            <SelectTrigger id="vehicle">
              <SelectValue placeholder="Choose a vehicle" />
            </SelectTrigger>
            <SelectContent>
              {vehicles.length === 0 ? (
                <SelectItem value="none" disabled>
                  No vehicles added yet
                </SelectItem>
              ) : (
                vehicles.map((vehicle) => (
                  <SelectItem key={vehicle.id} value={vehicle.id}>
                    {vehicle.brand} {vehicle.model} ({vehicle.plateNumber})
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="serviceType">Service Type</Label>
          <Select
            value={formData.serviceType}
            onValueChange={(value) => setFormData((prev) => ({ ...prev, serviceType: value }))}
          >
            <SelectTrigger id="serviceType">
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              {serviceTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            type="date"
            value={formData.date}
            onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="repeat">Repeat Interval (Optional)</Label>
          <Select
            value={formData.repeat}
            onValueChange={(value) => setFormData((prev) => ({ ...prev, repeat: value }))}
          >
            <SelectTrigger id="repeat">
              <SelectValue placeholder="No repeat" />
            </SelectTrigger>
            <SelectContent>
              {repeatIntervals.map((interval) => (
                <SelectItem key={interval.value} value={interval.value}>
                  {interval.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          type="submit"
          className="w-full mt-6"
          disabled={isLoading || !formData.vehicleId || !formData.serviceType || !formData.date}
        >
          {isLoading ? "Saving..." : "Save Reminder"}
        </Button>
      </form>
    </div>
  )
}
