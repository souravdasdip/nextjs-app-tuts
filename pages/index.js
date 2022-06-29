import Head from 'next/head';
import Link from 'next/link';
import Layout from '../componets/Layout';
import styles from '../styles/Layout.module.css';

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.title}>
        Welcome to <a href="/">Home!</a>
      </h1>

      <div className={styles.grid}>
        <Link href="/blogs">
          <div className={styles.card}>
            <h3>Blogs &rarr;</h3>
            <p>Find Blogs</p>
          </div>
        </Link>

        <Link href="/users">
          <div className={styles.card}>
            <h3>Users &rarr;</h3>
            <p>View users!</p>
          </div>
        </Link>

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
