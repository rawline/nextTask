"use client";
import { useState } from "react";
import Modal from "@/components/Modal";
import styles from "@/styles/home.module.css";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Главная страница</h1>
      <p className={styles.description}>
        Здесь вы можете протестировать разные виды рендеринга
      </p>

      <button onClick={() => setOpen(true)} className={styles.button}>
        Открыть модалку
      </button>

      <Modal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
