import { CareerItems } from "@/assets/careerItems";
import { Timeline, TimelineItem } from "@/components/common/Timeline";
import { Paragraph, Title } from "@/components/common/Typography";
import { Collapse } from "antd";

export const Profile = () => {
  return (
    <div>
      <div>
        <Title level={3}>Career</Title>
        <Timeline>
          {CareerItems.map((item) => (
            <TimelineItem
              style={{ paddingBottom: item.Details ? "0" : "" }}
              key={item.text}
            >
              <>
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.text}
                </a>
                {item.Details && (
                  <Collapse ghost>
                    <Collapse.Panel header="more" key="career-item-details">
                      {item.Details}
                    </Collapse.Panel>
                  </Collapse>
                )}
              </>
            </TimelineItem>
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
