import style from "./blogpage.module.css";
import CardList from "../../components/cardList/CardList";
const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { category } = searchParams;
  return (
    <div className={style.container}>
      <h1 className={style.title}>{category} Blog</h1>
      <div className={style.content}>
        <CardList page={page} category={category} />
      </div>
    </div>
  );
};

export default BlogPage;
