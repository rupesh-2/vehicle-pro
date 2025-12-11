"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Scale } from "lucide-react"

const allVehicles = [
  {
    id: "pulsar-ns200",
    name: "Bajaj Pulsar NS200",
    cc: "199.5",
    mileage: "35",
    power: "24.5 PS",
    price: "4,29,900",
    service: "3,500",
  },
  {
    id: "honda-hornet",
    name: "Honda Hornet 2.0",
    cc: "184.4",
    mileage: "40",
    power: "17.3 PS",
    price: "4,49,900",
    service: "4,000",
  },
  {
    id: "yamaha-mt15",
    name: "Yamaha MT-15 V2",
    cc: "155",
    mileage: "42",
    power: "18.4 PS",
    price: "4,89,900",
    service: "3,800",
  },
  {
    id: "honda-activa",
    name: "Honda Activa 6G",
    cc: "109",
    mileage: "60",
    power: "7.79 PS",
    price: "2,19,900",
    service: "1,500",
  },
  {
    id: "swift",
    name: "Maruti Suzuki Swift",
    cc: "1197",
    mileage: "22",
    power: "89 PS",
    price: "35,99,000",
    service: "8,000",
  },
  {
    id: "creta",
    name: "Hyundai Creta",
    cc: "1497",
    mileage: "17",
    power: "113 PS",
    price: "54,99,000",
    service: "12,000",
  },
]

const compareFields = [
  { key: "cc", label: "Engine (CC)" },
  { key: "mileage", label: "Mileage (kmpl)" },
  { key: "power", label: "Power" },
  { key: "price", label: "Price (Rs.)" },
  { key: "service", label: "Service Cost (Rs.)" },
]

export default function ComparePage() {
  const [vehicle1, setVehicle1] = useState("")
  const [vehicle2, setVehicle2] = useState("")

  const v1 = allVehicles.find((v) => v.id === vehicle1)
  const v2 = allVehicles.find((v) => v.id === vehicle2)

  return (
    <div className="px-4 pt-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Compare Vehicles</h1>
        <p className="text-muted-foreground mt-1">Side-by-side vehicle comparison</p>
      </div>

      {/* Vehicle Selection */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="space-y-2">
          <Label>Vehicle 1</Label>
          <Select value={vehicle1} onValueChange={setVehicle1}>
            <SelectTrigger>
              <SelectValue placeholder="Select vehicle" />
            </SelectTrigger>
            <SelectContent>
              {allVehicles.map((v) => (
                <SelectItem key={v.id} value={v.id} disabled={v.id === vehicle2}>
                  {v.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Vehicle 2</Label>
          <Select value={vehicle2} onValueChange={setVehicle2}>
            <SelectTrigger>
              <SelectValue placeholder="Select vehicle" />
            </SelectTrigger>
            <SelectContent>
              {allVehicles.map((v) => (
                <SelectItem key={v.id} value={v.id} disabled={v.id === vehicle1}>
                  {v.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Comparison Table */}
      {v1 && v2 ? (
        <Card className="border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Scale className="w-5 h-5 text-primary" />
              Comparison
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {/* Header */}
              <div className="grid grid-cols-3 p-4 bg-muted/50">
                <div className="text-sm font-medium text-muted-foreground">Spec</div>
                <div className="text-sm font-semibold text-foreground text-center truncate px-1">{v1.name}</div>
                <div className="text-sm font-semibold text-foreground text-center truncate px-1">{v2.name}</div>
              </div>

              {/* Rows */}
              {compareFields.map((field) => (
                <div key={field.key} className="grid grid-cols-3 p-4">
                  <div className="text-sm text-muted-foreground">{field.label}</div>
                  <div className="text-sm font-medium text-foreground text-center">
                    {v1[field.key as keyof typeof v1]}
                  </div>
                  <div className="text-sm font-medium text-foreground text-center">
                    {v2[field.key as keyof typeof v2]}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="border-dashed border-2 border-border">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-4">
              <Scale className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Select vehicles</h3>
            <p className="text-muted-foreground text-sm">Choose two vehicles above to compare their specifications</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
