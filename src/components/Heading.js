import React from "react";
import { Text, StyleSheet } from "react-native";

const Heading = () => {
    return (
        <Text style={styles.heading}>Registre-se</Text>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 20
    }
});

export default Heading;