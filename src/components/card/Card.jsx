import Link from "next/link";
import style from "./card.module.css";
import Image from "next/image";
const Card = () => {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <Image src="/photo.jpeg" alt="" fill className={style.image} />
      </div>
      <div className={style.textContainer}>
        <div className="detail">
          <span className={style.date}>11.02.2024</span>
          <span className={style.category}>study</span>
        </div>
        <Link href={"/"}>
          <h1>Lorem ipsun sit </h1>
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
