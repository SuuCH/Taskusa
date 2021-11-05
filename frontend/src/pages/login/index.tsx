import { BaseButton } from "../../components/utils/BaseButton";
import { Form } from "../../components/login/Form";
import { MainPanel } from "../../components/login/MainPanel";
import LogoTaskusa from "../../images/LogoTaskusa.png";
import type { VFC } from "react";
import { useNavigate } from "react-router-dom";

const Login: VFC = () => {
  const navigate = useNavigate();

  const handleOnClickLoginButton = (): void => {
    console.log("push");
    navigate("/top");
  };
  return (
    <>
      <MainPanel>
        <img src={LogoTaskusa} alt="logo" />
        <Form />
        <BaseButton
          text="ログイン"
          color="#06681B"
          onClick={handleOnClickLoginButton}
        />
      </MainPanel>
    </>
  );
};

export { Login };
