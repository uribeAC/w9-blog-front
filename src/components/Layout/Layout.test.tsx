import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import Layout from "./Layout";
import PostsContextProvider from "../../post/context/PostsContextProvider";
import AppRouter from "../../router/AppRouter";

const user = userEvent.setup();
window.scrollTo = vitest.fn();

describe("Given the Layout component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Aliset comiendo por el mundo' inside a level 1 heading", () => {});
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

  describe("And the user clicks the link with label 'Siguiente pagina'", () => {
    test("Then it should show 2 as the current page", async () => {
      render(
        <PostsContextProvider>
          <MemoryRouter initialEntries={["/posts"]}>
            <Layout />
            <AppRouter />
          </MemoryRouter>
        </PostsContextProvider>,
      );

      const nextPage = screen.getByLabelText(/siguiente pagina/i);

      await user.click(nextPage);

      const currentPage2 = screen.getByText("2");

      expect(currentPage2).toBeVisible();
    });
  });
});
