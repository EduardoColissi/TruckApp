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
    marginTop: screenHeight * 0.05,
    width: screenWidth * 0.9,
    height: screenHeight * 0.4,
  },
  buttonContainer: {
    margin: 18
  },
  signupButton: {
    color: "white",
    fontWeight: "300",
    fontSize: 18,
    marginTop: screenHeight * 0.1,
    alignSelf: "center",
  }
});