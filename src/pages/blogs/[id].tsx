import Link from "next/link";

import {
  BLOG_BACKGROUND_COLOR,
  BOX_SHADOW,
  MARGIN,
  PADDING,
} from "@/constants/style";

import { MarkdownView } from "@/components/common/Markdown";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Center } from "@/components/common/Layout";
import { CircleImage } from "@/components/common/Image";
import { LeftOutlined } from "@/components/common/Icon";
import { Title } from "@/components/common/Typography";

import { useGetBlog } from "@/components/features/blog/hooks/useGetBlog";

import { useIsPcWindow } from "@/hooks/useIsPcWindow";

const Blog = () => {
  const { blog, isLoading } = useGetBlog();
  const { isPc } = useIsPcWindow();

  const breadcrumbItems = [
    <div key="Home">
      <Link href="/">
        <LeftOutlined />
        <span style={{ marginLeft: MARGIN.S }}>Home</span>
      </Link>
    </div>,
  ];

  if (isLoading || !blog || isPc === undefined) return null;

  return (
    <div style={{ margin: MARGIN.L }}>
      <Breadcrumb items={breadcrumbItems} />
      <Center>
        <CircleImage
          src={blog.icon}
          size={{
            width: 150,
            height: 150,
          }}
          alt="profile main image"
        />
      </Center>
      <Center>
        <Title style={{ marginTop: MARGIN.M }} level={3}>
          {blog.title}
        </Title>
      </Center>
      <Center>
        <div
          style={{
            margin: `${MARGIN.L} 0 ${MARGIN.L} 0`,
            backgroundColor: BLOG_BACKGROUND_COLOR,
            boxShadow: BOX_SHADOW.MAIN,
            width: isPc ? "75%" : "90%",
            wordBreak: "break-all",
            padding: `${PADDING.M}`,
          }}
        >
          <MarkdownView>{blog.body}</MarkdownView>
        </div>
      </Center>
    </div>
  );
};

export default Blog;
