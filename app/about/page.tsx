"use client";
import { useRouter } from "next/navigation";

export default function About() {

  const router = useRouter();
  return (
    <main>
      <h1>About</h1>
      <button onClick={() => router.push('/')}>About</button>
    </main>
  );
}
