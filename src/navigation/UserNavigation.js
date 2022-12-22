import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import CustomDrawer from "../components/CustomDrawer";
import Dashboard from "../screens/application/Dashboard";

const Drawer = createDrawerNavigator();

export default function UserNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Dashboard"
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerStyle: styles.headerStyle,
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 16,
          },
          drawerActiveBackgroundColor: "#3e870b",
          drawerActiveTintColor: "#fff",
          headerTintColor: "#fff",
        }}
      >
        <Drawer.Screen
          name="Painel"
          component={Dashboard}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome5 name="tachometer-alt" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Fretes"
          component={Dashboard}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome5 name="truck" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Meus fretes"
          component={Dashboard}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome5 name="truck-loading" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Perfil"
          component={Dashboard}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome5 name="user-alt" size={22} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#357309",
  },
});
