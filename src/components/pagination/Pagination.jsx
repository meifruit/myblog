"use client";
import { useRouter } from "next/navigation";
import style from "./pagination.module.css";
import { EastOutlined, WestOutlined } from "@mui/icons-material";
const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();
  return (
    <div className={style.container}>
      <button
        className={style.buttonleft}
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        <WestOutlined />
      </button>
      <button
        className={style.buttonright}
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        <EastOutlined />
      </button>
    </div>
  );
};

export default Pagination;
