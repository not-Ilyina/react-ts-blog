"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import ArticleInfo from "./componets/article_info";
import ArticleSummary from "./componets/article_summary";


export default function Home() {
  const [articleInfoList, setArticleInfoList] = useState<ArticleInfoItem[]>([]);

  useEffect(() => {
    axios.get('api/article/list').then((res) => {
        setArticleInfoList(res.data.data || []);
    });
  }, []);

  return (
    <div className={styles.main}>
        <div className={styles.header}>
          <ArticleSummary {...articleInfoList[2]} />
        </div>
        <div>
          {(articleInfoList || []).map(i => {
            return <ArticleInfo key={i.id} {...i} />
          })}
        </div>
    </div>
  );
}
