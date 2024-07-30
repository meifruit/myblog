import CardList from "../components/CardList";
import CategoryList from "../components/CategoryList";
import Dashboard from "../components/Dashboard";
import Featured from "../components/Featured";

export default function Home() {
  return (
    <div className="lg:w-full flex gap-6">
      <div className="min-h-screen hidden xl:block w-[20%]">
        <Dashboard />
      </div>
      <div className="w-full lg:w-[70%]">
        <Featured />
        <CategoryList />
        <CardList />
      </div>
    </div>
  );
}
