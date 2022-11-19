import { useState } from "react";

import { MARGIN } from "@/constants/style";

import { Center } from "@/components/common/Layout";
import { Tooltip } from "@/components/common/Tooltip";
import { CaretRightOutlined } from "@/components/common/Icon";
import { Switch } from "@/components/common/Switch";

import { Form } from "@/features/blog/components/New/Form/Form";
import { Preview } from "@/features/blog/components/Preview";
import { useCreateBlog } from "@/features/blog/hooks/useCreateBlog";

import { useSession } from "@/hooks/useSession";
import { useIsPcWindow } from "@/hooks/useIsPcWindow";
import { Button } from "antd";

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
  const { isPc } = useIsPcWindow();

  const onChangeViewSwitch = () => {
    setIsPreview((prev) => !prev);
  };

  if (isPc === undefined || !isSignedIn) return null;

  return (
    <>
      <Center style={{ margin: `${MARGIN.L} 0 0 0` }}>
        <Tooltip placement="right" title="Preview">
          <Switch
            checkedChildren={<CaretRightOutlined />}
            onChange={onChangeViewSwitch}
          />
        </Tooltip>
      </Center>
      <Center style={{ margin: `${MARGIN.M} 0 0 0` }}>
        {isPreview ? (
          <Preview title={title} bodyText={bodyText} isPc={isPc} />
        ) : (
          <Form
            bodyText={bodyText}
            onChangeBodyTextarea={onChangeBodyTextarea}
            title={title}
            onChangeTitleInput={onChangeTitleInput}
            isPc={isPc}
          />
        )}
      </Center>
      <Center>
        <div style={{ display: "flex", marginTop: MARGIN.L }}>
          <Button style={{ marginRight: MARGIN.S }}>Saved</Button>
          <Button
            onClick={createBlog}
            style={{ marginLeft: MARGIN.S }}
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
