import Image from "next/image";
import style from "./singlepage.module.css";
import Comments from "../../../components/comments/Comments";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
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
                  alt=""
                  fill
                  className={style.avatar}
                />
              )}
            </div>
            <div className={style.userTextContainer}>
              <span className={style.username}>{data?.user.name}</span>
              <span className={style.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={style.imageContainer}>
            <Image src={data.img} alt="" fill className={style.image} />
          </div>
        )}
      </div>
      <div className={style.content}>
        <div className={style.post}>
          <div
            className={style.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />

          <div className={style.comment}>
            <Comments />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
