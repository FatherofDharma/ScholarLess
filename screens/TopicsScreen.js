import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground
} from "react-native";

import { TOPICS } from "../data/fake-data";
import TopicGridComponent from "../components/TopicGridComponent";
import Colors from "../constants/Colors";

const TopicsScreen = props => {
  const renderTopicGridItem = itemData => {
    return (
      <TopicGridComponent
        topicName={itemData.item.topicName}
        color={itemData.item.color}
        onTarget={() => {
          props.navigation.navigate({
            routeName: "TopicsArticles",
            params: {
              topicId: itemData.item.id
            }
          });
        }}
      />
    );
  };

  return (
    <ImageBackground
      source={require("../assets/old-writing-background.jpg")}
      style={{ width: "100%", height: "100%" }}
    >
      <FlatList
        data={TOPICS}
        keyExtractor={(item, index) => item.id}
        renderItem={renderTopicGridItem}
        numColumns={2}
      />
    </ImageBackground>
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
  listBackground: {
    backgroundColor: Colors.backgroundColor
  }
});

export default TopicsScreen;
