import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ImageBackground
} from "react-native";

import Colors from "../constants/Colors";

const ArticleListItem = props => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.articleItem}>
      <TouchableComponent onPress={props.onTargetArticle}>
        <View>
          <View style={styles.articleRow}>
            <Text style={styles.titleText}>{props.title}</Text>
          </View>
          <View style={styles.articleRow} />
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  articleItem: {
    height: 100,
    width: "100%",
    backgroundColor: Colors.secondaryColor,
    marginTop: 20,
    padding: 10,
    borderRadius: 10
  },
  articleRow: {
    flexDirection: "row"
  },
  titleText: {
    color: "white",
    fontFamily: "rough-typewriter"
  }
});

export default ArticleListItem;
