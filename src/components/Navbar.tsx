import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/">ホーム</Link>
      <Link to="/createpost">記事投稿</Link>
      <Link to="/login">ログイン</Link>
    </nav>
  );
};

export default Navbar;
