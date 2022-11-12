import Link from "next/link";

import { Typography, Breadcrumb } from "antd";
import { LeftOutlined } from "@ant-design/icons";

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
    <div style={{ margin: "32px" }}>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link href="/">
            <LeftOutlined />
            <span style={{ marginLeft: "4px" }}>Home</span>
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Center>
        <div>
          <CircleImage
            src={blog.icon}
            size={{
              width: 150,
              height: 150,
            }}
            alt="profile main image"
          />
          <Title style={{ margin: "16px 0 0 0" }} level={3}>
            {blog.title}
          </Title>
        </div>
      </Center>
      <Center>
        <div
          style={{
            margin: "16px 0 32px 0",
            backgroundColor: "#FFFAFA",
            boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.2)",
            width: isPc ? "75%" : "100%",
            wordBreak: "break-all",
            padding: "16px",
          }}
        >
          <MarkdownView>{blog.body}</MarkdownView>
        </div>
      </Center>
    </div>
  );
};

export default Blog;
