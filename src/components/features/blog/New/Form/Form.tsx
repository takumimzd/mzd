import { Form as AntdForm, Input } from "antd";
import { BLOG_BACKGROUND_COLOR, BOX_SHADOW, PADDING } from "@/constants/style";
import { onChangeFormPropsType } from "../../hooks/useCreateBlog";
interface Props {
  bodyText: string;
  onChangeBodyTextarea: ({
    event,
  }: onChangeFormPropsType<HTMLTextAreaElement>) => void;
  title: string;
  onChangeTitleInput: ({
    event,
  }: onChangeFormPropsType<HTMLInputElement>) => void;
  isPc: boolean;
}

export const Form = ({
  bodyText,
  onChangeBodyTextarea,
  title,
  onChangeTitleInput,
  isPc,
}: Props) => {
  return (
    <AntdForm style={{ width: isPc ? "75%" : "100%" }}>
      <AntdForm.Item name={["blog", "title"]}>
        <Input
          style={{
            backgroundColor: BLOG_BACKGROUND_COLOR,
            boxShadow: BOX_SHADOW.MAIN,
            padding: `${PADDING.S}`,
            border: "none",
          }}
          defaultValue={title}
          onChange={(event) => {
            onChangeTitleInput({ event });
          }}
        />
      </AntdForm.Item>
      <AntdForm.Item name={["blog", "body"]}>
        <Input.TextArea
          onChange={(event) => {
            onChangeBodyTextarea({ event });
          }}
          autoSize
          defaultValue={bodyText}
          style={{
            minHeight: isPc ? "500px" : "300px",
            backgroundColor: BLOG_BACKGROUND_COLOR,
            boxShadow: BOX_SHADOW.MAIN,
            padding: `${PADDING.M}`,
            border: "none",
          }}
        ></Input.TextArea>
      </AntdForm.Item>
    </AntdForm>
  );
};
