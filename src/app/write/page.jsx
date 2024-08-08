"use client";
import Image from "next/image";
import style from "./writepage.module.css";
import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.bubble.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={style.container}>
      <input type="text" placeholder="Title" className={style.input} />
      <div className={style.editor}>
        <button className={style.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={style.add}>
            <button className={style.addButton}>
              <Image src="/image.png" alt="" width={16} height={16} />
            </button>
            <button className={style.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={style.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={style.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story"
        />
      </div>
      <button className={style.publish}>Publish</button>
    </div>
  );
};

export default WritePage;
