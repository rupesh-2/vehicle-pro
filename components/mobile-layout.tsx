import { ReactNode } from "react";
import { View } from "react-native";
import { BottomNavigation } from "./bottom-navigation";
import { cn } from "@/lib/utils";

interface MobileLayoutProps {
  children: ReactNode;
  showNav?: boolean;
}

export function MobileLayout({ children, showNav = true }: MobileLayoutProps) {
  return (
    <View className="flex-1 bg-background">
      <View className={cn("flex-1", showNav && "pb-20")}>{children}</View>
      {showNav && <BottomNavigation />}
    </View>
  );
}
