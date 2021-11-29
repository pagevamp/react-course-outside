import * as React from 'react';

export interface IHeaderProps {
  children?: React.ReactNode;
}

export default function Header({ children }: IHeaderProps) {
  return <div className="px-4  py-1">{children}</div>;
}
