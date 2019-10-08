import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import * as Font from "expo-font";
import { AppLoading } from "expo";
import TopicNavigator from "./navigation/TopicNavigator";

const fetchFonts = () => {
  return Font.loadAsync({
    "rough-typewriter": require("./assets/fonts/rough_typewriter.otf"),
    "rough-typewriter-itl-bold": require("./assets/fonts/rough_typewriter-bld-itl.otf"),
    "rough-typewriter-itl": require("./assets/fonts/rough_typewriter-itl.otf")
  });
};

export default function App() {
  const [loadedFont, setLoadedFont] = useState(false);

  if (!loadedFont) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setLoadedFont(true)}
      />
    );
  }
  return <TopicNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  textTest: {
    fontFamily: "rough-typewriter-itl-bold",
    fontSize: 20
  }
});
