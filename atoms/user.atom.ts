import { IUser } from '@schemas/user.schema';
import { atom } from 'recoil';

export const hostState = atom({
  key: 'hostUser',
  default: {
    name: 'Prios Shrestha',
  } as IUser,
});
