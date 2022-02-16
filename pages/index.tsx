import type { NextPage } from "next";
import CompletedList from "../components/CompletedList";
import ToDoList from "../components/ToDoList";
import useStore from "../database/User";
import classes from "./Main.module.scss";

const Home: NextPage = () => {
  const x = useStore();
  return (
    <div className={classes.main}>
      <div className={classes.left}>
        <h1 style={{ color: "green" }}>Completed</h1>
        <CompletedList />
      </div>
      <div className={classes.right}>
        <h1 style={{ color: "red" }}>To do&apos;s</h1>
        <ToDoList />
      </div>
    </div>
  );
};

export default Home;
