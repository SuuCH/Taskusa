import { VFC } from "react";
import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CheckBoxOutlineBlankOutlinedIcon from "@material-ui/icons/CheckBoxOutlineBlankOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import { Box, Typography } from "@material-ui/core";

// import styles from "./index.module.css";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: "80%",
    margin: "auto",
  },
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const TaskTabs: VFC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
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
  );
};

export { TaskTabs };
