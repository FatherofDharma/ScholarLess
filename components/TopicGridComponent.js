import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback
} from "react-native";
import Colors from "../constants/Colors";

const TopicGridComponent = props => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.topicGridItem}>
      <TouchableComponent
        style={styles.touchableComponent}
        onPress={props.onTarget}
      >
        <View
          style={{
            ...styles.topicContainer,
            ...{ backgroundColor: props.color }
          }}
        >
          <Text style={styles.textTopic}>{props.topicName}</Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  touchableComponent: {
    flex: 1
  },
  textTopic: {
    fontFamily: "rough-typewriter",
    fontSize: 20,
    color: Colors.mainColor
  },
  topicGridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 20,
    overflow: "hidden"
  },
  topicContainer: {
    flex: 1,
    borderRadius: 20,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 20,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  }
});

export default TopicGridComponent;
