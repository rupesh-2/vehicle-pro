"use client"

import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowLeft, Cog, Wrench, AlertTriangle, Lightbulb } from "lucide-react"

const systemData: Record<
  string,
  {
    title: string
    icon: string
    howItWorks: string
    components: string[]
    maintenanceTips: string[]
    commonIssues: string[]
  }
> = {
  engine: {
    title: "Engine",
    icon: "🔧",
    howItWorks:
      "The engine converts fuel into mechanical energy through internal combustion. Air and fuel mix in the combustion chamber, ignite via spark plugs (petrol) or compression (diesel), and push pistons that rotate the crankshaft.",
    components: [
      "Cylinder block & head",
      "Pistons & connecting rods",
      "Crankshaft & camshaft",
      "Valves & timing system",
      "Fuel injection system",
      "Ignition system",
    ],
    maintenanceTips: [
      "Change oil every 5,000-7,500 km",
      "Replace air filter every 15,000 km",
      "Check spark plugs regularly",
      "Monitor coolant levels",
      "Use quality fuel only",
    ],
    commonIssues: ["Overheating", "Oil leaks", "Misfiring", "Unusual noises", "Poor fuel economy"],
  },
  transmission: {
    title: "Transmission",
    icon: "⚙️",
    howItWorks:
      "The transmission transfers power from the engine to the wheels at varying speeds. It uses gears to optimize engine performance across different driving conditions.",
    components: [
      "Gearbox",
      "Clutch (manual)",
      "Torque converter (automatic)",
      "Differential",
      "Drive shaft",
      "CV joints",
    ],
    maintenanceTips: [
      "Check transmission fluid regularly",
      "Change fluid every 60,000 km",
      "Avoid aggressive gear changes",
      "Let car warm up before driving",
    ],
    commonIssues: ["Slipping gears", "Grinding noises", "Delayed engagement", "Fluid leaks"],
  },
  brakes: {
    title: "Brakes",
    icon: "🛑",
    howItWorks:
      "Brakes use friction to slow down or stop your vehicle. When you press the pedal, hydraulic fluid pushes brake pads against rotors (disc brakes) or drums, creating friction that slows the wheels.",
    components: ["Brake pads & shoes", "Rotors & drums", "Calipers", "Master cylinder", "Brake lines", "ABS sensors"],
    maintenanceTips: [
      "Check brake pads every 20,000 km",
      "Replace brake fluid every 2 years",
      "Listen for squealing sounds",
      "Check rotor thickness",
    ],
    commonIssues: ["Squealing or grinding", "Soft brake pedal", "Vibration when braking", "Pulling to one side"],
  },
  suspension: {
    title: "Suspension",
    icon: "🔩",
    howItWorks:
      "The suspension system absorbs road impacts and maintains tire contact with the road. It consists of springs, shock absorbers, and linkages that connect the wheels to the chassis.",
    components: ["Springs (coil/leaf)", "Shock absorbers", "Struts", "Control arms", "Ball joints", "Stabilizer bars"],
    maintenanceTips: [
      "Inspect every 20,000 km",
      "Check for uneven tire wear",
      "Replace shocks at 80,000 km",
      "Align wheels after impact",
    ],
    commonIssues: ["Bouncy ride", "Nose diving when braking", "Uneven tire wear", "Clunking noises"],
  },
  cooling: {
    title: "Cooling System",
    icon: "❄️",
    howItWorks:
      "The cooling system prevents engine overheating by circulating coolant through the engine block. The water pump pushes coolant through passages, absorbing heat, then through the radiator where it cools down.",
    components: ["Radiator", "Water pump", "Thermostat", "Cooling fans", "Hoses", "Coolant reservoir"],
    maintenanceTips: [
      "Check coolant level monthly",
      "Flush system every 2 years",
      "Inspect hoses for cracks",
      "Clean radiator fins",
    ],
    commonIssues: ["Overheating", "Coolant leaks", "Thermostat failure", "Water pump failure"],
  },
  electrical: {
    title: "Electrical System",
    icon: "⚡",
    howItWorks:
      "The electrical system powers all electronic components. The battery provides initial power, the alternator generates electricity while running, and wiring distributes power throughout the vehicle.",
    components: ["Battery", "Alternator", "Starter motor", "Fuse box", "Wiring harness", "ECU/ECM"],
    maintenanceTips: [
      "Check battery terminals monthly",
      "Test battery every 6 months",
      "Replace battery every 3-5 years",
      "Keep connections clean",
    ],
    commonIssues: ["Dead battery", "Dim lights", "Electrical shorts", "Alternator failure"],
  },
}

export default function SystemDetailPage() {
  const params = useParams()
  const router = useRouter()
  const system = systemData[params.system as string]

  if (!system) {
    return (
      <div className="px-4 pt-6">
        <p>System not found</p>
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
          <h1 className="text-2xl font-bold text-foreground">{system.title}</h1>
          <p className="text-muted-foreground text-sm">Vehicle System Guide</p>
        </div>
      </div>

      {/* Icon Card */}
      <Card className="mb-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="p-6 flex items-center justify-center">
          <span className="text-6xl">{system.icon}</span>
        </CardContent>
      </Card>

      {/* Accordion Sections */}
      <Accordion type="multiple" defaultValue={["how-it-works"]} className="space-y-3">
        <AccordionItem value="how-it-works" className="border rounded-xl px-4">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-4 h-4 text-blue-600" />
              </div>
              <span className="font-semibold">How It Works</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pb-4">{system.howItWorks}</AccordionContent>
        </AccordionItem>

        <AccordionItem value="components" className="border rounded-xl px-4">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                <Cog className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="font-semibold">Components</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <ul className="space-y-2">
              {system.components.map((component, index) => (
                <li key={index} className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {component}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="maintenance" className="border rounded-xl px-4">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Wrench className="w-4 h-4 text-primary" />
              </div>
              <span className="font-semibold">Maintenance Tips</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <ul className="space-y-2">
              {system.maintenanceTips.map((tip, index) => (
                <li key={index} className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  {tip}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="issues" className="border rounded-xl px-4">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
              </div>
              <span className="font-semibold">Common Issues</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <ul className="space-y-2">
              {system.commonIssues.map((issue, index) => (
                <li key={index} className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  {issue}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
