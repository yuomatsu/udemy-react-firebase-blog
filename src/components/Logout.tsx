import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

type Props = {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

const Logout = ({ setIsAuth }: Props) => {
  const navigate = useNavigate();
  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        localStorage["isAuth"] = false;
        setIsAuth(false);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <p>ログアウト</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};

export default Logout;
