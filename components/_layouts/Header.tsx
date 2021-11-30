import * as React from 'react';
import { IUser } from 'schemas/user.schema';
import { useContext, useState } from 'react';
import { notificationContext } from '@/contextProviders/notifications/notification.context';
import { func } from 'prop-types';

export interface IHeaderProps {
  children?: React.ReactNode;
  user: IUser;
}

export default function Header({ children, user }: IHeaderProps) {
  const { setNotifications, notifications } = useContext(notificationContext);

  const [count, setCount] = useState(1);

  function increaseCounter() {
    setCount(count + 1);

    setNotifications(notifications.concat(['Hello from ' + count]));
  }

  return (
    <div className="px-4  py-1">
      <span className="mr-12">Welcome, {user.name}</span>

      <button onClick={increaseCounter}> CLick Me</button>
      {children}
    </div>
  );
}
