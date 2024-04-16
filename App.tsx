import "./global.css";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { GluestackUIProvider, Text } from "./components/ui";

export default function App() {
  return (
    <GluestackUIProvider>
    <View style={styles.container}>
      <Text className="text-typography-300">Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
