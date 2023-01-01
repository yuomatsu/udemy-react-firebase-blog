import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import "./Home.scss";
import { db } from "../firebase";
import { getAuth } from "firebase/auth";

type postList = {
  id: string;
  author: { username: string; id: string };
  postText: string;
  title: string;
  timestamp: string;
};
type postID = string;

const Home = () => {
  // TODO: anyをやめたい
  const [postList, setPostList] = useState<postList[] | any>([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const handleDelete = async (id: postID) => {
    await deleteDoc(doc(db, "posts", id));
    setPostList(postList.filter((post: { id: string }) => post.id !== id));
  };

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
              {post.author.id === getAuth().currentUser?.uid && (
                <button onClick={() => handleDelete(post.id)}>削除</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
