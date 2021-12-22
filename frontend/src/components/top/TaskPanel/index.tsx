import clsx from "clsx";
import type { VFC } from "react";
import type { Task } from "../../../types/task";
import { List, ListItem } from "@material-ui/core";
import styles from "./index.module.css";
import { BaseButton } from "../../utils/BaseButton";

interface Props {
  tabType: "today" | "notComplete" | "plan" | "complete";
  title: string;
  taskData: (Task | undefined)[];
  buttonLabel1: string;
  buttonLabel2?: string;
  buttonColor1: string;
  buttonColor2?: string;
  className?: string;
  onClick1: (idx: number) => void;
  onClick2: (idx: number) => void;
}

const TaskPanel: VFC<Props> = ({
  tabType,
  title,
  taskData,
  buttonLabel1,
  buttonLabel2 = "削除",
  buttonColor1,
  buttonColor2 = "#E73152",
  className = "",
  onClick1,
  onClick2,
}: Props) => {
  const todaysDate = new Date();
  const formatTodaysDate = {
    year: todaysDate.getFullYear(),
    month: todaysDate.getMonth(),
    date: todaysDate.getDate(),
  };
  return (
    <>
      <div className={clsx(styles.panel, className)}>
        <p className={styles.panelTitle}>{title}</p>
        <List style={{ fontSize: "20px" }}>
          {(() => {
            switch (tabType) {
              case "today":
                return taskData.map((task, index) => {
                  if (task === undefined) {
                    return null;
                  } else {
                    if (
                      new Date(task.createdAt).getFullYear() ===
                        formatTodaysDate.year &&
                      new Date(task.createdAt).getMonth() ===
                        formatTodaysDate.month &&
                      new Date(task.createdAt).getDate() ===
                        formatTodaysDate.date
                    ) {
                      return (
                        <ListItem style={{ paddingLeft: "0px" }}>
                          <p className={styles.listItemText}>{task?.task}</p>
                          <div className={styles.taskButtonWrapper}>
                            <div className={styles.completeButton}>
                              <BaseButton
                                color={buttonColor1}
                                onClick={() => onClick1(index)}
                                text={buttonLabel1}
                              />
                            </div>
                            <BaseButton
                              color={buttonColor2}
                              onClick={() => onClick2(index)}
                              text={buttonLabel2}
                            />
                          </div>
                        </ListItem>
                      );
                    } else {
                      return null;
                    }
                  }
                });
              case "notComplete":
                return taskData.map((task, index) => {
                  if (task === undefined) {
                    return null;
                  } else {
                    if (
                      new Date(task.createdAt).getFullYear() !==
                        formatTodaysDate.year &&
                      new Date(task.createdAt).getMonth() !==
                        formatTodaysDate.month &&
                      new Date(task.createdAt).getDate() !==
                        formatTodaysDate.date
                    ) {
                      return (
                        <ListItem style={{ paddingLeft: "0px" }}>
                          <p className={styles.listItemText}>{task?.task}</p>
                          <div className={styles.taskButtonWrapper}>
                            <div className={styles.completeButton}>
                              <BaseButton
                                color={buttonColor1}
                                onClick={() => onClick1(index)}
                                text={buttonLabel1}
                              />
                            </div>
                            <BaseButton
                              color={buttonColor2}
                              onClick={() => onClick2(index)}
                              text={buttonLabel2}
                            />
                          </div>
                        </ListItem>
                      );
                    } else {
                      return null;
                    }
                  }
                });
              case "plan":
                return null;
              case "complete":
                return taskData.map((task, index) => (
                  <ListItem style={{ paddingLeft: "0px" }}>
                    <p className={styles.listItemText}>{task?.task}</p>
                    <div className={styles.taskButtonWrapper}>
                      <div className={styles.completeButton}>
                        <BaseButton
                          color={buttonColor1}
                          onClick={() => onClick1(index)}
                          text={buttonLabel1}
                        />
                      </div>
                      <BaseButton
                        color={buttonColor2}
                        onClick={() => onClick2(index)}
                        text={buttonLabel2}
                      />
                    </div>
                  </ListItem>
                ));
              default:
                return null;
            }
          })()}
        </List>
      </div>
    </>
  );
};

export { TaskPanel };
