import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Colors } from "../../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
// import {
//   createUserWithEmailAndPassword,
//   getRedirectResult,
//   signInWithEmailAndPassword,
//   signInWithRedirect,
// } from "firebase/auth";
import { NotifyMessage } from "../../../utils/utils";

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState();

  //   const auth = FIREBASE_AUTH;

  const OnCreateAccount = () => {
    //     if (!email || !password) {
    //       NotifyMessage("Please fill all the fields!");
    //       return;
    //     }
    //     setLoading(true);
    //     signInWithEmailAndPassword(auth, email, password)
    //       .then((userCredential) => {
    //         const user = userCredential.user;
    router.replace("/home");
    //       })
    //       .catch((error) => {
    //         NotifyMessage("Error: " + error.code);
    //       })
    //       .finally(() => {
    //         setLoading(false);
    //       });
  };

  return (
    <SafeAreaView style={styles.content}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Let's Sign You In</Text>
        <Text style={styles.subHeaderText}>Welcome Back</Text>
        <Text style={styles.subHeaderText}>You've been missed</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            placeholderTextColor="#a0a0a0"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(val) => setEmail(val)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Enter Password"
            placeholderTextColor="#a0a0a0"
            onChangeText={(val) => setPassword(val)}
          />
        </View>

        {loading ? (
          <ActivityIndicator color={Colors.PRIMARY}></ActivityIndicator>
        ) : (
          <TouchableOpacity
            style={styles.signInButton}
            onPress={OnCreateAccount}
          >
            <Text style={styles.signInButtonText}>Sign In</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => router.replace("auth/sign-up")}
        >
          <Text style={styles.createAccountButtonText}>Create account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 25,
    flex: 1,
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 25,
  },
  headerContainer: {
    marginBottom: 40,
  },
  headerText: {
    fontFamily: "OutfitBold",
    fontSize: 32,
    marginBottom: 10,
    marginTop: 10,
  },
  subHeaderText: {
    fontFamily: "Outfit",
    fontSize: 18,
  },
  formContainer: {
    borderRadius: 10,
    padding: 0,
    marginTop: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontFamily: "Outfit",
    marginBottom: 5,
  },
  input: {
    padding: 15,
    borderRadius: 10,
    fontFamily: "Outfit",
    borderColor: Colors.GRAY,
    borderWidth: 1,
  },
  signInButton: {
    backgroundColor: Colors.light.tint,
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
  },
  signInButtonText: {
    color: "white",
    textAlign: "center",
    fontFamily: "OutfitBold",
    fontSize: 16,
  },
  createAccountButton: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginTop: 15,
  },
  createAccountButtonText: {
    textAlign: "center",
    fontFamily: "Outfit",
    fontSize: 16,
  },
});
