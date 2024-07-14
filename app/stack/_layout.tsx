import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index" options={{title: "Initial"}} />
    </Stack>
  );
}
