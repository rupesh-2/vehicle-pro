import { TouchableOpacity, Text, View } from "react-native";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "default" | "lg";
  className?: string;
  disabled?: boolean;
}

export function Button({
  children,
  onPress,
  variant = "default",
  size = "default",
  className,
  disabled,
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={cn(
        "items-center justify-center rounded-lg",
        variant === "default" && "bg-primary",
        variant === "outline" && "border border-border bg-transparent",
        variant === "ghost" && "bg-transparent",
        size === "sm" && "px-3 py-1.5",
        size === "default" && "px-4 py-2",
        size === "lg" && "px-6 py-3",
        disabled && "opacity-50",
        className
      )}
    >
      <Text
        className={cn(
          "font-semibold",
          variant === "default" && "text-primary-foreground",
          variant === "outline" && "text-foreground",
          variant === "ghost" && "text-foreground",
          size === "sm" && "text-sm",
          size === "default" && "text-base",
          size === "lg" && "text-lg"
        )}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}
