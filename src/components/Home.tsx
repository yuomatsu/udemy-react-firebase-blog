import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import "./Home.scss";
import { db } from "../firebase";

type postList = {
  id: string;
  author: { username: string; id: string };
  postText: string;
  title: string;
  timestamp: string;
};

const Home = () => {
  // TODO: anyをやめたい
  const [postList, setPostList] = useState<postList[] | any>([]);
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      // const data2 = query(data, orderBy('timestamp', 'asc'));
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);
  return (
    <div className="homePage">
      {postList.map((post: postList) => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            {/* <div className="postTextContainer">{post.timestamp}</div> */}
            <div className="nameAndDeleteButton">
              <h3>@{post.author.username}</h3>
              <button>削除</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
