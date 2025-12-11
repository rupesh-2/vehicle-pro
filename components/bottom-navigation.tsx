import { View, Text, TouchableOpacity } from "react-native";
import { usePathname, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/home", icon: "home", label: "Home" },
  { href: "/encyclopedia", icon: "book", label: "Knowledge" },
  { href: "/my-vehicle", icon: "car", label: "My Vehicle" },
  { href: "/market", icon: "storefront", label: "Market" },
  { href: "/profile", icon: "person", label: "Profile" },
];

export function BottomNavigation() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <View className="absolute bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <View className="flex-row items-center justify-around py-2 px-2">
        {navItems.map((item) => {
          const isActive = pathname?.startsWith(`/(main)${item.href}`) || pathname === item.href;
          return (
            <TouchableOpacity
              key={item.href}
              onPress={() => router.push(`/(main)${item.href}` as any)}
              className={cn(
                "flex-col items-center gap-1 px-3 py-2 rounded-xl"
              )}
            >
              <Ionicons
                name={item.icon as any}
                size={20}
                color={isActive ? "#f97316" : "#737373"}
              />
              <Text className={cn("text-xs font-medium", isActive ? "text-primary" : "text-muted-foreground")}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
