import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Switch, useColorScheme, View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

// Screens
import AnimationScreen from "./animation_screen";
import ExploreScreen from "./explore";
import HomeScreen from "./index";

type RootTabParamList = {
  Home: undefined;
  QR: undefined;
  Explore: undefined;
  Settings: undefined;
};

type DrawerParamList = {
  HomeTabs: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();
const TopTabs = createMaterialTopTabNavigator<RootTabParamList>();
const Drawer = createDrawerNavigator();

export default function App() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme;
  const insets = useSafeAreaInsets();

  function BottomTab() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "white",
          tabBarStyle: {
            backgroundColor: "#2E2E2E",
            borderTopLeftRadius: 20, // <-- rounded left corner
            borderTopRightRadius: 20, // <-- rounded right corner
            borderTopWidth: 0,
            elevation: 5,
            // height: 60 + insets.bottom,
            // paddingBottom: insets.bottom,
            position: "absolute", // <-- important so it "floats"
            left: 10, // optional for floating look
            right: 10, // optional for floating look
            overflow: "hidden", // <-- clips children inside rounded corners
          },
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="QR"
          component={HomeScreen} // temporary dummy
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="qr-code" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="search" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={AnimationScreen} // temporary dummy
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="settings" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  // function HomeScreen({ navigation }: any) {
  //   return (
  //     <View style={{ flex: 1 }}>
  //       <CustomTopBar title="Home" navigation={navigation} />
  //       <View
  //         style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
  //       >
  //         Home Content
  //       </View>
  //     </View>
  //   );
  // }

  function NightMode() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      },
    });
    return (
      <View>
        <Switch
          style={styles.container}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        ></Switch>
      </View>
    );
  }
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previous) => !previous);

  return (
    <SafeAreaProvider>
      <Drawer.Navigator initialRouteName="HomeTabs">
        <Drawer.Screen
          name="HomeTabs"
          component={BottomTab}
          options={{ title: "Home" }}
        />
        <Drawer.Screen name="Settings" component={ExploreScreen} />
        <Drawer.Screen name="Switch" component={NightMode} />
      </Drawer.Navigator>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  // qrButton: {
  //   position: "absolute",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor: "#007AFF",
  //   width: 60,
  //   height: 60,
  //   borderRadius: 30,
  //   top: -30, // make it float above bar
  //   shadowColor: "#000",
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.3,
  //   shadowRadius: 3.5,
  //   elevation: 5,
  // },
});
