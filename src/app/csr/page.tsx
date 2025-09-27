"use client";
import { useEffect, useState } from "react";
import styles from "@/styles/pages.module.css";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default function CSRPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1 className={styles.pageTitle}>Client Side Rendering</h1>
            {loading ? <p>Загрузка...</p> : (
                <ul className={styles.cardList}>
                    {posts.map((p: Post) => (
                        <li key={p.id} className={styles.card}>
                            <h2 className={styles.cardTitle}>{p.title}</h2>
                            <p>{p.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

