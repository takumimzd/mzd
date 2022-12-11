import { ChangeEvent } from "react";
import { newStyle } from "../../../styles/blog.css";

import { Form as CommonForm, FormItem } from "@/components/common/Form";
import { Input } from "@/components/common/Input";
import { Textarea } from "@/components/common/Textarea";

interface Props {
  bodyText: string;
  onChangeBodyTextarea: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  title: string;
  onChangeTitleInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Form = ({
  bodyText,
  onChangeBodyTextarea,
  title,
  onChangeTitleInput,
}: Props) => {
  return (
    <CommonForm className={newStyle.form}>
      <FormItem name={["blog", "title"]}>
        <Input text={title} onChange={onChangeTitleInput} placeholder="Title" />
      </FormItem>
      <FormItem className={newStyle.formItem} name={["blog", "body"]}>
        <Textarea
          onChange={onChangeBodyTextarea}
          text={bodyText}
          placeholder={`Write Contents\nMarkdown is available`}
        />
      </FormItem>
    </CommonForm>
  );
};
