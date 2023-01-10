import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import * as Location from "expo-location";

import styles from "./styles";

import FormButton from "../../../components/FormButton";

const MyFreight = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const getLocationPermission = async () => {
    // let { status } = await Location.requestBackgroundPermissionsAsync();
    // console.log(status);
  };
  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status != "granted") {
  //       setErrorMsg("Permissão negada.");
  //       return;
  //     } else {
  //       let location = await Location.getCurrentPositionAsync({});
  //       setLocation(location);
  //     }
  //   })();
  // }, []);

  // let text = "Esperando localização.";
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);
  // }

  return (
    <View style={styles.screen}>
      <FormButton
        title="Localização"
        onPress={() => {
          getLocationPermission();
        }}
      />
    </View>
  );
};

export default MyFreight;
