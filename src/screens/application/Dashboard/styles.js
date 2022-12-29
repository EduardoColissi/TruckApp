import { StyleSheet } from "react-native";

import Theme from "../../../utils/globalTheme";

export default styles = StyleSheet.create({
  screen: {},
  mainInfosContainer: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
  valueText: {
    fontSize: 15,
    marginHorizontal: 5,
    fontWeight: "bold",
  },
  personPhoto: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  userinfoText: {
    fontSize: 18,
    marginHorizontal: 5,
    fontWeight: "bold",
  },
});
