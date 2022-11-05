import { Avatar, Typography } from "antd";
import { CircleImage } from "@/components/common/Image/CircleImage";
import { Center } from "@/components/common/Layout/Center";

import profileMainImage from "@/public/profile.webp";
import { MyAccountItems } from "@/assets/myAccountItems";

const { Title, Paragraph } = Typography;

export const BasicInfomation = () => {
  return (
    <div>
      <Center>
        <div>
          <CircleImage
            src={profileMainImage.src}
            size={{
              width: 150,
              height: 150,
            }}
            alt="profile main image"
          />
          <Center margin="16px 0 0 0">
            <Title style={{ marginRight: "4px" }} level={3}>
              mzd
            </Title>
            {MyAccountItems.map((item) => (
              <div key={item.service} style={{ marginBottom: "11px" }}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <Avatar src={item.icon} size="small" />
                </a>
              </div>
            ))}
          </Center>
        </div>
      </Center>
      <Center>
        <div>
          <Paragraph style={{ textAlign: "center", marginBottom: "0" }}>
            Software Developer
          </Paragraph>
          <Paragraph>Frontend / Typescript / React / Next</Paragraph>
        </div>
      </Center>
    </div>
  );
};
