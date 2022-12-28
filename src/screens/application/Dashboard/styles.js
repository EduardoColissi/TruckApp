import { StyleSheet } from "react-native";

import Theme from "../../../utils/globalTheme";

export default styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  valueText: {
    fontSize: 20,
    marginHorizontal: 5,
    fontWeight: "bold",
    color: Theme.White,
  },
});
