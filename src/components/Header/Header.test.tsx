import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Aliset comiendo por el mundo' inside a level 1 heading", () => {
      render(<Header />, { wrapper: MemoryRouter });

      const appTitle = screen.getByRole("heading", {
        name: /aliset comiendo por el mundo/i,
        level: 1,
      });

      expect(appTitle).toBeVisible();
    });

    test("Then it should show a 'Posts' link", () => {
      render(<Header />, { wrapper: MemoryRouter });

      const postsLink = screen.getByRole("link", {
        name: /posts/i,
      });

      expect(postsLink).toBeVisible();
    });

    test("Then it should show a 'dibujo animado de un huevo frito haciendo ver que está nadando'", () => {
      render(<Header />, { wrapper: MemoryRouter });

      const titleAnimatedImage = screen.getByAltText(
        "dibujo animado de un huevo frito haciendo ver que está nadando",
      );

      expect(titleAnimatedImage).toBeVisible();
    });

    test("Then it should show a 'dibujo de un huevo frito haciendo ver que está nadando'", () => {
      render(<Header />, { wrapper: MemoryRouter });

      const titleUnanimatedImage = screen.getByAltText(
        "dibujo de un huevo frito haciendo ver que está nadando",
      );

      expect(titleUnanimatedImage).toBeVisible();
    });
  });
});
