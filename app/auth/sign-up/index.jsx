import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { TouchableOpacity, ImageBackground } from "react-native";
import { Colors } from "../../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { FIREBASE_AUTH } from "../../../config/FirebaseConfig";
import { NotifyMessage } from "../../../utils/utils";

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullName, setFullName] = useState();
  const [loading, setLoading] = useState();

  //   const auth = FIREBASE_AUTH;

  const OnCreateAccount = () => {
    // if (!email || !password || !fullName) {
    //   NotifyMessage("Please fill all the fields!");
    //   return;
    // }
    // setLoading(true);
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     console.log(user);
    router.replace("/home");
    //   })
    //   .catch((error) => {
    //     console.log(error.message, error.code);
    //     NotifyMessage("Error: " + error.message);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  };

  return (
    // <StatusBar translucent backgroundColor="transparent" />

    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/pancakes.jpeg")}
        resizeMode="cover"
        style={styles.imageContainer}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#720058" />
        </TouchableOpacity>

        <Text style={styles.headerText}>Create New Account</Text>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Full Name"
              placeholderTextColor="#a0a0a0"
              onChangeText={(val) => setFullName(val)}
            />
          </View>

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
              style={styles.createAccountButton}
              onPress={OnCreateAccount}
            >
              <Text style={styles.createAccountButtonText}>Create Account</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => router.replace("auth/sign-in")}
          >
            <Text style={styles.signInButtonText}>Sign In</Text>
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
  backButton: {
    position: "absolute",
    marginTop: 20,
    left: 25,
  },
  headerContainer: {
    marginTop: 20,
  },
  headerText: {
    fontFamily: "OutfitBold",
    fontSize: 32,
    marginTop: 10,
    marginLeft: 10,
    color: Colors.PURPLE,
    fontWeight: "bold",
  },
  subHeaderText: {
    fontFamily: "Outfit",
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
    color: Colors.YELLOW,
  },
  formContainer: {
    borderRadius: 10,
    padding: 60,
    marginTop: 150,
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputLabel: {
    fontFamily: "Outfit",
    marginBottom: 5,
    color: Colors.PURPLE,
    fontWeight: "bold",
  },
  input: {
    padding: 15,
    borderRadius: 15,
    fontFamily: "Outfit",
    borderColor: Colors.PURPLE,
    borderWidth: 1,
    backgroundColor: "white",
  },
  signInButton: {
    backgroundColor: Colors.YELLOW,
    borderRadius: 15,
    padding: 15,
    marginTop: 20,
  },
  signInButtonText: {
    color: Colors.PURPLE,
    textAlign: "center",
    fontFamily: "OutfitBold",
    fontSize: 16,
  },
  createAccountButton: {
    backgroundColor: Colors.PURPLE,
    borderRadius: 15,
    padding: 15,
    marginTop: 15,
  },
  createAccountButtonText: {
    textAlign: "center",
    fontFamily: "Outfit",
    fontSize: 16,
    color: Colors.YELLOW,
  },
});
