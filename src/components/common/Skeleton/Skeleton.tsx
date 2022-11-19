import { Skeleton as AntdSkeleton } from "antd";
import { SkeletonParagraphProps } from "antd/lib/skeleton/Paragraph";

interface Props {
  avatar?: boolean;
  paragraph?: SkeletonParagraphProps;
}

export const Skeleton = ({ avatar = false, paragraph }: Props) => {
  return <AntdSkeleton avatar={avatar} paragraph={paragraph} />;
};
