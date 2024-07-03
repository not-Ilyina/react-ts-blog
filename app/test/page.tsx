"use client";

import axios from "axios";
import { useEffect, } from "react";

export default function Article() {
    // JSOP 解决跨域问题
    // 只能用于 get 方法
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'http://localhost:5000/callback?callback=handleResponse';
        document.body.insertBefore(script, document.body.firstChild);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleClick = () => {
        axios.get('http://localhost:5000/test1').then((res) => {
            console.log('res', res);
        })
    };

    const handleClickPost = () => {
        axios.post('http://localhost:5000/post', null, {
            headers: {
                'x-custom': 132,
            },
        }).then((res) => {
            console.log('res', res);
        })
    };
    
    return (
        <div>
            JSONP 测试页面
            <button onClick={handleClick}>发起跨域请求</button>
            <button onClick={handleClickPost}>发起跨域Post请求</button>
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
