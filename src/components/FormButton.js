import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import { LinearGradient } from 'expo-linear-gradient';

//Botão para formulário, que pode ser reutilizado de forma dinâmica
const FormButton = ({ title, buttonType, ...rest }) => (
  <LinearGradient 
    colors={['#8fc223', '#7eb806']} 
    start={[0, 0]} 
    end={[1, 0]}
    style={{borderRadius:20}}
  >
    <Button
      {...rest}
      type={buttonType}
      title={title}
      buttonStyle={styles.formButton}
      titleStyle={styles.formButtonTitle}
    />
  </LinearGradient> 
)

const styles = StyleSheet.create({
  formButton: {
    backgroundColor: "transparent",
  },
  formButtonTitle: {
    color: "white",
    fontWeight: "300",
  }
});
  
  export default FormButton;