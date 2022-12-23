import { server } from "@/mocks/server";
import { renderHook } from "@testing-library/react";
import { useGetBlogs } from "@/features/blog/hooks/useGetBlogs";
import { blogsMock } from "@/mocks/handlers/blog";

describe("useFetchUsers", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("ブログ一覧の取得成功", async () => {
    const { result } = renderHook(() => useGetBlogs());

    expect(result.current.blogs).toEqual(blogsMock);
  });
});
