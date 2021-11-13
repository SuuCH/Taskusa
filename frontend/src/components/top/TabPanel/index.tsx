import type { ReactNode, VFC } from "react";
import { Box, Typography } from "@material-ui/core";

interface TabPanelProps {
  children: ReactNode;
  index: number;
  value: number;
}

const TabPanel: VFC<TabPanelProps> = ({
  children,
  index,
  value,
  ...other
}: TabPanelProps) => {
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
};

export { TabPanel };
