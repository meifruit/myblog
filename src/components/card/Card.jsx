import Link from "next/link";
import style from "./card.module.css";
import Image from "next/image";
const Card = ({ key, item }) => {
  return (
    <div className={style.container} key={key}>
      <div className={style.imageContainer}>
        <Image src="/photo.jpeg" alt="" fill className={style.image} />
      </div>
      <div className={style.textContainer}>
        <div className="detail">
          <span className={style.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={style.category}>{item.catSlug}</span>
        </div>
        <Link href={"/"}>
          <h1>{item.title} </h1>
        </Link>
        <p className={style.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit eligendi quae optio sint blanditiis sit ab? Eos rem id
          est labore eum, soluta placeat, dicta, vel ea dolorem sed vero.
        </p>
        <Link href={"/"} className={style.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
