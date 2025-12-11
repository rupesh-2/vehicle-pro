import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useApp } from "@/lib/app-context";

const menuItems = [
  {
    icon: "book-outline",
    title: "Vehicle Basics",
    description: "Learn about vehicle systems",
    href: "/encyclopedia",
    color: "bg-blue-500/10",
  },
  {
    icon: "car-outline",
    title: "My Vehicle",
    description: "Manage your vehicles",
    href: "/my-vehicle",
    color: "bg-emerald-500/10",
  },
  {
    icon: "notifications-outline",
    title: "Service Reminders",
    description: "Track maintenance schedules",
    href: "/reminders",
    color: "bg-primary/10",
  },
  {
    icon: "videocam-outline",
    title: "Tutorials",
    description: "Step-by-step guides",
    href: "/tutorials",
    color: "bg-purple-500/10",
  },
  {
    icon: "location-outline",
    title: "Nepal Market",
    description: "Explore available vehicles",
    href: "/market",
    color: "bg-rose-500/10",
  },
  {
    icon: "document-text-outline",
    title: "Traffic Rules",
    description: "Nepal traffic regulations",
    href: "/traffic-rules",
    color: "bg-amber-500/10",
  },
  {
    icon: "scale-outline",
    title: "Compare Vehicles",
    description: "Side-by-side comparison",
    href: "/compare",
    color: "bg-cyan-500/10",
  },
];

export default function HomePage() {
  const { userName, isGuest } = useApp();

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="px-4 pt-6">
        {/* Greeting Banner */}
        <View className="bg-primary rounded-xl mb-6 p-5">
          <Text className="text-primary-foreground/80 text-sm">Welcome back,</Text>
          <Text className="text-2xl font-bold mt-1 text-primary-foreground">{isGuest ? "Guest" : userName}!</Text>
          <Text className="text-primary-foreground/70 text-sm mt-2">What would you like to explore today?</Text>
        </View>

        {/* Menu Grid */}
        <View className="flex-row flex-wrap gap-3">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href as any} asChild>
              <TouchableOpacity className="w-[calc(50%-6px)] bg-card border border-border/50 rounded-xl p-4">
                <View className={`w-11 h-11 rounded-xl ${item.color} items-center justify-center mb-3`}>
                  <Ionicons name={item.icon as any} size={20} color="#f97316" />
                </View>
                <Text className="font-semibold text-foreground text-sm">{item.title}</Text>
                <Text className="text-muted-foreground text-xs mt-0.5">{item.description}</Text>
              </TouchableOpacity>
            </Link>
          ))}
        </View>

        {/* Quick Actions */}
        <View className="mt-6 bg-card border border-border/50 rounded-xl p-4">
          <View className="flex-row items-center justify-between">
            <View className="flex-1">
              <Text className="font-semibold text-foreground">Quick Service Check</Text>
              <Text className="text-muted-foreground text-sm">View upcoming maintenance</Text>
            </View>
            <Link href="/reminders" asChild>
              <TouchableOpacity className="w-10 h-10 bg-primary/10 rounded-full items-center justify-center">
                <Ionicons name="chevron-forward" size={20} color="#f97316" />
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

