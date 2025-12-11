import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useApp } from "@/lib/app-context";

export default function MyVehiclePage() {
  const { vehicles } = useApp();

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="px-4 pt-6">
        <View className="flex-row items-center justify-between mb-6">
          <View>
            <Text className="text-2xl font-bold text-foreground">My Vehicles</Text>
            <Text className="text-muted-foreground mt-1">Manage your registered vehicles</Text>
          </View>
          <Link href="/my-vehicle/add" asChild>
            <TouchableOpacity className="bg-primary rounded-lg px-4 py-2 flex-row items-center gap-2">
              <Ionicons name="add" size={16} color="white" />
              <Text className="text-primary-foreground text-sm font-semibold">Add</Text>
            </TouchableOpacity>
          </Link>
        </View>

        {vehicles.length === 0 ? (
          <View className="bg-card border-2 border-dashed border-border rounded-xl p-8 items-center">
            <View className="w-16 h-16 bg-muted rounded-2xl items-center justify-center mb-4">
              <Ionicons name="car" size={32} color="#737373" />
            </View>
            <Text className="font-semibold text-foreground mb-1">No vehicles yet</Text>
            <Text className="text-muted-foreground text-sm mb-4 text-center">Add your first vehicle to track maintenance and more</Text>
            <Link href="/my-vehicle/add" asChild>
              <TouchableOpacity className="bg-primary rounded-lg px-4 py-2 flex-row items-center gap-2">
                <Ionicons name="add" size={16} color="white" />
                <Text className="text-primary-foreground font-semibold">Add Vehicle</Text>
              </TouchableOpacity>
            </Link>
          </View>
        ) : (
          <View className="gap-3">
            {vehicles.map((vehicle) => (
              <View key={vehicle.id} className="bg-card border border-border/50 rounded-xl p-4">
                <View className="flex-row items-start gap-4">
                  <View className="w-14 h-14 bg-primary/10 rounded-2xl items-center justify-center">
                    <Ionicons name="car" size={28} color="#f97316" />
                  </View>
                  <View className="flex-1">
                    <Text className="font-semibold text-foreground">
                      {vehicle.brand} {vehicle.model}
                    </Text>
                    <View className="flex-row flex-wrap gap-2 mt-2">
                      <View className="flex-row items-center gap-1.5">
                        <Ionicons name="calendar" size={14} color="#737373" />
                        <Text className="text-sm text-muted-foreground">{vehicle.year}</Text>
                      </View>
                      <View className="flex-row items-center gap-1.5">
                        <Ionicons name="flame" size={14} color="#737373" />
                        <Text className="text-sm text-muted-foreground">{vehicle.fuelType}</Text>
                      </View>
                      <View className="flex-row items-center gap-1.5">
                        <Ionicons name="hash" size={14} color="#737373" />
                        <Text className="text-sm text-muted-foreground">{vehicle.cc} CC</Text>
                      </View>
                      <View className="flex-row items-center gap-1.5">
                        <Ionicons name="car" size={14} color="#737373" />
                        <Text className="text-sm text-muted-foreground">{vehicle.plateNumber}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
}

