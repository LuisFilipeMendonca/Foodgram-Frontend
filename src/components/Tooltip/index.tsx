import React from "react";

import { TooltipContainer } from "./styled";

interface ITooltip {
  show: boolean;
  text: string;
}

const Tooltip: React.FC<ITooltip> = ({ show, text }) => {
  return <TooltipContainer show={show}>{text}</TooltipContainer>;
};

export default Tooltip;
