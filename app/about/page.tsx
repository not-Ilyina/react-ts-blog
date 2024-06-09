"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function About() {

  useEffect(() => {
    axios.get('api/user/list').then((res) => {
      console.log(res.data);
    })
  }, []);
  const router = useRouter();
  return (
    <main>
      <h1>About</h1>
      <button onClick={() => router.push('/')}>About</button>
    </main>
  );
}
