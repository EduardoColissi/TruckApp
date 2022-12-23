import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Image } from "react-native-elements";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const CorelogLogo = () => {
  return (
    <Image
      source={require("../public/LogoCorelogBranco.png")}
      style={styles.logo}
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    marginBottom: screenHeight * 0.1,
    width: screenWidth * 0.9,
    height: screenHeight * 0.097,
  },
});

export default CorelogLogo;
