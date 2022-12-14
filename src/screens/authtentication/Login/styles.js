import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  formContainer:{
    marginTop: screenHeight * 0.2,
    width: screenWidth * 0.9,
    height: screenHeight * 0.5,
  },
  buttonContainer: {
    margin: 18
  },
  loginButton: {
    color: "white",
    fontWeight: "300",
    fontSize: 18,
    alignSelf: "center",
  },
  loginButtonContainer: {
    marginTop: screenHeight * 0.2,
  }
});