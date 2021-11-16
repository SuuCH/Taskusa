import type { VFC } from "react";
import { AddTaskForm } from "../../components/top/AddTaskForm";
import { Calendar } from "../../components/top/Calendar";
import { Navber } from "../../components/top/Navber";
import { TaskPanel } from "../../components/top/TaskPanel";
import { TaskTabs } from "../../components/top/TaskTabs";

const Top: VFC = () => {
  return (
    <>
      <Navber />
      <Calendar />
      <AddTaskForm />
      <TaskPanel />
      <TaskTabs />
    </>
  );
};

export { Top };
