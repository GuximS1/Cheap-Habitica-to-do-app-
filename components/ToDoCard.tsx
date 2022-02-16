import React, { useEffect, useState } from "react";
import { List, Avatar } from "antd";
import classes from "./ToDoList.module.scss";
import { CheckCircleOutlined } from "@ant-design/icons";
import CardMenu from "./CardMenu";
import { useStore } from "../database/UserInformation";

const ToDoCard = () => {
  const { toggleCompletedState, todos, setTodos } = useStore();
  useEffect(() => {
    const data1 = localStorage.getItem("my-data");
    if (data1) {
      setTodos(JSON.parse(data1));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    localStorage.setItem("my-data", JSON.stringify(todos));
    console.log("1");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  function toDoCompleted(id: string) {
    toggleCompletedState(id);
  }

  return (
    <List
      itemLayout="horizontal"
      dataSource={todos?.filter((item) => item.completed !== true)}
      style={{ paddingBottom: "20px" }}
      renderItem={(item) => (
        <List.Item
          className={classes.cards}
          style={{ backgroundImage: `linear-gradient(${item.color})` }}
        >
          <CheckCircleOutlined
            className={classes.checkmark}
            onClick={toDoCompleted.bind(null, item.id)}
          />
          <List.Item.Meta
            className={classes.singlecard}
            title={item.description}
          />
          <div style={{ marginBottom: "45px", marginRight: "10px" }}>
            <CardMenu id={item.id} />
          </div>
        </List.Item>
      )}
    />
  );
};

export default ToDoCard;
