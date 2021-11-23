import { ReactNode } from 'react';

type IProps = {
  children: ReactNode;
  navbar?: ReactNode;
};

// This layout should be left empty and not be edited
export default function DefaultLayout({ children, navbar }: IProps) {
  return (
    <>
      {navbar || null}
      <div id="DefaultLayout">{children}</div>
    </>
  );
}
