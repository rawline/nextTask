export const revalidate = 30; // пересборка каждые 30 секунд
import styles from "@/styles/pages.module.css";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default async function ISRPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const posts = await res.json();

    return (
        <div>
            <h1 className={styles.pageTitle}>Incremental Static Regeneration</h1>
            <ul className={styles.cardList}>
                {posts.map((p: Post) => (
                    <li key={p.id} className={styles.card}>
                        <h2 className={styles.cardTitle}>{p.title}</h2>
                        <p>{p.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
