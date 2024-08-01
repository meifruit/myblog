import Image from "next/image";
import Link from "next/link";
import style from "./categorylist.module.css";
const CategoryList = () => {
  return (
    <div className="container">
      <h1 className="title ml-0 mr-0">Categories</h1>
      <div className="categories flex flex-wrap gap-3 justify-between">
        <Link
          href="/blog?cat=style"
          className={`${style.category} ${style.style}`}
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={style.image}
          />
          style
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${style.category} ${style.fashion}`}
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={style.image}
          />
          style
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${style.category} ${style.food}`}
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={style.image}
          />
          style
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${style.category} ${style.travel}`}
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={style.image}
          />
          style
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
