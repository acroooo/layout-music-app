import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function App() {
  // Layouts
  // Flex

  return (
    <ScrollView style={styles.container}>
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
        <Text style={styles.titulo2}>Éxitos recomendados</Text>
        <View>
          <Image style={styles.mejores} source={require("./img/img6.jpg")} />
        </View>
        <View>
          <Image style={styles.mejores} source={require("./img/img7.jpg")} />
        </View>
        <View>
          <Image style={styles.mejores} source={require("./img/img8.jpg")} />
        </View>
        <View>
          <Image style={styles.mejores} source={require("./img/img9.jpg")} />
        </View>
        <View>
          <Image style={styles.mejores} source={require("./img/img10.jpg")} />
        </View>
      </View>
      <Text style={styles.titulo2}>Lo más escuchado</Text>
      <View style={styles.listado}>
        <View style={styles.listadoitem}>
          <Image style={styles.buscados} source={require("./img/img11.jpg")} />
        </View>
        <View style={styles.listadoitem}>
          <Image style={styles.buscados} source={require("./img/img12.jpg")} />
        </View>
        <View style={styles.listadoitem}>
          <Image style={styles.buscados} source={require("./img/img13.jpg")} />
        </View>
        <View style={styles.listadoitem}>
          <Image style={styles.buscados} source={require("./img/img14.jpg")} />
        </View>
      </View>
    </ScrollView>
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
  titulo2: {
    marginTop: 30,
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
  mejores: {
    marginTop: 30,
    height: 350,
    width: "100%",
    marginBottom: 10,
  },
  buscados: {
    marginTop: 30,
    height: 200,
    width: "100%",
  },
  listado: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  listadoitem: {
    flexBasis: "49%",
  },
});
