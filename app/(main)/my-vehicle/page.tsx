"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, Car, Fuel, Calendar, Hash } from "lucide-react"
import { useApp } from "@/lib/app-context"

export default function MyVehiclePage() {
  const { vehicles } = useApp()

  return (
    <div className="px-4 pt-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">My Vehicles</h1>
          <p className="text-muted-foreground mt-1">Manage your registered vehicles</p>
        </div>
        <Link href="/my-vehicle/add">
          <Button size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            Add
          </Button>
        </Link>
      </div>

      {vehicles.length === 0 ? (
        <Card className="border-dashed border-2 border-border">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-4">
              <Car className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">No vehicles yet</h3>
            <p className="text-muted-foreground text-sm mb-4">Add your first vehicle to track maintenance and more</p>
            <Link href="/my-vehicle/add">
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Add Vehicle
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="border-border/50">
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Car className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground">
                      {vehicle.brand} {vehicle.model}
                    </h3>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" />
                        {vehicle.year}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Fuel className="w-3.5 h-3.5" />
                        {vehicle.fuelType}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Hash className="w-3.5 h-3.5" />
                        {vehicle.cc} CC
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Car className="w-3.5 h-3.5" />
                        {vehicle.plateNumber}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
