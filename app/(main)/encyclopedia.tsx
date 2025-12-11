import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const systems = [
  {
    id: "engine",
    icon: "settings",
    title: "Engine",
    description: "The heart of your vehicle",
    color: "bg-red-500/10",
  },
  {
    id: "transmission",
    icon: "speedometer",
    title: "Transmission",
    description: "Power delivery system",
    color: "bg-blue-500/10",
  },
  {
    id: "suspension",
    icon: "radio",
    title: "Suspension",
    description: "Ride comfort & handling",
    color: "bg-emerald-500/10",
  },
  {
    id: "brakes",
    icon: "disc",
    title: "Brakes",
    description: "Stopping power & safety",
    color: "bg-amber-500/10",
  },
  {
    id: "cooling",
    icon: "thermometer",
    title: "Cooling System",
    description: "Temperature regulation",
    color: "bg-cyan-500/10",
  },
  {
    id: "electrical",
    icon: "flash",
    title: "Electrical System",
    description: "Wiring & electronics",
    color: "bg-purple-500/10",
  },
];

export default function EncyclopediaPage() {
  return (
    <ScrollView className="flex-1 bg-background">
      <View className="px-4 pt-6">
        <View className="mb-6">
          <Text className="text-2xl font-bold text-foreground">Vehicle Encyclopedia</Text>
          <Text className="text-muted-foreground mt-1">Learn about different vehicle systems</Text>
        </View>

        <View className="gap-3">
          {systems.map((system) => (
            <Link key={system.id} href={`/encyclopedia/${system.id}`} asChild>
              <TouchableOpacity className="bg-card border border-border/50 rounded-xl p-4 flex-row items-center gap-4">
                <View className={`w-14 h-14 rounded-2xl ${system.color} items-center justify-center`}>
                  <Ionicons name={system.icon as any} size={28} color="#f97316" />
                </View>
                <View className="flex-1">
                  <Text className="font-semibold text-foreground">{system.title}</Text>
                  <Text className="text-muted-foreground text-sm">{system.description}</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#737373" />
              </TouchableOpacity>
            </Link>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

