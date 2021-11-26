import { useEffect } from 'react';
type UserProps = {
  name: string;
};

export default function UserDetails({ name }: UserProps) {
  useEffect(() => {
    if (name === 'Admin') {
      document.body.classList.add('is-admin');
    }

    return () => {
      document.body.classList.remove('is-admin');
    };
  }, [name]);

  return (
    <>
      <h1 style={{ float: 'right' }}>Active User: {name}</h1>
    </>
  );
}
