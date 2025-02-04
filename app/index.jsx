import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import adaptiveicon from "@/assets/images/adaptive-icon.png";
import { Link } from "expo-router";

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={adaptiveicon}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.text}>Welcome to Maxibrew</Text>
        <Link href="/menu" asChild>
          <Pressable style={styles.menuButton}>
            <Text style={styles.buttonText}>Menu</Text>
          </Pressable>
        </Link>
        <Link href="/contact" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  text: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 150,
  },
  button: {
    height: 55,
    width: 200,
    borderRadius: 8,
    backgroundColor: "#ff6b6b",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  menuButton: {
    height: 55,
    width: 200,
    borderRadius: 8,
    backgroundColor: "#6c5ce7",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 50,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
