import { Paragraph, Title } from "@/components/common/Typography";
import { assetsStyle } from "./index.css";

export const CareerItems = [
  {
    link: "https://stmn.co.jp/",
    text: "stmn inc (2021/01 - )",
    Details: (
      <div className={assetsStyle.detailsWrapper}>
        <Title level={4}>開発</Title>
        <Paragraph>
          フロントエンド(React/Typescript)を用いてエンゲージメントプラットフォーム『TUNAG』を開発しています。
        </Paragraph>
        <Paragraph>
          また、RubyOnRailを用いた不具合改善やAPIの作成も行なっています。
        </Paragraph>
        <Title level={5}>開発した主な機能</Title>
        <ul className={assetsStyle.ul}>
          <li>
            タイムラインへのHTMLメール投稿
            (特定のHTMLメールを受信した時に、それを投稿の一部として表示する機能)
          </li>
          <li>投稿ピックアップ (Twitterの引用リツイートのような機能)</li>
          <li>依頼機能 (投稿を通して依頼をする機能)</li>
          <li>チャットの返信/動画投稿/タスク管理</li>
          <li>カレンダー</li>
        </ul>
        <Title level={4}>スクラムマスター</Title>
        <Paragraph>
          TUNAGの開発体制はスクラム開発を採用しています。4つあるスクラムチーム(1チーム4人)のうちの1つに所属しており、チームのスクラムマスターとしてインペディメントの改善等、チームの透明性の確保や検査と適用がスムーズに行われるようサポートを行なっています。
        </Paragraph>
      </div>
    ),
  },
  {
    link: "https://www.resonabank.co.jp/",
    text: "Risona Bank (2019/04 - 2020/08)",
  },
  {
    link: "https://www.univ.gakushuin.ac.jp/",
    text: "Gakushuin University (2015/04 - 2019/03)",
  },
];
