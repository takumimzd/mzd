import { ChangeEvent } from "react";

import { adminStyle } from "@/features/admin/styles/admin.css";

import { Center } from "@/components/common/Layout";
import { Tooltip } from "@/components/common/Tooltip";
import { CaretRightOutlined } from "@/components/common/Icon";
import { Switch } from "@/components/common/Switch";
import { Button } from "@/components/common/Button";

import { Form } from "@/features/admin/components/ecosystems/blogs/new/form/Form";
import { Preview } from "@/components/common/Markdown/Preview";

interface Props {
  onChangeViewSwitch: () => void;
  onChangeBodyTextarea: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeTitleInput: (event: ChangeEvent<HTMLInputElement>) => void;
  createBlog: () => void;
  isPreview: boolean;
  title: string;
  bodyText: string;
}

export const Template = ({
  onChangeViewSwitch,
  onChangeBodyTextarea,
  onChangeTitleInput,
  createBlog,
  isPreview,
  title,
  bodyText,
}: Props) => {
  return (
    <>
      <Center className={adminStyle.tooltipContainer}>
        <Tooltip placement="right" title="Preview">
          <Switch
            checkedChildren={<CaretRightOutlined />}
            onChange={onChangeViewSwitch}
          />
        </Tooltip>
      </Center>
      <Center className={adminStyle.formAndPreviewContainer}>
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
        <div className={adminStyle.buttonContainer}>
          <Button onClick={() => {}} className={adminStyle.saveButtonContainer}>
            Saved
          </Button>
          <Button
            onClick={createBlog}
            className={adminStyle.updateButtonContainer}
            type="primary"
          >
            Publish
          </Button>
        </div>
      </Center>
    </>
  );
};
