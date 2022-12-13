import React from 'react';
import { Input } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';

//Input de formulario
const FormInput = ({
    iconName,
    iconColor,
    returnKeyType,
    keyboardType,
    name,
    placeholder,
    value,
    ...rest
}) => (
    <View style={styles.inputContainer}>
        <Input
            {...rest}
            placeholderTextColor="#ffff"
            name={name}
            value={value}
            placeholder={placeholder}
            inputStyle={styles.input}
        />
    </View>
);

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 10,
        marginVertical: 3,
        color: "white",
    },
    input: {
        color: "white",
    }
});
  
export default FormInput;