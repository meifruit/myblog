import style from "./pagination.module.css";
import { EastOutlined, WestOutlined } from "@mui/icons-material";
const Pagination = () => {
  return (
    <div className={style.container}>
      <button className={style.buttonleft}>
        <WestOutlined />
      </button>
      <button className={style.buttonright}>
        <EastOutlined />
      </button>
    </div>
  );
};

export default Pagination;
