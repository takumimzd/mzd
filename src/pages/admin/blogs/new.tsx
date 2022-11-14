import { useState } from "react";

import { MARGIN } from "@/constants/style";

import { Center } from "@/components/common/Layout";
import { Tooltip } from "@/components/common/Tooltip";
import { CaretRightOutlined } from "@/components/common/Icon";
import { Switch } from "@/components/common/Switch";

import { Form } from "@/components/features/blog/New/Form/Form";
import { Preview } from "@/components/features/blog/Preview";
import { useCreateBlog } from "@/components/features/blog/hooks/useCreateBlog";

import { useSession } from "@/hooks/useSession";
import { useIsPcWindow } from "@/hooks/useIsPcWindow";

const New = () => {
  const { isSignedIn } = useSession();

  const { bodyText, onChangeBodyTextarea, title, onChangeTitleInput } =
    useCreateBlog();
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
    </>
  );
};

export default New;
