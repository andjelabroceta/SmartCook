import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import Login from "@/components/custom/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUser } from "@/hooks/auth";

export default function Index() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let userData = await getUser();
        setUser(userData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {user ? <Redirect href={"./home"} /> : <Login />}
    </View>
  );
}
