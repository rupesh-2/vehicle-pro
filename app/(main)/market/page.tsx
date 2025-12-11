"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Bike, Car, Sparkles, Clock } from "lucide-react"

type Vehicle = {
  id: string
  brand: string
  model: string
  price: string
  available: boolean
  cc: string
  condition: "new" | "used"
  year?: number
  kmDriven?: string
  owner?: string
}

const vehicles: {
  bikes: Vehicle[]
  scooters: Vehicle[]
  cars: Vehicle[]
} = {
  bikes: [
    // New bikes
    {
      id: "pulsar-ns200",
      brand: "Bajaj",
      model: "Pulsar NS200",
      price: "Rs. 4,29,900",
      available: true,
      cc: "199.5",
      condition: "new",
    },
    {
      id: "honda-hornet",
      brand: "Honda",
      model: "Hornet 2.0",
      price: "Rs. 4,49,900",
      available: true,
      cc: "184.4",
      condition: "new",
    },
    {
      id: "yamaha-mt15",
      brand: "Yamaha",
      model: "MT-15 V2",
      price: "Rs. 4,89,900",
      available: true,
      cc: "155",
      condition: "new",
    },
    {
      id: "ktm-duke200",
      brand: "KTM",
      model: "Duke 200",
      price: "Rs. 5,49,900",
      available: false,
      cc: "199.5",
      condition: "new",
    },
    // Used bikes
    {
      id: "pulsar-ns200-used",
      brand: "Bajaj",
      model: "Pulsar NS200",
      price: "Rs. 2,85,000",
      available: true,
      cc: "199.5",
      condition: "used",
      year: 2021,
      kmDriven: "18,500 km",
      owner: "1st Owner",
    },
    {
      id: "fz-v3-used",
      brand: "Yamaha",
      model: "FZ V3",
      price: "Rs. 2,45,000",
      available: true,
      cc: "149",
      condition: "used",
      year: 2020,
      kmDriven: "25,000 km",
      owner: "2nd Owner",
    },
    {
      id: "apache-rtr-used",
      brand: "TVS",
      model: "Apache RTR 160",
      price: "Rs. 1,95,000",
      available: true,
      cc: "159.7",
      condition: "used",
      year: 2019,
      kmDriven: "32,000 km",
      owner: "1st Owner",
    },
  ],
  scooters: [
    // New scooters
    {
      id: "honda-activa",
      brand: "Honda",
      model: "Activa 6G",
      price: "Rs. 2,19,900",
      available: true,
      cc: "109",
      condition: "new",
    },
    {
      id: "tvs-ntorq",
      brand: "TVS",
      model: "NTorq 125",
      price: "Rs. 2,49,900",
      available: true,
      cc: "124.8",
      condition: "new",
    },
    {
      id: "suzuki-access",
      brand: "Suzuki",
      model: "Access 125",
      price: "Rs. 2,34,900",
      available: true,
      cc: "124",
      condition: "new",
    },
    {
      id: "aprilia-sr",
      brand: "Aprilia",
      model: "SR 125",
      price: "Rs. 2,69,900",
      available: false,
      cc: "124.49",
      condition: "new",
    },
    // Used scooters
    {
      id: "activa-5g-used",
      brand: "Honda",
      model: "Activa 5G",
      price: "Rs. 85,000",
      available: true,
      cc: "109",
      condition: "used",
      year: 2019,
      kmDriven: "22,000 km",
      owner: "1st Owner",
    },
    {
      id: "jupiter-used",
      brand: "TVS",
      model: "Jupiter",
      price: "Rs. 72,000",
      available: true,
      cc: "109.7",
      condition: "used",
      year: 2018,
      kmDriven: "35,000 km",
      owner: "2nd Owner",
    },
  ],
  cars: [
    // New cars
    {
      id: "swift",
      brand: "Maruti Suzuki",
      model: "Swift",
      price: "Rs. 35,99,000",
      available: true,
      cc: "1197",
      condition: "new",
    },
    {
      id: "creta",
      brand: "Hyundai",
      model: "Creta",
      price: "Rs. 54,99,000",
      available: true,
      cc: "1497",
      condition: "new",
    },
    {
      id: "seltos",
      brand: "Kia",
      model: "Seltos",
      price: "Rs. 59,99,000",
      available: true,
      cc: "1497",
      condition: "new",
    },
    {
      id: "nexon",
      brand: "Tata",
      model: "Nexon",
      price: "Rs. 42,99,000",
      available: false,
      cc: "1199",
      condition: "new",
    },
    // Used cars
    {
      id: "swift-used",
      brand: "Maruti Suzuki",
      model: "Swift VXI",
      price: "Rs. 18,50,000",
      available: true,
      cc: "1197",
      condition: "used",
      year: 2020,
      kmDriven: "42,000 km",
      owner: "1st Owner",
    },
    {
      id: "i20-used",
      brand: "Hyundai",
      model: "i20 Asta",
      price: "Rs. 14,75,000",
      available: true,
      cc: "1197",
      condition: "used",
      year: 2019,
      kmDriven: "55,000 km",
      owner: "2nd Owner",
    },
    {
      id: "city-used",
      brand: "Honda",
      model: "City ZX",
      price: "Rs. 22,00,000",
      available: true,
      cc: "1498",
      condition: "used",
      year: 2021,
      kmDriven: "28,000 km",
      owner: "1st Owner",
    },
  ],
}

