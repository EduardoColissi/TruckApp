import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

const CustomDrawer = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.content}
      >
        <ImageBackground
          source={require("../public/LogoCorelogAmarelo.png")}
          style={styles.logo}
        />
        <View style={styles.itemlist}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View>
        <Text>Logout</Text>
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
    backgroundColor: "#357309",
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
    backgroundColor: "#ffff",
    paddingTop: 10,
  },
});
