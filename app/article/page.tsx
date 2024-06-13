"use client";

import axios from "axios";
import { usePathname, useSearchParams } from "next/navigation";
// import axios from "axios";

import { useEffect, useState } from "react";
import { formatDate } from "../utils/format_date";
export default function Article() {
    const [articleInfo, setArticleInfo] = useState<ArticleInfoItem>({} as ArticleInfoItem);
    const searchParams = useSearchParams()
    const id = searchParams.get('id');
    useEffect(() => {
        axios.get('api/article', {
            params: {
                id,
            },
        }).then((res) => {
            setArticleInfo(res.data.data);
        });
        // console.log(searchParams.get('id'));
    }, []);

    return (
        <div>
            <h1>{articleInfo.title}</h1>
            <div>
                <span>{formatDate(articleInfo.mtime)}</span>
                <span>评论 {0}</span>
                <span>阅读 { articleInfo.read }</span>
                <span>点赞 { articleInfo.like }</span>
                <span>收藏 { articleInfo.collection }</span>
            </div>
            <div>
                文章内容。。。。。。
            </div>
        </div>
    );
}
