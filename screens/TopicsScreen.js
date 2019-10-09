import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";

import { TOPICS } from "../data/fake-data";

const TopicsScreen = props => {
  const renderTopicGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.topicGridItem}
        onPress={() => {
          props.navigation.navigate({
            routeName: "TopicsArticles",
            params: {
              topicId: itemData.item.id
            }
          });
        }}
      >
        <View>
          <Text style={styles.textTest}>{itemData.item.topicName}</Text>
        </View>
      </TouchableOpacity>
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
  },
  textTest: {
    fontFamily: "rough-typewriter",
    fontSize: 20
  },
  topicGridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default TopicsScreen;
