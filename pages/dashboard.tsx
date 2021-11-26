import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from 'styles/Home.module.scss';
import UserDetails from '../components/UserDetails';

const Home: NextPage = () => {
  const [user, setUser] = useState('');
  const mystyle = {
    color: 'black',
    backgroundColor: '#D3D3D3',
    margin: '10px',
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard Page</title>
        <meta name="dashboard" content="Dashboard Page" />
      </Head>
      <label htmlFor="user">Select User: </label>
      <select
        style={mystyle}
        className="input-user"
        value={user}
        onChange={(e) => {
          const selectedUser = e.target.value;
          setUser(selectedUser);
        }}
      >
        <option value="" disabled selected hidden>
          Choose user
        </option>
        <option value="Admin">Admin</option>
        <option value="Priya">Priya</option>
        <option value="Riya">Riya</option>
      </select>
      {<UserDetails name={user} />}
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome {user}</h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
