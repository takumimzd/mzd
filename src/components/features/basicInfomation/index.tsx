import Link from "next/link";
import profileMainImage from "@/public/profile.webp";
import { MyAccountItems } from "@/assets/myAccountItems";
import { Avatar, Typography } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { MARGIN } from "@/constants/style";
import { Center } from "@/components/common/Layout";
import { CircleImage } from "@/components/common/Image";

import { useSession } from "src/hooks/useSession";

const { Title, Paragraph } = Typography;

export const BasicInfomation = () => {
  const { isSignedIn } = useSession();
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
          <div
            style={{
              margin: `${MARGIN.M} 0 0 0`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Title style={{ marginRight: MARGIN.XS }} level={3}>
              神尾 拓未
            </Title>
            {MyAccountItems.map((item) => (
              <div key={item.service} style={{ marginBottom: `${MARGIN.M}` }}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <Avatar src={item.icon} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </Center>
      <Center>
        <div>
          <Paragraph style={{ textAlign: "center", marginBottom: "0" }}>
            ソフトウェアエンジニア / スクラムマスター / 27歳 /
            横浜育ち名古屋住み / 猫好き / テニス好き
          </Paragraph>
        </div>
        {isSignedIn && (
          <Link href={"/admin"} style={{ marginTop: "16px" }}>
            <QuestionCircleOutlined style={{ fontSize: "24px" }} />
          </Link>
        )}
      </Center>
    </div>
  );
};
