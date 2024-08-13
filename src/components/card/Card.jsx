import Link from "next/link";
import style from "./card.module.css";
import Image from "next/image";
const Card = ({ key, item }) => {
  return (
    <div className={style.container} key={key}>
      <div className={style.imageContainer}>
        {item.img && (
          <Image src={item.img} alt="" fill className={style.image} />
        )}
      </div>
      <div className={style.textContainer}>
        <div className="detail">
          <span className={style.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={style.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title} </h1>
        </Link>
        <p className={style.desc}>{item.desc.substring(0, 60)}</p>
        <Link href={`/posts/${item.slug}`} className={style.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
