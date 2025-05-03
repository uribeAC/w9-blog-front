import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import PostsPage from "./PostsPage";
import PostsContextProvider from "../../context/PostsContextProvider";
import { choutaKaladinPost } from "../../fixtures/fixtures";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();
window.scrollTo = vitest.fn();

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

  describe("And the user clicks the button with label 'eliminar post' from Chouta callejero de Alethkar post", () => {
    test("Then it shouldn't show anymore Chouta callejera de Alethkar post", async () => {
      const expectedTitleRegex = new RegExp(choutaKaladinPost.title, "i");

      render(
        <PostsContextProvider>
          <PostsPage />
        </PostsContextProvider>,
        { wrapper: MemoryRouter },
      );

      const postTitle = await screen.findByRole("heading", {
        name: expectedTitleRegex,
      });

      expect(postTitle).toBeVisible();

      const choutaCard = postTitle.parentElement!.parentElement!;

      const deleteButton =
        await within(choutaCard).findByLabelText(/eliminar post/i);

      await user.click(deleteButton);

      const deletedPostTitle = await screen.queryByRole("heading", {
        name: expectedTitleRegex,
      });

      expect(deletedPostTitle).toBeNull();
    });
  });
});
