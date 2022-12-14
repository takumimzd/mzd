import profileMainImage from "@/public/profile.jpg";
import { MyAccountItems } from "@/features/home/constants/myAccountItems";

import { style } from "@/features/home/styles/basicInformation.css";

import { Center } from "@/components/common/Layout";
import { CircleImage } from "@/components/common/Image";
import { Title, Paragraph } from "@/components/common/Typography";
import { Avatar } from "@/components/common/Avatar";

export const BasicInformation = () => {
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
            <Title className={style.myName} level={3}>
              神尾 拓未
            </Title>
            <div className={style.myAccountContents}>
              {MyAccountItems.map((item) => (
                <div key={item.service} className={style.myAccountItem}>
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
          <Paragraph className={style.description}>
            ソフトウェアエンジニア / スクラムマスター / 27歳 /
            横浜育ち名古屋住み / 猫好き / テニス好き
          </Paragraph>
        </div>
      </Center>
    </div>
  );
};
