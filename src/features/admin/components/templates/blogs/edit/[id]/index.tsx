import { ChangeEvent } from "react";

import { editStyle } from "../../../../../styles/blog.css";

import { Center } from "@/components/common/Layout";
import { Tooltip } from "@/components/common/Tooltip";
import { CaretRightOutlined } from "@/components/common/Icon";
import { Switch } from "@/components/common/Switch";
import { Button } from "@/components/common/Button";

import { Form } from "@/features/admin/components/ecosystems/blogs/new/form/Form";
import { Preview } from "@/components/common/Markdown/Preview";

interface Props {
  bodyText: string;
  onChangeBodyTextarea: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  title: string;
  onChangeTitleInput: (event: ChangeEvent<HTMLInputElement>) => void;
  updateBlog: () => void;
  onChangeViewSwitch: () => void;
  isPreview: boolean;
}

export const Template = ({
  bodyText,
  onChangeBodyTextarea,
  title,
  onChangeTitleInput,
  updateBlog,
  onChangeViewSwitch,
  isPreview,
}: Props) => {
  return (
    <>
      <Center className={editStyle.tooltipContainer}>
        <Tooltip placement="right" title="Preview">
          <Switch
            checkedChildren={<CaretRightOutlined />}
            onChange={onChangeViewSwitch}
          />
        </Tooltip>
      </Center>
      <Center className={editStyle.formAndPreviewContainer}>
        {isPreview ? (
          <Preview title={title} bodyText={bodyText} />
        ) : (
          <Form
            bodyText={bodyText}
            onChangeBodyTextarea={onChangeBodyTextarea}
            title={title}
            onChangeTitleInput={onChangeTitleInput}
          />
        )}
      </Center>
      <Center>
        <div className={editStyle.buttonContainer}>
          <Button className={editStyle.saveButtonContainer} onClick={() => {}}>
            Saved
          </Button>
          <Button
            onClick={updateBlog}
            className={editStyle.updateButtonContainer}
            type="primary"
          >
            Update
          </Button>
        </div>
      </Center>
    </>
  );
};
