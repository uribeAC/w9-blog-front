import { renderHook } from "@testing-library/react";
import { act } from "react";
import usePosts from "../usePosts";
import { brochetasShinovarPostDto } from "../../fixtures/fixturesDto";

describe("Given the loadPostById function", () => {
  describe("When it's called with Brochetas de calma Shin 🌸🍢 post id", () => {
    test("Then it should return Brochetas de calma Shin 🌸🍢 post", async () => {
      const { result } = renderHook(() => usePosts());

      await act(() => {
        result.current.loadPostsByPage(2);
        result.current.loadPostById(brochetasShinovarPostDto._id);
      });

      const posts = result.current.posts;

      expect(posts).toContainEqual(
        expect.objectContaining({
          title: "Brochetas de calma Shin 🌸🍢",
        }),
      );
    });
  });
});
