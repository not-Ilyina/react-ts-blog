"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import ArticleInfo from "./componets/article_info";
import ArticleSummary from "./componets/article_summary";
import { FormOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import request from "./utils/request";


export default function Home() {
  const [articleInfoList, setArticleInfoList] = useState<ArticleInfoItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    request.get('api/article/list').then((res) => {
      console.log(res.headers["set-cookie"], res.headers); // 跨域无法获取 cookie
      setArticleInfoList(res.data.data || []);
    });
  }, []);

  return (
    <div className={styles.main}>
        <div className={styles.header}>
          <ArticleSummary {...articleInfoList[2]} />
        </div>
        <FormOutlined onClick={() => router.push('pages/article/create')} width={100} height={100} />
        <div>
          {(articleInfoList || []).map(i => {
            return <ArticleInfo key={i.id} {...i} />
          })}
        </div>
    </div>
  );
}
