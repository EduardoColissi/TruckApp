import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

import Theme from "../utils/globalTheme";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const PointsCard = (props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Você tem:</Text>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
};

export default PointsCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Theme.PrimaryColor,
    width: screenWidth * 0.45,
    height: screenHeight * 0.15,
    borderRadius: 5,
    borderColor: Theme.SecondaryColor,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    shadowColor: Theme.TertiaryColor,
    shadowOpacity: 0.3,
    margin: screenHeight * 0.02,
  },
  cardContent: {
    flexDirection: "row",
    fontSize: 25,
    alignItems: "center",
    marginHorizontal: 5,
  },
  cardTitle: {
    fontSize: 25,
    color: Theme.TertiaryColor,
    fontWeight: "550",
  },
});
