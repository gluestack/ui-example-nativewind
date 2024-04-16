import "./global.css";
import React from "react";
import { SafeAreaView } from "react-native";
import { GluestackUIProvider as NativewindProvider } from "./components/ui/gluestack-ui-provider";
import HomestayPage from "./kitchensink-components/HomestayPage";
import { useFonts } from "expo-font";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

type ThemeContextType = {
  colorMode?: "dark" | "light";
  toggleColorMode?: () => void;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  colorMode: "light",
  toggleColorMode: () => {},
});

export default function App() {
  const [colorMode, setColorMode] = React.useState<"dark" | "light">("light");

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  const toggleColorMode = async () => {
    setColorMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      {/* top SafeAreaView */}
      <SafeAreaView
        className={`${colorMode === "light" ? "bg-[#E5E5E5]" : "bg-[#262626]"}`}
      />
      {/* bottom SafeAreaView */}
      <SafeAreaView
        className={`${
          colorMode === "light" ? "bg-white" : "bg-[#171717]"
        } flex-1 overflow-hidden`}
      >
        <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
          <NativewindProvider mode={colorMode}>
            <HomestayPage />
          </NativewindProvider>
        </ThemeContext.Provider>
      </SafeAreaView>
    </>
  );
}
