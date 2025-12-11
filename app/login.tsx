import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useApp } from "@/lib/app-context";

function LoginContent() {
  const router = useRouter();
  const { setIsLoggedIn, setIsGuest, setUserName } = useApp();
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"email" | "phone">("email");
  const [loginMode, setLoginMode] = useState<"login" | "signup">("login");

  const handleLogin = async () => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsLoggedIn(true);
    setUserName("Aarav");
    router.replace("/(main)/home");
  };

  const handleSignup = async () => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsLoggedIn(true);
    setUserName("New User");
    router.replace("/(main)/home");
  };

  const handleGuest = () => {
    setIsGuest(true);
    router.replace("/(main)/home");
  };

  return (
    <ScrollView className="flex-1 bg-background">
      {/* Header */}
      <View className="items-center pt-12 pb-8 px-6">
        <View className="w-20 h-20 bg-primary rounded-2xl items-center justify-center mb-4 shadow-lg">
          <Ionicons name="car" size={40} color="white" />
        </View>
        <Text className="text-2xl font-bold text-foreground">Welcome Back</Text>
        <Text className="text-muted-foreground text-sm mt-1">Sign in to continue</Text>
      </View>

      {/* Form */}
      <View className="flex-1 px-6">
        {/* Tab Selector */}
        <View className="flex-row mb-6 bg-muted rounded-lg p-1">
          <TouchableOpacity
            onPress={() => setActiveTab("email")}
            className={`flex-1 py-2 rounded-md items-center flex-row justify-center ${
              activeTab === "email" ? "bg-background" : ""
            }`}
          >
            <Ionicons name="mail" size={16} color={activeTab === "email" ? "#f97316" : "#737373"} />
            <Text className={`ml-2 ${activeTab === "email" ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
              Email
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab("phone")}
            className={`flex-1 py-2 rounded-md items-center flex-row justify-center ${
              activeTab === "phone" ? "bg-background" : ""
            }`}
          >
            <Ionicons name="call" size={16} color={activeTab === "phone" ? "#f97316" : "#737373"} />
            <Text className={`ml-2 ${activeTab === "phone" ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
              Phone
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === "email" && (
          <>
            {/* Login/Signup Toggle */}
            <View className="flex-row mb-4 bg-muted rounded-lg p-1">
              <TouchableOpacity
                onPress={() => setLoginMode("login")}
                className={`flex-1 py-2 rounded-md ${loginMode === "login" ? "bg-background" : ""}`}
              >
                <Text className={`text-center ${loginMode === "login" ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
                  Login
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setLoginMode("signup")}
                className={`flex-1 py-2 rounded-md ${loginMode === "signup" ? "bg-background" : ""}`}
              >
                <Text className={`text-center ${loginMode === "signup" ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>

            {loginMode === "login" ? (
              <View className="gap-4">
                <View className="gap-2">
                  <Text className="text-foreground">Email</Text>
                  <View className="relative">
                    <Ionicons name="mail" size={16} color="#737373" style={{ position: "absolute", left: 12, top: 14 }} />
                    <TextInput
                      placeholder="your@email.com"
                      className="bg-input border border-border rounded-lg py-3 pl-10 pr-4 text-foreground"
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                  </View>
                </View>
                <View className="gap-2">
                  <Text className="text-foreground">Password</Text>
                  <View className="relative">
                    <Ionicons name="lock-closed" size={16} color="#737373" style={{ position: "absolute", left: 12, top: 14 }} />
                    <TextInput
                      placeholder="••••••••"
                      className="bg-input border border-border rounded-lg py-3 pl-10 pr-4 text-foreground"
                      secureTextEntry
                    />
                  </View>
                </View>
                <TouchableOpacity
                  onPress={handleLogin}
                  disabled={isLoading}
                  className="w-full bg-primary rounded-lg py-3 items-center"
                >
                  <Text className="text-primary-foreground font-semibold">{isLoading ? "Signing in..." : "Sign In"}</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View className="gap-4">
                <View className="gap-2">
                  <Text className="text-foreground">Full Name</Text>
                  <View className="relative">
                    <Ionicons name="person" size={16} color="#737373" style={{ position: "absolute", left: 12, top: 14 }} />
                    <TextInput
                      placeholder="Your name"
                      className="bg-input border border-border rounded-lg py-3 pl-10 pr-4 text-foreground"
                    />
                  </View>
                </View>
                <View className="gap-2">
                  <Text className="text-foreground">Email</Text>
                  <View className="relative">
                    <Ionicons name="mail" size={16} color="#737373" style={{ position: "absolute", left: 12, top: 14 }} />
                    <TextInput
                      placeholder="your@email.com"
                      className="bg-input border border-border rounded-lg py-3 pl-10 pr-4 text-foreground"
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                  </View>
                </View>
                <View className="gap-2">
                  <Text className="text-foreground">Password</Text>
                  <View className="relative">
                    <Ionicons name="lock-closed" size={16} color="#737373" style={{ position: "absolute", left: 12, top: 14 }} />
                    <TextInput
                      placeholder="••••••••"
                      className="bg-input border border-border rounded-lg py-3 pl-10 pr-4 text-foreground"
                      secureTextEntry
                    />
                  </View>
                </View>
                <TouchableOpacity
                  onPress={handleSignup}
                  disabled={isLoading}
                  className="w-full bg-primary rounded-lg py-3 items-center"
                >
                  <Text className="text-primary-foreground font-semibold">{isLoading ? "Creating account..." : "Create Account"}</Text>
                </TouchableOpacity>
              </View>
            )}
          </>
        )}

        {activeTab === "phone" && (
          <View className="gap-4">
            <View className="gap-2">
              <Text className="text-foreground">Phone Number</Text>
              <View className="relative flex-row items-center">
                <Text className="absolute left-3 text-sm text-muted-foreground z-10">+977</Text>
                <TextInput
                  placeholder="98XXXXXXXX"
                  className="bg-input border border-border rounded-lg py-3 pl-14 pr-4 text-foreground flex-1"
                  keyboardType="phone-pad"
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={handleLogin}
              disabled={isLoading}
              className="w-full bg-primary rounded-lg py-3 items-center"
            >
              <Text className="text-primary-foreground font-semibold">{isLoading ? "Sending OTP..." : "Send OTP"}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Guest option */}
      <View className="px-6 pb-8">
        <View className="flex-row items-center my-4">
          <View className="flex-1 h-px bg-border" />
          <Text className="px-2 text-xs uppercase text-muted-foreground">Or</Text>
          <View className="flex-1 h-px bg-border" />
        </View>
        <TouchableOpacity
          onPress={handleGuest}
          className="w-full border border-border rounded-lg py-3 items-center bg-transparent"
        >
          <Text className="text-foreground">Continue as Guest</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default function LoginPage() {
  return <LoginContent />;
}

