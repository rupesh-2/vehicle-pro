import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useRouter, Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useApp } from "@/lib/app-context";

export default function ProfilePage() {
  const router = useRouter();
  const { userName, isGuest, vehicles, setIsLoggedIn, setIsGuest } = useApp();

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsGuest(false);
    router.replace("/login");
  };

  const menuItems = [
    {
      icon: "car",
      title: "My Vehicles",
      subtitle: `${vehicles.length} vehicle${vehicles.length !== 1 ? "s" : ""} registered`,
      href: "/my-vehicle",
    },
    {
      icon: "notifications",
      title: "Notifications",
      subtitle: "Manage reminders",
      href: "/reminders",
    },
    {
      icon: "help-circle",
      title: "Help & Support",
      subtitle: "Get assistance",
      href: "#",
    },
    {
      icon: "document-text",
      title: "Terms & Privacy",
      subtitle: "Legal information",
      href: "#",
    },
  ];

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="px-4 pt-6">
        {/* Profile Header */}
        <View className="bg-card border border-border/50 rounded-xl mb-6 p-6 flex-row items-center gap-4">
          <View className="w-16 h-16 bg-primary rounded-full items-center justify-center">
            <Text className="text-primary-foreground text-xl font-bold">
              {isGuest ? "G" : userName.charAt(0).toUpperCase()}
            </Text>
          </View>
          <View className="flex-1">
            <Text className="text-xl font-bold text-foreground">{isGuest ? "Guest User" : userName}</Text>
            <Text className="text-muted-foreground text-sm">{isGuest ? "Sign in for full access" : "Vehicle enthusiast"}</Text>
            {isGuest && (
              <Link href="/login" asChild>
                <TouchableOpacity className="mt-2 bg-primary rounded-lg py-2 px-4 self-start">
                  <Text className="text-primary-foreground text-sm font-semibold">Sign In</Text>
                </TouchableOpacity>
              </Link>
            )}
          </View>
        </View>

        {/* Menu Items */}
        <View className="gap-2">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href as any} asChild>
              <TouchableOpacity className="bg-card border border-border/50 rounded-xl p-4 flex-row items-center gap-3">
                <View className="w-10 h-10 bg-muted rounded-xl items-center justify-center">
                  <Ionicons name={item.icon as any} size={20} color="#737373" />
                </View>
                <View className="flex-1">
                  <Text className="font-medium text-foreground">{item.title}</Text>
                  <Text className="text-muted-foreground text-sm">{item.subtitle}</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#737373" />
              </TouchableOpacity>
            </Link>
          ))}
        </View>

        {/* Logout Button */}
        {!isGuest && (
          <TouchableOpacity
            onPress={handleLogout}
            className="w-full mt-6 border border-destructive/30 rounded-lg py-3 items-center bg-transparent"
          >
            <View className="flex-row items-center">
              <Ionicons name="log-out-outline" size={16} color="#ef4444" />
              <Text className="ml-2 text-destructive font-semibold">Log Out</Text>
            </View>
          </TouchableOpacity>
        )}

        {/* App Version */}
        <Text className="text-center text-muted-foreground text-xs mt-8">VehiclePro Nepal v1.0.0</Text>
      </View>
    </ScrollView>
  );
}

