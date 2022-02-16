import React, { useState, useEffect } from "react";
import { List, Avatar } from "antd";
import classes from "./ToDoList.module.scss";
import { MinusCircleOutlined } from "@ant-design/icons";
import { useStore } from "../database/UserInformation";
const CompletedCard = () => {
  const { addTodo, removeTodo, toggleCompletedState, todos } = useStore();
  function removeItem(id: string) {
    removeTodo(id);
  }
  return (
    <List
      itemLayout="horizontal"
      dataSource={todos?.filter((item) => item.completed == true)}
      style={{ paddingBottom: "20px" }}
      renderItem={(item) => (
        <List.Item
          className={classes.cards}
          style={{ backgroundColor: "yellow" }}
        >
          <MinusCircleOutlined
            className={classes.minus}
            onClick={removeItem.bind(null, item.id)}
          />
          <List.Item.Meta
            className={classes.singlecard}
            title={item.description}
          />
        </List.Item>
      )}
    />
  );
};

export default CompletedCard;
