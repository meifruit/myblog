import CardList from "../components/CardList";
import CategoryList from "../components/category/CategoryList";
import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    <div className="lg:w-full flex gap-6">
      <div className="min-h-screen hidden xl:block w-[20%]">
        <Dashboard />
      </div>
      <div className="w-full lg:w-[70%]">
        <CategoryList />
        <CardList />
      </div>
    </div>
  );
}
