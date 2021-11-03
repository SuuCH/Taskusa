import type { VFC } from "react";
import { TextField } from "@material-ui/core";

const Form: VFC = () => {
  return (
    <>
      <form noValidate autoComplete="off">
        <TextField id="standard-basic" label="E-mail" />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </form>
    </>
  );
};

export { Form };
