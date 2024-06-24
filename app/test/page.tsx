"use client";

import axios from "axios";
import { useEffect, } from "react";

export default function Article() {
    // JSOP 解决跨域问题
    // 只能用于 get 方法
    useEffect(() => {
        axios.get('http://localhost:5000/test').then((res) => {
            console.log('res', res);
        })
        const script = document.createElement('script');
        script.src = 'http://localhost:5000/callback?callback=handleResponse';
        document.body.insertBefore(script, document.body.firstChild);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    
    return (
        <div>
            JSONP 测试页面
            <script>
            {`
                function handleResponse(data) {
                    console.log(data);
                }
            `}
            </script>
        </div>
    );
}
