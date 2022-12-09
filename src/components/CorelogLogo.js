import React from "react";
import { Image, StyleSheet } from "react-native";

const CorelogLogo = () => {
  return (
    <Image source={require("../public/LogoCorelogAmarelo.png")} style={styles.logo} />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 75,
    marginBottom: 20,
  },
});

export default CorelogLogo;
