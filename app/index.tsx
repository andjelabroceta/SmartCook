import { View, Text } from "react-native";
import React from "react";
import { Redirect } from "expo-router";
import Login from "@/components/custom/Login";

export default function Index() {
  // const auth = FIREBASE_AUTH;
  // const user = auth.currentUser
  const user = undefined;
  console.log(user);

  return (
    <View style={{ flex: 1 }}>
      {user ? <Redirect href={"./home"} /> : <Login />}
    </View>
  );
}
