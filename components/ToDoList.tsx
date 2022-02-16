import React, { useState, useEffect } from "react";
import classes from "./ToDoList.module.scss";
//import { PlusOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import ToDoCard from "./ToDoCard";
import AddForm from "./AddForm";
import { useStore } from "../database/UserInformation";
function ToDoList() {
  const { Search } = Input;
  const { todos } = useStore();
  const [activate, setActivate] = useState<boolean>();
  function funcHandler(truthy: boolean) {
    setActivate(truthy);
  }

  return (
    <div className={classes.content}>
      <div className={classes.filter}>
        <AddForm func={funcHandler} />
      </div>
      <div>
        <ToDoCard />
      </div>
      <div style={{ marginTop: "20px" }}></div>
    </div>
  );
}

export default ToDoList;
