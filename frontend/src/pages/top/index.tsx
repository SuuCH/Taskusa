import { useEffect, useState } from "react";
import { AddTaskForm } from "../../components/top/AddTaskForm";
import { Calendar } from "../../components/top/Calendar";
import { Navber } from "../../components/top/Navber";
import { TaskPanel } from "../../components/top/TaskPanel";
import { TaskTabs } from "../../components/top/TaskTabs";
import { Footer } from "../../components/utils/Footer";
import { firebaseFirestore } from "../../api/firebase";

import { getDoc, doc, updateDoc } from "@firebase/firestore";

import type { ChangeEvent, VFC } from "react";

import styles from "./index.module.css";

const Top: VFC = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([] as (string | undefined)[]);
  const [finishedTodoList, setFinishedTodoList] = useState(
    [] as (string | undefined)[]
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isChangedTodo, setIsChangedTodo] = useState(false);
  const [isChangedFinishedTodo, setIsChangedFiished] = useState(false);

  // Firebaseからのデータの取得
  useEffect(() => {
    (async () => {
      console.log(firebaseFirestore);
      const responseTodo = await getDoc(
        doc(firebaseFirestore, "todoList/todo")
      );
      setTodoList(responseTodo.data()?.tasks);
      setIsLoading(false);
    })();
  }, [isLoading]);

  // Todoに変更が加わった時
  useEffect(() => {
    if (isChangedTodo) {
      (async () => {
        setIsLoading(true);
        updateDoc(
          doc(firebaseFirestore, "todoList/todo"),
          { tasks: todoList }
        );
        setIsLoading(false);
      })();
    }
  }, [todoList, isChangedTodo]);

  // 完了済みに変更が加わった時
  useEffect(() => {
    if (isChangedFinishedTodo) {
      (async () => {
        setIsLoading(true);
        updateDoc(
          doc(firebaseFirestore, "todoList/finishedTodo"),
          { tasks: finishedTodoList }
        );
        setIsLoading(false);
      })();
    }
    setIsChangedFiished(false);
  }, [finishedTodoList, isChangedFinishedTodo]);
  // タスク入力フォームのハンドラ
  const handleChangeTaskInputForm = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setInput(e.target.value);
  };

  // タスク追加ボタンハンドラ
  const handleClickTaskAddButton = (): void => {
    if (!!input) {
      setIsChangedTodo(true);
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
    setIsChangedTodo(true);
    setIsChangedFiished(true);
    setTodoList(todoList.filter((_, idx) => idx !== index));
    setFinishedTodoList([
      ...finishedTodoList,
      todoList.find((_, idx) => idx === index),
    ]);
  };

  // 完了済みタスク削除ボタンハンドラ
  const handleOnClickFinishedTaskDeleteButton = (index: number) => {
    setIsChangedFiished(true);
    setFinishedTodoList(finishedTodoList.filter((_, idx) => idx !== index));
  };

  // もとに戻すボタンハンドラ
  const handleOnClickNotCompleteButton = (index: number) => {
    setIsChangedTodo(true);
    setIsChangedFiished(true);
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
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>
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
        </div>
      )}
      <Footer />
    </>
  );
};

export { Top };
