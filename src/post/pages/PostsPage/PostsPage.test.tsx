import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import PostsPage from "./PostsPage";
import PostsContextProvider from "../../context/PostsContextProvider";
import { choutaKaladinPost } from "../../fixtures";

describe("Given the PostsPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Posts' inside a heading", async () => {
      render(
        <PostsContextProvider>
          <PostsPage />
        </PostsContextProvider>,
        { wrapper: MemoryRouter },
      );

      const pageTitle = await screen.findByRole("heading", { name: /posts/i });

      expect(pageTitle).toBeVisible();
    });
  });

  describe("When it renders in /posts", () => {
    test("Then it should show Chouta callejero de Alethkar 🌯⚔️ and Pan de luz estelar de Kharbranth ✨🍞' inside a heading", async () => {
      render(
        <PostsContextProvider>
          <PostsPage />
        </PostsContextProvider>,
        { wrapper: MemoryRouter },
      );

      const postTitle = await screen.findByRole("heading", {
        name: new RegExp(choutaKaladinPost.title, "i"),
      });

      expect(postTitle).toBeVisible();
    });
  });
});
