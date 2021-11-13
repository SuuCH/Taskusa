import type { VFC } from "react";
import { AddTaskForm } from "../../components/top/AddTaskForm";
import { Calendar } from "../../components/top/Calendar";
import { Navber } from "../../components/top/Navber";

const Top: VFC = () => {
  return (
    <>
      <Navber />
      <Calendar />
      <AddTaskForm />
    </>
  );
};

export { Top };
