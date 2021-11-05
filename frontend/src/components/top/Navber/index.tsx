import type { VFC } from "react";
import { AppBar, Box, Toolbar } from "@material-ui/core";
import { BaseButton } from "../../utils/BaseButton";
import { useNavigate } from "react-router-dom";
import LogoTaskusa from "../../../images/LogoTaskusa.png";
import styles from "./index.module.css";

const Navber: VFC = () => {
  const navigate = useNavigate();
  const handleOnClickLogoutButton = (): void => {
    console.log("push");
    navigate("/");
  };
  return (
    <>
      <Box style={{ flexGrow: 1 }}>
        <AppBar style={{ position: "static" }}>
          <Toolbar
            style={{ backgroundColor: "#DAF8E7", minHeight: "55px" }}
            className={styles.navber}
          >
            <img src={LogoTaskusa} alt="TaskusaLogo" className={styles.image} />
            <div className= {styles.button}>
              <BaseButton
                text="ログアウト"
                color="#06681B"
                onClick={handleOnClickLogoutButton}
              />
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export { Navber };
