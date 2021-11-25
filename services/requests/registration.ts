import { postPromise } from 'services/requests/request';

type IRegistrationData = {
  name: string;
  username: string;
  email: string;
  password: string;
  confirm_password: string;
};

export function registerUser(data: IRegistrationData) {
  return postPromise('/register', data);
}
