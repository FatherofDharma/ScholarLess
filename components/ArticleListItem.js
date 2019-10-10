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
          <View style={{ ...styles.articleRow, ...styles.articleHeader }}>
            <Text style={styles.text}>{props.title}</Text>
          </View>
          <View style={{ ...styles.articleRow, ...styles.ArticleDescription }}>
            <Text style={styles.text}>{props.author}</Text>
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  articleDescription: {
    height: "25%"
  },
  articleHeader: {
    height: "75%"
  },
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
  text: {
    color: "white",
    fontFamily: "rough-typewriter"
  }
});

export default ArticleListItem;
