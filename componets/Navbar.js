import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/blogs">Blog</Link>
      {/* <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link> */}
    </nav>
  );
}
