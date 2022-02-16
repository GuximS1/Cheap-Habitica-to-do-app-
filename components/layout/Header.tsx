import React from "react";
import Profile from "../Profile";
import classes from "./Header.module.scss";
type Props = {};

function Header({}: Props) {
  return (
    <header className={classes.header}>
      <Profile />
    </header>
  );
}

export default Header;
