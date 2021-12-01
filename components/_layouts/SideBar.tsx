import { FC } from 'react';
import Image from 'next/image';

export const SideBar: FC = () => {
  return (
    <aside className="flex flex-col px-0 bg-indigo-500 w-1/6 text-center">
      <div className="mt-2">
        <Image src="/icon-192x192.png" alt="user-avatar" width={80} height={80} className="rounded-full" />
        <h3 className="mt-1 text-white">John Doe</h3>
      </div>

      <nav className="mt-1 flex flex-col items-center">
        <a href="#" className="mt-1 py-1 w-1/2 text-white border-2 rounded-xl">
          Home
        </a>
        <a href="#" className="mt-1 py-1 w-1/2 text-white border-2 rounded-xl">
          About
        </a>
        <a href="#" className="mt-1 py-1 w-1/2 text-white border-2 rounded-xl">
          Features
        </a>
        <a href="#" className="mt-1 py-1 w-1/2 text-white border-2 rounded-xl">
          Pricing
        </a>
      </nav>

      <a href="#" className="border-t-2 pt-2 mt-2 text-white text-xl">
        Logout
      </a>
    </aside>
  );
};
