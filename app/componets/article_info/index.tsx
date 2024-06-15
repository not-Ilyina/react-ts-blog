import { HeartFilled, EyeFilled, StarFilled } from "@ant-design/icons";
import styles from './index.module.css';
import { formatDate } from "@/app/utils/format_date";
import { useRouter } from "next/navigation";
const ArticleInfo: React.FC<ArticleInfoItem> = props => {
    const {
        id,
        title,
        sub_title,
        like,
        read,
        collection,
        author,
        mtime,
        img,
    } = props;

    const createQueryString = (name: string, value: string) => {
        const params = new URLSearchParams();
        params.set(name, value);
        return params.toString();
      };

    const router = useRouter();
    const handleTitleClick = (id: number) => {
        router.push('pages/article' + '?' + createQueryString("id", '' + id));
    }
    return (
        <div className={styles.root}>
            <img width={200} height={160} src={"iylna.jpg"} alt="123" />
            <div className={styles.article_info_text}>
                <div>{formatDate(mtime)}</div>
                <a className={styles.title} onClick={() => handleTitleClick(id)}>{title}</a>
                <div>{sub_title}</div>
                <div>
                    <span className={styles.action_item}>
                        <HeartFilled /> { like }
                    </span>
                    <span className={styles.action_item}>
                        <EyeFilled /> { read }
                    </span>
                    <span className={styles.action_item}>
                        <StarFilled /> { collection }
                    </span>
                    <span>
                        {author}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ArticleInfo;
