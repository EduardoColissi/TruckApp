import React from "react";
import { View, Modal, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

//Componente de loading, para utilizar em todo o app, preferencialmente, utilizar da maneira como está na app.js,
//utilizando um state que define se o load será visível, e um timeout para definir seu tempo de duração com timeout
// sempre em 6000 milissegundos ou mais
export default function Loading({ visible }) {
  return (
    <Modal transparent visible={visible}>
      <View style={styles.view}>
        <LottieView
          style={styles.loadingLottie}
          source={require("../../assets/lottie/loading.json")}
          autoPlay
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loadingLottie: {
    width: 200,
    height: 200,
  },
});
