import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import Theme from "../utils/globalTheme";

import { AuthContext } from "./Context";

const CustomDrawer = (props) => {
  const { signOut } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.content}
      >
        <ImageBackground
          source={require("../public/LogoCorelogBranco.png")}
          style={styles.logo}
        />
        <View style={styles.itemlist}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => {
            signOut();
          }}
          style={styles.signoutContainer}
        >
          <View style={styles.signoutRow}>
            <FontAwesome5 name="power-off" size={20} />
            <Text style={styles.footerText}>Desconectar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    backgroundColor: Theme.PrimaryColor,
  },
  logo: {
    padding: 33,
    margin: 10,
    height: 60,
    width: 255,
    flex: 1,
    marginTop: 35,
    marginBottom: 35,
  },
  itemlist: {
    flex: 1,
    backgroundColor: Theme.White,
    paddingTop: 10,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: Theme.LightGray,
  },
  footerText: {
    fontSize: 15,
    marginLeft: 5,
  },
  signoutContainer: {
    paddingVertical: 18,
  },
  signoutRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});
