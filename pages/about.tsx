import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from 'styles/Home.module.scss';
import { Icon } from '@iconify/react';

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h3>
        <Icon icon="mdi-light:info" color={'rebeccapurple'} style={{ fontSize: '24px' }} />
      </h3>
    </div>
  );
};

export default About;
