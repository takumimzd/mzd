import { ReactNode } from "react";
import { Collapse } from "antd";

interface Props {
  items: {
    header: string;
    key: string;
    children: ReactNode;
  }[];
}

export const Accordion = ({ items }: Props) => {
  const panels = items.map((item) => (
    <Collapse.Panel header={item.header} key={item.key}>
      {item.children}
    </Collapse.Panel>
  ));
  return <Collapse ghost>{panels}</Collapse>;
};
