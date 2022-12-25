import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { OtherBlogListContainer } from "@/features/blog/components/ecosystems/blog-list/other-blog/other-blog-list/OtherBlogListContainer";
import "@testing-library/jest-dom";

test("OtherBlogListContainer", async () => {
  render(<OtherBlogListContainer enableEdit />);

  expect(screen.getByTestId("other-blog-list-loading"));
  await waitForElementToBeRemoved(() =>
    screen.getAllByTestId("other-blog-list-loading")
  );
  expect(screen.getByTestId("other-blog-list"));
});
