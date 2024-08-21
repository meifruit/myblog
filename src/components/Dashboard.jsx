import Image from "next/image";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="mt-8 text-sm">
      <div className="flex flex-col gap-2 mb-2">
        <Link
          href={"/"}
          className="flex gap-3 items-center justify-center py-2"
        >
          <Image
            src={"/home.png"}
            alt={""}
            width={20}
            height={20}
            className="icon"
          />
          <span className="hidden lg:block text-sm font-light uppercase">
            home
          </span>
        </Link>
        <Link
          href={"/blog"}
          className="flex gap-3 items-center justify-center  py-2"
        >
          <Image
            src={"/blog.png"}
            alt={""}
            width={20}
            height={20}
            className="icon"
          />
          <span className="hidden lg:block text-sm font-light uppercase">
            blog
          </span>
        </Link>
        <Link
          href={"/"}
          className="flex gap-3 items-center justify-center py-2"
        >
          <Image
            src={"/forward.png"}
            alt={""}
            width={20}
            height={20}
            className="icon"
          />
          <span className="hidden lg:block text-sm font-light uppercase">
            video
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
