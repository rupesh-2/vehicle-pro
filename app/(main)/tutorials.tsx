import { View, Text, ScrollView } from "react-native";

export default function TutorialsPage() {
  return (
    <ScrollView className="flex-1 bg-background">
      <View className="px-4 pt-6">
        <Text className="text-2xl font-bold text-foreground mb-2">Tutorials</Text>
        <Text className="text-muted-foreground mb-6">Step-by-step guides</Text>
        <Text className="text-foreground">Tutorials content coming soon...</Text>
      </View>
    </ScrollView>
  );
}

