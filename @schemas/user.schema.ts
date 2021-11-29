export type IUser = {
  name: string;
  username: string;
  email: string;
  role: UserRole;
};

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}
