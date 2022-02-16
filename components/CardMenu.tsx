import React from "react";
import { Menu, Dropdown, Button, Space } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { useStore } from "../database/UserInformation";
import { useRouter } from "next/router";
interface id {
  id: string;
}
const CardMenu: React.FC<id> = (props) => {
  const { addTodo, removeTodo, toggleCompletedState, todos } = useStore();
  const router = useRouter();
  const menu = (
    <Menu>
      <Menu.Item key={0}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            router.push({
              pathname: "[id]",
              query: {
                id: props.id,
              },
            });
          }}
        >
          Edit
        </a>
      </Menu.Item>
      <Menu.Item key={1}>
        <a target="_blank" rel="noopener noreferrer" onClick={deleteHandler}>
          Delete
        </a>
      </Menu.Item>
    </Menu>
  );

  function deleteHandler() {
    removeTodo(props.id);
  }

  return (
    <Space direction="vertical">
      <Dropdown overlay={menu} placement="bottomCenter" trigger={["click"]}>
        <SettingOutlined style={{ fontSize: "1.3rem" }} />
      </Dropdown>
    </Space>
  );
};

export default CardMenu;
