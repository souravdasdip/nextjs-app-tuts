import Head from 'next/head';
import Layout from '../componets/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.title}>
        Welcome to <a href="/">Home!</a>
      </h1>

      <div className={styles.grid}>
        <a href="/" className={styles.card}>
          <h3>Blogs &rarr;</h3>
          <p>Find Blogs</p>
        </a>

        <a href="" className={styles.card}>
          <h3>Learn &rarr;</h3>
          <p>Lern things!</p>
        </a>

        <a href="/" className={styles.card}>
          <h3>Examples &rarr;</h3>
          <p>Discover examples.</p>
        </a>

        <a href="" className={styles.card}>
          <h3>Deploy &rarr;</h3>
          <p>Instantly deploy..</p>
        </a>
      </div>
    </Layout>
  );
}
