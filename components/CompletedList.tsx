import React from "react";
import classes from "./CompletedList.module.scss";
import { Input } from "antd";
import CompletedCard from "./CompletedCard";

type Props = {};

function CompletedList({}: Props) {
  const { Search } = Input;

  return (
    <div className={classes.content}>
      <div className={classes.search}></div>
      <CompletedCard />
    </div>
  );
}

export default CompletedList;
