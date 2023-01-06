import React, { useState, useCallback } from "react";
import { ScrollView, Text, SafeAreaView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import api from "../../../services/api";

import Loading from "../../../components/Loading";
import FreightDetailsCard from "../../../components/FreigthDetailsCard";

const FreightDetails = ({ route }) => {
  const { id } = route.params;

  const [freight, setFreight] = useState();
  const [loading, setLoading] = useState(true);

  const getFreightById = async () => {
    try {
      const data = await api.get(`/freights/all/freight/${id}`).then((res) => {
        setFreight(res.data);
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useFocusEffect(() => {
    getFreightById();
  });

  if (loading) {
    return <Loading visible={loading} />;
  } else if (freight != undefined) {
    return (
      <SafeAreaView>
        <ScrollView>
          <FreightDetailsCard item={freight} />
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return <Text>Frete não encontrado</Text>;
  }
};

export default FreightDetails;
