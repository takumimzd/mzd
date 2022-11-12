import zennProfileImage from "../../../public/zenn-profile.jpg";
import profileMainImage from "../../../public/profile.webp";
import { OtherBlogItemType } from "@/types/blog";

export const TechBlogItems = [
  {
    icon: `${profileMainImage.src}`,
    title:
      "共通UIコンポーネントで速くクオリティの高いプロダクトを開発をしたい。",
    date: "2022/08/16",
    link: "https://tech.stmn.co.jp/entry/2022/08/16/153454",
  },
  {
    icon: `${zennProfileImage.src}`,
    title: "React SuspenseによるWeb Vitalsの改善",
    date: "2022/03/05",
    link: "https://zenn.dev/mzd/articles/0b2e54eac31ceb",
  },
  {
    icon: `${zennProfileImage.src}`,
    title: "[Typescript]便利なUtility Types",
    date: "2021/12/18",
    link: "https://zenn.dev/mzd/articles/1967b161f35f0e",
  },
  {
    icon: `${profileMainImage.src}`,
    title: "Storybookについて調べてみました。",
    date: "2021/05/17",
    link: "https://tech.stmn.co.jp/entry/2021/05/17/155842",
  },
];

const Blog1Body = `
## 『常に生産性のある日々を』by 高橋克己
- 正確には高橋と千葉のミニバス時代の監督の言葉
- これを見ると1日を漠然と過ごしてはいけないなといつも思う
- 「何をやったか」よりも「何を残したか」

---

## 『上達しないのはセンスがないから 退いてしまうのは才能がないから あの人にはあのチームには敵わないから 人は目指していた何かを断念する時かならず理由をつける ナゼかわかるか? その方が楽だからだ ダメだらダメでいい ただ自分の努力の足りなさを別の何かのせいにはするな』 by 車谷智久
- 何かを諦める時「自分に必要ないな」「自分には向いてないな」とか色々な理由をつけて止めてしまうことってよくある
- 結局は自分の努力不足なのに

---

## 『チャンスは誰にでも常に回ってくるもんじゃねぇ。だからこそ、つかんだ糸の先は絶対に離すな。』by 酒巻呼人
- 何かを任されたり期待されたら、それを絶対自分のものにする
- そのチャンスが次いつ来るかわからないし来ないかもしれないから
`;

export const OtherBlogItems: OtherBlogItemType[] = [
  {
    id: 1,
    icon: profileMainImage.src,
    title: "あひるの空の好きな言葉",
    body: Blog1Body,
    date: "2022/11/12",
    link: "1",
  },
];
