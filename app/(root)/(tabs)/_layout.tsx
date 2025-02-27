import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "@/constants/icons";
interface TabIconProps {
  title: string;
  focused: boolean;
  icon: any;
}
const TabIcon = ({ title, focused, icon }: TabIconProps) => {
  return (
    <View className="flex-col w-full h-full items-center justify-center">
      <Image
        className="w-6 h-6"
        source={icon}
        tintColor={focused ? "#0061ff" : "#665876"}
        resizeMode="contain"
      />
      <Text
        numberOfLines={1}
        className={`text-xs min-w-28 text-center pt-1 ${
          focused ? "text-primary-300" : "text-black-300"
        }`}
      >
        {title}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderColor: "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 70,
          paddingTop: 15,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => {
            return <TabIcon title="Home" icon={icons.home} focused={focused} />;
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon title="Explore" icon={icons.search} focused={focused} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon title="Profile" icon={icons.person} focused={focused} />
            );
          },
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
