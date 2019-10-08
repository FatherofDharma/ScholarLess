import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ArticleScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.textTest}>The Article Screen!</Text>
    </View>
  );
};

// ArticleScreen.navigationOptions = {
//   headerTitle: "Article Title",
//   headerTitleStyle: {
//     fontFamily: "rough-typewriter-itl-bold"
//   }
// };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textTest: {
    fontFamily: "rough-typewriter-itl-bold",
    fontSize: 20
  }
});

export default ArticleScreen;
