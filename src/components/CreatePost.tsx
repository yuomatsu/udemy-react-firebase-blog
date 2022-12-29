import React from "react";
import "./CreatePost.scss";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { getAuth } from 'firebase/auth'
import { useNavigate } from "react-router";

const CreatePost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const createPost = async () => {
    const docRef = await addDoc(collection(db, "posts"), {
      title: title,
      postText: postText,
      author: {
        username: getAuth().currentUser?.displayName,
        id: getAuth().currentUser?.uid,
      }
    });
    console.log("Document written with ID: ", docRef.id);
    navigate("/");
  };

  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>記事を投稿する</h1>
        <div className="inputPost">
          <div>タイトル</div>
          <input
            type="text"
            placeholder="タイトルを記入"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputPost">
          <div>投稿</div>
          <textarea
            placeholder="記事内容を記入"
            onChange={(e) => setPostText(e.target.value)}
          ></textarea>
        </div>
        <button className="postButton" onClick={createPost}>
          投稿する
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
