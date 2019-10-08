import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import ArticleScreen from "../screens/ArticleScreen";
import Colors from "../constants/Colors";
import TopicsScreen from "../screens/TopicsScreen";
import TopicsArticlesScreen from "../screens/TopicsArticlesScreen";

const TopicNavigator = createStackNavigator(
  {
    Topics: {
      screen: TopicsScreen
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
      headerTintColor: Platform.OS === "android" ? "white" : Colors.mainColor
    }
  }
);

export default createAppContainer(TopicNavigator);
