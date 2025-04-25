import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFoundPage component", () => {
  describe("When it renders", () => {
    test("Then it should show a'Page not found' inside a heading", () => {
      render(<NotFoundPage />);

      const expectedPageTitle = screen.getByRole("heading", {
        name: /page not found/i,
      });

      expect(expectedPageTitle).toBeVisible();
    });

    test("Then it should show a image with a Egg yolk confused with question marks", () => {
      render(<NotFoundPage />);

      const imageTextAlternative = screen.getByAltText(
        /yema de huevo confundida con signos de interrogación/i,
      );

      expect(imageTextAlternative).toBeVisible();
    });
  });
});
