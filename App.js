import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Loading from "./src/components/Loading";

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading visible={loading} />
      ) : (
        <View style={styles.container}>
          <Text>Hello World!</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
