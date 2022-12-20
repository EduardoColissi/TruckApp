import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";

import CustomDrawer from "../components/CustomDrawer";
import Dashboard from "../screens/application/Dashboard";

const Drawer = createDrawerNavigator();

export default function UserNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Dashboard"
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{ headerStyle: styles.headerStyle }}
      >
        <Drawer.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen name="Fretes" component={Dashboard} />
        <Drawer.Screen name="Meus fretes" component={Dashboard} />
        <Drawer.Screen name="Perfil" component={Dashboard} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#357309",
  },
});
