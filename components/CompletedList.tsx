import React from "react";
import classes from "./CompletedList.module.scss";
import { Input, Progress } from "antd";
import CompletedCard from "./CompletedCard";
import { useStore } from "../database/UserInformation";

type Props = {};

function CompletedList({}: Props) {
  const { todos } = useStore();
  const total = todos?.length!;
  const toDos = (
    (todos?.filter((item: any) => item.completed !== false).length / total) *
    100
  ).toFixed(2);
  return (
    <div className={classes.content}>
      <div className={classes.search}></div>
      <CompletedCard />
    </div>
  );
}

export default CompletedList;
