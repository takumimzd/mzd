import "@testing-library/jest-dom";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { blogsErrorHandlers } from "@/mocks/handlers/blog";
import { server } from "@/mocks/server";

import { OtherBlogListContainer } from "@/features/blog/components/ecosystems/blog-list/other-blog/other-blog-list/OtherBlogListContainer";

test("ブログ一覧の取得に成功するとブログ一覧が表示される", async () => {
  render(<OtherBlogListContainer enableEdit={false} />);

  expect(screen.getByTestId("other-blog-list-loading"));
  await waitForElementToBeRemoved(() =>
    screen.getAllByTestId("other-blog-list-loading")
  );
  expect(screen.getByTestId("other-blog-list"));
});

test("ブログ一覧の取得に失敗するとエラーメッセージが表示される", async () => {
  server.use(...blogsErrorHandlers);
  render(<OtherBlogListContainer enableEdit={false} />);

  expect(screen.getByTestId("other-blog-list-loading"));
  await waitForElementToBeRemoved(() =>
    screen.getAllByTestId("other-blog-list-loading")
  );
  expect(screen.getByTestId("other-blog-list-error"));
});
