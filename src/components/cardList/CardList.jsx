import Image from "next/image";
import Pagination from "../pagination/Pagination";
import style from "./cardlist.module.css";
import Card from "../card/Card";
const CardList = () => {
  return (
    <div className={style.container}>
      <div className={style.layout}>
        <h1 className={style.title}>Recent Posts</h1>
        <Pagination />
      </div>
      <div className={style.posts}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardList;
