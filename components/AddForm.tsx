import React, { useState, useRef, useEffect } from "react";
import { Modal, Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Radio } from "antd";
import { v4 as uuidv4 } from "uuid";
import { useStore } from "../database/UserInformation";

interface prop {
  func: (truthy: boolean) => void;
}
const AddForm: React.FC<prop> = (props) => {
  const { addTodo, removeTodo, toggleCompletedState, todos } = useStore();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const textInputRef = useRef<HTMLInputElement>(null);
  const [color, setColor] = useState<string>("");
  const [activate, setActivate] = useState<boolean>(false);

  const handleOk = () => {
    if (textInputRef.current?.value !== "" && color !== "") {
      const v = {
        id: uuidv4(),
        description: textInputRef.current?.value,
        color: color,
        completed: false,
      };
      addTodo(v);
    }
    setActivate(!activate);
    setIsModalVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function radioHandler(e: any) {
    setColor(e.target.value);
  }
  console.log(todos);
  return (
    <>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        danger
        size="large"
        onClick={showModal}
      >
        Add goal
      </Button>
      <Modal
        title="Add goal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Description:</p>
        <input type="text" ref={textInputRef} />
        <br />
        <p>Color:</p>
        <Radio.Group onChange={radioHandler} defaultValue="a">
          <Radio.Button
            value="#00B4DB,#0083B0"
            style={{ backgroundImage: `linear-gradient(#00B4DB,#0083B0)` }}
          >
            1
          </Radio.Button>
          <Radio.Button
            value="#a8ff78,#78ffd6"
            style={{ backgroundImage: `linear-gradient(#a8ff78,#78ffd6)` }}
          >
            2
          </Radio.Button>
          <Radio.Button
            value="#DA4453,#89216B"
            style={{ backgroundImage: `linear-gradient(#DA4453,#89216B` }}
          >
            3
          </Radio.Button>
          <Radio.Button
            value="#7F00FF,#E100FF"
            style={{ backgroundImage: `linear-gradient(#7F00FF,#E100FF)` }}
          >
            4
          </Radio.Button>
          <Radio.Button
            value="#2C3E50,#FD746C"
            style={{ backgroundImage: `linear-gradient(#2C3E50,#FD746C)` }}
          >
            5
          </Radio.Button>
          <Radio.Button
            value="#FFAFBD,#ffc3a0"
            style={{ backgroundImage: `linear-gradient(#FFAFBD,#ffc3a0)` }}
          >
            6
          </Radio.Button>
          <Radio.Button
            value="#603813,#b29f94"
            style={{ backgroundImage: `linear-gradient(#603813,#b29f94)` }}
          >
            7
          </Radio.Button>
          <Radio.Button
            value="#8e9eab,#eef2f3"
            style={{ backgroundImage: `linear-gradient(#8e9eab,#eef2f3)` }}
          >
            8
          </Radio.Button>
          <Radio.Button
            value="#F09819,#EDDE5D"
            style={{ backgroundImage: `linear-gradient(#F09819,#EDDE5D)` }}
          >
            9
          </Radio.Button>
          <Radio.Button
            value="#acb6e5,#86fde8"
            style={{ backgroundImage: `linear-gradient(#acb6e5,#86fde8)` }}
          >
            10
          </Radio.Button>
        </Radio.Group>
      </Modal>
    </>
  );
};

export default AddForm;
