import profileMainImage from "@/public/profile.webp";
import { MyAccountItems } from "@/assets/myAccountItems";

import { MARGIN } from "@/constants/style";

import { Center } from "@/components/common/Layout";
import { CircleImage } from "@/components/common/Image";
import { Title, Paragraph } from "@/components/common/Typography";
import { Avatar } from "@/components/common/Avatar";

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
          <Center>
            <Title
              style={{ marginRight: MARGIN.XS, marginTop: MARGIN.S }}
              level={4}
            >
              神尾 拓未
            </Title>
            <div style={{ display: "flex" }}>
              {MyAccountItems.map((item) => (
                <div key={item.service} style={{ marginBottom: `${MARGIN.M}` }}>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <Avatar src={item.icon} />
                  </a>
                </div>
              ))}
            </div>
          </Center>
        </div>
      </Center>
      <Center>
        <div>
          <Paragraph style={{ textAlign: "center", marginBottom: "0" }}>
            ソフトウェアエンジニア / スクラムマスター / 27歳 /
            横浜育ち名古屋住み / 猫好き / テニス好き
          </Paragraph>
        </div>
      </Center>
    </div>
  );
};