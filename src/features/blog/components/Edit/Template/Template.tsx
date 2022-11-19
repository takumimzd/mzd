import { ChangeEvent } from "react";

import { MARGIN } from "@/constants/style";

import { Center } from "@/components/common/Layout";
import { Tooltip } from "@/components/common/Tooltip";
import { CaretRightOutlined } from "@/components/common/Icon";
import { Switch } from "@/components/common/Switch";
import { Button } from "@/components/common/Button";

import { Form } from "@/features/blog/components/New/Form/Form";
import { Preview } from "@/features/blog/components/Preview";

interface Props {
  isPc: boolean;
  bodyText: string;
  onChangeBodyTextarea: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  title: string;
  onChangeTitleInput: (event: ChangeEvent<HTMLInputElement>) => void;
  updateBlog: () => void;
  onChangeViewSwitch: () => void;
  isPreview: boolean;
}

export const Template = ({
  isPc,
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
          <Button style={{ marginRight: MARGIN.S }} onClick={() => {}}>
            Saved
          </Button>
          <Button
            onClick={updateBlog}
            style={{ marginLeft: MARGIN.S }}
            type="primary"
          >
            Update
          </Button>
        </div>
      </Center>
    </>
  );
};
