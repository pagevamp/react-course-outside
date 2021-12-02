import React, { useContext } from 'react';
import { notificationContext } from '@/contextProviders/notifications/notification.context';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Notifications() {
  const { notifications, notify, color } = useContext(notificationContext);

  return (
    <>
      <div className={`absolute right-0 top-4 m-1 ${!notify ? 'hidden' : ''}`}>
        <div
          className={`flex items-center  border-l-4 border-grey-700 py-1 px-3 shadow-md mb-2`}
          style={{ backgroundColor: color }}
        >
          <div className="text-black mx-auto ">{notifications}</div>
        </div>
      </div>
    </>
  );
}
