# VehiclePro Nepal - Expo Mobile App

This is the Expo mobile app version of VehiclePro Nepal, converted from a Next.js web application.

## Prerequisites

- Node.js (v18 or later)
- npm, yarn, or pnpm
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for Mac) or Android Emulator (for development)

## Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Start the Expo development server:
```bash
npm start
# or
yarn start
# or
expo start
```

3. Run on your device:
   - Scan the QR code with Expo Go app (iOS/Android)
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Press `w` for web browser

## Project Structure

```
app/
  _layout.tsx          # Root layout with navigation stack
  index.tsx            # Splash screen
  onboarding.tsx       # Onboarding flow
  login.tsx            # Login/signup screen
  (main)/              # Main app screens (protected routes)
    _layout.tsx        # Main layout with bottom navigation
    home.tsx           # Home screen
    profile.tsx        # Profile screen
    my-vehicle.tsx     # Vehicle management
    encyclopedia.tsx   # Vehicle knowledge base
    market.tsx         # Vehicle marketplace
    reminders.tsx     # Service reminders
    tutorials.tsx      # Tutorial videos
    traffic-rules.tsx  # Traffic regulations
    compare.tsx        # Vehicle comparison
components/
  mobile-layout.tsx    # Main app layout wrapper
  bottom-navigation.tsx # Bottom tab navigation
  ui/                 # Reusable UI components
lib/
  app-context.tsx      # Global app state
  utils.ts            # Utility functions
```

## Key Changes from Next.js

1. **Routing**: Converted from Next.js App Router to Expo Router
2. **Components**: Replaced web components (`div`, `span`) with React Native components (`View`, `Text`)
3. **Icons**: Replaced `lucide-react` with `@expo/vector-icons`
4. **Styling**: Using NativeWind (Tailwind CSS for React Native)
5. **Navigation**: Using Expo Router instead of Next.js navigation

## Features

- ✅ Splash screen
- ✅ Onboarding flow
- ✅ Login/Signup with guest mode
- ✅ Bottom navigation
- ✅ Home screen with quick actions
- ✅ Profile management
- ✅ Vehicle management
- ✅ Encyclopedia (vehicle systems)
- ⏳ Market browsing (placeholder)
- ⏳ Service reminders (placeholder)
- ⏳ Tutorials (placeholder)
- ⏳ Traffic rules (placeholder)
- ⏳ Vehicle comparison (placeholder)

## Development Notes

- The app uses NativeWind for styling, which allows Tailwind CSS classes to work with React Native
- All navigation is handled through Expo Router
- State management is done through React Context (`app-context.tsx`)
- Some pages are placeholders and need to be fully implemented

## Building for Production

### iOS
```bash
expo build:ios
```

### Android
```bash
expo build:android
```

Or use EAS Build:
```bash
eas build --platform ios
eas build --platform android
```

## Troubleshooting

1. **Metro bundler issues**: Clear cache with `expo start -c`
2. **NativeWind not working**: Ensure `babel.config.js` includes NativeWind plugin
3. **Icons not showing**: Verify `@expo/vector-icons` is installed

## Next Steps

1. Implement remaining placeholder pages
2. Add proper form validation
3. Integrate with backend API
4. Add image upload functionality
5. Implement push notifications
6. Add offline support
7. Optimize performance

