import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TopicsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.textTest}>The Topics Screen!</Text>
      <Button
        title="Go to Articles in this Topic"
        onPress={() => {
          props.navigation.navigate({ routeName: "TopicsArticles" });
        }}
      />
    </View>
  );
};

TopicsScreen.navigationOptions = {
  headerTitle: "Topics"
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

export default TopicsScreen;
