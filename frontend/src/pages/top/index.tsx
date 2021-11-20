import type { VFC } from "react";
import { AddTaskForm } from "../../components/top/AddTaskForm";
import { Calendar } from "../../components/top/Calendar";
import { Navber } from "../../components/top/Navber";
import { TaskPanel } from "../../components/top/TaskPanel";
import { TaskTabs } from "../../components/top/TaskTabs";
import { Footer } from "../../components/utils/Footer";
import styles from "./index.module.css";

const Top: VFC = () => {
  const dummyData = [
    { id: 1, content: "あいうえお" },
    { id: 2, content: "かきくけこ" },
    { id: 3, content: "さしすせそ" },
  ];
  const handleOnClickCompleteButton = (): void => {
    console.log("完了押した");
  };
  const handleOnClickDeleteButton = (): void => {
    console.log("削除押した");
  };
  return (
    <>
      <Navber />
      <Calendar />
      <AddTaskForm />
      <TaskPanel
        title="本日のたすく！"
        taskData={dummyData}
        buttonLabel1="完了"
        buttonColor1="#24C075"
        className={styles.todaysTaskPanel}
        onClick1={handleOnClickCompleteButton}
        onClick2={handleOnClickDeleteButton}
      />
      <TaskTabs />
      <Footer />
    </>
  );
};

export { Top };
