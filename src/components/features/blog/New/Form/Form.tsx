import { ChangeEvent } from "react";

import { BLOG_BACKGROUND_COLOR, BOX_SHADOW, PADDING } from "@/constants/style";

import { Form as CommonForm, FormItem } from "@/components/common/Form";
import { Input } from "@/components/common/Input";
import { Textarea } from "@/components/common/Textarea";

interface Props {
  bodyText: string;
  onChangeBodyTextarea: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  title: string;
  onChangeTitleInput: (event: ChangeEvent<HTMLInputElement>) => void;
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
    <CommonForm style={{ width: isPc ? "75%" : "100%" }}>
      <FormItem name={["blog", "title"]}>
        <Input
          style={{
            backgroundColor: BLOG_BACKGROUND_COLOR,
            boxShadow: BOX_SHADOW.MAIN,
            padding: `${PADDING.S}`,
            border: "none",
          }}
          text={title}
          onChange={onChangeTitleInput}
        />
      </FormItem>
      <FormItem name={["blog", "body"]}>
        <Textarea
          onChange={onChangeBodyTextarea}
          text={bodyText}
          style={{
            minHeight: isPc ? "500px" : "300px",
            backgroundColor: BLOG_BACKGROUND_COLOR,
            boxShadow: BOX_SHADOW.MAIN,
            padding: `${PADDING.M}`,
            border: "none",
          }}
        />
      </FormItem>
    </CommonForm>
  );
};
