import CardList from "../components/cardList/CardList";
import CategoryList from "../components/category/CategoryList";

export default function Home() {
  return (
    <div className="">
      <CategoryList />
      <CardList />
    </div>
  );
}
