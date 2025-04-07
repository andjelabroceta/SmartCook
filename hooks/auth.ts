import { UserResponse } from "@/model/UserResponse";
import { UserRequest } from "@/model/UserRequest";
import axios from "axios";
import { CreateUserRequest } from "@/model/CreateUserRequest";
import { CreateUserResponse } from "@/model/CreateUserResponse";

const API_URL = `${process.env.EXPO_PUBLIC_API_URL}/auth/`;

export const signIn = async (
  email: string,
  password: string
): Promise<UserResponse> => {
  console.log(API_URL + "login");
  try {
    const body: UserRequest = {
      email,
      password,
    };
    const response = await axios.post<UserResponse>(API_URL + "login", body);
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
  console.log(API_URL + "sign-up");
  try {
    const body: CreateUserRequest = {
      email,
      password,
      username,
    };
    const response = await axios.post<CreateUserResponse>(
      API_URL + "sign-up",
      body
    );
    return response.data;
  } catch (error: any) {
    // console.log("Error while login:", error.response?.data || error.message);
    throw { ...(error.response?.data || error.message) };
  }
};
