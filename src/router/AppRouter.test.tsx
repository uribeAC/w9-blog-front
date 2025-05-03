import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import PostsContextProvider from "../post/context/PostsContextProvider";
import { choutaKaladinPost } from "../post/fixtures/fixtures";
import AppRouter from "./AppRouter";

const user = userEvent.setup();
window.scrollTo = vitest.fn();

describe("Given the AppRouter component", () => {
  describe("When it renders in path /posts", () => {
    describe("And the user clicks the button '+ Info' del post Chouta callejero de Alethkar 🌯⚔️", () => {
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

        const choutaMoreInfoButton = await within(choutaCard).findByRole(
          "link",
          {
            name: "+ info",
          },
        );

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

        const choutaMoreInfoButton = await within(choutaCard).findByRole(
          "link",
          {
            name: "+ info",
          },
        );

        await user.click(choutaMoreInfoButton);

        const choutaPostContent = await screen.findByText(
          choutaKaladinPost.content,
        );

        expect(choutaPostContent).toBeVisible();
      });
    });

    describe("And the user clicks the button with label 'eliminar post' from Chouta callejero de Alethkar post", () => {
      test("Then it should show 'El post ha sido eliminado' inside a heading", async () => {
        const expectedPostTitle = /chouta callejero de alethkar 🌯⚔️/i;

        render(
          <PostsContextProvider>
            <AppRouter />
          </PostsContextProvider>,
          { wrapper: MemoryRouter },
        );

        const choutaTitle = await screen.findByRole("heading", {
          name: expectedPostTitle,
        });

        const choutaCard = choutaTitle.parentElement!.parentElement!;

        const deleteButton =
          await within(choutaCard).findByLabelText(/eliminar post/i);

        await user.click(deleteButton);

        const modalText = await screen.queryByRole("heading", {
          name: /el post ha sido eliminado/i,
        });

        expect(modalText).toBeVisible();
      });
    });
  });

  describe("When it renders in path /add-post and the user submits a post", () => {
    test("Then it should show 'Post creado' inside a heading", async () => {
      render(
        <PostsContextProvider>
          <MemoryRouter initialEntries={["/add-post"]}>
            <AppRouter />
          </MemoryRouter>
        </PostsContextProvider>,
      );

      const titleTextBox = screen.getByLabelText(/título/i);
      const authorTextBox = screen.getByLabelText(/autor\/a/i);
      const imageTextBox = screen.getByLabelText(/imagen url/i);
      const contentTextBox = screen.getByLabelText(/contenido/i);

      await user.type(titleTextBox, "Croquetas de la abuela");
      await user.type(authorTextBox, "Alex");
      await user.type(imageTextBox, "https://www.google.com/");
      await user.type(contentTextBox, "Croquetillas");

      const submitButton = screen.getByRole("button", {
        name: /crear post/i,
      });

      await user.click(submitButton);

      const modalText = await screen.queryByRole("heading", {
        name: /post creado/i,
      });

      expect(modalText).toBeVisible();
    });
  });
});
