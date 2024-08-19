import Pagination from "../pagination/Pagination";
import style from "./cardlist.module.css";
import Card from "../card/Card";

const getData = async (page, category) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&category=${category || ""}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};
const CardList = async ({ page, category }) => {
  const { posts, count } = await getData(page, category);

  const POST_PER_PAGE = 3;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  return (
    <div className={style.container}>
      <div className={style.layout}>
        <h1 className={style.title}>Recent Posts</h1>
        <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
      </div>
      <div className={style.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
