import React from "react";
import { View, Text, StyleSheet, Button, ImageBackground } from "react-native";

import { ARTICLES } from "../data/fake-data";
import Colors from "../constants/Colors";

const ArticleScreen = props => {
  const localArticleId = props.navigation.getParam("articleId");

  const targetArticle = ARTICLES.find(article => article.id === localArticleId);

  return (
    <View style={styles.screen}>
      <ImageBackground
        source={require("../assets/old-writing-background.jpg")}
        style={styles.imageBackground}
      >
        <View style={styles.button}>
          <Button
            title="View Article"
            style={{ color: "white" }}
            onPress={() => {
              props.navigation.navigate({ routeName: "PDF" });
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

ArticleScreen.navigationOptions = navigationData => {
  const localArticleId = navigationData.navigation.getParam("articleId");
  const targetArticle = ARTICLES.find(article => article.id === localArticleId);
  return {
    headerTitle: targetArticle.title
  };
};

const styles = StyleSheet.create({
  button: {
    borderStyle: "solid",
    borderWidth: 5,
    borderRadius: 15,
    borderColor: Colors.mainColor,
    alignSelf: "center",
    backgroundColor: "white",
    width: "80%"
  },
  screen: {
    flex: 1,
    justifyContent: "center"
    // alignItems: "center"
  },
  textTest: {
    fontFamily: "rough-typewriter-itl-bold",
    fontSize: 20,
    color: "white"
  },
  imageBackground: {
    height: "100%",
    width: "100%"
  }
});

export default ArticleScreen;
