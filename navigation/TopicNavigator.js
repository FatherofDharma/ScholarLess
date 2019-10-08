import React from "react";
import { Platform, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import ArticleScreen from "../screens/ArticleScreen";
import Colors from "../constants/Colors";
import TopicsScreen from "../screens/TopicsScreen";
import TopicsArticlesScreen from "../screens/TopicsArticlesScreen";

const TopicNavigator = createStackNavigator(
  {
    Topics: {
      screen: TopicsScreen,
      navigationOptions: {
        title: "Topics"
      }
    },
    TopicsArticles: {
      screen: TopicsArticlesScreen
    },
    Article: {
      screen: ArticleScreen
    }
  },
  {
    mode: "modal",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.mainColor : ""
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.mainColor,
      headerTitleStyle: {
        fontFamily: "rough-typewriter-itl-bold",
        fontWeight: "200",
        fontSize: 40,
        alignContent: "center"
      }
    }
  }
);

export default createAppContainer(TopicNavigator);
