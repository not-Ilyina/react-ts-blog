import { formatDate } from "@/app/utils/format_date";
import styles from './index.module.css';

const ArticleSummary: React.FC<Partial<ArticleInfoItem>> = props => {
    const {
        mtime,
        title,
        sub_title,
    } = props

    return (
        <div className={styles.root}>
            <div className={styles.time}>
                {formatDate(mtime || new Date())}
            </div>
            <a className={styles.title} href="http://localhost:3000/about">{title}</a>
            <div className={styles.sub_title}>
                { sub_title }
            </div>
        </div>
    );
}

export default ArticleSummary;