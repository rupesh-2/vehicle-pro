import { createContext, useContext, useState, type ReactNode } from "react";

export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: string;
  fuelType: string;
  cc: string;
  plateNumber: string;
}

export interface Reminder {
  id: string;
  vehicleId: string;
  serviceType: string;
  date: string;
  repeat?: string;
}

interface AppContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  isGuest: boolean;
  setIsGuest: (value: boolean) => void;
  vehicles: Vehicle[];
  addVehicle: (vehicle: Omit<Vehicle, "id">) => void;
  reminders: Reminder[];
  addReminder: (reminder: Omit<Reminder, "id">) => void;
  userName: string;
  setUserName: (name: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [userName, setUserName] = useState("User");

  const addVehicle = (vehicle: Omit<Vehicle, "id">) => {
    setVehicles((prev) => [...prev, { ...vehicle, id: generateId() }]);
  };

  const addReminder = (reminder: Omit<Reminder, "id">) => {
    setReminders((prev) => [...prev, { ...reminder, id: generateId() }]);
  };

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        isGuest,
        setIsGuest,
        vehicles,
        addVehicle,
        reminders,
        addReminder,
        userName,
        setUserName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
