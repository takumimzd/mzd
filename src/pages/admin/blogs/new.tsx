import { useState } from "react";

import { adminStyle } from "../../../features/admin/styles/admin.css";

import { Center } from "@/components/common/Layout";
import { Tooltip } from "@/components/common/Tooltip";
import { CaretRightOutlined } from "@/components/common/Icon";
import { Switch } from "@/components/common/Switch";
import { Button } from "@/components/common/Button";

import { Form } from "@/features/blog/components/New/Form/Form";
import { Preview } from "@/features/blog/components/Preview";
import { useCreateBlog } from "@/features/blog/hooks/useCreateBlog";

import { useSession } from "@/hooks/useSession";

const New = () => {
  const { isSignedIn } = useSession();

  const {
    bodyText,
    onChangeBodyTextarea,
    title,
    onChangeTitleInput,
    createBlog,
  } = useCreateBlog();
  const [isPreview, setIsPreview] = useState(false);

  const onChangeViewSwitch = () => {
    setIsPreview((prev) => !prev);
  };

  if (!isSignedIn) return null;

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

export default New;
