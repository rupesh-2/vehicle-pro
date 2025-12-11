import { View, Text, ScrollView } from "react-native";

export default function MarketPage() {
  return (
    <ScrollView className="flex-1 bg-background">
      <View className="px-4 pt-6">
        <Text className="text-2xl font-bold text-foreground mb-2">Nepal Market</Text>
        <Text className="text-muted-foreground mb-6">Explore available vehicles</Text>
        <Text className="text-foreground">Market content coming soon...</Text>
      </View>
    </ScrollView>
  );
}

