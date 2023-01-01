import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

type Props = {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login = ({ setIsAuth }: Props) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider).then((result) => {
      localStorage["isAuth"] = true;
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  );
};

export default Login;
