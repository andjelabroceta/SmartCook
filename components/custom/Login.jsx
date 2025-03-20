import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { createThemedStyles, useTheme } from "@/utils/ThemeProvider";

export default function Login() {
  const router = useRouter();
  const { dark, colors, setScheme } = useTheme();
  const { width } = Dimensions.get("window"); // sirina ekrana
  // const styles = useStyles();
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/illustrations/logo3.png")}
        style={{ width: width }}
        resizeMode="contain"
      />
      <ImageBackground
        source={require("../../assets/images/food1.jpeg")}
        resizeMode="cover"
        style={styles.imageContainer}
      >
        <View style={styles.centralParentContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Cook smarter than ever!</Text>
          </View>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => router.push("./auth/sign-in")}
          >
            <Text style={styles.startButtonText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => router.push("./auth/sign-up")}
          >
            <Text style={styles.signInButtonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.TURQUOISE,
  },
  imageContainer: {
    flex: 1,
  },
  centralParentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    //borderRadius: 60,
    backgroundColor: Colors.PURPLE,
    opacity: 0.8,
  },
  headerText: {
    fontSize: 26,
    fontFamily: "OutfitBold",
    textAlign: "center",
    margin: 20,
    color: Colors.YELLOW,
    opacity: 1,
  },
  startButton: {
    padding: 15,
    backgroundColor: Colors.YELLOW,
    borderRadius: 10,
    marginTop: 10,
  },
  startButtonText: {
    color: Colors.PURPLE,
    textAlign: "center",
    fontFamily: "OutfitBold",
    fontSize: 24,
  },
  signInButton: {
    borderRadius: 10,
    padding: 15,
    backgroundColor: Colors.PURPLE,
    marginTop: 10,
  },
  signInButtonText: {
    color: Colors.YELLOW,
    textAlign: "center",
    fontFamily: "OutfitBold",
    fontSize: 24,
  },
});
