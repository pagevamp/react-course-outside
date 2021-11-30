import { FC, useContext, useState } from 'react';
import { IUser } from 'schemas/user.schema';
import { notificationContext } from '@/contextProviders/notifications/notification.context';

type IProps = {
  user: IUser;
};
export const SideBar: FC<IProps> = ({ user }: IProps) => {
  const { notifications } = useContext(notificationContext);

  return (
    <aside className="px-0 bg-indigo-500 w-1/8">
      <UserAvatar user={user} />
      <UserInfo user={user} />

      <table>
        <tbody>
          {notifications.map((n) => {
            return (
              <tr key={n}>
                <td>{n}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </aside>
  );
};

const UserAvatar = ({ user }: IProps) => {
  return <span className="text-white border-2 border-red-50">{user.email}</span>;
};

const UserInfo = ({ user }: IProps) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>Name:</td>
          <td>{user.name}</td>
        </tr>

        <tr>
          <td>Email:</td>
          <td>{user.email}</td>
        </tr>

        <tr>
          <td>Role:</td>
          <td>{user.role}</td>
        </tr>
      </tbody>
    </table>
  );
};
