import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";

import Theme from "../utils/globalTheme";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const UserCard = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Theme.White,
    width: (95 / 100) * screenWidth,
    height: (12 / 100) * screenHeight,
    elevation: 5,
    borderRadius: 10,
    shadowColor: Theme.ShadowColor,
    shadowOffset: { width: 2.5, height: 2.5 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
});
