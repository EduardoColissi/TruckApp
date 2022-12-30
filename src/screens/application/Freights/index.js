import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

import api from "../../../services/api";

import Loading from "../../../components/Loading";
import FreightCard from "../../../components/FreightCard";

function Freights() {
  const [freights, setFreights] = useState();
  const [loading, setLoading] = useState(false);

  const getFreights = async () => {
    // setLoading(true);
    try {
      const response = await api.get("/freights/all");
      setFreights(response.data);
    } catch (error) {
      console.log(error);
    }
    // setLoading(false);
  };

  console.log(freights, "aaaa");

  return loading ? (
    <Loading visible={loading} />
  ) : (
    <View style={styles.screen}>
      <FreightCard>
        <Text style={styles.freightTitle}>Frete - 01</Text>
      </FreightCard>
    </View>
  );
}

export default Freights;
