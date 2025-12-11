import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function SplashScreen() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      router.replace("/onboarding");
    }, 2500);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View className="flex-1 bg-gradient-to-br from-background via-background to-primary/10 items-center justify-center relative">
      {/* Background decorative elements */}
      <View className="absolute inset-0">
        <View className="absolute top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full" />
        <View className="absolute bottom-40 -right-20 w-80 h-80 bg-primary/10 rounded-full" />
      </View>

      {/* Logo */}
      <View className="relative z-10 items-center gap-6">
        <View className="relative">
          <View className="w-28 h-28 bg-primary rounded-3xl items-center justify-center shadow-xl">
            <Ionicons name="car" size={56} color="white" />
          </View>
          <View className="absolute -bottom-2 -right-2 w-10 h-10 bg-card rounded-xl items-center justify-center shadow-lg border border-border">
            <Ionicons name="speedometer" size={20} color="#f97316" />
          </View>
        </View>

        <View className="items-center">
          <Text className="text-3xl font-bold text-foreground tracking-tight">VehiclePro</Text>
          <Text className="text-primary font-semibold text-lg">Nepal</Text>
        </View>

        {/* Loading indicator */}
        {isLoading && (
          <View className="mt-8 flex-row gap-1.5">
            <View className="w-2 h-2 bg-primary rounded-full" />
            <View className="w-2 h-2 bg-primary rounded-full" />
            <View className="w-2 h-2 bg-primary rounded-full" />
          </View>
        )}
      </View>

      {/* Footer text */}
      <Text className="absolute bottom-8 text-sm text-muted-foreground">Your Complete Vehicle Companion</Text>
    </View>
  );
}

