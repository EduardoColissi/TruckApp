import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Image } from "react-native-elements";

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const CorelogLogo = () => {
  return (
    <Image source={require("../public/LogoCorelogAmarelo.png")} style={styles.logo} />
  );
};

const styles = StyleSheet.create({
  logo: {
    marginTop: 250,
    width: screenWidth * 0.93,
    height: screenHeight * 0.1,
  },
});

export default CorelogLogo;
