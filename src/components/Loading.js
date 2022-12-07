import React from "react";
import { View, Modal, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

export default function Loading({ visible }) {
  return (
    <Modal transparent visible={visible}>
      <View style={styles.view}>
        <LottieView
          style={StyleSheet.loadingLottie}
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
