import Link from "next/link";
import styles from "@/styles/navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.linkList}>
                <Link href="/" className={styles.link}>Главная</Link>
                <Link href="/csr" className={styles.link}>CSR</Link>
                <Link href="/ssr" className={styles.link}>SSR</Link>
                <Link href="/ssg" className={styles.link}>SSG</Link>
                <Link href="/isr" className={styles.link}>ISR</Link>
            </ul>
        </nav>
    );
}
