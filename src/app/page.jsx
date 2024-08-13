import CardList from "../components/cardList/CardList";
import CategoryList from "../components/category/CategoryList";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <div className="">
      <CategoryList />
      <CardList page={page} />
    </div>
  );
}
