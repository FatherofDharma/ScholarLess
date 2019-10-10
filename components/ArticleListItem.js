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
          <ImageBackground
            source={require("../assets/book.jpg")}
            style={styles.imageBackground}
          >
            <View style={{ ...styles.articleRowTop, ...styles.articleHeader }}>
              <Text style={{ ...styles.text, ...styles.title }}>
                Title: {props.title}
              </Text>
            </View>
            <View style={{ ...styles.articleRowTop, ...styles.articleAuthor }}>
              <Text style={styles.text}>Written by: {props.author}</Text>
            </View>
            <View
              style={{
                ...styles.articleRow,
                ...styles.ArticleDescription
              }}
            >
              <Text style={styles.text} numberOfLines={2}>
                Published in: {props.journal} on {props.publishDate}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  articleDescription: {
    height: "30%",
    paddingHorizontal: 5,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10
  },
  articleAuthor: {
    height: "30%",
    paddingVertical: 10
  },
  articleHeader: {
    height: "40%",
    paddingVertical: 10
  },
  articleItem: {
    height: 150,
    width: "100%",
    backgroundColor: Colors.backgroundColor,
    marginTop: 5,
    padding: 10,
    borderRadius: 10
  },
  articleRow: {
    flexDirection: "row"
  },
  imageBackground: {
    width: "100%",
    height: "100%"
  },
  text: {
    color: "white",
    fontFamily: "rough-typewriter"
  },
  title: {
    fontSize: 15
  }
});

export default ArticleListItem;
