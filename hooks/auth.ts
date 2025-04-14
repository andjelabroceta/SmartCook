import { UserResponse } from "@/model/UserResponse";
import { UserRequest } from "@/model/UserRequest";
import axios from "axios";
import { CreateUserRequest } from "@/model/CreateUserRequest";
import { CreateUserResponse } from "@/model/CreateUserResponse";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LogoutResponse } from "@/model/LogoutResponse";
import api from "./interceptor";

const PREFIX = `/auth/`;

export const signIn = async (
  email: string,
  password: string
): Promise<UserResponse> => {
  try {
    const body: UserRequest = {
      email,
      password,
    };
    const response = await api.post<UserResponse>(PREFIX + "login", body);
    return response.data;
  } catch (error: any) {
    // console.log("Error while login:", error.response?.data || error.message);
    throw { ...(error.response?.data || error.message) };
  }
};

export const signUp = async (
  email: string,
  password: string,
  username: string
): Promise<CreateUserResponse> => {
  try {
    const body: CreateUserRequest = {
      email,
      password,
      username,
    };
    const response = await api.post<CreateUserResponse>(
      PREFIX + "sign-up",
      body
    );
    return response.data;
  } catch (error: any) {
    // console.log("Error while login:", error.response?.data || error.message);
    throw { ...(error.response?.data || error.message) };
  }
};

export const logout = async (): Promise<LogoutResponse> => {
  try {
    const response = await api.get(PREFIX + "logout");
    await AsyncStorage.removeItem("auth");
    return response.data;
  } catch (error: any) {
    throw { ...(error.response?.data || error.message) };
  }
};

export const getUser = async () => {
  try {
    const stringUser = await AsyncStorage.getItem("auth");
    if (stringUser !== null) {
      const parsedUser = JSON.parse(stringUser);
      return parsedUser;
    } else {
      console.log("No user found!");
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};
