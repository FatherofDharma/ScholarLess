import React from "react";
import { Platform } from "react-native";
import { View, StyleSheet, Text, FlatList } from "react-native";

import Colors from "../constants/Colors";
import { ARTICLES, TOPICS } from "../data/fake-data";

const TopicsArticlesScreen = props => {
  const renderArticleItem = itemData => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    );
  };

  const localTopicId = props.navigation.getParam("topicId");

  const showArticles = ARTICLES.filter(
    article => article.topicId.indexOf(localTopicId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={showArticles}
        keyExtractor={(item, index) => item.id}
        renderItem={renderArticleItem}
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
