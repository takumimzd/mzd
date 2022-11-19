import { ReactNode } from "react";
import { Tooltip as AntdTooltip } from "antd";
import { TooltipPlacement } from "antd/es/tooltip";

interface Props {
  children: ReactNode;
  placement: TooltipPlacement;
  title: string;
}

export const Tooltip = ({ children, placement, title }: Props) => {
  return (
    <AntdTooltip placement={placement} title={title}>
      {children}
    </AntdTooltip>
  );
};
