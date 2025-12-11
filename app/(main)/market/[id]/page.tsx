"use client"

import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Bike, Car, Fuel, Gauge, Zap, Settings, Calendar, User, Sparkles, Clock } from "lucide-react"

const vehicleDetails: Record<
  string,
  {
    brand: string
    model: string
    price: string
    available: boolean
    type: "bike" | "scooter" | "car"
    condition: "new" | "used"
    year?: number
    kmDriven?: string
    owner?: string
    specs: { label: string; value: string }[]
    features: string[]
  }
> = {
  // New vehicles
  "pulsar-ns200": {
    brand: "Bajaj",
    model: "Pulsar NS200",
    price: "Rs. 4,29,900",
    available: true,
    type: "bike",
    condition: "new",
    specs: [
      { label: "Engine", value: "199.5 CC" },
      { label: "Power", value: "24.5 PS" },
      { label: "Mileage", value: "35 kmpl" },
      { label: "Top Speed", value: "136 km/h" },
      { label: "Fuel Tank", value: "12 L" },
      { label: "Weight", value: "156 kg" },
    ],
    features: ["ABS", "Digital Console", "LED Headlight", "Perimeter Frame", "Liquid Cooling"],
  },
  "honda-hornet": {
    brand: "Honda",
    model: "Hornet 2.0",
    price: "Rs. 4,49,900",
    available: true,
    type: "bike",
    condition: "new",
    specs: [
      { label: "Engine", value: "184.4 CC" },
      { label: "Power", value: "17.3 PS" },
      { label: "Mileage", value: "40 kmpl" },
      { label: "Top Speed", value: "129 km/h" },
      { label: "Fuel Tank", value: "12 L" },
      { label: "Weight", value: "142 kg" },
    ],
    features: ["ABS", "Digital LCD", "LED Lights", "Honda Selectable Torque Control"],
  },
  "honda-activa": {
    brand: "Honda",
    model: "Activa 6G",
    price: "Rs. 2,19,900",
    available: true,
    type: "scooter",
    condition: "new",
    specs: [
      { label: "Engine", value: "109 CC" },
      { label: "Power", value: "7.79 PS" },
      { label: "Mileage", value: "60 kmpl" },
      { label: "Top Speed", value: "83 km/h" },
      { label: "Fuel Tank", value: "5.3 L" },
      { label: "Weight", value: "107 kg" },
    ],
    features: ["ACG Starter", "LED Headlight", "External Fuel Lid", "Metal Body"],
  },
  swift: {
    brand: "Maruti Suzuki",
    model: "Swift",
    price: "Rs. 35,99,000",
    available: true,
    type: "car",
    condition: "new",
    specs: [
      { label: "Engine", value: "1197 CC" },
      { label: "Power", value: "89 PS" },
      { label: "Mileage", value: "22 kmpl" },
      { label: "Top Speed", value: "180 km/h" },
      { label: "Fuel Tank", value: "37 L" },
      { label: "Boot Space", value: "268 L" },
    ],
    features: [
      "Touchscreen Infotainment",
      "Auto Climate Control",
      "Rear Parking Camera",
      "ABS with EBD",
      "Dual Airbags",
    ],
  },
  creta: {
    brand: "Hyundai",
    model: "Creta",
    price: "Rs. 54,99,000",
    available: true,
    type: "car",
    condition: "new",
    specs: [
      { label: "Engine", value: "1497 CC" },
      { label: "Power", value: "113 PS" },
      { label: "Mileage", value: "17 kmpl" },
      { label: "Top Speed", value: "185 km/h" },
      { label: "Fuel Tank", value: "50 L" },
      { label: "Boot Space", value: "433 L" },
    ],
    features: ["Panoramic Sunroof", "Ventilated Seats", "10.25 inch Display", "6 Airbags", "ADAS Features"],
  },
  "pulsar-ns200-used": {
    brand: "Bajaj",
    model: "Pulsar NS200",
    price: "Rs. 2,85,000",
    available: true,
    type: "bike",
    condition: "used",
    year: 2021,
    kmDriven: "18,500 km",
    owner: "1st Owner",
    specs: [
      { label: "Engine", value: "199.5 CC" },
      { label: "Power", value: "24.5 PS" },
      { label: "Mileage", value: "35 kmpl" },
      { label: "Top Speed", value: "136 km/h" },
      { label: "Fuel Tank", value: "12 L" },
      { label: "Weight", value: "156 kg" },
    ],
    features: ["ABS", "Digital Console", "LED Headlight", "Well Maintained", "Service Records Available"],
  },
  "fz-v3-used": {
    brand: "Yamaha",
    model: "FZ V3",
    price: "Rs. 2,45,000",
    available: true,
    type: "bike",
    condition: "used",
    year: 2020,
    kmDriven: "25,000 km",
    owner: "2nd Owner",
    specs: [
      { label: "Engine", value: "149 CC" },
      { label: "Power", value: "12.4 PS" },
      { label: "Mileage", value: "45 kmpl" },
      { label: "Top Speed", value: "115 km/h" },
      { label: "Fuel Tank", value: "13 L" },
      { label: "Weight", value: "137 kg" },
    ],
    features: ["LED Headlight", "Single Channel ABS", "Digital Console", "Good Condition"],
  },
  "apache-rtr-used": {
    brand: "TVS",
    model: "Apache RTR 160",
    price: "Rs. 1,95,000",
    available: true,
    type: "bike",
    condition: "used",
    year: 2019,
    kmDriven: "32,000 km",
    owner: "1st Owner",
    specs: [
      { label: "Engine", value: "159.7 CC" },
      { label: "Power", value: "16 PS" },
      { label: "Mileage", value: "40 kmpl" },
      { label: "Top Speed", value: "113 km/h" },
      { label: "Fuel Tank", value: "12 L" },
      { label: "Weight", value: "145 kg" },
    ],
    features: ["Dual Channel ABS", "Bluetooth Console", "RTR Mode", "Regular Service"],
  },
  "activa-5g-used": {
    brand: "Honda",
    model: "Activa 5G",
    price: "Rs. 85,000",
    available: true,
    type: "scooter",
    condition: "used",
    year: 2019,
    kmDriven: "22,000 km",
    owner: "1st Owner",
    specs: [
      { label: "Engine", value: "109 CC" },
      { label: "Power", value: "8 PS" },
      { label: "Mileage", value: "50 kmpl" },
      { label: "Top Speed", value: "83 km/h" },
      { label: "Fuel Tank", value: "5.3 L" },
      { label: "Weight", value: "109 kg" },
    ],
    features: ["ACG Starter", "Combi Brake", "Good Tyres", "Battery Replaced Recently"],
  },
  "jupiter-used": {
    brand: "TVS",
    model: "Jupiter",
    price: "Rs. 72,000",
    available: true,
    type: "scooter",
    condition: "used",
    year: 2018,
    kmDriven: "35,000 km",
    owner: "2nd Owner",
    specs: [
      { label: "Engine", value: "109.7 CC" },
      { label: "Power", value: "8 PS" },
      { label: "Mileage", value: "45 kmpl" },
      { label: "Top Speed", value: "80 km/h" },
      { label: "Fuel Tank", value: "5 L" },
      { label: "Weight", value: "108 kg" },
    ],
    features: ["Econometer", "External Fuel Filler", "Mobile Charger", "Well Maintained"],
  },
  "swift-used": {
    brand: "Maruti Suzuki",
    model: "Swift VXI",
    price: "Rs. 18,50,000",
    available: true,
    type: "car",
    condition: "used",
    year: 2020,
    kmDriven: "42,000 km",
    owner: "1st Owner",
    specs: [
      { label: "Engine", value: "1197 CC" },
      { label: "Power", value: "89 PS" },
      { label: "Mileage", value: "22 kmpl" },
      { label: "Top Speed", value: "180 km/h" },
      { label: "Fuel Tank", value: "37 L" },
      { label: "Boot Space", value: "268 L" },
    ],
    features: ["Touchscreen", "ABS", "Airbags", "Insurance Valid", "Company Service Records"],
  },
  "i20-used": {
    brand: "Hyundai",
    model: "i20 Asta",
    price: "Rs. 14,75,000",
    available: true,
    type: "car",
    condition: "used",
    year: 2019,
    kmDriven: "55,000 km",
    owner: "2nd Owner",
    specs: [
      { label: "Engine", value: "1197 CC" },
      { label: "Power", value: "83 PS" },
      { label: "Mileage", value: "18 kmpl" },
      { label: "Top Speed", value: "175 km/h" },
      { label: "Fuel Tank", value: "45 L" },
      { label: "Boot Space", value: "285 L" },
    ],
    features: ["Sunroof", "Reverse Camera", "Climate Control", "New Tyres", "Accident Free"],
  },
  "city-used": {
    brand: "Honda",
    model: "City ZX",
    price: "Rs. 22,00,000",
    available: true,
    type: "car",
    condition: "used",
    year: 2021,
    kmDriven: "28,000 km",
    owner: "1st Owner",
    specs: [
      { label: "Engine", value: "1498 CC" },
      { label: "Power", value: "121 PS" },
      { label: "Mileage", value: "17 kmpl" },
      { label: "Top Speed", value: "195 km/h" },
      { label: "Fuel Tank", value: "40 L" },
      { label: "Boot Space", value: "506 L" },
    ],
    features: ["Honda Sensing", "Sunroof", "Lane Watch Camera", "Apple CarPlay", "Extended Warranty"],
  },
}

