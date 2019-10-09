import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { TOPICS } from "../data/fake-data";

const TopicsArticlesScreen = props => {
  const topicId = props.navigation.getParam("topicId");

  const targetTopic = TOPICS.find(topic => topic.id === topicId);

  return (
    <View style={styles.screen}>
      <Text style={styles.textTest}>The Topics Articles Screen!</Text>
      <Text style={styles.textTest}>{targetTopic.topicName}</Text>
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
