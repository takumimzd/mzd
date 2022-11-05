import { Timeline, Typography } from "antd";

const { Title, Paragraph } = Typography;
export const Profile = () => {
  return (
    <div>
      <div>
        <Title level={3}>Career</Title>
        <Timeline>
          <Timeline.Item>
            <a href="https://stmn.co.jp/" target="_blank" rel="noreferrer">
              stmn inc
            </a>
            (2021/01 - )
          </Timeline.Item>
          <Timeline.Item>
            <a
              href="https://www.resonabank.co.jp/"
              target="_blank"
              rel="noreferrer"
            >
              Risona Bank (2019/04 - 2020/08)
            </a>
          </Timeline.Item>
          <Timeline.Item>
            <a
              href="https://www.univ.gakushuin.ac.jp/"
              target="_blank"
              rel="noreferrer"
            >
              Gakushuin University (2015/04 - 2019/03)
            </a>
          </Timeline.Item>
        </Timeline>
      </div>
      <div>
        <Title level={3}>Skills</Title>
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
