import { useState } from "react";
import { Image } from "antd";
import { imageStyle } from "./image.css";

interface Props {
  src: string;
  size: {
    width: number;
    height: number;
  };
  alt: string;
}
export const CircleImage = ({ src, alt, size }: Props) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Image
        preview={{ visible: false }}
        width={size.width}
        height={size.height}
        src={src}
        alt={alt}
        onClick={() => setVisible(true)}
        className={imageStyle.circleImage}
      />
      <div className={imageStyle.circleImagePreview}>
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
          <Image src={src} alt={`preview ${alt}`} />
        </Image.PreviewGroup>
      </div>
    </>
  );
};
