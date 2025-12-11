import { View, Text, ScrollView } from "react-native";

export default function TrafficRulesPage() {
  return (
    <ScrollView className="flex-1 bg-background">
      <View className="px-4 pt-6">
        <Text className="text-2xl font-bold text-foreground mb-2">Traffic Rules</Text>
        <Text className="text-muted-foreground mb-6">Nepal traffic regulations</Text>
        <Text className="text-foreground">Traffic rules content coming soon...</Text>
      </View>
    </ScrollView>
  );
}

