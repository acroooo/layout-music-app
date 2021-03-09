import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  // Layouts
  // Flex

  return (
    <View style={styles.container}>
      <View style={styles.caja1}></View>
      <View style={styles.caja2}></View>
      <View style={styles.caja3}></View>
      <View style={styles.caja4}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cornflowerblue",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  caja1: {
    padding: 20,
    backgroundColor: "navy",
  },
  caja2: {
    padding: 20,
    backgroundColor: "yellow",
  },
  caja3: {
    padding: 20,
    backgroundColor: "green",
  },
  caja4: {
    padding: 20,
    backgroundColor: "teal",
  },
});
