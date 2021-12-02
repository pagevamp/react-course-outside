import { postPromise } from 'services/requests/request';
import { IUser } from 'schemas/user.schema';

type ILoginRequest = Pick<IUser, 'email'> & {
  password: string;
};

export function login(data: ILoginRequest): Promise<IUser | false> {
  return postPromise(`/login`, data);
}
