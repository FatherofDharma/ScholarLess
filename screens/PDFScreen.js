import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/Colors";

const PDFScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.textPDF}>The Pdf Screen</Text>
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
  }
});

export default PDFScreen;
