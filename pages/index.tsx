import type { NextPage } from "next";
import CompletedList from "../components/CompletedList";
import ToDoList from "../components/ToDoList";
import classes from "./Main.module.scss";
import { Modal, Progress } from "antd";
import { useStore } from "../database/UserInformation";
const Home: NextPage = () => {
  const { todos } = useStore();
  const total = todos?.length!;
  const toDos = (
    (todos?.filter((item: any) => item.completed === false).length / total) *
    100
  ).toFixed(2);
  const completed = (
    (todos?.filter((item: any) => item.completed !== false).length / total) *
    100
  ).toFixed(2);
  return (
    <div className={classes.main}>
      <div className={classes.left}>
        <h1 style={{ color: "green" }}>Completed</h1>
        <Progress
          type="circle"
          strokeColor={{
            "0%": "#108ee9",
            "100%": "#87d068",
          }}
          format={() => <span style={{ color: "black" }}>{completed}%</span>}
          percent={parseInt(completed)}
        />
        <CompletedList />
      </div>
      <div className={classes.right}>
        <h1 style={{ color: "red" }}>To do&apos;s</h1>
        <Progress
          type="circle"
          strokeColor={{
            "0%": "#D07878",
            "100%": "#FF0000",
          }}
          format={() => <span style={{ color: "black" }}>{toDos}%</span>}
          percent={parseInt(toDos)}
        />
        <ToDoList />
      </div>
    </div>
  );
};

export default Home;
