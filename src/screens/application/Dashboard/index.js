import React, { useContext } from "react";
import { View, Text, Button } from "react-native";

import styles from "./styles";

import { AuthContext } from "../../../components/Context";

const Dashboard = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <View style={styles.dashboard}>
      <Text>This is the USER Dashboard screen!</Text>
      <Button
        title="SignOut"
        onPress={() => {
          signOut();
        }}
        titleStyle={{ color: "#F57C00" }}
        type="clear"
      />
    </View>
  );
};

export default Dashboard;
