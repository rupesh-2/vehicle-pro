"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { useApp } from "@/lib/app-context"
import { Car, Bell, Moon, HelpCircle, FileText, LogOut, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function ProfilePage() {
  const router = useRouter()
  const { userName, isGuest, vehicles, setIsLoggedIn, setIsGuest } = useApp()
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const handleLogout = () => {
    setIsLoggedIn(false)
    setIsGuest(false)
    router.push("/login")
  }

  const menuItems = [
    {
      icon: Car,
      title: "My Vehicles",
      subtitle: `${vehicles.length} vehicle${vehicles.length !== 1 ? "s" : ""} registered`,
      href: "/my-vehicle",
    },
    {
      icon: Bell,
      title: "Notifications",
      subtitle: "Manage reminders",
      href: "/reminders",
    },
    {
      icon: HelpCircle,
      title: "Help & Support",
      subtitle: "Get assistance",
      href: "#",
    },
    {
      icon: FileText,
      title: "Terms & Privacy",
      subtitle: "Legal information",
      href: "#",
    },
  ]

  return (
    <div className="px-4 pt-6">
      {/* Profile Header */}
      <Card className="mb-6 border-border/50">
        <CardContent className="p-6 flex items-center gap-4">
          <Avatar className="w-16 h-16">
            <AvatarFallback className="bg-primary text-primary-foreground text-xl">
              {isGuest ? "G" : userName.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-foreground">{isGuest ? "Guest User" : userName}</h2>
            <p className="text-muted-foreground text-sm">
              {isGuest ? "Sign in for full access" : "Vehicle enthusiast"}
            </p>
            {isGuest && (
              <Link href="/login">
                <Button size="sm" className="mt-2">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Dark Mode Toggle */}
      <Card className="mb-6 border-border/50">
        <CardContent className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
              <Moon className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">Dark Mode</h3>
              <p className="text-muted-foreground text-sm">Toggle dark theme</p>
            </div>
          </div>
          <Switch checked={darkMode} onCheckedChange={setDarkMode} />
        </CardContent>
      </Card>

      {/* Menu Items */}
      <div className="space-y-2">
        {menuItems.map((item, index) => (
          <Link key={index} href={item.href}>
            <Card className="border-border/50 hover:shadow-sm transition-shadow">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.subtitle}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Logout Button */}
      {!isGuest && (
        <Button
          variant="outline"
          className="w-full mt-6 text-destructive border-destructive/30 hover:bg-destructive/10 bg-transparent"
          onClick={handleLogout}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Log Out
        </Button>
      )}

      {/* App Version */}
      <p className="text-center text-muted-foreground text-xs mt-8">VehiclePro Nepal v1.0.0</p>
    </div>
  )
}
