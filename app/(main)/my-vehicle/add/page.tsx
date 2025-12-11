"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Car } from "lucide-react"
import { useApp } from "@/lib/app-context"

export default function AddVehiclePage() {
  const router = useRouter()
  const { addVehicle } = useApp()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    fuelType: "",
    cc: "",
    plateNumber: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((r) => setTimeout(r, 500))
    addVehicle(formData)
    router.push("/my-vehicle")
  }

  return (
    <div className="px-4 pt-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Button variant="ghost" size="icon" onClick={() => router.back()} className="rounded-xl">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Add Vehicle</h1>
          <p className="text-muted-foreground text-sm">Register a new vehicle</p>
        </div>
      </div>

      {/* Icon */}
      <Card className="mb-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="p-6 flex items-center justify-center">
          <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center">
            <Car className="w-10 h-10 text-primary-foreground" />
          </div>
        </CardContent>
      </Card>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="brand">Brand</Label>
            <Select
              value={formData.brand}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, brand: value }))}
            >
              <SelectTrigger id="brand">
                <SelectValue placeholder="Select brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Honda">Honda</SelectItem>
                <SelectItem value="Yamaha">Yamaha</SelectItem>
                <SelectItem value="Bajaj">Bajaj</SelectItem>
                <SelectItem value="TVS">TVS</SelectItem>
                <SelectItem value="Hero">Hero</SelectItem>
                <SelectItem value="Suzuki">Suzuki</SelectItem>
                <SelectItem value="Toyota">Toyota</SelectItem>
                <SelectItem value="Hyundai">Hyundai</SelectItem>
                <SelectItem value="Kia">Kia</SelectItem>
                <SelectItem value="Tata">Tata</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="model">Model</Label>
            <Input
              id="model"
              placeholder="e.g. Shine, Swift"
              value={formData.model}
              onChange={(e) => setFormData((prev) => ({ ...prev, model: e.target.value }))}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="year">Year</Label>
            <Select value={formData.year} onValueChange={(value) => setFormData((prev) => ({ ...prev, year: value }))}>
              <SelectTrigger id="year">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 20 }, (_, i) => 2025 - i).map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="fuelType">Fuel Type</Label>
            <Select
              value={formData.fuelType}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, fuelType: value }))}
            >
              <SelectTrigger id="fuelType">
                <SelectValue placeholder="Select fuel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Petrol">Petrol</SelectItem>
                <SelectItem value="Diesel">Diesel</SelectItem>
                <SelectItem value="Electric">Electric</SelectItem>
                <SelectItem value="Hybrid">Hybrid</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="cc">Engine CC</Label>
            <Input
              id="cc"
              placeholder="e.g. 125, 1500"
              value={formData.cc}
              onChange={(e) => setFormData((prev) => ({ ...prev, cc: e.target.value }))}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="plateNumber">Plate Number</Label>
            <Input
              id="plateNumber"
              placeholder="e.g. Ba 1 Pa 1234"
              value={formData.plateNumber}
              onChange={(e) => setFormData((prev) => ({ ...prev, plateNumber: e.target.value }))}
            />
          </div>
        </div>

        <Button type="submit" className="w-full mt-6" disabled={isLoading || !formData.brand || !formData.model}>
          {isLoading ? "Adding..." : "Add Vehicle"}
        </Button>
      </form>
    </div>
  )
}
