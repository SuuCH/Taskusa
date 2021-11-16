import type { VFC } from "react";
import { List, ListItem } from "@material-ui/core";
import styles from "./index.module.css";
import { BaseButton } from "../../utils/BaseButton";

interface Task {
  id: number;
  content: string;
}
const TaskPanel: VFC = () => {
  const dummyData: Task[] = [
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
  const TaskListItem = (datas: Task[]): JSX.Element[] => {
    return datas.map((data) => {
      return (
        <ListItem style={{ paddingLeft: "0px" }}>
          <p className={styles.listItemText}>{data.content}</p>
          <div className={styles.taskButtonWrapper}>
            <div className={styles.completeButton}>
              <BaseButton
                color="#24C075"
                onClick={handleOnClickCompleteButton}
                text="完了"
              />
            </div>
            <BaseButton
              color="#E73152"
              onClick={handleOnClickDeleteButton}
              text="削除"
            />
          </div>
        </ListItem>
      );
    });
  };
  return (
    <>
      <div className={styles.panel}>
        <p className={styles.panelTitle}>本日のたすく！</p>
        <List style={{ fontSize: "20px" }}>{TaskListItem(dummyData)}</List>
      </div>
    </>
  );
};

export { TaskPanel };
