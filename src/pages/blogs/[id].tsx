import Link from "next/link";

import { Typography, Breadcrumb } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import {
  BLOG_BACKGROUND_COLOR,
  BOX_SHADOW,
  MARGIN,
  PADDING,
} from "@/constants/style";

import { MarkdownView } from "@/components/common/Markdown";
import { Center } from "@/components/common/Layout";
import { CircleImage } from "@/components/common/Image";
import { useGetBlog } from "@/components/features/blog/hooks/useGetBlog";

import { useIsPcWindow } from "src/hooks/useIsPcWindow";

const { Title } = Typography;

const Blog = () => {
  const { blog, isLoading } = useGetBlog();
  const { isPc } = useIsPcWindow();

  if (isLoading || !blog || isPc === undefined) return null;

  return (
    <div style={{ margin: MARGIN.L }}>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link href="/">
            <LeftOutlined />
            <span style={{ marginLeft: MARGIN.S }}>Home</span>
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>
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
            width: isPc ? "75%" : "100%",
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
