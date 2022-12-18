import Link from "next/link";
import profileMainImage from "@/public/profile.webp";
import { indexStyle } from "../../../styles/blog.css";

import { MarkdownView } from "@/components/common/Markdown";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Center } from "@/components/common/Layout";
import { CircleImage } from "@/components/common/Image";
import { LeftOutlined } from "@/components/common/Icon";
import { Title } from "@/components/common/Typography";
import { BlogType } from "@/types/supabase/table";

const breadcrumbItems = [
  <div key="Home">
    <Link href="/">
      <LeftOutlined />
      <span className={indexStyle.breadcrumbItemText}>Home</span>
    </Link>
  </div>,
];

interface Props {
  blog: BlogType;
}

export const Template = ({ blog }: Props) => {
  return (
    <div className={indexStyle.wrapper}>
      <Breadcrumb items={breadcrumbItems} />
      <Center>
        <CircleImage
          src={!!blog.icon ? blog.icon : `${profileMainImage.src}`}
          size={{
            width: 150,
            height: 150,
          }}
          alt="profile main image"
        />
      </Center>
      <Center>
        <Title className={indexStyle.blogTitle} level={3}>
          {blog.title}
        </Title>
      </Center>
      <Center>
        <div className={indexStyle.markdownViewContainer}>
          <MarkdownView>{blog.body}</MarkdownView>
        </div>
      </Center>
    </div>
  );
};