export default function VehicleDetailPage() {
  const params = useParams()
  const router = useRouter()
  const vehicle = vehicleDetails[params.id as string]

  if (!vehicle) {
    return (
      <div className="px-4 pt-6">
        <p>Vehicle not found</p>
      </div>
    )
  }

  const VehicleIcon = vehicle.type === "car" ? Car : Bike

  return (
    <div className="px-4 pt-6 pb-24">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Button variant="ghost" size="icon" onClick={() => router.back()} className="rounded-xl">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-foreground">
              {vehicle.brand} {vehicle.model}
            </h1>
            <Badge
              variant="outline"
              className={`text-xs ${
                vehicle.condition === "new" ? "border-emerald-500 text-emerald-600" : "border-amber-500 text-amber-600"
              }`}
            >
              {vehicle.condition === "new" ? "NEW" : "USED"}
            </Badge>
          </div>
          <p className="text-primary font-semibold">{vehicle.price}</p>
        </div>
      </div>

      {/* Image Card */}
      <Card className="mb-6 bg-gradient-to-br from-muted to-muted/50 border-0 relative overflow-hidden">
        <CardContent className="p-8 flex items-center justify-center">
          <VehicleIcon className="w-32 h-32 text-muted-foreground" />
          <div
            className={`absolute top-3 right-3 px-3 py-1 rounded-full flex items-center gap-1 ${
              vehicle.condition === "new" ? "bg-emerald-500" : "bg-amber-500"
            }`}
          >
            {vehicle.condition === "new" ? (
              <Sparkles className="w-3 h-3 text-white" />
            ) : (
              <Clock className="w-3 h-3 text-white" />
            )}
            <span className="text-white text-xs font-medium">
              {vehicle.condition === "new" ? "Brand New" : "Pre-Owned"}
            </span>
          </div>
        </CardContent>
      </Card>

      {vehicle.condition === "used" && (
        <Card className="mb-6 border-amber-500/30 bg-amber-500/5">
          <CardContent className="p-4">
            <h2 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-500" />
              Vehicle History
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {vehicle.year && (
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center mb-1">
                    <Calendar className="w-5 h-5 text-amber-600" />
                  </div>
                  <p className="text-xs text-muted-foreground">Year</p>
                  <p className="font-semibold text-foreground">{vehicle.year}</p>
                </div>
              )}
              {vehicle.kmDriven && (
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center mb-1">
                    <Gauge className="w-5 h-5 text-amber-600" />
                  </div>
                  <p className="text-xs text-muted-foreground">Driven</p>
                  <p className="font-semibold text-foreground text-sm">{vehicle.kmDriven}</p>
                </div>
              )}
              {vehicle.owner && (
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center mb-1">
                    <User className="w-5 h-5 text-amber-600" />
                  </div>
                  <p className="text-xs text-muted-foreground">Owner</p>
                  <p className="font-semibold text-foreground text-sm">{vehicle.owner}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Availability - only for new vehicles */}
      {vehicle.condition === "new" && (
        <Badge
          className={`mb-6 ${
            vehicle.available
              ? "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20"
              : "bg-rose-500/10 text-rose-600 hover:bg-rose-500/20"
          }`}
        >
          {vehicle.available ? "Available in Showrooms" : "Currently Out of Stock"}
        </Badge>
      )}

      {/* Specs */}
      <h2 className="font-semibold text-foreground mb-3">Specifications</h2>
      <Card className="mb-6 border-border/50">
        <CardContent className="p-4">
          <div className="grid grid-cols-2 gap-4">
            {vehicle.specs.map((spec, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  {spec.label === "Engine" && <Settings className="w-5 h-5 text-primary" />}
                  {spec.label === "Power" && <Zap className="w-5 h-5 text-primary" />}
                  {spec.label === "Mileage" && <Gauge className="w-5 h-5 text-primary" />}
                  {spec.label === "Fuel Tank" && <Fuel className="w-5 h-5 text-primary" />}
                  {!["Engine", "Power", "Mileage", "Fuel Tank"].includes(spec.label) && (
                    <Gauge className="w-5 h-5 text-primary" />
                  )}
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">{spec.label}</p>
                  <p className="font-semibold text-foreground text-sm">{spec.value}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <h2 className="font-semibold text-foreground mb-3">Features</h2>
      <Card className="mb-6 border-border/50">
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-2">
            {vehicle.features.map((feature, index) => (
              <Badge key={index} variant="secondary">
                {feature}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Button className="w-full gap-2" size="lg">
        <MapPin className="w-4 h-4" />
        {vehicle.condition === "new" ? "Find Dealer" : "Contact Seller"}
      </Button>
    </div>
  )
}
