import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback
} from "react-native";

const TopicGridComponent = props => {
  return (
    <TouchableOpacity style={styles.topicGridItem} onPress={props.onTarget}>
      <View
        style={{
          ...styles.topicContainer,
          ...{ backgroundColor: props.color }
        }}
      >
        <Text style={styles.textTest}>{props.topicName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textTest: {
    fontFamily: "rough-typewriter",
    fontSize: 20
  },
  topicGridItem: {
    flex: 1,
    margin: 15,
    height: 150
  },
  topicContainer: {
    flex: 1,
    borderRadius: 20,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 20,
    elevation: 3
  }
});

export default TopicGridComponent;
