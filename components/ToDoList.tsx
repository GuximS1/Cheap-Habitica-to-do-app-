import React, { useState, useEffect } from "react";
import classes from "./ToDoList.module.scss";
//import { PlusOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import ToDoCard from "./ToDoCard";
import { Modal, Progress } from "antd";
import AddForm from "./AddForm";
import { useStore } from "../database/UserInformation";
function ToDoList() {
  const { Search } = Input;
  const { todos } = useStore();
  const [activate, setActivate] = useState<boolean>();
  function funcHandler(truthy: boolean) {
    setActivate(truthy);
  }
  const total = todos?.length!;
  const toDos = (
    (todos?.filter((item: any) => item.completed === false).length / total) *
    100
  ).toFixed(2);

  return (
    <div className={classes.content}>
      <div className={classes.filter}>
        <AddForm func={funcHandler} />
      </div>
      <div style={{ color: "black" }}>
        <ToDoCard />
      </div>
      <div style={{ marginTop: "20px" }}></div>
    </div>
  );
}

export default ToDoList;
