import React, { useState, useRef, useEffect } from "react";
import { Modal, Progress } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import classes from "./Profile.module.scss";
import "antd/dist/antd.css";
import { useStore } from "../database/UserInformation";

interface Props {
  photo: string;
  name: string;
  age: string;
  profession: string;
}

const Profile = () => {
  const [data, setData] = useState<any>();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const photoInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);
  const professionInputRef = useRef<HTMLInputElement>(null);

  const [activate, setActivate] = useState<boolean>(true);

  const [user, setUser] = useState<Props>({
    photo: "",
    name: "",
    age: "",
    profession: "",
  });
  const showModal = () => {
    setIsModalVisible(true);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const data1 = localStorage.getItem("my-data");
    if (data1) {
      setData(JSON.parse(data1));
    }
  });

  useEffect(() => {
    const data = localStorage.getItem("my_user_information");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, [activate]);

  const handleOk = () => {
    localStorage.setItem(
      "my_user_information",
      JSON.stringify({
        photo: photoInputRef.current?.value,
        name: nameInputRef.current?.value,
        age: ageInputRef.current?.value,
        profession: professionInputRef.current?.value,
      })
    );
    setActivate(!activate);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const total = data?.length!;
  const toDos = (
    (data?.filter((item: any) => item.completed === false).length / total) *
    100
  ).toFixed(2);
  const comp = (
    (data?.filter((item: any) => item.completed === true).length / total) *
    100
  ).toFixed(2);

  return (
    <div className={classes.content}>
      <PlusSquareOutlined
        style={{
          fontSize: "3rem",
          color: "white",
          cursor: "pointer",
        }}
        onClick={showModal}
      />
      <Modal
        title="Add Information"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <label htmlFor="photo">Photo url: </label>
        <input type="text" id="photo" ref={photoInputRef} />
        <br /> <br />
        <label htmlFor="nickname">Nickname:</label>
        <input type="text" id="nickname" ref={nameInputRef} />
        <br /> <br />
        <label htmlFor="age">Age: </label>
        <input type="text" id="age" ref={ageInputRef} />
        <br /> <br />
        <label htmlFor="profession">Profession:</label>
        <input type="text" id="profession" ref={professionInputRef} />
      </Modal>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={user.photo} alt="photo" className={classes.img} />
      <div className={classes.information}>
        <p>Name: {user.name}</p>
        <p>Age: {user.age} years old</p>
        <p>Profession: {user.profession}</p>
      </div>
      <div className={classes.progress}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p style={{ color: "lightgreen", fontSize: "1.5rem" }}>Completed</p>
          <Progress
            type="circle"
            strokeColor={{
              "0%": "#108ee9",
              "100%": "#87d068",
            }}
            format={() => <span style={{ color: "white" }}>{comp}%</span>}
            percent={parseInt(comp)}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p style={{ color: "red", fontSize: "1.5rem" }}>To go</p>
          <Progress
            type="circle"
            strokeColor={{
              "0%": "#D07878",
              "100%": "#FF0000",
            }}
            format={() => <span style={{ color: "white" }}>{toDos}%</span>}
            percent={parseInt(toDos)}
          />
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
    </div>
  );
};

export default Profile;
