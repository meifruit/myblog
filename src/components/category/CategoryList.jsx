import Image from "next/image";
import Link from "next/link";
import style from "./categorylist.module.css";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(
      `Failed to fetch categories: ${res.status} ${res.statusText}`
    );
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();
  return (
    <div className="container">
      <h1 className="title ml-0 mr-0 uppercase">Categories</h1>
      <div className="categories flex flex-wrap gap-3 justify-between">
        {data?.map((item) => (
          <Link
            href="/blog?cat=style"
            className={`${style.category} ${style[item.slug]}`}
            key={item.id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={style.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
