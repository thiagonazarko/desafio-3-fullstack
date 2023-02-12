import { IContact } from "../contact";

export interface IUserRequest {
  username: string;
  password: string;
  full_name: string;
  contacts: IContact[];
}

export interface IUserUpdate {
  full_name: string;
}

export interface IUserLogin {
  username: string;
  password: string;
}
