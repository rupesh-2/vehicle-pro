import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "@/components/ui/button";

const slides = [
  {
    icon: "book-outline",
    title: "Learn Your Vehicle",
    description: "Understand every part of your vehicle with detailed guides on engines, brakes, suspension and more.",
    color: "bg-blue-500/10",
  },
  {
    icon: "notifications-outline",
    title: "Track Servicing Easily",
    description: "Never miss an oil change, bluebook renewal, or tax payment with smart service reminders.",
    color: "bg-primary/10",
  },
  {
    icon: "location-outline",
    title: "Explore Nepal Market",
    description: "Browse the latest bikes, scooters, and cars available in Nepal with prices and dealer info.",
    color: "bg-emerald-500/10",
  },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      router.replace("/login");
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleSkip = () => {
    router.replace("/login");
  };

  const slide = slides[currentSlide];

  return (
    <View className="flex-1 bg-background">
      {/* Skip button */}
      <View className="flex-row justify-end p-4">
        <TouchableOpacity onPress={handleSkip}>
          <Text className="text-muted-foreground">Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Slide content */}
      <View className="flex-1 items-center justify-center px-8 pb-12">
        <View className={`w-32 h-32 rounded-3xl ${slide.color} items-center justify-center mb-8`}>
          <Ionicons name={slide.icon as any} size={64} color="#f97316" />
        </View>

        <Text className="text-2xl font-bold text-foreground text-center mb-4">{slide.title}</Text>
        <Text className="text-muted-foreground text-center text-base leading-relaxed max-w-xs">{slide.description}</Text>
      </View>

      {/* Navigation */}
      <View className="px-6 pb-8">
        {/* Dots */}
        <View className="flex-row justify-center gap-2 mb-8">
          {slides.map((_, index) => (
            <View
              key={index}
              className={`h-2 rounded-full ${
                index === currentSlide ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
              }`}
            />
          ))}
        </View>

        {/* Buttons */}
        <View className="flex-row gap-3">
          {currentSlide > 0 && (
            <TouchableOpacity
              onPress={handlePrev}
              className="flex-1 bg-transparent border border-border rounded-lg py-3 items-center flex-row justify-center"
            >
              <Ionicons name="chevron-back" size={16} color="#737373" />
              <Text className="ml-1 text-foreground">Back</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={handleNext}
            className="flex-1 bg-primary rounded-lg py-3 items-center flex-row justify-center"
          >
            <Text className="text-primary-foreground font-semibold">
              {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
            </Text>
            {currentSlide < slides.length - 1 && (
              <Ionicons name="chevron-forward" size={16} color="white" style={{ marginLeft: 4 }} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

