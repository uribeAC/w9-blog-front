import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Given the Navigation component", () => {
  describe("When it renders", () => {
    test("Then it should show a 'Posts' link", () => {
      render(
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>,
      );

      const postsLink = screen.getByRole("link", { name: /posts/i });

      expect(postsLink).toBeVisible();
    });
  });
});
