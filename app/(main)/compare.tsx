import { View, Text, ScrollView } from "react-native";

export default function ComparePage() {
  return (
    <ScrollView className="flex-1 bg-background">
      <View className="px-4 pt-6">
        <Text className="text-2xl font-bold text-foreground mb-2">Compare Vehicles</Text>
        <Text className="text-muted-foreground mb-6">Side-by-side comparison</Text>
        <Text className="text-foreground">Compare content coming soon...</Text>
      </View>
    </ScrollView>
  );
}