export default function MarketPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showroom, setShowroom] = useState<"new" | "used">("new")

  const filterVehicles = (list: Vehicle[]) =>
    list.filter(
      (v) =>
        v.condition === showroom &&
        (v.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          v.model.toLowerCase().includes(searchQuery.toLowerCase())),
    )

  return (
    <div className="px-4 pt-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Nepal Market</h1>
        <p className="text-muted-foreground mt-1">Explore vehicles available in Nepal</p>
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setShowroom("new")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all ${
            showroom === "new"
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          <Sparkles className="w-4 h-4" />
          New Showroom
        </button>
        <button
          onClick={() => setShowroom("used")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all ${
            showroom === "used"
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          <Clock className="w-4 h-4" />
          Used Vehicles
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search vehicles..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Tabs */}
      <Tabs defaultValue="bikes">
        <TabsList className="w-full grid grid-cols-3 mb-6">
          <TabsTrigger value="bikes" className="gap-2">
            <Bike className="w-4 h-4" />
            Bikes
          </TabsTrigger>
          <TabsTrigger value="scooters" className="gap-2">
            <Bike className="w-4 h-4" />
            Scooters
          </TabsTrigger>
          <TabsTrigger value="cars" className="gap-2">
            <Car className="w-4 h-4" />
            Cars
          </TabsTrigger>
        </TabsList>

        {(["bikes", "scooters", "cars"] as const).map((category) => (
          <TabsContent key={category} value={category} className="space-y-3">
            {filterVehicles(vehicles[category]).length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <p>
                  No {showroom} {category} found
                </p>
              </div>
            ) : (
              filterVehicles(vehicles[category]).map((vehicle) => (
                <Link key={vehicle.id} href={`/market/${vehicle.id}`}>
                  <Card className="hover:shadow-md transition-shadow border-border/50">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center flex-shrink-0 relative">
                        {category === "cars" ? (
                          <Car className="w-8 h-8 text-muted-foreground" />
                        ) : (
                          <Bike className="w-8 h-8 text-muted-foreground" />
                        )}
                        <div
                          className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center ${
                            vehicle.condition === "new" ? "bg-emerald-500" : "bg-amber-500"
                          }`}
                        >
                          {vehicle.condition === "new" ? (
                            <Sparkles className="w-3 h-3 text-white" />
                          ) : (
                            <Clock className="w-3 h-3 text-white" />
                          )}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-foreground truncate">
                            {vehicle.brand} {vehicle.model}
                          </h3>
                          <Badge
                            variant="outline"
                            className={`text-xs shrink-0 ${
                              vehicle.condition === "new"
                                ? "border-emerald-500 text-emerald-600"
                                : "border-amber-500 text-amber-600"
                            }`}
                          >
                            {vehicle.condition === "new" ? "NEW" : "USED"}
                          </Badge>
                        </div>
                        <p className="text-primary font-medium text-sm">{vehicle.price}</p>
                        <div className="flex items-center gap-2 mt-1 flex-wrap">
                          <Badge variant="outline" className="text-xs">
                            {vehicle.cc} CC
                          </Badge>
                          {vehicle.condition === "used" && vehicle.year && (
                            <Badge variant="secondary" className="text-xs">
                              {vehicle.year}
                            </Badge>
                          )}
                          {vehicle.condition === "used" && vehicle.kmDriven && (
                            <Badge variant="secondary" className="text-xs">
                              {vehicle.kmDriven}
                            </Badge>
                          )}
                          {vehicle.condition === "new" && (
                            <Badge
                              variant={vehicle.available ? "default" : "secondary"}
                              className={`text-xs ${
                                vehicle.available ? "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20" : ""
                              }`}
                            >
                              {vehicle.available ? "Available" : "Out of Stock"}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
