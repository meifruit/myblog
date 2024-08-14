import Image from "next/image";
import style from "./singlepage.module.css";
import Comments from "../../../components/comments/Comments";
import { format } from "date-fns"; // You can use date-fns or a similar library for date formatting.

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch post data");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);

  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <div className={style.textContainer}>
          <h1 className={style.title}>{data?.title}</h1>
          <div className={style.user}>
            <div className={style.userImageContainer}>
              {data?.user?.image && (
                <Image
                  src={data.user.image}
                  alt="User avatar"
                  fill
                  className={style.avatar}
                />
              )}
            </div>
            <div className={style.userTextContainer}>
              <span className={style.username}>{data?.user?.name}</span>
              <span className={style.date}>
                <span className={style.date}>01.01.2024</span>
              </span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={style.imageContainer}>
            <Image
              src={data.img}
              alt="Post image"
              fill
              className={style.image}
            />
          </div>
        )}
      </div>
      <div className={style.content}>
        <div className={style.post}>
          <div className={style.description}>
            <p>{data?.desc}</p>
          </div>
          <div className={style.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
