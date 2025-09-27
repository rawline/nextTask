"use client";
import { useState } from "react";
import styles from "@/styles/modal.module.css";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin", "cyrillic"],
    weight: ["400", "500", "700"],
});

export default function Modal({ open, onClose }: { open: boolean; onClose: () => void }) {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState<File | null>(null);

    if (!open) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        if (file) formData.append("file", file);

        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: formData,
        });

        if (res.ok) {
            alert("Данные успешно отправлены!");
            setTitle("");
            setFile(null);
            onClose();
        }
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2 className={styles.title}>Форма</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type="text"
                        placeholder="Название"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className={`${styles.input} ${inter.className}`}
                        required
                    />
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                        className={`${styles.input} ${inter.className}`}
                    />
                    <div className={styles.actions}>
                        <button
                            type="button"
                            onClick={onClose}
                            className={`${styles.button} ${styles.cancel} ${inter.className}`}
                        >
                            Отмена
                        </button>
                        <button
                            type="submit"
                            className={`${styles.button} ${styles.submit} ${inter.className}`}
                        >
                            Отправить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
