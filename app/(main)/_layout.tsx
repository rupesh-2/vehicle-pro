import { Stack } from "expo-router";
import { MobileLayout } from "@/components/mobile-layout";

export default function MainLayout() {
  return (
    <MobileLayout>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="home" />
        <Stack.Screen name="encyclopedia" />
        <Stack.Screen name="my-vehicle" />
        <Stack.Screen name="market" />
        <Stack.Screen name="profile" />
        <Stack.Screen name="reminders" />
        <Stack.Screen name="tutorials" />
        <Stack.Screen name="traffic-rules" />
        <Stack.Screen name="compare" />
      </Stack>
    </MobileLayout>
  );
}

