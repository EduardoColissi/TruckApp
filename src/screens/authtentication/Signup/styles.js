import { StyleSheet, Dimensions } from "react-native";

import Theme from "../../../utils/globalTheme";

//Get nas medidas da tela de forma dinâmica
const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  formContainer: {
    marginTop: screenHeight * 0.15,
    width: screenWidth * 0.9,
  },
  buttonContainer: {
    margin: 3,
  },
  signinButton: {
    color: Theme.White,
    fontWeight: "300",
    fontSize: 18,
    alignSelf: "center",
  },
  signinButtonContainer: {
    marginTop: screenHeight * 0.05,
    marginBottom: screenHeight * 0.1,
  },
});
