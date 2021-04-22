import React from "react";

import { Button, LinkButton } from "./styled";

interface IBaseButton {
  clickHandler?: any;
  role: string;
  className: string;
  type?: "button" | "submit" | "reset";
  path?: string;
}

const BaseButton: React.FC<IBaseButton> = ({
  role,
  clickHandler,
  className,
  children,
  type,
  path,
}) => {
  return (
    <>
      {role === "button" ? (
        <Button type={type} className={className} onClick={clickHandler}>
          {children}
        </Button>
      ) : (
        <LinkButton to={path || ""} className={className}>
          {children}
        </LinkButton>
      )}
    </>
  );
};

export default BaseButton;
