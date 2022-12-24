import { renderHook, waitFor } from "@testing-library/react";
import { server } from "@/mocks/server";
import {
  blogsErrorHandlers,
  BLOGS_MOCK,
  ERROR_RESPONSE,
} from "@/mocks/handlers/blog";

import { useGetBlogs } from "@/features/blog/hooks/useGetBlogs";

describe("useGetBlogs", () => {
  test("ブログ一覧の取得成功", async () => {
    const { result } = renderHook(() => useGetBlogs());

    await waitFor(() => expect(result.current.isLoading).toEqual(false));
    expect(result.current.error).toEqual(null);
    expect(result.current.blogs).toEqual(BLOGS_MOCK);
  });

  test("ブログ一覧の取得失敗", async () => {
    server.use(...blogsErrorHandlers);
    const { result } = renderHook(() => useGetBlogs());

    await waitFor(() => expect(result.current.isLoading).toEqual(false));
    expect(result.current.error).toEqual(ERROR_RESPONSE);
  });
});
