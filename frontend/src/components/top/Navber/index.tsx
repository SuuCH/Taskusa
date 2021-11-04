import type { VFC } from "react";
import {AppBar, Box, Toolbar} from "@material-ui/core";

const Navber: VFC = () => {
  return (
    <>
      <Box style={{ flexGrow: 1}}>
        <AppBar style={{ position: "static"}}>
          <Toolbar style={{ backgroundColor: "#DAF8E7", minHeight:"55px"}}>
            {/*ダミーボタン*/}
            <button>logout</button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export {Navber};