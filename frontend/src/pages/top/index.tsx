import type { VFC } from "react";
import { Calendar } from "../../components/top/Calendar";
import { Navber } from "../../components/top/Navber";

const Top: VFC = () => {
  return (
    <>
      <Navber />
      <Calendar />
    </>
  );
};

export { Top };
