import React from "react";
import { Platform } from "react-native";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground
} from "react-native";

import Colors from "../constants/Colors";
import { ARTICLES, TOPICS } from "../data/fake-data";
import ArticleListItem from "../components/ArticleListItem";

const TopicsArticlesScreen = props => {
  const renderArticleItem = itemData => {
    return (
      <ArticleListItem
        title={itemData.item.title}
        author={itemData.item.author}
        journal={itemData.item.journal}
        publishDate={itemData.item.publishDate}
        onTargetArticle={() => {
          props.navigation.navigate({
            routeName: "Article",
            params: {
              articleId: itemData.item.id
            }
          });
        }}
      />
    );
  };

  const localTopicId = props.navigation.getParam("topicId");

  const showArticles = ARTICLES.filter(
    article => article.topicId.indexOf(localTopicId) >= 0
  );

  return (
    <View style={styles.screen}>
      <ImageBackground
        source={require("../assets/old-writing-background.jpg")}
        style={styles.imageBackground}
      >
        <FlatList
          data={showArticles}
          keyExtractor={(item, index) => item.id}
          renderItem={renderArticleItem}
          style={styles.list}
        />
      </ImageBackground>
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
  imageBackground: {
    width: "100%",
    height: "100%"
  },
  list: {
    width: "100%"
  },
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
