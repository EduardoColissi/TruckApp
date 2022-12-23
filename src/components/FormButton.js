import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";

import Theme from "../utils/globalTheme";

//Botão para formulário, que pode ser reutilizado de forma dinâmica
const FormButton = ({ title, buttonType, ...rest }) => (
  <Button
    {...rest}
    type={buttonType}
    title={title}
    buttonStyle={styles.formButton}
    titleStyle={styles.formButtonTitle}
  />
);

const styles = StyleSheet.create({
  formButton: {
    backgroundColor: Theme.ButtonColor,
    borderRadius: 20,
  },
  formButtonTitle: {
    color: Theme.White,
    fontWeight: "300",
  },
});

export default FormButton;
