import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
    marginLeft: 25,
    marginTop: -15,
    marginBottom: 5,
  },
  errorText: {
    color: "red",
  },
});

export default ErrorMessage;
