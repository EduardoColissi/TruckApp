import React from "react";

import { Text } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import PointsCard from "../../../components/PointsCard";
import styles from "./styles";
import Theme from "../../../utils/globalTheme";

const Dashboard = () => {
  return (
    <PointsCard>
      <Text style={styles.valueText}>1.500</Text>
      <FontAwesome5 name="coins" size={20} color={Theme.White} />
    </PointsCard>
  );
};

export default Dashboard;
