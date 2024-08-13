"use client";
import Link from "next/link";
import style from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }
  return data;
};
const Comments = ({ postSlug }) => {
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    try {
      await fetch("http://localhost:3000/api/comments", {
        method: "POST",
        body: JSON.stringify({ desc, postSlug }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      mutate();
      setDesc("");
    } catch (error) {
      console.error("Failed to send comment:", error);
    }
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={style.write}>
          <textarea
            placeholder="write a comment"
            className={style.input}
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
          <button className={style.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={style.comments}>
        {isLoading
          ? "loading"
          : data?.map((item) => (
              <div className={style.comment} key={item.id}>
                <div className={style.user}>
                  {item?.user?.image && (
                    <Image
                      src={item.user.image}
                      alt=""
                      width={50}
                      height={50}
                      className={style.image}
                    />
                  )}
                  <div className={style.userInfo}>
                    <span className={style.username}>{item.user.name}</span>
                    <span className={style.date}>{item.createdAt}</span>
                  </div>
                </div>
                <p className={style.desc}>{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
