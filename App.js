import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function App() {
  // Layouts
  // Flex

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image style={styles.bg} source={require("./img/bg.jpg")} />
      </View>
      <View style={styles.contenedorTexto}>
        <Text style={styles.titulo}>Buenos días</Text>
        <Text style={styles.subtitulo}>Tus mañanas comienzan bien arriba</Text>
        <ScrollView horizontal>
          <View>
            <Image
              style={styles.tapadisco}
              source={require("./img/img1.jpg")}
            />
          </View>
          <View>
            <Image
              style={styles.tapadisco}
              source={require("./img/img2.jpg")}
            />
          </View>
          <View>
            <Image
              style={styles.tapadisco}
              source={require("./img/img3.jpg")}
            />
          </View>
          <View>
            <Image
              style={styles.tapadisco}
              source={require("./img/img4.jpg")}
            />
          </View>
          <View>
            <Image
              style={styles.tapadisco}
              source={require("./img/img5.jpg")}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    height: 250,
    flex: 1,
  },
  banner: {
    flexDirection: "row",
    borderBottomColor: "#1DB954",
    borderWidth: 2,
  },
  container: {
    backgroundColor: "#000000",
    flex: 1,
  },
  titulo: {
    color: "#1DB954",
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitulo: {
    color: "#1DB954",
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  contenedorTexto: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  tapadisco: {
    height: 250,
    width: 300,
    marginRight: 20,
  },
});
