import Layout from '../../componets/Layout';
import Link from 'next/link';
import styles from '../../styles/Blogs.module.css';

const Blogs = () => {
  return (
    <Layout>
      <h1>Blogs</h1>
      <Link href={'/blogs/learn-javascript'}>
        <div className={styles.blogItem}>
          <h3>How to learn JavaScript in 2022?</h3>
        </div>
      </Link>
      <Link href={'/blogs/learn-react'}>
        <div className={styles.blogItem}>
          <h3>How to learn React in 2022?</h3>
        </div>
      </Link>
      <Link href={'/blogs/learn-next'}>
        <div className={styles.blogItem}>
          <h3>How to learn Next in 2022?</h3>
        </div>
      </Link>
    </Layout>
  );
};

export default Blogs;
