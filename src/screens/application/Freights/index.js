import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Button } from "react-native";
import styles from "./styles";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import api from "../../../services/api";

import Loading from "../../../components/Loading";
import FreightCard from "../../../components/FreightCard";
import FreightFilterButton from "../../../components/FreightFilterButton";

const Freights = () => {
  const [freights, setFreights] = useState();
  const [loading, setLoading] = useState(true);

  const getFreights = async () => {
    try {
      const data = await api.get("/freights/all").then((res) => {
        setFreights(res.data);
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFreights();
  }, []);

  return loading ? (
    <Loading visible={loading} />
  ) : (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <FreightFilterButton
          title="Nacional"
          onPress={() => {
            console.log("Nacional");
          }}
        />
        <FreightFilterButton
          title="Internacional"
          onPress={() => {
            console.log("Internacional");
          }}
        />
      </View>
      <ScrollView>
        {freights.map((freight) => (
          <TouchableOpacity key={freight.id}>
            <FreightCard>
              <Text style={styles.freightTitle}>{freight.code}</Text>
              <Text>Valor: R$ {freight.value}</Text>
              <View style={{ flexDirection: "row" }}>
                <Text>Pontos: </Text>
                <Text>{freight.points} </Text>
                <FontAwesome5 name="coins" size={15} />
              </View>
              <Text>Origem: {freight.origin}</Text>
              <Text>Destino: {freight.destiny}</Text>
              <Text>Data de coleta: {freight.date}</Text>
              <Text>Data de entrega: {freight.deadline}</Text>
            </FreightCard>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Freights;
