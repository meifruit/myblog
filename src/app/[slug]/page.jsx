import Image from "next/image";
import style from "./singlepage.module.css";
import Comments from "../../components/comments/Comments";
const SinglePage = () => {
  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <div className={style.textContainer}>
          <h1 className={style.title}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
          <div className={style.user}>
            <div className={style.userImageContainer}>
              <Image src="/photo.jpeg" alt="" fill className={style.avatar} />
            </div>
            <div className={style.userTextContainer}>
              <span className={style.username}>John</span>
              <span className={style.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={style.imageContainer}>
          <Image src="/photo.jpeg" alt="" fill className={style.image} />
        </div>
      </div>
      <div className={style.content}>
        <div className={style.post}>
          <div className={style.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              reiciendis dolor perspiciatis distinctio, voluptas ad. Amet, alias
              aliquid? Laudantium, sint. Ipsum libero eius consequatur quod,
              magnam consectetur ipsam quisquam dignissimos!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              reiciendis dolor perspiciatis distinctio, voluptas ad. Amet, alias
              aliquid? Laudantium, sint. Ipsum libero eius consequatur quod,
              magnam consectetur ipsam quisquam dignissimos!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              reiciendis dolor perspiciatis distinctio, voluptas ad. Amet, alias
              aliquid? Laudantium, sint. Ipsum libero eius consequatur quod,
              magnam consectetur ipsam quisquam dignissimos!
            </p>
          </div>
          <div className={style.comment}>
            <Comments />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
