import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
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
      </main>

      <footer className={styles.footer}>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Copright@<b>2022</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
