"use client";

import {  useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";
import { formatDate } from "../../utils/format_date";
import { MarkdownRenderer } from "@/app/componets/markdown";
import request from "@/app/utils/request";
import styles from './index.module.css';

export default function Article() {
    const [articleInfo, setArticleInfo] = useState<ArticleInfoItem>({} as ArticleInfoItem);
    const searchParams = useSearchParams()
    const id = searchParams.get('id');
    useEffect(() => {
        request.get('/api/article', {
            params: {
                id,
            },
        }).then((res) => {
            setArticleInfo(res.data.data);
        });
    }, []);

    return (
        <div className={styles.root}>
            <h1>{articleInfo.title}</h1>
            <div>
                <span>{formatDate(articleInfo.mtime)}</span>
                <span>评论 {0}</span>
                <span>阅读 { articleInfo.read }</span>
                <span>点赞 { articleInfo.like }</span>
                <span>收藏 { articleInfo.collection }</span>
            </div>
            <div>
                <MarkdownRenderer>{ articleInfo.content }</MarkdownRenderer>
            </div>
        </div>
    );
}
