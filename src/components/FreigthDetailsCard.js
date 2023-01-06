import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import Theme from "../utils/globalTheme";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const FreightDetailsCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.code}>Frete - {item.code}</Text>
      <View style={styles.div}>
        <Text style={styles.boldText}>Detalhes: </Text>
        <Text style={styles.normalText}>{item.description}</Text>
        <Text style={styles.normalText}>Valor: R$ {item.value}</Text>
        <View style={styles.pointsRow}>
          <Text style={styles.normalText}>Pontuação: {item.points} </Text>
          <FontAwesome5 name="coins" size={17} color={Theme.Black} />
        </View>
      </View>
      <View style={styles.div}>
        <Text style={styles.boldText}>Dados da coleta</Text>
        <Text style={styles.normalText}>Data: {item.date}</Text>
        <Text style={styles.normalText}>Endereço de coleta:</Text>
        <Text style={styles.normalText}>Rua Firmiano Osório, nº 33,</Text>
        <Text style={styles.normalText}>Casa - Bairro Caiu do Céu</Text>
        <Text style={styles.normalText}>
          {item.origin} - 95520-000 - Brasil
        </Text>
      </View>
      <View style={styles.div}>
        <Text style={styles.boldText}>Dados da entrega</Text>
        <Text style={styles.normalText}>Data: {item.deadline}</Text>
        <Text style={styles.normalText}>Endereço de entrega:</Text>
        <Text style={styles.normalText}>Rua Irmão José Otão, nº 355,</Text>
        <Text style={styles.normalText}>Apto 404 - Bairro Independência</Text>
        <Text style={styles.normalText}>
          {item.destiny} - 90035-060 - Brasil
        </Text>
      </View>
      <View style={styles.div}>
        <Text style={styles.boldText}>Mercadoria:</Text>
        <Text style={styles.normalText}>
          Tipo de caminhã0: {item.truckType}
        </Text>
        <Text style={styles.normalText}>Peso bruto: {item.grossWeight} Kg</Text>
        <Text style={styles.normalText}>
          Valor de mercadoria: R$ {item.commodityValue}
        </Text>
        <Text style={styles.normalText}>
          Aduana de cruze: {item.customHouse}
        </Text>
      </View>
    </View>
  );
};

export default FreightDetailsCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Theme.White,
    width: (94 / 100) * screenWidth,
    height: 0.7 * screenHeight,
    elevation: 5,
    borderRadius: 10,
    shadowColor: Theme.ShadowColor,
    shadowOffset: { width: 2.8, height: 2.8 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    justifyContent: "center",
    marginHorizontal: 12,
    marginVertical: 12,
    paddingLeft: 10,
  },
  code: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 30,
    alignSelf: "center",
  },
  pointsRow: {
    flexDirection: "row",
  },
  boldText: {
    fontSize: 23,
    fontWeight: "600",
  },
  normalText: {
    fontSize: 19,
    fontWeight: "500",
    marginLeft: 5,
  },
  div: {
    borderTopColor: Theme.ShadowColor,
    borderTopWidth: 1,
    paddingVertical: 10,
  },
});
