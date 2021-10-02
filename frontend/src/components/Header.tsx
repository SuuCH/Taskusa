import React from "react";
import {AppBar, Toolbar} from "@material-ui/core";
import HeaderLogoImage from "../images/logo_taskusa.png"; 

const Header: React.FC = () => (
  <AppBar>
    <Toolbar>
      <img  className="header-logo-image" src={HeaderLogoImage} alt="taskusa logo"/>
      ログアウト
    </Toolbar>
  </AppBar>
);

export default Header