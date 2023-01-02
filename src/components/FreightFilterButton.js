import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Button } from "react-native-elements";

import Theme from "../utils/globalTheme";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

//Botão para formulário, que pode ser reutilizado de forma dinâmica
const FreightFilterButton = ({ title, buttonType, ...rest }) => (
  <Button
    {...rest}
    type={buttonType}
    title={title}
    buttonStyle={styles.filterButton}
    titleStyle={styles.filterButtonTitle}
  />
);

const styles = StyleSheet.create({
  filterButton: {
    backgroundColor: Theme.ButtonColor,
    marginHorizontal: screenWidth * 0.02,
    marginVertical: screenHeight * 0.02,
    width: (46 / 100) * screenWidth,
  },
  filterButtonTitle: {
    color: Theme.White,
    fontWeight: "300",
  },
});

export default FreightFilterButton;
