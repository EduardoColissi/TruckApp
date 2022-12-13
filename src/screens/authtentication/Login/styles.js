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
  title:{
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginTop: screenHeight * 0.10,
    alignSelf: "center"
  },
  formContainer:{
    marginTop: screenHeight * 0.05,
    width: screenWidth * 0.85,
    height: screenHeight * 0.4,
  },
  formTitle:{
    fontSize: 17,
    color: "#a4a4a4",
    fontWeight: "400",
    alignSelf: "center",
    marginTop: screenHeight * 0.03,
    marginBottom: screenHeight * 0.03
  },
  buttonContainer: {
    margin: 25
  },
  signupButton: {
    color: "white",
    fontWeight: "200",
    fontSize: 14,
    marginTop: screenHeight * 0.1,
    alignSelf: "center",
  }
});