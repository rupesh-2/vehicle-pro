"use client"

import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowLeft } from "lucide-react"

const tutorialData: Record<
  string,
  {
    title: string
    icon: string
    intro: string
    steps: { title: string; description: string }[]
  }
> = {
  "engine-oil": {
    title: "How to Change Engine Oil",
    icon: "🛢️",
    intro:
      "Regular oil changes are essential for engine health. Follow these steps to change your vehicle's engine oil safely.",
    steps: [
      {
        title: "Gather Materials",
        description:
          "You'll need: new oil (check owner's manual for type and quantity), new oil filter, drain pan, wrench set, funnel, gloves, and rags.",
      },
      {
        title: "Warm Up the Engine",
        description:
          "Run the engine for 5 minutes to warm up the oil. This makes it flow better and helps remove more contaminants.",
      },
      {
        title: "Position the Drain Pan",
        description: "Locate the oil drain plug under your vehicle. Position the drain pan directly below it.",
      },
      {
        title: "Remove Drain Plug",
        description:
          "Using the correct wrench, carefully remove the drain plug. Let all the old oil drain completely (about 10 minutes).",
      },
      {
        title: "Replace Oil Filter",
        description:
          "Remove the old oil filter. Apply a thin layer of new oil to the new filter's gasket and install it.",
      },
      {
        title: "Reinstall Drain Plug",
        description: "Clean the drain plug and reinstall it. Tighten it securely but don't over-tighten.",
      },
      {
        title: "Add New Oil",
        description:
          "Using a funnel, pour the correct amount of new oil into the engine. Check the dipstick to verify the level.",
      },
      {
        title: "Check for Leaks",
        description:
          "Start the engine and let it run for a minute. Check around the drain plug and filter for any leaks.",
      },
    ],
  },
  coolant: {
    title: "How to Check Coolant",
    icon: "❄️",
    intro: "Maintaining proper coolant levels prevents overheating. Learn how to check and top up your coolant safely.",
    steps: [
      {
        title: "Let Engine Cool",
        description:
          "Never check coolant on a hot engine. Wait at least 30 minutes after driving for the engine to cool down.",
      },
      {
        title: "Locate Coolant Reservoir",
        description:
          "Find the coolant reservoir in your engine bay. It's usually a translucent plastic tank with MIN/MAX markings.",
      },
      {
        title: "Check Level",
        description: "Look at the coolant level through the reservoir. It should be between the MIN and MAX markings.",
      },
      {
        title: "Add Coolant if Needed",
        description:
          "If low, open the cap and add the correct coolant type until it reaches the MAX line. Use a 50/50 coolant-water mix.",
      },
    ],
  },
  "tire-maintenance": {
    title: "Tire Maintenance",
    icon: "🛞",
    intro:
      "Proper tire maintenance ensures safety and extends tire life. Here's how to keep your tires in top condition.",
    steps: [
      {
        title: "Check Tire Pressure",
        description:
          "Use a tire pressure gauge to check all four tires plus the spare. Compare with the recommended PSI on the door jamb sticker.",
      },
      {
        title: "Inspect Tread Depth",
        description:
          "Use the coin test: insert a coin into the tread. If you can see the top of the head, it's time for new tires.",
      },
      {
        title: "Look for Damage",
        description:
          "Check for cuts, bulges, cracks, or objects embedded in the tire. Any damage requires professional inspection.",
      },
      {
        title: "Rotate Tires Regularly",
        description:
          "Rotate tires every 8,000-10,000 km to ensure even wear. Follow your vehicle's recommended rotation pattern.",
      },
      {
        title: "Check Alignment",
        description:
          "If your vehicle pulls to one side or tires wear unevenly, get a wheel alignment done by a professional.",
      },
    ],
  },
  "battery-care": {
    title: "Battery Care",
    icon: "🔋",
    intro: "A well-maintained battery ensures reliable starts. Follow these tips to maximize your battery's lifespan.",
    steps: [
      {
        title: "Visual Inspection",
        description: "Check for corrosion (white/blue powder) on terminals, cracks in the case, or leaking fluid.",
      },
      {
        title: "Clean Terminals",
        description:
          "Mix baking soda with water and use a wire brush to clean corroded terminals. Rinse with clean water and dry.",
      },
      {
        title: "Check Connections",
        description: "Ensure battery cables are tight and secure. Loose connections can cause starting problems.",
      },
      {
        title: "Test Battery Voltage",
        description:
          "Use a multimeter to check voltage. A healthy battery reads 12.6V or higher when the engine is off.",
      },
    ],
  },
  "basic-maintenance": {
    title: "Basic Vehicle Maintenance",
    icon: "🔧",
    intro:
      "Regular maintenance keeps your vehicle running smoothly. Here are essential checks every owner should perform.",
    steps: [
      {
        title: "Check All Fluid Levels",
        description:
          "Regularly check engine oil, coolant, brake fluid, power steering fluid, and windshield washer fluid.",
      },
      {
        title: "Inspect Lights",
        description:
          "Test all lights: headlights, brake lights, turn signals, and hazard lights. Replace burnt bulbs immediately.",
      },
      {
        title: "Check Wipers",
        description: "Inspect wiper blades for cracks or wear. Replace them every 6-12 months or when they streak.",
      },
      {
        title: "Test Brakes",
        description:
          "Listen for squealing or grinding. If the pedal feels soft or the vehicle pulls when braking, get them checked.",
      },
      {
        title: "Air Filter Check",
        description: "Inspect the engine air filter every 6 months. Replace it if it looks dirty or clogged.",
      },
      {
        title: "Belt Inspection",
        description: "Check drive belts for cracks, fraying, or glazing. Replace worn belts to prevent breakdowns.",
      },
    ],
  },
}

export default function TutorialDetailPage() {
  const params = useParams()
  const router = useRouter()
  const tutorial = tutorialData[params.id as string]

  if (!tutorial) {
    return (
      <div className="px-4 pt-6">
        <p>Tutorial not found</p>
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
          <h1 className="text-xl font-bold text-foreground">{tutorial.title}</h1>
          <p className="text-muted-foreground text-sm">Step-by-step guide</p>
        </div>
      </div>

      {/* Icon Card */}
      <Card className="mb-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="p-6 flex items-center justify-center">
          <span className="text-6xl">{tutorial.icon}</span>
        </CardContent>
      </Card>

      {/* Introduction */}
      <p className="text-muted-foreground mb-6">{tutorial.intro}</p>

      {/* Steps */}
      <Accordion type="multiple" defaultValue={["step-0"]} className="space-y-3">
        {tutorial.steps.map((step, index) => (
          <AccordionItem key={index} value={`step-${index}`} className="border rounded-xl px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-semibold text-sm">
                  {index + 1}
                </div>
                <span className="font-semibold text-left">{step.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4 pl-11">{step.description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
