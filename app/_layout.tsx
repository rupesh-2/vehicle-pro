import { Stack } from "expo-router";
import { AppProvider } from "@/lib/app-context";
import "../global.css";

export default function RootLayout() {
  return (
    <AppProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="login" />
        <Stack.Screen name="(main)" />
      </Stack>
    </AppProvider>
  );
}

