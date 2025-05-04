import { renderHook } from "@testing-library/react";
import { act } from "react";
import usePosts from "../usePosts";
import { brochetasShinovarPostDto } from "../../fixtures/fixturesDto";

describe("Given the deletePost function", () => {
  describe("When it's called with Brochetas de calma Shin 🌸🍢 post id", () => {
    test("Then Brochetas de calma Shin 🌸🍢 post should not be anymore in postData", async () => {
      const { result } = renderHook(() => usePosts());

      await act(() => {
        result.current.loadPostsByPage(2);
        result.current.deletePost(brochetasShinovarPostDto._id);
      });

      const posts = result.current.posts;

      expect(posts).not.toContainEqual(
        expect.objectContaining({
          title: "Brochetas de calma Shin 🌸🍢",
        }),
      );
    });
  });
});
