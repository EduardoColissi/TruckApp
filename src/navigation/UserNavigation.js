import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import CustomDrawer from "../components/CustomDrawer";
import Theme from "../utils/globalTheme";

//import das telas
import Dashboard from "../screens/application/Dashboard";
import Freights from "../screens/application/Freights";
import MyFreights from "../screens/application/MyFreights";
import Marketplace from "../screens/application/Marketplace";
import Profile from "../screens/application/Profile";
import FreightDetails from "../screens/application/FreightDetails";

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
          drawerActiveBackgroundColor: Theme.PrimaryColor,
          drawerActiveTintColor: Theme.White,
          headerTintColor: Theme.White,
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
          component={Freights}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome5 name="shipping-fast" size={22} color={color} />
            ),
          }}
          initialParams={{ id: undefined }}
        />
        <Drawer.Screen
          name="Meus fretes"
          component={MyFreights}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome5 name="truck-loading" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Loja"
          component={Marketplace}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome5 name="store-alt" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Perfil"
          component={Profile}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome5 name="user-alt" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Frete"
          component={FreightDetails}
          options={{
            drawerItemStyle: { height: 0 },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: Theme.PrimaryColor,
  },
});
