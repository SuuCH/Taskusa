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
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
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
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Paper>
    </ThemeProvider>
  );
};

export { TaskTabs };
