import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Theme from "../utils/globalTheme";

const PointsCard = () => {
  return (
    <View style={styles.card}>
      <Text>Eduardo, voce tem 10 pontos.</Text>
    </View>
  );
};

export default PointsCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Theme.SecondaryColor,
  },
});
