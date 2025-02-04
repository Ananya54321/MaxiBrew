import { View, Text, StyleSheet } from "react-native";
import React from "react";

const explore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contact Us</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    backgroundColor: "white",
    fontSize: 30,
  },
});

export default explore;
