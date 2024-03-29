import { useState } from "react";
import type { ChangeEvent, VFC } from "react";
import type { Task } from "../../../types/task";
import CheckBoxOutlineBlankOutlinedIcon from "@material-ui/icons/CheckBoxOutlineBlankOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import {
  makeStyles,
  Paper,
  Tabs,
  Tab,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import { TabPanel } from "../TabPanel";
import { TaskPanel } from "../TaskPanel";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: "80%",
    margin: "auto",
  },
});

const theme = createTheme({
  overrides: {
    MuiTab: {
      root: {
        "&:hover": {
          backgroundColor: "#8EF3AA",
        },
      },
      textColorInherit: {
        color: "#06681B",
      },
    },
  },
});

interface Props {
  todoList: (Task | undefined)[];
  finishedList: (Task | undefined)[];
  onClick1: (idx: number) => void;
  onClick2: (idx: number) => void;
  onClick5: (idx: number) => void;
  onClick6: (idx: number) => void;
}

const TaskTabs: VFC<Props> = ({
  todoList,
  finishedList,
  onClick1,
  onClick2,
  onClick5,
  onClick6,
}: Props) => {
  const dummyData = [
    {
      task: "コーディング試験受ける",
      createdAt: new Date(),
    },
    {
      task: "TaskusaのFirestore繋ぎこみ実装",
      createdAt: new Date(),
    },
    {
      task: "収集くん開発（FastAPI）",
      createdAt: new Date(),
    },
  ];
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const handleOnClickToTodayButton = (): void => {
    console.log("今日へ押した");
  };
  const handleOnClickDeleteButton = (): void => {
    console.log("削除押した");
  };
  return (
    <div style={{ marginBottom: "200px" }}>
      <ThemeProvider theme={theme}>
        <Paper
          square
          className={classes.root}
          style={{
            borderRadius: "10px",
            boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            TabIndicatorProps={{ style: { background: "#8EF3AA" } }}
          >
            <Tab
              style={{ backgroundColor: "#DAF8E7" }}
              label={
                <div>
                  <CheckBoxOutlineBlankOutlinedIcon
                    style={{
                      verticalAlign: "middle",
                      marginBottom: 2,
                      marginRight: 6,
                    }}
                  />
                  未完了
                </div>
              }
            />
            <Tab
              style={{ backgroundColor: "#DAF8E7" }}
              label={
                <div>
                  <ListAltOutlinedIcon
                    style={{
                      verticalAlign: "middle",
                      marginBottom: 2,
                      marginRight: 6,
                    }}
                  />
                  予定
                </div>
              }
            />
            <Tab
              style={{ backgroundColor: "#DAF8E7" }}
              label={
                <div>
                  <CheckBoxOutlinedIcon
                    style={{
                      verticalAlign: "middle",
                      marginBottom: 2,
                      marginRight: 6,
                    }}
                  />
                  完了済
                </div>
              }
            />
          </Tabs>
          <TabPanel value={value} index={0}>
            <TaskPanel
              tabType="notComplete"
              title="未完了のたすく！"
              taskData={todoList}
              buttonLabel1="今日へ"
              buttonColor1="#104F1B"
              onClick1={onClick1}
              onClick2={onClick2}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TaskPanel
              tabType="plan"
              title="2021年12月10日（金）のたすく！"
              taskData={dummyData}
              buttonLabel1="今日へ"
              buttonColor1="#104F1B"
              onClick1={handleOnClickToTodayButton}
              onClick2={handleOnClickDeleteButton}
            />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <TaskPanel
              tabType="complete"
              title="完了済みのたすく！"
              taskData={finishedList}
              buttonLabel1="元に戻す"
              buttonColor1="#69A41F"
              onClick1={onClick5}
              onClick2={onClick6}
            />
          </TabPanel>
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export { TaskTabs };
