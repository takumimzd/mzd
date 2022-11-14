import { Switch as AntdSwitch } from "antd";
import { ReactNode } from "react";

interface Props {
  checkedChildren?: ReactNode;
  onChange?: () => void;
}

export const Switch = ({ checkedChildren, onChange }: Props) => {
  return (
    <AntdSwitch
      checkedChildren={checkedChildren}
      onChange={onChange}
    ></AntdSwitch>
  );
};
