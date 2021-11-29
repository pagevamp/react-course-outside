import * as React from 'react';

export interface IFooterProps {
  children?: React.ReactNode;
}

export function Footer({ children }: IFooterProps) {
  return <div className="flex flex-col flex-1 flex-grow left-0 right-0 top-0 p-3 bg-purple-900">{children}</div>;
}
