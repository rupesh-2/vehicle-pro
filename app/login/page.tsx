"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Car, Mail, Phone, Lock, User } from "lucide-react"
import { useApp } from "@/lib/app-context"

function LoginContent() {
  const router = useRouter()
  const { setIsLoggedIn, setIsGuest, setUserName } = useApp()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setIsLoggedIn(true)
    setUserName("Aarav")
    router.push("/home")
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setIsLoggedIn(true)
    setUserName("New User")
    router.push("/home")
  }

  const handleGuest = () => {
    setIsGuest(true)
    router.push("/home")
  }

  return (
    <div className="mobile-container min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="flex flex-col items-center pt-12 pb-8 px-6">
        <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
          <Car className="w-10 h-10 text-primary-foreground" />
        </div>
        <h1 className="text-2xl font-bold text-foreground">Welcome Back</h1>
        <p className="text-muted-foreground text-sm mt-1">Sign in to continue</p>
      </div>

      {/* Form */}
      <div className="flex-1 px-6">
        <Card className="border-0 shadow-none bg-transparent">
          <CardContent className="p-0">
            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="email" className="gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </TabsTrigger>
                <TabsTrigger value="phone" className="gap-2">
                  <Phone className="w-4 h-4" />
                  Phone
                </TabsTrigger>
              </TabsList>

              <TabsContent value="email">
                <Tabs defaultValue="login">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                  </TabsList>

                  <TabsContent value="login">
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input id="email" type="email" placeholder="your@email.com" className="pl-10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input id="password" type="password" placeholder="••••••••" className="pl-10" />
                        </div>
                      </div>
                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Signing in..." : "Sign In"}
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="signup">
                    <form onSubmit={handleSignup} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input id="name" placeholder="Your name" className="pl-10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input id="signup-email" type="email" placeholder="your@email.com" className="pl-10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input id="signup-password" type="password" placeholder="••••••••" className="pl-10" />
                        </div>
                      </div>
                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Creating account..." : "Create Account"}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </TabsContent>

              <TabsContent value="phone">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                        +977
                      </span>
                      <Input id="phone" type="tel" placeholder="98XXXXXXXX" className="pl-14" />
                    </div>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Sending OTP..." : "Send OTP"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Guest option */}
      <div className="px-6 pb-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or</span>
          </div>
        </div>
        <Button variant="outline" className="w-full mt-4 bg-transparent" onClick={handleGuest}>
          Continue as Guest
        </Button>
      </div>
    </div>
  )
}

export default function LoginPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="mobile-container min-h-screen bg-background flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-4">
          <Car className="w-10 h-10 text-primary-foreground" />
        </div>
      </div>
    )
  }

  return <LoginContent />
}
