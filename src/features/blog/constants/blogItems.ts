import zennProfileImage from "@/public/zenn-profile.jpg";
import profileMainImage from "@/public/profile.jpg";
import { OtherBlogItemType } from "@/types/blog";

export const TechBlogItems = [
  {
    icon: `${profileMainImage.src}`,
    title: "スケルトンスクリーンを小さく導入してみた",
    date: "2022/12/22",
    link: "https://tech.stmn.co.jp/entry/2022/12/22/184952",
    isExternalLink: true,
  },
  {
    icon: `${profileMainImage.src}`,
    title:
      "インペディメントリスト 〜スクラムチームの一番重要な問題を改善し続ける方法〜",
    date: "2022/12/13",
    link: "https://tech.stmn.co.jp/entry/2022/12/13/162849",
    isExternalLink: true,
  },
  {
    icon: `${profileMainImage.src}`,
    title:
      "共通UIコンポーネントで速くクオリティの高いプロダクトを開発をしたい。",
    date: "2022/08/16",
    link: "https://tech.stmn.co.jp/entry/2022/08/16/153454",
    isExternalLink: true,
  },
  {
    icon: `${zennProfileImage.src}`,
    title: "React SuspenseによるWeb Vitalsの改善",
    date: "2022/03/05",
    link: "https://zenn.dev/mzd/articles/0b2e54eac31ceb",
    isExternalLink: true,
  },
  {
    icon: `${zennProfileImage.src}`,
    title: "[Typescript]便利なUtility Types",
    date: "2021/12/18",
    link: "https://zenn.dev/mzd/articles/1967b161f35f0e",
    isExternalLink: true,
  },
  {
    icon: `${profileMainImage.src}`,
    title: "Storybookについて調べてみました。",
    date: "2021/05/17",
    link: "https://tech.stmn.co.jp/entry/2021/05/17/155842",
    isExternalLink: true,
  },
];

export const OtherBlogItems: OtherBlogItemType[] = [];
