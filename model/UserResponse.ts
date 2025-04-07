import { User } from "./User";

export interface UserResponse {
  message: string;
  access_token?: string;
  refresh_token?: string;
  user?: User;
}
