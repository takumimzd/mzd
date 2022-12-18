import { CareerItems } from "@/features/home/constants/careerItems";
import { profileStyle } from "@/features/home/styles/profile.css";

import { Accordion } from "@/components/common/Accordion";
import { Timeline, TimelineItem } from "@/components/common/Timeline";
import { Paragraph, Title } from "@/components/common/Typography";

export const Profile = () => {
  return (
    <div>
      <div>
        <Title level={2}>Career</Title>
        <Timeline>
          {CareerItems.map((item) => (
            <TimelineItem
              className={item.Details && profileStyle.carrerItem}
              key={item.text}
            >
              <>
                <a
                  href={item.link}
                  className={profileStyle.carrerText}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.text}
                </a>
                {item.Details && (
                  <Accordion
                    className={profileStyle.carrerText}
                    items={[
                      {
                        header: "more",
                        key: "career-item-details",
                        children: item.Details,
                      },
                    ]}
                  />
                )}
              </>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
      <div>
        <Title level={2}>Skill</Title>
        <Title level={3}>Frontend</Title>
        <Paragraph className={profileStyle.carrerText}>
          Javascript / Typescript / React.js / Next.js / Redux
        </Paragraph>
        <Title level={3}>Backend</Title>
        <Paragraph className={profileStyle.carrerText}>
          Ruby / RubyOnRails / Nest.js
        </Paragraph>
        <Title level={3}>Infrastructure</Title>
        <Paragraph className={profileStyle.carrerText}>
          AWS(AWS Certified Solutions Architect - Associate - 2022/10/31)
        </Paragraph>
      </div>
    </div>
  );
};
