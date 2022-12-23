import { Dimensions, StyleSheet } from "react-native";

import Theme from "../../../utils/globalTheme";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  formContainer: {
    marginTop: screenHeight * 0.2,
    width: screenWidth * 0.9,
    height: screenHeight * 0.5,
  },
  buttonContainer: {
    margin: 18,
  },
  loginButton: {
    color: Theme.White,
    fontWeight: "300",
    fontSize: 18,
    alignSelf: "center",
  },
  loginButtonContainer: {
    marginTop: screenHeight * 0.2,
  },
});
