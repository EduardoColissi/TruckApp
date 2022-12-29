import React from "react";
import { Input } from "react-native-elements";
import { StyleSheet, View } from "react-native";

import Theme from "../utils/globalTheme";

//Input de formulario
const FormInput = ({
  iconName,
  iconColor,
  returnKeyType,
  keyboardType,
  name,
  placeholder,
  value,
  label,
  leftIcon,
  ...rest
}) => (
  <View style={styles.inputContainer}>
    <Input
      {...rest}
      labelStyle={{ color: Theme.White }}
      placeholderTextColor={Theme.White}
      label={label}
      name={name}
      value={value}
      leftIcon={leftIcon}
      placeholder={placeholder}
      inputStyle={styles.input}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 10,
    marginVertical: 3,
    color: Theme.White,
  },
  input: {
    color: Theme.White,
  },
});

export default FormInput;
