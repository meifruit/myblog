import style from "./blogpage.module.css";
import CardList from "../../components/cardList/CardList";
const BlogPage = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Style Blog</h1>
      <div className={style.content}>
        <CardList />
      </div>
    </div>
  );
};

export default BlogPage;
