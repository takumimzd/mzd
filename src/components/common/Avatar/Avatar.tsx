import { Avatar as AntdAvatar } from "antd";

interface Props {
  src: string;
}

export const Avatar = ({ src }: Props) => {
  return <AntdAvatar src={src} />;
};
