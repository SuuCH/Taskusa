import clsx from "clsx";
import type { MouseEventHandler, VFC } from "react";
import { List, ListItem } from "@material-ui/core";
import styles from "./index.module.css";
import { BaseButton } from "../../utils/BaseButton";

interface Task {
  id: number;
  content: string;
}

interface Props {
  title: string;
  taskData: Task[];
  buttonLabel1: string;
  buttonLabel2?: string;
  buttonColor1: string;
  buttonColor2?: string;
  className?: string;
  onClick1: MouseEventHandler<HTMLButtonElement>;
  onClick2: MouseEventHandler<HTMLButtonElement>;
}

const TaskPanel: VFC<Props> = ({
  title,
  taskData,
  buttonLabel1,
  buttonLabel2 = "削除",
  buttonColor1,
  buttonColor2 = "#E73152",
  className="",
  onClick1,
  onClick2,
}: Props) => {
  const TaskListItem = (datas: Task[]): JSX.Element[] => {
    return datas.map((data) => {
      return (
        <ListItem style={{ paddingLeft: "0px" }}>
          <p className={styles.listItemText}>{data.content}</p>
          <div className={styles.taskButtonWrapper}>
            <div className={styles.completeButton}>
              <BaseButton
                color={buttonColor1}
                onClick={onClick1}
                text={buttonLabel1}
              />
            </div>
            <BaseButton
              color={buttonColor2}
              onClick={onClick2}
              text={buttonLabel2}
            />
          </div>
        </ListItem>
      );
    });
  };
  return (
    <>
      <div className={clsx(styles.panel,className)}>
        <p className={styles.panelTitle}>{title}</p>
        <List style={{ fontSize: "20px" }}>{TaskListItem(taskData)}</List>
      </div>
    </>
  );
};

export { TaskPanel };
