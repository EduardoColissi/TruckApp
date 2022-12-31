import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Theme from "../utils/globalTheme";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const FreightCard = (props) => {
  return (
    <View style={styles.card}>
      <View>{props.children}</View>
    </View>
  );
};

export default FreightCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Theme.White,
    width: (94 / 100) * screenWidth,
    height: (23 / 100) * screenHeight,
    elevation: 5,
    borderRadius: 10,
    shadowColor: Theme.ShadowColor,
    shadowOffset: { width: 2.5, height: 2.5 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 12,
    marginVertical: 12,
  },
});
