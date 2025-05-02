import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import PostsContextProvider from "../post/context/PostsContextProvider";
import { choutaKaladinPost } from "../post/fixtures/fixtures";
import AppRouter from "./AppRouter";

const user = userEvent.setup();
window.scrollTo = vitest.fn();

describe("Given the Layout component", () => {
  describe("When it renders in path /posts and the user clicks the button '+ Info' del post Chouta callejero de Alethkar 🌯⚔️", () => {
    test("Then it should show Chouta callejero de Alethkar 🌯⚔️ title post inside a heading", async () => {
      render(
        <PostsContextProvider>
          <MemoryRouter initialEntries={["/posts"]}>
            <AppRouter />
          </MemoryRouter>
        </PostsContextProvider>,
      );

      const choutaTitle = await screen.findByRole("heading", {
        name: /chouta callejero de alethkar 🌯⚔️/i,
      });

      const choutaCard = choutaTitle.parentElement!.parentElement!;

      const choutaMoreInfoButton = await within(choutaCard).findByRole("link", {
        name: "+ info",
      });

      await user.click(choutaMoreInfoButton);

      const choutaPostTitle = await screen.findByRole("heading", {
        name: /chouta callejero de alethkar 🌯⚔️/i,
      });

      expect(choutaPostTitle).toBeVisible();
    });

    test("Then it should show the full content of Chouta callejero de Alethkar 🌯⚔️ post", async () => {
      render(
        <PostsContextProvider>
          <MemoryRouter initialEntries={["/posts"]}>
            <AppRouter />
          </MemoryRouter>
        </PostsContextProvider>,
      );

      const choutaTitle = await screen.findByRole("heading", {
        name: /chouta callejero de alethkar 🌯⚔️/i,
      });

      const choutaCard = choutaTitle.parentElement!.parentElement!;

      const choutaMoreInfoButton = await within(choutaCard).findByRole("link", {
        name: "+ info",
      });

      await user.click(choutaMoreInfoButton);

      const choutaPostContent = await screen.findByText(
        choutaKaladinPost.content,
      );

      expect(choutaPostContent).toBeVisible();
    });
  });
});
