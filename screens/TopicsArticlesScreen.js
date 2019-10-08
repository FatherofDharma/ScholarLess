import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TopicsArticlesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.textTest}>The Topics Articles Screen!</Text>
      <Button
        title="Go to a specific Article"
        onPress={() => {
          props.navigation.navigate({ routeName: "Article" });
        }}
      />
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

export default TopicsArticlesScreen;
