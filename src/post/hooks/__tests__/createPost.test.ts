import { renderHook } from "@testing-library/react";
import { act } from "react";
import usePosts from "../usePosts";
import { huevosRotosBruc159PostData } from "../../fixtures/fixtures";

describe("Given the createPost function", () => {
  describe("When it's called with Huevos Rotos de Bruc, 159 🍳💔 post", () => {
    test("Then it should add 'Huevos Rotos de Bruc, 159 🍳💔' post to the hook state ", async () => {
      const { result } = renderHook(() => usePosts());

      await act(() => {
        result.current.loadPostsByPage(2);
        result.current.createPost(huevosRotosBruc159PostData);
      });

      const posts = result.current.posts;

      expect(posts).toContainEqual(
        expect.objectContaining({
          title: "Huevos Rotos de Bruc, 159 🍳💔",
        }),
      );
    });
  });
});
