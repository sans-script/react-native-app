import { Ionicons } from "@expo/vector-icons";
import { Tabs, useNavigation } from "expo-router";

export default function Layout(props: any) {

  const nav: any = useNavigation();

  function icon(name: any) {
    return (props: any) => (
      <Ionicons
        name={name}
        size={18}
        color={props.focused ? "#3A98FF" : "#000"}
      />
    );
  }

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: icon("home-outline"),
        }}
      />
      <Tabs.Screen
        name="course"
        options={{
          title: "Course",
          tabBarIcon: icon("play-outline"),
        }}
      />
      <Tabs.Screen
        name="config"
        options={{
          title: "Settings",
          tabBarIcon: icon("settings-outline"),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More Options",
          tabBarIcon: icon("menu-outline"),
        }}
        listeners={{
          tabPress: (e: any) => {
            e.preventDefault();
            nav?.openDrawer()
          },
        }}
      />
    </Tabs>
  );
}
