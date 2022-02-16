import React, { useRef, useState } from "react";
import classes from "./Main.module.scss";
import { Radio, Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useStore } from "../database/UserInformation";
type Props = {};

function Edit({}: Props) {
  const { setEdit } = useStore();
  const [color, setColor] = useState("");
  const textInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter().query;
  function radioHandler(e: any) {
    setColor(e.target.value);
  }
  function handleEdit() {
    if (textInputRef?.current?.value !== "" && color !== "") {
      const v = {
        id: router.id,
        description: textInputRef.current?.value!,
        color: color,
        completed: false,
      };
      setEdit(v);
    }
  }

  return (
    <form className={classes.edit}>
      <h1>Editing the to&apos;do</h1>
      <div>
        <h3>ID:</h3>
        <input
          type="text"
          value={router.id}
          disabled
          size={50}
          style={{ height: "35px" }}
        />
      </div>
      <div>
        <h3>Description:</h3>
        <input
          type="text"
          size={50}
          ref={textInputRef}
          style={{ height: "35px" }}
        />
      </div>
      <div>
        <h3>Color:</h3>
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
      </div>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          columnGap: "40px",
        }}
      >
        <Link href="./">
          <a
            style={{
              textDecoration: "none",
              padding: "0px 20px",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            Cancel
          </a>
        </Link>
        <div onClick={handleEdit}>
          <Link href="./">
            <a
              style={{
                textDecoration: "none",
                padding: "0px 20px",
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "red",
              }}
            >
              Edit
            </a>
          </Link>
        </div>
      </div>
      <div style={{ marginBottom: "15vh" }}></div>
    </form>
  );
}

export default Edit;
