import { useEffect, useState } from "react";
import { AddTaskForm } from "../../components/top/AddTaskForm";
import { Calendar } from "../../components/top/Calendar";
import { Navber } from "../../components/top/Navber";
import { TaskPanel } from "../../components/top/TaskPanel";
import { TaskTabs } from "../../components/top/TaskTabs";
import { Footer } from "../../components/utils/Footer";
import { firebaseFirestore } from "../../api/firebase";

import { getDoc, doc, updateDoc } from "@firebase/firestore";

import type { Task } from "../../types/task";
import type { ChangeEvent, VFC } from "react";

import styles from "./index.module.css";
import { LoadingLayout } from "../../components/utils/LoadingLayout";

const Top: VFC = () => {
  const [input, setInput] = useState({} as Task);
  const [todoList, setTodoList] = useState([] as (Task | undefined)[]); //本日のタスク
  const [finishedTodoList, setFinishedTodoList] = useState(
    [] as (Task | undefined)[]
  ); // 完了済みタスク
  const [date, setDate] = useState<Date>(new Date());
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
      const responseFinishedTodo = await getDoc(
        doc(firebaseFirestore, "todoList/finishedTodo")
      );
      setFinishedTodoList(responseFinishedTodo.data()?.tasks);
      setIsLoading(false);
    })();
  }, [isLoading]);

  // Todoに変更が加わった時
  useEffect(() => {
    if (isChangedTodo) {
      (async () => {
        setIsLoading(true);
        updateDoc(doc(firebaseFirestore, "todoList/todo"), { tasks: todoList });
        setIsLoading(false);
      })();
    }
  }, [todoList, isChangedTodo]);

  // 完了済みに変更が加わった時
  useEffect(() => {
    if (isChangedFinishedTodo) {
      (async () => {
        setIsLoading(true);
        updateDoc(doc(firebaseFirestore, "todoList/finishedTodo"), {
          tasks: finishedTodoList,
        });
        setIsLoading(false);
      })();
    }
    setIsChangedFiished(false);
  }, [finishedTodoList, isChangedFinishedTodo]);
  // タスク入力フォームのハンドラ
  const handleChangeTaskInputForm = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setInput({
      task: e.target.value,
      createdAt: date,
    });
  };

  // タスク追加ボタンハンドラ
  const handleClickTaskAddButton = (): void => {
    if (input.task !== undefined) {
      setIsChangedTodo(true);
      setTodoList([...todoList, input]);
      setInput({} as Task);
    } else {
      alert("タスクを入力してください");
      setTodoList([]);
    }
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

  // 本日タスクの削除ボタンハンドラ
  const handleOnClickTodaysTodoDeleteButton = (index: number): void => {
    setTodoList(todoList.filter((_, idx) => idx !== index));
  };

  // 完了済みタスクのもとに戻すボタンハンドラ
  const handleOnClickNotCompleteButton = (index: number) => {
    setIsChangedTodo(true);
    setIsChangedFiished(true);
    setFinishedTodoList(finishedTodoList.filter((_, idx) => idx !== index));
    const notCompletedTask = finishedTodoList.find((_, idx) => idx === index);
    setTodoList([...todoList, notCompletedTask]);
  };
  // 完了済みタスク削除ボタンハンドラ
  const handleOnClickFinishedTaskDeleteButton = (index: number) => {
    setIsChangedFiished(true);
    setFinishedTodoList(finishedTodoList.filter((_, idx) => idx !== index));
  };
  // 未完了タスクの削除ボタンハンドラ
  const handleOnClickNoCompleteTodoDeleteButton = (index: number): void => {
    console.log("今は削除できません＞＜");
  };

  // 未完了タスクの今日へボタンハンドラ
  const handleOnClickToTodayButton = (): void => {
    {
      /* 後で実装 */
    }
    console.log("今日へ押した");
  };

  // DatePickerが変更された時のハンドラ
  const onChangeDate = (newDate: Date) => {
    setDate(newDate);
    console.log(newDate);
  };
  return (
    <>
      <Navber />
      <Calendar />
      <AddTaskForm
        input={input.task}
        date={date}
        onChangeText={handleChangeTaskInputForm}
        onChangeDate={onChangeDate}
        onClick={handleClickTaskAddButton}
      />
      {isLoading ? (
        <LoadingLayout />
      ) : (
        <div>
          <TaskPanel
            tabType="today"
            title="本日のたすく！"
            taskData={todoList}
            buttonLabel1="完了"
            buttonColor1="#24C075"
            className={styles.todaysTaskPanel}
            onClick1={handleOnClickCompleteButton}
            onClick2={handleOnClickTodaysTodoDeleteButton}
          />
          <TaskTabs
            todoList={todoList}
            finishedList={finishedTodoList}
            onClick1={handleOnClickToTodayButton}
            onClick2={handleOnClickNoCompleteTodoDeleteButton}
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
