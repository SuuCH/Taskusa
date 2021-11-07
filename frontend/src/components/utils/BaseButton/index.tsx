import type { MouseEventHandler, VFC } from "react";
import clsx from "clsx";
import { Button } from "@material-ui/core";

interface Props {
  className?: string;
  text: string;
  color?: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

const BaseButton: VFC<Props> = ({ text, className, color, onClick }) => {
  return (
    <>
      <Button
        className={clsx(className)}
        onClick={onClick}
        style={{
          backgroundColor: color,
          borderRadius: "20px 20px 20px 20px",
          color: "white",
        }}
      >
        {text}
      </Button>
    </>
  );
};

export { BaseButton };
