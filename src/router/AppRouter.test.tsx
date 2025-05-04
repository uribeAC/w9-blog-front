import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import { server } from "../post/mocks/node";
import { http, HttpResponse } from "msw";
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

  describe("When it renders in path /add-post", () => {
    describe("And the user fills the form with an alrerady existent Chouta callejero de Alethkar post and submits it", () => {
      test("Then it should show 'Error al crear el post, ya existe' message", async () => {
        const apiUrl = import.meta.env.VITE_API_URL;

        render(
          <PostsContextProvider>
            <MemoryRouter initialEntries={["/add-post"]}>
              <AppRouter />
            </MemoryRouter>
          </PostsContextProvider>,
        );

        server.use(
          http.post(`${apiUrl}/posts`, () => {
            return new HttpResponse("Post already exists", { status: 409 });
          }),
        );

        const titleTextBox = screen.getByLabelText(/título/i);
        const authorTextBox = screen.getByLabelText(/autor\/a/i);
        const imageTextBox = screen.getByLabelText(/imagen url/i);
        const contentTextBox = screen.getByLabelText(/contenido/i);

        await user.type(titleTextBox, "Chouta callejero de Alethkar 🌯⚔️");
        await user.type(authorTextBox, "Cocinero de Sadeas (de incógnito)");
        await user.type(imageTextBox, "https://example.com/chouta-roshar.jpg");
        await user.type(
          contentTextBox,
          "En las llanuras quebradas de Roshar, entre tormentas eternas y guerras...",
        );

        const submitButton = screen.getByRole("button", {
          name: /crear post/i,
        });

        await user.click(submitButton);

        const errorMessage = await screen.findByText(
          /error al crear el post, ya existe/i,
        );

        expect(errorMessage).toBeVisible();
      });
    });

    describe("And the user fills the form and submits a post", () => {
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
});
