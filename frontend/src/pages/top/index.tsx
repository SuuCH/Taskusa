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
  const [todoList, setTodoList] = useState([] as (string | undefined)[]);
  const [finishedTodoList, setFinishedTodoList] = useState(
    [] as (string | undefined)[]
  );

  // タスク入力フォームのハンドラ
  const handleChangeTaskInputForm = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setInput(e.target.value);
  };

  // タスク追加ボタンハンドラ
  const handleClickTaskAddButton = (): void => {
    if (!!input) {
      setTodoList([...todoList, input]);
      setInput("");
    } else {
      alert("タスクを入力してください");
    }
  };

  // 本日タスクの削除ボタンハンドラ
  const handleOnClickDeleteButton = (index: number): void => {
    setTodoList(todoList.filter((_, idx) => idx !== index));
  };

  // 本日タスクの完了ボタンハンドラ
  const handleOnClickCompleteButton = (index: number): void => {
    setTodoList(todoList.filter((_, idx) => idx !== index));
    setFinishedTodoList([
      ...finishedTodoList,
      todoList.find((_, idx) => idx === index),
    ]);
  };

  // 完了済みタスクボタンハンドラ
  const handleOnClickFinishedTaskDeleteButton = (index: number) => {
    setFinishedTodoList(finishedTodoList.filter((_, idx) => idx !== index));
  };

  // 未完了ボタンハンドラ
  const handleOnClickNotCompleteButton = (index: number) => {
    setFinishedTodoList(finishedTodoList.filter((_, idx) => idx !== index));
    setTodoList([
      ...todoList,
      finishedTodoList.find((_, idx) => idx === index),
    ]);
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
      <TaskTabs
        finishedList={finishedTodoList}
        onClick5={handleOnClickNotCompleteButton}
        onClick6={handleOnClickFinishedTaskDeleteButton}
      />
      <Footer />
    </>
  );
};

export { Top };
