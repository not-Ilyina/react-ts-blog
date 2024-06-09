"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";


export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <h1>App</h1>
      <button onClick={() => router.push('/about')}>About</button>
    </main>
  );
}
