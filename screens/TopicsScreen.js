import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";

import { TOPICS } from "../data/fake-data";
import TopicGridComponent from "../components/TopicGridComponent";

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
    <FlatList
      data={TOPICS}
      keyExtractor={(item, index) => item.id}
      renderItem={renderTopicGridItem}
      numColumns={2}
    />
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
  }
});

export default TopicsScreen;
