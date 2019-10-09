import React from "react";
import { Platform } from "react-native";
import { View, Text, StyleSheet, Button } from "react-native";

import Colors from "../constants/Colors";
import { TOPICS } from "../data/fake-data";

const TopicsArticlesScreen = props => {
  const localTopicId = props.navigation.getParam("topicId");

  const targetTopic = TOPICS.find(topic => topic.id === localTopicId);

  return (
    <View style={styles.screen}>
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

TopicsArticlesScreen.navigationOptions = navigationData => {
  const localTopicId = navigationData.navigation.getParam("topicId");

  const targetTopic = TOPICS.find(topic => topic.id === localTopicId);

  return {
    headerTitle: targetTopic.topicName,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.mainColor : ""
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.mainColor,
    headerTitleStyle: {
      fontFamily: "rough-typewriter-itl-bold",
      fontWeight: "200",
      fontSize: 20,
      alignContent: "center"
    }
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textTest: {
    fontFamily: "rough-typewriter",
    fontSize: 20
  }
});

export default TopicsArticlesScreen;
