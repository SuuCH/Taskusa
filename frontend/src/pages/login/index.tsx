import { BaseButton } from "../../components/utils/BaseButton";
import { Form } from "../../components/login/Form";
import type { VFC } from "react";

const Login: VFC = () => {
  const handleOnClickLoginButton = () : void  => {
    console.log("push");
  }
  return(
    <>
    <Form />
      <BaseButton text="ログイン" color="#06681B" onClick={handleOnClickLoginButton}/>
    </>
  );
}

export { Login };
