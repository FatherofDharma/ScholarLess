import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TopicsArticlesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Topics Articles Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default TopicsArticlesScreen;
