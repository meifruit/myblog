import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="h-full">
      <div className="flex flex-col gap-2 mb-2 items-center">
        <Link href={"/"}>
          <span className="text-sm font-light capitalize">title</span>
        </Link>
        <Link href={"/"}>
          <span className="text-sm font-light capitalize">title</span>
        </Link>
        <Link href={"/"}>
          <span className="text-sm font-light capitalize">title</span>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
