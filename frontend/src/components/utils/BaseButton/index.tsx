import type { MouseEventHandler, VFC } from "react";
import { Button } from "@material-ui/core";

interface Props {
  text: string;
  color?: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

const BaseButton: VFC<Props> = ({ text, color, onClick }) => {
  return (
    <>
      <Button
        style={{
          backgroundColor: color,
          borderRadius: "20px 20px 20px 20px",
          color: "white",
        }}
        onClick={onClick}
      >
        {text}
      </Button>
    </>
  );
};

export { BaseButton };
