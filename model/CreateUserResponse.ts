import { User } from "./User";

export interface CreateUserResponse extends User {
  is_verified: boolean;
  created_at: string;
  updated_at: string;
}
