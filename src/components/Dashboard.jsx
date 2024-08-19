import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="dashboard h-full bg-[#d5bdaf] flex flex-col justify-start items-center p-4 border-r-2 border-[#384256]">
      <div className="mb-8">MyBlog</div>
      <div className="flex flex-col gap-2 mb-2 items-center">
        <Link href={"/"}>
          <span className="text-sm font-light capitalize">home</span>
        </Link>
        <Link href={"/blog"}>
          <span className="text-sm font-light capitalize">blog</span>
        </Link>
        <Link href={"/"}>
          <span className="text-sm font-light capitalize">video</span>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
