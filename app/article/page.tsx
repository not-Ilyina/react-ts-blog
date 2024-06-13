"use client";

import { usePathname, useSearchParams } from "next/navigation";
// import axios from "axios";

import { useEffect } from "react";
export default function Article() {

    const searchParams = useSearchParams();
    useEffect(() => {
        // axios.get('api/user/list').then((res) => {
        //   console.log(res.data);
        // })
        console.log(searchParams.get('id'));
    }, []);

    return (
    <main>
        <h1>Article</h1>
    </main>
    );
}
