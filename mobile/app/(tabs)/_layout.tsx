import { HeaderTitle } from "@react-navigation/elements";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#B39CD0",
        headerStyle: {
          backgroundColor: "#1C1C1C",
        },
        headerTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#1c1c1c",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home Screen",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={30}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerTitle: "About",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              size={30}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
