import React from "react";
import { View, Text, StyleSheet } from "react-native";

import PDFReader from "rn-pdf-reader-js";
import Colors from "../constants/Colors";

const PDFScreen = props => {
  return (
    <View style={styles.screen}>
      <PDFReader
        source={{ uri: "file://../data/FelinePancreaticLipase.pdf" }}
        // source={{
        //   uri: "http://gahp.net/wp-content/uploads/2017/09/sample.pdf"
        // }}
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
  textTest: {
    fontFamily: "rough-typewriter-itl-bold",
    fontSize: 20
  }
});

export default PDFScreen;
