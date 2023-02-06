export interface IUserCreate {
  email: string;
  password: string;
  name: string;
  phone: string;
}

export interface IUserRequest {
  email: string;
  password: string;
  name: string;
  phone: string;
  created_at: Date;
}

export interface IUser {
  id: string;
  email: string;
  password: string;
  name: string;
  phone: string;
  created_at: Date;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdate {
  email?: string;
  password?: string;
  name?: string;
  nickname?: string;
  birth_date?: string;
  img?: string;
}
