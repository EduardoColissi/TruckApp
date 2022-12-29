import React from "react";

import { Text, View, Image, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import PointsCard from "../../../components/PointsCard";
import UserCard from "../../../components/UserCard";

import styles from "./styles";

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
        <View style={styles.userContainer}>
          <UserCard>
            <Image
              source={require("../../../public/PessoaExemplo.jpeg")}
              style={styles.personPhoto}
            />
            <Text style={styles.userinfoText}>Olá, Eduardo Colissi!</Text>
          </UserCard>
        </View>
      </TouchableOpacity>
      <View style={styles.walletContainer}>
        <PointsCard>
          <Text style={styles.valueText}>1.500</Text>
          <FontAwesome5 name="coins" size={20} />
        </PointsCard>
      </View>
    </View>
  );
};

export default Dashboard;
