import Image from "next/image";
import Pagination from "../Pagination";
import style from "./cardlist.module.css";
import Card from "../card/Card";
const CardList = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Recent Posts</h1>
      <div className={style.posts}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
