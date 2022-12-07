import React from "react";
import { View, Modal, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

export default function Loading() {
  return (
    <Modal transparent>
      <View style={styles.view}>
        <LottieView
          style={StyleSheet.loadingLottie}
          source={require("../../assets/lottie/truck-loading.json")}
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
