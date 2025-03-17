import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  return (
    <View style={{ width: "100%" }}>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "OutfitBold",
          textAlign: "center",
          marginTop: "20%",
          marginBottom: 20,
        }}
      >
        Logo
      </Text>
      <Image
        source={require("@/assets/images/adaptive-icon.png")}
        style={{ width: "100%", height: 400 }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "OutfitBold",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          You give us ingredients We give you best recipes
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("./auth/sign-in")}
        >
          <Text
            style={{
              color: Colors.light.background,
              textAlign: "center",
              fontFamily: "OutfitBold",
              fontSize: 16,
            }}
          >
            Let's start
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => router.push("./auth/sign-up")}
        >
          <Text style={styles.signInButtonText}>Create new account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
  },
  signInButton: {
    borderRadius: 25,
    padding: 15,
    marginTop: 10,
  },
  signInButtonText: {
    color: Colors.light.text,
    textAlign: "center",
    fontFamily: "OutfitBold",
    fontSize: 16,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.light.tint,
    borderRadius: 10,
    marginTop: "5%",
  },
});
