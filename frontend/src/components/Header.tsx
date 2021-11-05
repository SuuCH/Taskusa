import type { VFC } from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import HeaderLogoImage from "../images/logo_taskusa.png";

const Header: VFC = () => (
  <AppBar>
    <Toolbar>
      <img
        className="header-logo-image"
        src={HeaderLogoImage}
        alt="taskusa logo"
      />
    </Toolbar>
  </AppBar>
);

export { Header };
