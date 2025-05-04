import { renderHook } from "@testing-library/react";
import { act } from "react";
import usePosts from "../usePosts";

describe("Given the loadPostsByPage function", () => {
  describe("When it's called with page numner 2", () => {
    test("Then it should set the post Brochetas de calma Shin 🌸🍢 as postData", async () => {
      const { result } = renderHook(() => usePosts());

      await act(() => {
        result.current.loadPostsByPage(2);
      });

      const posts = result.current.posts;

      expect(posts).toContainEqual(
        expect.objectContaining({ title: "Brochetas de calma Shin 🌸🍢" }),
      );
    });
  });
});
