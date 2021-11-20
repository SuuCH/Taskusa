import { useState } from "react";
import type { ChangeEvent, VFC } from "react";
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

const TaskTabs: VFC = () => {
  const dummyData = [
    { id: 1, content: "あいうえお" },
    { id: 2, content: "かきくけこ" },
    { id: 3, content: "さしすせそ" },
  ];
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const handleOnClickToTodayButton = (): void => {
    console.log("今日へ押した");
  };
  const handleOnClickUndoButton = (): void => {
    console.log("元に戻す押した");
  };
  const handleOnClickDeleteButton = (): void => {
    console.log("削除押した");
  };
  return (
    <div style={{marginBottom: "200px"}}>
      <ThemeProvider theme={theme}>
        <Paper square className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            TabIndicatorProps={{ style: { background: "#8EF3AA" } }}
          >
            <Tab
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
              title="未完了のたすく！"
              taskData={dummyData}
              buttonLabel1="今日へ"
              buttonColor1="#104F1B"
              onClick1={handleOnClickToTodayButton}
              onClick2={handleOnClickDeleteButton}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TaskPanel
              title="2021年11月20日（土）のたすく！"
              taskData={dummyData}
              buttonLabel1="今日へ"
              buttonColor1="#104F1B"
              onClick1={handleOnClickToTodayButton}
              onClick2={handleOnClickDeleteButton}
            />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <TaskPanel
              title="完了済みのたすく！"
              taskData={dummyData}
              buttonLabel1="元に戻す"
              buttonColor1="#69A41F"
              onClick1={handleOnClickUndoButton}
              onClick2={handleOnClickDeleteButton}
            />
          </TabPanel>
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export { TaskTabs };
