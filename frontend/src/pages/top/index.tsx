import { useState } from "react";
import { AddTaskForm } from "../../components/top/AddTaskForm";
import { Calendar } from "../../components/top/Calendar";
import { Navber } from "../../components/top/Navber";
import { TaskPanel } from "../../components/top/TaskPanel";
import { TaskTabs } from "../../components/top/TaskTabs";
import { Footer } from "../../components/utils/Footer";

import type { ChangeEvent, VFC } from "react";

import styles from "./index.module.css";

const Top: VFC = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([] as string[]);
  const handleChangeTaskInputForm = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setInput(e.target.value);
  };
  const handleClickTaskAddButton = (): void => {
    setTodoList([...todoList, input]);
    setInput("");
  };

  const handleOnClickCompleteButton = (): void => {
    console.log("完了押した");
  };
  const handleOnClickDeleteButton = (index: number): void => {
    setTodoList(todoList.filter((_, idx) => idx !== index));
  };

  return (
    <>
      <Navber />
      <Calendar />
      <AddTaskForm
        input={input}
        onChange={handleChangeTaskInputForm}
        onClick={handleClickTaskAddButton}
      />
      <TaskPanel
        title="本日のたすく！"
        taskData={todoList}
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
