import React from "react";
import { View, Image, StyleSheet } from "react-native";

import Colors from "../constants/Colors";

const PDFScreen = props => {
  return (
    <View style={styles.screen}>
      <Image
        source={require("../assets/pdf-example.jpeg")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: Colors.mainColor
  },
  textPDF: {
    fontFamily: "rough-typewriter-itl-bold",
    fontSize: 35,
    color: "white"
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

export default PDFScreen;
