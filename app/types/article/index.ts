interface ArticleInfoItem {
    id: number;
    title: string;
    sub_title: string;
    like: number;
    read: number;
    collection: number;
    img: string;
    author: string;
    mtime: Date;
}

interface ArticleInfoList {
    data: ArticleInfoItem[]; 
};