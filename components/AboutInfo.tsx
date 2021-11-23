import { useEffect } from 'react';

type IProps = {
  name: string;
  desc: string;
  id: number;
};

export default function AboutInfo({ name, desc, id }: IProps) {
  useEffect(() => {
    console.log(`My id is : ${id}`);
    if (id === 1) {
      document.body.classList.add('is-admin');
    }

    return () => {
      document.body.classList.remove('is-admin');
    };
  }, [id]);

  useEffect(() => {
    console.log(`My name is : ${name}`);
    console.log(`Desc: ${desc}`);
  }, [name, desc]);

  return (
    <>
      <h1>We are currently running react JS with {name}!</h1>
      <p>{desc}</p>
    </>
  );
}
