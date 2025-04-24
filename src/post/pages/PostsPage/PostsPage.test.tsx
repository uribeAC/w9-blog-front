import { render, screen } from "@testing-library/react";
import PostsPage from "./PostsPage";

describe("Given the PostsPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Posts' inside a heading", () => {
      render(<PostsPage />);

      const pageTitle = screen.getByRole("heading", { name: /posts/i });

      expect(pageTitle).toBeVisible();
    });
  });
});
