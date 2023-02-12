import { IContact } from "../contact";

export interface IClientRequest {
  full_name: string;
  contacts: IContact[];
}

export interface IClientUpdate {
  full_name: string;
}
