import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";

import api from "../../../services/api";

import Loading from "../../../components/Loading";
import FreightCard from "../../../components/FreightCard";

const Freights = () => {
  const [freights, setFreights] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getFreights = async () => {
      setLoading(true);
      try {
        const response = await api.get("/freights/all");
        setFreights(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getFreights();
  }, []);

  return loading ? (
    <Loading visible={loading} />
  ) : (
    <View style={styles.screen}>
      <ScrollView>
        {freights.map((freight) => (
          <TouchableOpacity key={freight.id}>
            <FreightCard>
              <Text style={styles.freightTitle}>{freight.code}</Text>
              <Text>{freight.description}</Text>
              <Text>R$ {freight.value}</Text>
            </FreightCard>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Freights;
