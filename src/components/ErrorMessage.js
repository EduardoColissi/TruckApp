import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Theme from "../utils/globalTheme";

//Mensagem de erro dinâmica
const ErrorMessage = ({ errorValue }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{errorValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: -15,
  },
  errorText: {
    color: Theme.ErrorColor,
    fontSize: 14,
  },
});

export default ErrorMessage;
