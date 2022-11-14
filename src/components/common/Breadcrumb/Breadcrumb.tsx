import { Breadcrumb as AntdBreadcrumb } from "antd";

interface Props {
  items: JSX.Element[];
}
export const Breadcrumb = ({ items }: Props) => {
  const breadcrumbItems = items.map((item, i) => {
    return <AntdBreadcrumb.Item key={i}>{item}</AntdBreadcrumb.Item>;
  });

  return <AntdBreadcrumb>{breadcrumbItems}</AntdBreadcrumb>;
};
