import { ErrorType } from "@/types/api/common";
import { BlogType } from "@/types/supabase/table";
import { rest } from "msw";

export const BLOGS_MOCK: BlogType[] = [
  {
    body: "## 見出し",
    createdAt: "2022-11-19T02:46:17.735807+00:00",
    icon: "",
    id: 1,
    title: "このサイトで使用できるマークダウン",
    updatedAt: "2022-11-19T02:46:17.735807+00:00",
  },
  {
    body: "## アジャイルとは、小さなことを小さなプログラミングチームの小さな問題を扱う小さなアイディアである。",
    createdAt: "2022-12-11T05:33:03.359137+00:00",
    icon: "",
    id: 2,
    title: "「Clean Agile」を読みながら",
    updatedAt: "2022-12-11T05:33:03.359137+00:00",
  },
];

export const ERROR_RESPONSE: ErrorType = {
  code: "500",
  message: "Internal Server Error",
};

export const blogsHandlers = [
  rest.get(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/blogs`,
    (req, res, ctx) => {
      const select = req.url.searchParams.get("select");
      if (select === "*") {
        return res(ctx.status(200), ctx.json(BLOGS_MOCK));
      }
    }
  ),
];

export const blogsErrorHandlers = [
  rest.get(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/blogs`,
    (req, res, ctx) => {
      const select = req.url.searchParams.get("select");
      if (select === "*") {
        return res.once(ctx.status(500), ctx.json(ERROR_RESPONSE));
      }
    }
  ),
];
