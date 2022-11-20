import { ReactNode } from "react";
import { Collapse } from "antd";

interface Props {
  items: {
    header: string;
    key: string;
    children: ReactNode;
  }[];
  className: string;
}

export const Accordion = ({ items, className }: Props) => {
  const panels = items.map((item) => (
    <Collapse.Panel className={className} header={item.header} key={item.key}>
      {item.children}
    </Collapse.Panel>
  ));
  return <Collapse ghost>{panels}</Collapse>;
};
