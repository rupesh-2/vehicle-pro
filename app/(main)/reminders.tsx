import { View, Text, ScrollView } from "react-native";

export default function RemindersPage() {
  return (
    <ScrollView className="flex-1 bg-background">
      <View className="px-4 pt-6">
        <Text className="text-2xl font-bold text-foreground mb-2">Service Reminders</Text>
        <Text className="text-muted-foreground mb-6">Track maintenance schedules</Text>
        <Text className="text-foreground">Reminders content coming soon...</Text>
      </View>
    </ScrollView>
  );
}

