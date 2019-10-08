import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ArticleScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.textTest}>The Topics Articles Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textTest: {
    fontFamily: "rough-typewriter-itl-bold",
    fontSize: 20
  }
});

export default ArticleScreen;
