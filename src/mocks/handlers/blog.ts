import { rest } from "msw";

export const blogsMock = [
  {
    body: "## 見出し",
    created_at: "2022-11-19T02:46:17.735807+00:00",
    icon: null,
    id: 1,
    title: "このサイトで使用できるマークダウン",
    updated_at: "2022-11-19T02:46:17.735807+00:00",
  },
  {
    body: "## アジャイルとは、小さなことを小さなプログラミングチームの小さな問題を扱う小さなアイディアである。",
    created_at: "2022-12-11T05:33:03.359137+00:00",
    icon: null,
    id: 2,
    title: "「Clean Agile」を読みながら",
    updated_at: "2022-12-11T05:33:03.359137+00:00",
  },
];

export const blogsHandlers = [
  rest.get("/rest/v1/blogs", (req, res, ctx) => {
    const select = req.url.searchParams.get("select");
    if (select === "*") {
      return res(ctx.status(200), ctx.json(blogsMock));
    }
  }),
];
