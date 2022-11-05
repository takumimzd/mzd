import { Timeline, Typography } from "antd";
import { CareerItems } from "@/assets/careerItems";

const { Title, Paragraph } = Typography;

export const Profile = () => {
  return (
    <div>
      <div>
        <Title level={3}>Career</Title>
        <Timeline>
          {CareerItems.map((item) => (
            <Timeline.Item key={item.text}>
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.text}
              </a>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
      <div>
        <Title level={3}>Skill</Title>
        <Title level={4}>Frontend</Title>
        <Paragraph>
          Javascript / Typescript / React.js / Next.js / Redux
        </Paragraph>
        <Title level={4}>Backend</Title>
        <Paragraph>Ruby / RubyOnRails / Nest.js</Paragraph>
        <Title level={4}>Infrastructure</Title>
        <Paragraph>
          AWS(AWS Certified Solutions Architect - Associate - 2022/10/31)
        </Paragraph>
      </div>
    </div>
  );
};
