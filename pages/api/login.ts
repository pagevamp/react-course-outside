import type { NextApiRequest, NextApiResponse } from 'next';

type IFailureResponse = {
  message: string;
};

type IUser = {
  email: string;
  name: string;
  age: number;
  avatar: string;
  password: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Omit<IUser, 'password'> | IFailureResponse>) {
  if (req.method === 'POST') {
    const userData = req.body as Pick<IUser, 'email' | 'password'>;

    if (userData.email === 'anit@outside.tech') {
      res.status(200).json({ name: 'Anit Shrestha', email: 'anit@outside.tech', age: 29, avatar: '' });
      return;
    }
    res.status(422).json({ message: 'Unable to login' });
  }

  // res.status(200).json({message: 'Wrong page!'});
}
