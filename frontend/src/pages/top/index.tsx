import type { VFC } from "react";
import { Calendar } from "../../components/top/Calendar";
import { Navber } from "../../components/top/Navber";
import { TaskPanel } from "../../components/top/TaskPanel";
import { TaskTabs } from "../../components/top/TaskTabs";

const Top: VFC = () => {
  return (
    <>
      <Navber />
      <Calendar />
      <TaskPanel />
      <TaskTabs />
    </>
  );
};

export { Top };
