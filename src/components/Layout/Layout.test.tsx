import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import Layout from "./Layout";
import PostsContextProvider from "../../post/context/PostsContextProvider";
import AppTestRouter from "../../router/AppTestRouter";

const user = userEvent.setup();
window.scrollTo = vitest.fn();

describe("Given the Layout component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Aliset comiendo por el mundo' inside a level 1 heading", () => {
      render(
        <MemoryRouter>
          <Layout />
        </MemoryRouter>,
      );

      const appTitle = screen.getByRole("heading", {
        name: /aliset comiendo por el mundo/i,
        level: 1,
      });

      expect(appTitle).toBeVisible();
    });
  });

  describe("When it renders in path /posts", () => {
    test("Then it should show Chouta callejero de Alethkar 🌯⚔️, Pan de luz estelar de Kharbranth ✨🍞, Estofado de los Picos Horneater 🍲🔥, Pastel de luz de tormenta ⚡🍰, Sopa Verdanthe de Cultivación 🌿🥣 post titles inside a heading", async () => {
      render(
        <PostsContextProvider>
          <MemoryRouter initialEntries={["/posts"]}>
            <Layout />
            <AppTestRouter />
          </MemoryRouter>
        </PostsContextProvider>,
      );

      const choutaPostTitle = await screen.findByRole("heading", {
        name: /chouta callejero de alethkar 🌯⚔️/i,
      });
      const panLuzPostTitle = await screen.findByRole("heading", {
        name: /pan de luz estelar de kharbranth ✨🍞/i,
      });
      const estofadoPostTitle = await screen.findByRole("heading", {
        name: /estofado de los picos horneater 🍲🔥/i,
      });
      const pastelPostTitle = await screen.findByRole("heading", {
        name: /pastel de luz de tormenta ⚡🍰/i,
      });
      const sopaPostTitle = await screen.findByRole("heading", {
        name: /sopa verdanthe de cultivación 🌿🥣/i,
      });

      expect(choutaPostTitle).toBeVisible();
      expect(panLuzPostTitle).toBeVisible();
      expect(estofadoPostTitle).toBeVisible();
      expect(pastelPostTitle).toBeVisible();
      expect(sopaPostTitle).toBeVisible();
    });

    describe("And the user clicks the link '>' with label 'Siguiente pagina'", () => {
      test("Then it should show 'Brochetas de calma Shin 🌸🍢' title post inside a heading", async () => {
        render(
          <PostsContextProvider>
            <MemoryRouter initialEntries={["/posts"]}>
              <Layout />
              <AppTestRouter />
            </MemoryRouter>
          </PostsContextProvider>,
        );

        const choutaPostTitle = await screen.findByRole("heading", {
          name: /chouta callejero de alethkar 🌯⚔️/i,
        });

        expect(choutaPostTitle).toBeVisible();

        const nextPageLink = screen.getByLabelText(/siguiente pagina/i);

        await user.click(nextPageLink);

        const brochetasPostTitle = await screen.findByRole("heading", {
          name: /brochetas de calma shin 🌸🍢/i,
        });

        expect(brochetasPostTitle).toBeVisible();
      });
    });

    describe("And the user clicks the link 'Crear post'", () => {
      test("Then it should show 'Crear nuevo post' inside a heading", async () => {
        render(
          <PostsContextProvider>
            <MemoryRouter initialEntries={["/posts"]}>
              <Layout />
              <AppTestRouter />
            </MemoryRouter>
          </PostsContextProvider>,
        );

        const createPostLink = await screen.findByRole("link", {
          name: /crear post/i,
        });

        await user.click(createPostLink);

        const createPostTitle = await screen.findByRole("heading", {
          name: /crear nuevo post/i,
        });

        expect(createPostTitle).toBeVisible();
      });
    });
  });

  describe("When it renders in path /posts?page=2", () => {
    describe("And the user clicks the link '<' with label 'Pagina anterior'", () => {
      test("Then it should show 'Chouta callejero de Alethkar 🌯⚔️' post title inside a heading", async () => {
        render(
          <PostsContextProvider>
            <MemoryRouter initialEntries={["/posts?page=2"]}>
              <Layout />
              <AppTestRouter />
            </MemoryRouter>
          </PostsContextProvider>,
        );

        const brochetasPostTitle = await screen.findByRole("heading", {
          name: /brochetas de calma shin 🌸🍢/i,
        });

        expect(brochetasPostTitle).toBeVisible();

        const previewsPageLink = screen.getByLabelText(/pagina anterior/i);

        await user.click(previewsPageLink);

        const choutaPostTitle = await screen.findByRole("heading", {
          name: /chouta callejero de alethkar 🌯⚔️/i,
        });

        expect(choutaPostTitle).toBeVisible();
      });
    });
  });
});
