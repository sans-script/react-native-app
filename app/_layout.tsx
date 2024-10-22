import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: false }}>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            title: "Welcome!",
            drawerIcon: () => (
              <Ionicons name="home-outline" size={18} color="#3A98FF" />
            ),
          }}
        />
        <Drawer.Screen
          name="first" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "First Component",
            title: "Welcome!",
            drawerIcon: () => (
              <Ionicons name="heart-circle-outline" size={18} color="#3A98FF" />
            ),
          }}
        />
        <Drawer.Screen
          name="counter" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Counter",
            title: "Counter",
            drawerIcon: () => <Ionicons name="add" size={18} color="#3A98FF" />,
          }}
        />
        <Drawer.Screen
          name="form" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Form",
            title: "Form",
            drawerIcon: () => (
              <Ionicons name="checkbox-outline" size={18} color="#3A98FF" />
            ),
          }}
        />
        <Drawer.Screen
          name="tabs" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Tabs",
            title: "Tabs",
            drawerIcon: () => (
              <Ionicons name="albums-outline" size={18} color="#3A98FF" />
            ),
          }}
        />
        <Drawer.Screen
          name="stack" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Stack",
            title: "Stack",
            drawerIcon: () => (
              <Ionicons name="logo-stackoverflow" size={18} color="#3A98FF" />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
